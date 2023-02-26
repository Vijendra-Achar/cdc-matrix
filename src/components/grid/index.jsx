import React, { useEffect, useState } from "react";
import { traceMovement } from "./movementMap";

import "./styles.scss";

const Gird = ({ data }) => {
  const [matrix, setMatrix] = useState(undefined);

  useEffect(() => {
    if (data) {
      const length = data?.grid?.length;
      const breadth = data?.grid?.breadth;
      let initialMatrix = constructMatrix(parseInt(length), parseInt(breadth));

      // Please the infected Cells first
      data?.infectedCells?.forEach((value) => {
        if (value?.y && value?.x && value?.y < length && value?.x < breadth) {
          initialMatrix[initialMatrix?.length - parseInt(value?.y) - 1][parseInt(value?.x)] = "X";
        }
      });

      let finalMatrix = [];

      data?.persons?.forEach((value) => {
        // Place the person's initial position
        if (value?.y && value?.x && value?.y < length && value?.x < breadth) {
          initialMatrix[initialMatrix?.length - parseInt(value?.y) - 1][parseInt(value?.x)] = "P";
        }

        // Convert the string to array
        const directions = value?.movement?.split("");

        // Track the movement
        finalMatrix = traceMovement(value, initialMatrix, directions, length, breadth);
      });

      setMatrix(finalMatrix);
    }
  }, [data]);

  const constructMatrix = (len, bre) => {
    let newMatrix = [];

    for (let i = 0; i < len; i++) {
      const row = Array.from(Array(bre).fill("-"));
      newMatrix.push(row);
    }

    return newMatrix;
  };

  return (
    <div>
      <h3>The Result</h3>
      {matrix?.length
        ? matrix?.map((row, i) => {
            return (
              <div
                style={{ display: "grid", gridTemplateColumns: `repeat(${data?.grid?.length}, 1fr)`, gap: "10px" }}
                className="matrix"
                key={i}
              >
                {row?.map((element, j) => {
                  return (
                    <span className="element" key={j}>
                      {element}
                    </span>
                  );
                })}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Gird;
