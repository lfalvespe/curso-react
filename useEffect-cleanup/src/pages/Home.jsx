import { useState, useEffect } from 'react'

const Home = () => {

    const [value, setValue] = useState(0)

    useEffect(() => {

        const timer = setTimeout(() => {
            setValue(old => old + 1)
        }, 2000)


        // cleanup function
        // return () => clearTimeout(timer)

    }, [value])

    console.log(value)


    // Por algun motivo não está contecendo o vazamento e não está sendo necessário fazer o clean up

    return (
        <div>
            <h2>Home</h2>
            {value}
        </div>
    )
}

export default Home