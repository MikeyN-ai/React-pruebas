import React from 'react'
import { useState, useEffect } from 'react'
import { getData, url} from './apiAccess/crud.js'
import { useFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    name: Yup.string().min(4,'Massa curt!').max(100, 'Massa llarg!').required('El nom és obligatori'),
    description : Yup.string().min(4,'Massa curt!').max(200, 'Massa llarg!').required('La descripció és obligatoria'),
    price : Yup.number().required('El preu és obligatori')
})

const Productes = () => {

    const formik = useFormik({

    initialValues: {
        name : '',
        description : '',
        price : 0
    },
    validationSchema,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },

    })

const [data, setData] = useState([])

async function fetchData() {
    const dataFetch = await getData(url, 'Product');
    setData(dataFetch);
}

useEffect(() => {
    fetchData();
}, [])

/*useEffect(() => {
    fetch('https://api.serverred.es/Product')
        .then(response => response.json())
        .then(dataFetch => {[...data, setData(dataFetch)]})
}, [])*/

  return (
    <div>
        <h2>Productes</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Preu</th>
                    <th>Descripció</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(ele => {
                    return (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.price}</td>
                            <td className='izquierda'>{ele.description}</td>
                            <td className='d-flex'>
                                <button className='btn btn-primary' onClick={() => alert('Editar')}>Editar</button>
                                <button className='btn btn-danger' onClick={() => alert('Eliminar')}>Eliminar</button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h3>Alta Productes</h3>
                <label htmlFor="name">Nom:</label>
                <br />
                <input 
                    type="text" 
                    name="name" 
                    value={formik.values.name}
                    placeholder='Enter name'
                    autoComplete='off'
                    onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null
                }
                <br /><br />
                <label htmlFor="description">Descripció:</label>
                <br />
                <input 
                    type="text" 
                    name="description" 
                    value={formik.values.description}
                    placeholder='Enter description'
                    autoComplete='off'
                    onChange={formik.handleChange}
                />
                {formik.touched.description && formik.errors.description ? (
                    <div>{formik.errors.description}</div>
                ) : null
                }
                <br /><br />
                <label htmlFor="price">Preu:</label>
                <br />
                <input 
                    type="text" 
                    name="price" 
                    value={formik.values.price}
                    placeholder='Enter price'
                    autoComplete='off'
                    onChange={formik.handleChange}
                />
                {formik.touched.price && formik.errors.price ? (
                    <div>{formik.errors.price}</div>
                ) : null
                }
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default Productes