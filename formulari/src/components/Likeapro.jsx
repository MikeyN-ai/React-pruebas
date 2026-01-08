import React from 'react'
import {useState} from 'react'
import { useFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    email: Yup.string().email('Email invàlid').required('El email és obligatori'),
    password : Yup.string().min(6,'Massa curt!').max(20, 'Massa llarg!').required('La contrasenya és obligatoria'),
    language : Yup.array().required('Selecciona un idioma')
})

const Likeapro = () => {

    const formik = useFormik({

    initialValues: {
        email : '',
        password : '',
        language : ''
    },
    validationSchema,
    onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },

})

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <h3>Formulari Formik i Yup</h3>
            <label htmlFor="email">Email:</label>
            <br />
            <input 
                type="email" 
                name="email" 
                value={formik.values.email}
                placeholder='Enter email'
                autoComplete='off'
                onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null
            }
            <br /><br />
            <label htmlFor="password">Password:</label>
            <br />
            <input 
                type="password" 
                name="password" 
                value={formik.values.password}
                placeholder='Enter password'
                autoComplete='off'
                onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null
            }
            <br /><br />
            <label htmlFor="language">SELECTOR DE IDIOMES:</label>
            <br />
            <select 
                name="language" 
                value={formik.values.language}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                multiple={true}
            >
                <option value="">------------------------------------------</option>
                <option value="en">Inglés</option>
                <option value="es">Español</option>
                <option value="po">Portugués</option>
                <option value="fr">Frances</option>
            </select>
            {formik.touched.language && formik.errors.language ? (
                <div>{formik.errors.language}</div>
            ) : null
            }
            <br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Likeapro