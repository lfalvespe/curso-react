import { useState } from "react"


const CarDetails = ({ brand, model, year, km, newCar }) => {

    const [carro] = useState(
        {
            brand: brand,
            model: model,
            year: year,
            km: km
        }
    )

    return (
        <>
        
            <hr />
            <h3>Detalhes do Carro: {carro.model}</h3>
            <ul>

                <li>Marca: {carro.brand}</li>
                <li>Ano: {carro.year}</li>
                <li>Km: {carro.km}</li>
                <li> {newCar && <p>Este Carro é Novo</p>}</li>
            </ul>

        </>
    )
}

export default CarDetails