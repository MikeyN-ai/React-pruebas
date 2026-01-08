import React from 'react'
import {useState} from 'react'

const Controlat = () => {
  const [dades, setDades] = useState({
    nom : '',
    cognom : ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value)
    setDades({
      ...dades,
      [event.target.name] : event.target.value
    })
    console.log(dades)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`El teu nom és ${dades.nom} i el teu cognom és ${dades.cognom}`);
  }

  return (
    <div>
      <h3>Formulari Controlat</h3>
      <form>
        <label htmlFor="">
            Nom: <br />
            <input type="text" name="nom" onChange={handleInputChange}/>
        </label><br /><br />
        <label htmlFor="">
          Cognom: <br />
          <input type="text" name="cognom" onChange={handleInputChange}/>
        </label><br /><br />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      {console.log(dades.nom)}
    </div>
  )
}

export default Controlat