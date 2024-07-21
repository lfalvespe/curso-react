import { useState, useEffect } from "react"

const List = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log("Getting data from database...")
        setItems(getItems)
    }, [getItems])

  return (
    <div>
        {items && items.map((item, i) => (
            <li key={i}>
                {item}
            </li>
        ))}
    </div>
  )
}

export default List