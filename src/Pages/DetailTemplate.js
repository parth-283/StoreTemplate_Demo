import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "./Editor";
import parse from "html-react-parser";
import { EditTemplate } from "../Action";

function DetailTemplate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useSelector((state) => state.template.templates);
  const filterData = data?.filter((item) => item._id === id)[0];

  const [srcDoc, setSrcDoc] = useState();
  const [html, setHtml] = useState();
  const [outputToggle, setOutputToggle] = useState(false);
  console.log(srcDoc);

  useEffect(() => {
    setHtml(filterData?.html);
    setSrcDoc(filterData?.html);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      ${html}
        `);
    }, 100);
    return () => clearTimeout(timeout);
  }, [html]);

  const handleSave = () => {
    dispatch(EditTemplate(html, filterData?._id));
    navigate("/template");
  };

  return (
    <div className="p-4">
      <div className="card" key={filterData?._id}>
        <div className="card-header h2">Template</div>
        <div className="card-body">
          <h4 className="card-title">
            Template Name : {filterData?.templateName}
          </h4>
          <p className="card-text">Created By : {filterData?.userName}</p>
          <p className="card-text">Created On : {filterData?.updateOn}</p>
          <div className="card">
            <div className="pane top-pane">
              <Editor value={html} onChange={setHtml} />
            </div>
            {outputToggle && (
              <div>
                <div className="pane">
                  <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            )}
            <div className="d-flex justify-content-end m-2 py-1">
              <button className="btn border" onClick={() => handleSave()}>
                Save
              </button>
              {!outputToggle ? (
                <button
                  className="btn border"
                  onClick={() => setOutputToggle(true)}
                >
                  Show
                </button>
              ) : (
                <button
                  className="btn border"
                  onClick={() => setOutputToggle(false)}
                >
                  Hide
                </button>
              )}
              <button
                className="btn border"
                onClick={() => {
                  navigate("/template");
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTemplate;
