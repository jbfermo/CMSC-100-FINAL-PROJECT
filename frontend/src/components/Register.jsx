import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/Register.css';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/register', { firstName, middleName, lastName, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="register-container">
            <div className="register-content">
                <h2 className='register-title'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputFirstName" className="form-label">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            className="form-control register-input"
                            id="exampleInputFirstName"
                            onChange={(event) => setFirstName(event.target.value)}
                            required
                        />
                    </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputMiddleName" className="form-label">
                                <strong>Middle Name (Optional)</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Middle Name"
                                className="form-control"
                                id="exampleInputMiddleName"
                                onChange={(event) => setMiddleName(event.target.value)}
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputLastName" className="form-label">
                                <strong>Last Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Last Name"
                                className="form-control"
                                id="exampleInputLastName"
                                onChange={(event) => setLastName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="exampleInputPassword"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary register-btn">Register</button>
                </form>

                <p className='container my-2 register-login'>Already have an account ?</p>
                <Link to='/login' className="btn btn-secondary">Login</Link>
            </div>
        </div>
    );
};

export default Register;
