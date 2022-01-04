import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Login = () => {
  // getting inputs
  const emailRef = useRef();
  const passwordRef = useRef();

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
      <Card>
        <Card.Body>
          <h2 className="text-center md-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="w-100 mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>
            <div className="w-100 text-center mt-3">
              <p>
                <Link to="/forgot-password">Forgot password?</Link>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
