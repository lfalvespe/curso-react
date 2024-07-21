import { useState } from "react"


const CarDetails = ({ brand, model, year, newCar }) => {

    const [carro] = useState(
        {
            brand: brand,
            model: model,
            year: year
        }
    )

    return (
        <>

            <h3>Detalhes do Carro:</h3>
            <ul>

                <li>Marca: {carro.brand}</li>
                <li>Modelo: {carro.model}</li>
                <li>Ano: {carro.year}</li>
                <li> {newCar && <p>Este Carro é Novo</p>}</li>
            </ul>

           

        </>
    )
}

export default CarDetails