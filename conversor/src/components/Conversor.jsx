import {useState} from 'react'
import Moneda from './Moneda'

const Conversor = ({canvi}) => {
    const [euro, setEuro] = useState(1)
    const [dolar, setDolar] = useState(canvi)

    const convertir = (moneda, valor) => {
        if ( moneda == "Euro") {
            setEuro(valor)
            setDolar((valor * canvi).toFixed(2))
        } else {
            setDolar(valor)
            setEuro((valor / canvi).toFixed(2))
        }
    }

  return (
    <>
        <Moneda title="Dólar" valor={dolar} convertir={convertir}></Moneda>
        <Moneda title="Euro" valor={euro} convertir={convertir}></Moneda>
    </>
  )
}

export default Conversor