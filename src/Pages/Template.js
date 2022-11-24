import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Template() {
  const [serachinput, setserachinput] = useState("");
  const data = useSelector((state) => state.template.templates);
  const navigate = useNavigate();

  console.log(data);
  return (
    <div className="p-4">
      <h1 className="pb-4">Tamplate Service</h1>

      <div className="d-flex">
        <input
          type="search"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Template Name"
          onChange={(e) => setserachinput(e.target.value)}
        />
        <button
          className="btn btn-outline-info"
          onClick={() => navigate("/template/create")}
        >
          create
        </button>
      </div>

      <table class="table table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Template Name</th>
            <th scope="col">Update On</th>
            <th scope="col">Created By</th>
            <th scope="col">Asction</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data
              .filter((data) =>
                data?.templateName?.match(new RegExp(serachinput, "i"))
              )
              .map((item, index) => {
                console.log(item, "nhdiuhiudh");
                return (
                  <tr>
                    <th scope="row">{item._id}</th>
                    <td>{item.templateName}</td>
                    <td>{item.updateOn}</td>
                    <td>{item.userName}</td>
                    <td>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => navigate(`/template/detail/${item._id}`)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default Template;
