import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AboutUsBanner from '../components/AboutUsBanner'
import { IMAGE } from '../constent/theme'
import ReCaptchaV2 from 'react-google-recaptcha'
import axios from 'axios'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [counry, setCountry] = useState('')
  const [countrycode, setCountrycode] = useState('')
  const [agreeterms, setAgreeTerms] = useState('')
  const [error, setError] = useState('')
  const [captcha, setCaptcha] = useState(false)
  const [showtext, setshowText] = useState(false)



  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value)
  }

   const handleStateChange = (e: any) => {
     setState(e.target.value)
   }

  const handleCountryCodeChange = (e: any) => {
    setCountrycode(e.target.value)
  }

  const handlePhoneChange = (e: any) => {
      setPhone(e.target.value)
  }

  const handleAgreeterms = (e:any) => {
      if (e.target.value == 'on') {
        setAgreeTerms('1')
      }else{
         setAgreeTerms('0')
      }
  }

  const onChange = async (value:any) => {
    console.log('Captcha value:', value)
    const resp = await axios.post('http://127.0.0.1:5000/verify-recaptcha', {
      response: value,
    })

    console.log(resp, resp.data.success)
    
    if (resp.data.success == true) {
      setCaptcha(true)
      alert('captcha sucess')
    } else {
      alert('captcha failed')
    }

    
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError('Invalid email address')
      return
    }

    // Basic password validation
    if (password === '') {
      setError('Please enter a password')
      return
    }

    // Validation passed
    setError('')
    // Your Register logic here...
    alert('Register Successful!')
    // Reset fields after successful Register
    setEmail('')
    setPassword('')

    const data = {
      name: name,
      email: email,
      password: password,
      country:counry,
      country_code: countrycode,
      phone_no: phone,
      state: state,
      agree_terms:agreeterms,
    }
    console.log(data);
    const response = await axios.post('http://127.0.0.1:5000/register',data)
    console.log(response);

    if(response.status == 200){
      setshowText(true);
    }
    
    
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          backgroundImage: `url(${IMAGE.home_banner1})`, // Enclose url() in backticks (`) to use template literals
        }}
      >
        {showtext ? (
          <div
            style={{
              width: '400px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>We have sent an Email.Check and Verify your Email</h3>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              width: '400px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
              marginTop: '20px',
              zIndex: '10',
            }}
          >
            <h6>Your algo trading success begins here...</h6>
            <h4>Register</h4>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              onChange={handleNameChange}
              required
            />
            <br />
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              onChange={handleEmailChange}
              required
            />
            <br />
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                onChange={handlePasswordChange}
                required
              />
            </div>
            <br />
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Country'
                onChange={handleCountryChange}
                required
              />
            </div>
            <br />
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='State'
                onChange={handleStateChange}
                required
              />
            </div>
            <br />
            <input
              type='text'
              className='form-control'
              placeholder='Country Code'
              onChange={handleCountryCodeChange}
              required
            />
            <br />
            <input
              type='text'
              className='form-control'
              placeholder='Phone Number'
              onChange={handlePhoneChange}
              required
            />
            <br />
            <label
              className='form-control'
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <input type='checkbox' onChange={handleAgreeterms} required />
              <span>Agree Terms</span>
            </label>

            <br />
            <ReCaptchaV2
              sitekey='6LfrMFAUAAAAAA27qkpGJ9es3vkszRaWObSCW-vf'
              onChange={onChange}
            />
            <br />
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-primary btn-block'
                disabled={!captcha}
              >
                Register
              </button>
            </div>
            {/* Error handling */}
            {error && <p className='text-danger'>{error}</p>}
          </form>
        )}
      </div>
      {/* <div
        className="main-bnr overlay-black-dark"
        style={{ backgroundImage: `url(${IMAGE.home_banner1})` }}
      ></div> */}
    </>
  )
}

export default Register
