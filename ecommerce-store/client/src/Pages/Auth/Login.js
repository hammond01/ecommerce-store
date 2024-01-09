import React from 'react';
import './Auth.css';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
const Login = () => {
	return (
		<>
			<NavBar />
			<div className="login">
				<div className="login-container">
					<h1>Sign up</h1>
					<div className="signup-fields">
						<input type="text" placeholder="Enter your Name" />
						<input type="email" placeholder="Enter your Email" />
						<input type="password" placeholder="Enter your Password" />
					</div>
					<button>Continue</button>
					<p className="login-login">
						Already have an account?<span>Login here</span>{' '}
					</p>
					<div className="login-agree">
						<input type="checkbox" name="" id="" />
						<p>By continuing, I agree to the terms of use & privacy policy.</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Login;
