import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const Profile = () => {

    // const [first_name, setFirstName] = useState('')
    // const [last_name, setLastName] = useState('')
    // const [email, setEmail] = useState('')

    const [details, setDetails] = useState({
        name : '',
        email : ''
    })

    useEffect( async () => {
          getProfil()

    }, [])

    const getProfil =  () => {
        const token = localStorage.usertoken
        console.log(token)
        const decoded = jwt_decode(token)
        setDetails({
            name : decoded.name,
            email : decoded.email
        })
        

        // setCheckDetails({
        //     first_name: decoded.first_name,
        //     last_name: decoded.last_name,
        //     email: decoded.email
        // })
        // setFirstName(decoded.first_name)
        // setLastName(decoded.last_name)
        // setEmail(decoded.email)
    }

    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">PROFILE</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td>Fist Name</td>
                            <td>{details.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{details.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Profile