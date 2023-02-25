import React, { useEffect, useState } from "react";

const Gird = ({ data }) => {
  const [matrix, setMatrix] = useState(undefined);

  useEffect(() => {
    if (data) {
      let initialMatrix = constructMatrix(parseInt(data?.grid?.length), parseInt(data?.grid?.breadth));

      data?.infectedCells?.forEach((value, index) => {
        if (value?.y && value?.x) {
          initialMatrix[initialMatrix?.length - parseInt(value?.y) - 1][parseInt(value?.x)] = "X";
        }
      });

      setMatrix(initialMatrix);
    }
  }, [data]);

  useEffect(() => {
    console.log("The Final matrix -> ", matrix);
  }, [matrix]);

  const constructMatrix = (len, bre) => {
    let newMatrix = [];

    for (let i = 0; i < len; i++) {
      const row = Array.from(Array(bre).fill("O"));
      newMatrix.push(row);
    }

    return newMatrix;
  };

  return <div>Gird</div>;
};

export default Gird;
