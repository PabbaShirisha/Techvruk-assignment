import React from "react";

function ComponentList({ components, selected, setSelected }) {

  return (
    <div style={{ borderLeft: "1px solid gray", padding: "10px" }}>
      <h3>Components</h3>

      {components.map((c) => (
        <div
          key={c.id}
          onClick={() => setSelected(c)}
          style={{
            padding: "8px",
            cursor: "pointer",
            background:
              selected?.id === c.id ? "#ddd" : "transparent"
          }}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}

export default ComponentList;