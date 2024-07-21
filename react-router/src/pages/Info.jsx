import { useParams } from "react-router-dom"

const Info = () => {

    const { id } = useParams()

    return (
        <div>
            <h3>Informações do produto de id {id}</h3>
            <p>{}</p>
        </div>
    )
}

export default Info