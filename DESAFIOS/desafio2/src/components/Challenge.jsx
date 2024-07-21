const Challenge = () => {

    const a = 4
    const b = 8

    console.log(a, b)

    return (
        <>
            <h2>(Challenge)</h2>

            <button onClick={() => console.log(a + b)}>Somar</button>

        </>
    )

}

export default Challenge