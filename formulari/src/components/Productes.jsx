import React from 'react'
import { useState, useEffect } from 'react'

const Productes = () => {

const [data, setData] = useState([])

useEffect(() => {
    fetch('https://api.serverred.es/Product')
        .then(response => response.json())
        .then(dataFetch => {[...data, setData(dataFetch)]})
}, [])

  return (
    <div>
        <h2>Productes</h2>
        <table border='1'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Preu</th>
                    <th>Descripció</th>
                </tr>
            </thead>
            <tbody>
                {data.map(ele => {
                    return (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.price}</td>
                            <td className=''>{ele.description}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Productes