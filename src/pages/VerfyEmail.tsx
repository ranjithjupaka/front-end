import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AboutUsBanner from '../components/AboutUsBanner'
import { IMAGE } from '../constent/theme'
import axios from 'axios'

const VerifyEmail = () => {
  const EmailStatus = {
    Verifying: 'Verifying',
    Failed: 'Failed',
    Verified:'Verified'
  }

  const { token } = useParams()

  const [emailStatus, setEmailStatus] = useState(EmailStatus.Verifying)

  useEffect(() => {

     const data = {
       token:token
     }
     console.log(data)


    axios
      .post('http://127.0.0.1:5000/verify-email', { token: token })
      .then((response) => {
        if(response.status == 200){
          setEmailStatus(EmailStatus.Verified)
        }
      })
      .catch(() => {
        setEmailStatus(EmailStatus.Failed)
      })
  }, [])

  function getBody() {
    switch (emailStatus) {
      case EmailStatus.Verified:
        return <div>Email Verified</div>
      case EmailStatus.Verifying:
        return <div>Verifying...</div>
      case EmailStatus.Failed:
        return (    
          <div>
            Verification failed!
          </div>
        )
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${IMAGE.home_banner1})`, // Enclose url() in backticks (`) to use template literals
      }}
    >
      <div
        style={{
          width: '400px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h3>Verification Status</h3>
        {getBody()}
      </div>
    </div>
  )
}

export default VerifyEmail 

