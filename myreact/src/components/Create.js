import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    if (name && email) {
      axios
        .post("https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react", {
          name: name,
          email: email,
          header
        })
        .then(() => {
          history("/read");
        });
    } else {
      alert("Enter the values");
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2 create">
        <h2>Create</h2>
        <Link to="/read">
          <button type="submit" className="btn btn-primary">
            ShowData
          </button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
