import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./index.css"

const Signup = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [showPass, setShowPass] = useState(false)
	const navigate = useNavigate();

    const handleToggle = () => {
        setShowPass(!showPass)
    }

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const url = "https://bike-service-application-backend.onrender.com/api/users";

			// const url = "http://localhost:5002/api/users"

			setError('Loading...')
			
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			
			const res = await response.json();

			if (response.ok) {
				navigate("/login");
				setError(res.message);
			} else {
				setError(res.message);
			}
		} catch (error) {
			setError("An unexpected error occurred");
		}
	};

	const responseResultStyle = error === 'Loading...' || error === 'SignUp Successfully' ?
    'success-msg': 'error-msg'


	return (
		<div className='signup-container'>
			<form className='form-container' onSubmit={handleSubmit}>
			<div className='heading-container'>
                    <img src="https://www.rapidbikeservice.com/extras/website/images/logo.png" alt="Logo" />
                   <h1>Sign up</h1>
                </div>
				<div className='input-container'>
					<label className='label'>Name</label>
					<input
						type="text"
						placeholder="Name"
						name="name"
						onChange={handleChange}
						value={data.name}
						required
						className='input'
					/>
				</div>
				<div className='input-container'>
					<label className='label'>Email</label>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleChange}
						value={data.email}
						required
						className='input'
					/>
				</div>

				<div className='input-container'>
					<label className='label'>Password</label>
					<div className='password-input-container'>
                        <input
                            type={showPass ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className='password-input'
                        />
                        {showPass ? <FaEye size={20} onClick={handleToggle} color="white"/> : <FaEyeSlash size={20} onClick={handleToggle} color="white"/>}
                    </div>
				</div>
				{error && <div className={responseResultStyle}>{error}</div>}
				<button type="submit" className='signup-button'>
					Sign Up
				</button>
				<p className='note'>Already have an account?</p>
				<Link to="/login">
					<button type="button" className='login-button'>
						Login
					</button>
				</Link>
			</form>
		</div>
	);
};

export default Signup;
