import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validations';


function Signup() {

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({ // handleblur ve touched ile bir formdan ayrılıp ayrılmadığımıza bakıyor
        initialValues: {
          email: '',
          password: '',
          passwordConfirm: '',
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema, //validasyon eksik olduğunda gönderilmesini engeller.
      });

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>Email</label>
                <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>

               { errors.email && touched.email && <div className='error'>{errors.email}</div> }  {/* Eğer bir hata varsa form içinde bu kod ile hatayı gösterir.*/}

                <br />
                <br />

                <label>Password</label>
                <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />

                { errors.password && touched.password && <div className='error'>{errors.password}</div> }  {/* Eğer bir hata varsa form içinde bu kod ile hatayı gösterir.*/}

                <br />
                <br />

                <label >Confirm Password</label>
                <input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur}/>

                { errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div> }  {/* Eğer bir hata varsa form içinde bu kod ile hatayı gösterir.*/}

                <br />
                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                {JSON.stringify(values)}

            </form>
        </div>
    )
}

export default Signup