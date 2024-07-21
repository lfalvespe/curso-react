import { useState, useEffect } from "react"


export const useHttpRequest = (url) => {

    const [data, setData] = useState(null)
    const [method, setMethod] = useState(null)
    const [config, setConfig] = useState(null)
    const [callFetch, setCallfetch] = useState(false)
    const [itemId, setItemId] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {

        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            )

        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                }
            }
            )
            setItemId(data)
        }
        setMethod(method)

    }

    // get data
    useEffect(() => {

        const fetchData = async () => {

            setLoading(true)

            try {

                const res = await fetch(url)
                const json = await res.json()
                setData(json)

            } catch (error) {
               setError(error)
            }


            setLoading(false)

        }
        fetchData()

    }, [url, callFetch])


    // post and delete
    useEffect(() => {

        if (method === "POST") {

            const postData = async () => {

                const res = await fetch(url, config)
                const json = res.json()
                setCallfetch(json)

            }
            postData()

        } else if (method === "DELETE") {

            const deleteId = itemId

            const deleteData = async () => {

                const res = await fetch(`${url}/${deleteId}`, config)
                const json = await res.json()
                setCallfetch(json)

            }
            deleteData()
        }


    }, [url, method, config])

    return { data, httpConfig, loading, error }
}