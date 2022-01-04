import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const UpdateProfile = (props) => {
  // getting inputs
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // redirect with useHistory
  const history = useHistory();

  // making use of authentication values : signup func
  const { currentUser, UpdateEmail, updatePassword } = useAuth();

  // state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    // promises to handle changes
    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(UpdateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    //   run if all promises were successful
    Promise.all(promises)
      .then(() => history.push("/"))
      .catch(() => setError("Update Failed! Try Again"))
      .finally(() => setLoading(false));
  };

  // Component return
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center md-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password" className="w-100 mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Keep current password? Leave blank!"
              />
            </Form.Group>
            <Form.Group id="passwordConfirm" className="w-100 mt-3">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Keep current password? Leave blank!"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <p>
          <Link to="/">Cancel</Link>
        </p>
      </div>
    </>
  );
};

export default UpdateProfile;
