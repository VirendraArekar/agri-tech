import React, {useState} from 'react'
import { Navigate } from "react-router-dom";
import Title from '../../components/Title'

const Login  = (props) => {
    const [token, setToken] = useState('')
    Title('Login')
    const onSubmit = async(e) => {
        e.preventDefault();
        let data = await localStorage.setItem('token','I am Virendra Arekar');
        setToken(data);
    }
    return(
        <div class="vh-100 d-flex justify-content-center align-items-center">
            {token !== '' && (
            <Navigate to="/" replace={true} />
            )}
            <div class="container">
                <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <div class="border border-3 border-primary"></div>
                    <div class="card bg-white shadow-lg">
                    <div class="card-body p-5">
                        <form class="mb-3 mt-md-4">
                        <h2 class="fw-bold mb-2 text-uppercase ">Login</h2>
                        <p class=" mb-5">Please enter your login and password!</p>
                        <div class="mb-3">
                            <label for="email" class="form-label ">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@gmail.com" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label ">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="*******" />
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-outline-dark" type="button" onClick={onSubmit}>Login</button>
                        </div>
                        </form>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login;