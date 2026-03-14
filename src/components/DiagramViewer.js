import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function DiagramViewer({ image, components, selected }) {

  return (
    <div style={{ border: "1px solid gray", height: "500px" }}>
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div style={{ marginBottom: "10px" }}>
              <button onClick={() => zoomIn()}>Zoom In</button>
              <button onClick={() => zoomOut()}>Zoom Out</button>
              <button onClick={() => resetTransform()}>Reset</button>
            </div>

            <TransformComponent>
              <div style={{ position: "relative" }}>
                
                {image && (
                  <img
                    src={image.url}
                    alt="diagram"
                    style={{ width: "100%", maxWidth: "700px" }}
                  />
                )}

                {components.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      position: "absolute",
                      left: c.x,
                      top: c.y,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background:
                        selected?.id === c.id ? "red" : "blue"
                    }}
                  ></div>
                ))}

              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}

export default DiagramViewer;