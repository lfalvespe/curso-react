import { useState, useEffect } from "react"

export const useHttpRequest = (url) => {

    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [id, setId] = useState(null)


    //CONFIG
    const httpConfig = (data, method) => {

        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setId(data)
        }

        setMethod(method)
    }

    //GET DATA
    useEffect(() => {

        const fetchData = async () => {
            fetch(url)
                .then(res => res.json())
                .then(list => setData(list))
        }

        fetchData()

    }, [url, callFetch])


    // POST and DELETE
    useEffect(() => {

        if (method === "POST") {
            const postData = async () => {
                const res = await fetch(url, config)
                const json = await res.json()
                setCallFetch(json)
            }
            postData()

        } else if (method === "DELETE") {
            const deleteData = async () => {
                const res = await fetch(`${url}/${id}`, config)
                const json = await res.json()
                setCallFetch(json)
            }
            deleteData()
        }

    }, [config, method, url])


    return { data, httpConfig }
}