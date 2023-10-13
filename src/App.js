import './App.css';
import { useFormik } from 'formik';

function App() {

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'Emre',
          lastName: 'Saglam',
          email: 'emresaglam4207@gmail.com',
          gender: 'male',
          hobies: [], //birden fazla checkbox seçilebildiği için array olacaktır tipi
          country: "Turkey",
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" onChange={handleChange} value={values.firstName} placeholder="Jane" />

            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" onChange={handleChange} value={values.lastName} placeholder="Doe" />

            <br />
            <br />

            <label htmlFor="email">Email</label>
            <input name="email" placeholder="jane@acme.com" type="email" value={values.email} onChange={handleChange} />

            <br />
            <br />

            <span>Male</span>
            <input type='radio' name="gender" value="male" checked={values.gender === "male"} onChange={handleChange} />

            <span>Female</span>
            <input type='radio' name="gender" value="female" checked={values.gender === "female"} onChange={handleChange} />

            <br />
            <br />

            <div>
              <input type="checkbox" name="hobies" value="Football" onChange={handleChange} />
              Football
            </div>

            <div>
              <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} />
              Cinema
            </div>

            <div>
              <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
              Photography
            </div>

            <br />
            <br />

            <select name="country" value={values.country} onChange={handleChange} >
              <option value="tr"> Turkey </option>
              <option value="en"> England </option>
              <option value="usa"> USA </option>
            </select>

            <br />
            <br />

            <button type="submit">Submit</button>

            <br />
            <br />

            {JSON.stringify(values)}

          </form>
    </div>
  );
}

export default App;
