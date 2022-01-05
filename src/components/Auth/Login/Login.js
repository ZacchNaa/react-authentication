import React, { useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import "./Login.css";

const Login = () => {
	// getting inputs
	const emailRef = useRef("2016.naaz@gmail.com");
	const passwordRef = useRef("11111111");

	// making use of authentication values : signup func
	const { login } = useAuth();

	// redirect with useHistory
	const history = useHistory();

	// state
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	// handling submit
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch (error) {
			setError("Login Failed! Please Try.");
		}
	};

	// Component return
	return (
		<>
			<Container className="app_wrap">
				<div className="w-100 signup_wrap">
					<Card style={{ padding: "4rem" }}>
						<Card.Body>
							<h2 className="text-left md-4">devchallenges</h2>
							<h1 className="text-left md-4">Login</h1>
							{error && <Alert variant="danger">{error}</Alert>}
							<Form onSubmit={handleSubmit}>
								<div class="ui left icon input">
									<input
										type="text"
										value="2016.naaz@gmail.com"
										placeholder="Email"
										ref={emailRef}
										required
									/>
									<i class="envelope icon"></i>
								</div>
								<div class="ui left icon input">
									<input
										type="text"
										value="11111111"
										placeholder="Password"
										ref={passwordRef}
										required
									/>
									<i class="lock icon"></i>
								</div>

								<Button
									disabled={loading}
									className="w-100 mt-3 py-3"
									type="submit">
									Login
								</Button>
								<div className="w-100 text-center text-muted mt-4">
									<p>or continue with these social profile</p>
									{/* <p>
								<Link to="/forgot-password">Forgot password?</Link>
							</p> */}
								</div>
								<div className="w-100 text-center text-muted mt-2 social">
									<i class="google icon"></i>
									<i class="facebook icon"></i>
									<i class="twitter icon"></i>
									<i class="github icon"></i>
								</div>
								<div className="w-100 text-center text-muted mt-2">
									<p>
										Don't have an account yet?{" "}
										<Link to="/signup">Register</Link>
									</p>
								</div>
							</Form>
						</Card.Body>
					</Card>
					<div className="w-100 text-center mt-2 createdby">
						<p>
							created by <Link to="/signup">username</Link>
						</p>
						<p>devChallenges.io</p>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Login;
