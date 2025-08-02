import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../Projects.json";
export default function Projects() {
  const [pageData, setPageData] = useState({});
  const { name } = useParams();
  useEffect(() => {
    if (name) {
      const proData = data.filter((i) => i.title == name);
      setPageData(proData[0] || {});
    }
  }, [name]);
  return (
    <div className="project_section container">
      <h1>{pageData.title}</h1>
      <ul className="tech_list">
        {pageData?.technologies?.map((i) => {
          return <li>{i}</li>;
        })}
      </ul>
      <h2 className="project_link">
        Project Link :{" "}
        {pageData.projectLink ?  <Link to={pageData.projectLink} target="_blank">
          {pageData.projectLink}
        </Link> : "URL not disclosed due to privacy agreement."}
       
      </h2>
      <div
        className="project_desc"
        dangerouslySetInnerHTML={{ __html: pageData.description }}
      ></div>

      <h3>Snapshot of Projects</h3>
      <ul className="snapshot_images">
        {pageData?.snapshot?.map((i) => {
          return (
            <li>
              {" "}
              <img src={i} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
