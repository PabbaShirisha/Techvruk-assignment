import React, { useEffect, useState } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { getComponents } from "../services/api";
import "./Dashboard.css";

function Dashboard() {

  const [image, setImage] = useState(null);
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getComponents().then((data) => {
      setComponents(data);
    });
  }, []);

  return (
  <div className="dashboard-container">

    <UploadBox setImage={setImage} />

    <div className="dashboard-layout">

      <div className="viewer-section">
        <DiagramViewer
          image={image}
          components={components}
          selected={selected}
        />
      </div>

      <div className="sidebar-section">
        <ComponentList
          components={components}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

    </div>

  </div>
);
}

export default Dashboard;