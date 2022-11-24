import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewTemplate } from "../Action";

function Createtemplate() {
  const [newTemplate, setNewTemplate] = useState({
    _id: (Math.random() + 1).toString(36).substring(7),
    updateOn:new Date().toISOString().split("T")[0],
    templateName: "",
    userName: "",
    html: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setNewTemplate({ ...newTemplate, [name]: value });
  };

  const hanldeSubmit = (e) => {
    dispatch(NewTemplate(newTemplate));
    navigate("/template")
    
  };
  return (
    <div className="p-4">
      <h1>Create Template</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Template Name
          </label>
          <input
            type="text"
            name="templateName"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Template Name"
            onChange={(e) => hanldeChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Create By
          </label>
          <input
            type="text"
            name="userName"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
            onChange={(e) => hanldeChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            HTML:
          </label>
          <textarea
            className="form-control"
            name="html"
            id="exampleFormControlTextarea1"
            placeholder="Your Code"
            rows="3"
            onChange={(e) => hanldeChange(e)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={(e) => hanldeSubmit(e)}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Createtemplate;
