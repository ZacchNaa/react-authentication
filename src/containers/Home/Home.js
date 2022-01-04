import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import Dictionary from "../../components/Dictionary/Dictionary";
import { useAuth } from "../../contexts/AuthContext";

const Home = () => {
  // state
  const [error, setError] = useState("");

  // redirect
  const history = useHistory();

  // get current user
  const { currentUser, logout } = useAuth();
  // handling log out
  const logoutHandler = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Could Not Log You Out! Please Try Again.");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center md-4">Dictionary Home</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: {currentUser.email}</strong>
          <Link to="update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={logoutHandler}>
          Log Out
        </Button>
      </div>
      {/* <Dictionary /> */}
    </>
  );
};

export default Home;
