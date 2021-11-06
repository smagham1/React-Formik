import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
            name:'',
            email:'',
            channel:''
}

const onSubmit = values => {
            console.log('form data', values)
}

const validate = values => {
            let errors = {}
            
            if(!values.name) {
                errors.name = 'Required'
            }
            
            if(!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
            errors.email = 'Invalid Email Format'
            
            if(!values.channel) {
                errors.channel = 'Required'
            }
             return errors
        }
        
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    channel: Yup.string().email('Invalid Email Format').required('Required')
})

function Youtube() {
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate
    },)
    
    //console.log('Form values', formik.values)
    
    return (
        <>
        <h2>This is a form</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name </label>
            <input 
                type='text' 
                id='name' 
                name='name' 
                value={formik.values.name} 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} 
            />
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
            <br /><br />
            <label htmlFor='email'>E-mail </label>
            <input 
                type='text' 
                id='email' 
                name='email'
                value={formik.values.email}
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange}  
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            <br /><br />
            <label htmlFor='channel'>Channel </label>
            <input 
                type='text' 
                id='channel' 
                name='channel' 
                value={formik.values.channel}
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange} 
            />
            {formik.touched.channel && formik.errors.channel ? <p>{formik.errors.channel}</p> : null}
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}


export default Youtube