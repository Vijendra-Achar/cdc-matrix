import React, { useEffect, useState } from "react";
import { traceMovement } from "./movementMap";

const Gird = ({ data }) => {
  const [matrix, setMatrix] = useState(undefined);

  useEffect(() => {
    if (data) {
      const length = data?.grid?.length;
      const breadth = data?.grid?.breadth;
      let initialMatrix = constructMatrix(parseInt(length), parseInt(breadth));

      // Please the infected Cells first
      data?.infectedCells?.forEach((value) => {
        if (value?.y && value?.x) {
          initialMatrix[initialMatrix?.length - parseInt(value?.y) - 1][parseInt(value?.x)] = "X";
        }
      });

      let finalMatrix = [];

      data?.persons?.forEach((value) => {
        // Place the person's initial position
        if (value?.y && value?.x) {
          initialMatrix[initialMatrix?.length - parseInt(value?.y) - 1][parseInt(value?.x)] = "P";
        }

        // Convert the string to array
        const directions = value?.movement?.split("");

        // Track the movement
        finalMatrix = traceMovement(value, initialMatrix, directions, length, breadth);
        console.log("The final -> ", finalMatrix);
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

  return <div>Gird</div>;
};

export default Gird;
