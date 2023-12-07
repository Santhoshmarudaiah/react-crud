import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTabledark] = useState("");

  const [inputText, setInputText] = useState("");

  function getData() {
    axios
      .get("https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  //when the value of data change useffect will run
  useEffect(() => {
    getData();
  }, []);

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <>
      <div class="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") {
              setTabledark("");
            } else {
              setTabledark("table-dark");
            }
          }}
        ></input>
      </div>
      <div className="d-flex justify-content-between m-2">
        
        <div className="mb-3">
          <input
            type="search"
            class="form-control"
            placeholder="type here"
            onChange={inputHandler}
          />
        </div>
        <Link to="/">
          <button type="submit" className="btn btn-secondary">
            Create
          </button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}  id="table">
        <thead>
          <tr>
            <th scope="col">Sno</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data
          .filter((el) => {
            if (el === "") {
              return el;
            } else {
              return (
                el.name.toLowerCase().includes(inputText) ||
                el.email.toLowerCase().includes(inputText)
              );
            }
          })
          .map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>
                      <Link to="/update">
                        <button
                          class="btn-success"
                          onClick={() =>
                            setToLocalStorage(
                              eachData.id,
                              eachData.name,
                              eachData.email
                            )
                          }
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => handleDelete(eachData.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
      </table>
    </>
  );
};

export default Read;
