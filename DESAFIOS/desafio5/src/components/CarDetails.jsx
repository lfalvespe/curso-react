import styles from '../CarDetails.module.css'


const CarDetails = ({ model, brand, year }) => {

    return (
        <>
            <div className={styles.card}>
                <h3>Carro: {model}</h3>

                <p>Marca: <strong>{brand}</strong></p>
                <p>Ano: <strong>{year}</strong></p>
            </div>

        </>
    )
}

export default CarDetails