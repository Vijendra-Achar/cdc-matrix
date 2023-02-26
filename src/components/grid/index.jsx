import React, { useEffect, useState } from "react";

const Gird = ({ data }) => {
  const [matrix, setMatrix] = useState(undefined);

  useEffect(() => {
    if (data) {
      let initialMatrix = constructMatrix(parseInt(data?.grid?.length), parseInt(data?.grid?.breadth));

      // Please the infected Cells first
      data?.infectedCells?.forEach((value) => {
        if (value?.y && value?.x) {
          initialMatrix[initialMatrix?.length - parseInt(value?.y) - 1][parseInt(value?.x)] = "X";
        }
      });

      data?.persons?.forEach((value) => {
        // Place the person's initial position
        if (value?.y && value?.x) {
          initialMatrix[initialMatrix?.length - parseInt(value?.y) - 1][parseInt(value?.x)] = "P";
        }

        // Convert the string to array
        const directions = value?.movement?.split("");

        let xValue = value?.x;
        let yValue = value?.y;
        let isInfected = false;

        // For the initial position of North
        if (value?.p?.trim().toLowerCase() === "n") {
          directions?.forEach((dir) => {
            if (dir.toLowerCase() === "f") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "O";
              }

              yValue = parseInt(yValue) + 1;
            } else if (dir.toLowerCase() === "r") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "O";
              }

              xValue = parseInt(xValue) + 1;
            } else if (dir.toLowerCase() === "l") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] = "O";
              }

              xValue = parseInt(xValue) - 1;
            }
          });
        }

        // For the initial position of South
        if (value?.p?.trim().toLowerCase() === "s") {
          directions?.forEach((dir) => {
            if (dir.toLowerCase() === "f") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "O";
              }

              yValue = parseInt(yValue) - 1;
            } else if (dir.toLowerCase() === "r") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] = "O";
              }

              xValue = parseInt(xValue) - 1;
            } else if (dir.toLowerCase() === "l") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "O";
              }

              xValue = parseInt(xValue) + 1;
            }
          });
        }

        // For the initial position of West
        if (value?.p?.trim().toLowerCase() === "w") {
          directions?.forEach((dir) => {
            if (dir.toLowerCase() === "r") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "O";
              }

              yValue = parseInt(yValue) + 1;
            } else if (dir.toLowerCase() === "l") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "O";
              }

              yValue = parseInt(yValue) - 1;
            } else if (dir.toLowerCase() === "f") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] = "O";
              }

              xValue = parseInt(xValue) - 1;
            }
          });
        }

        // For the initial position of East
        if (value?.p?.trim().toLowerCase() === "e") {
          directions?.forEach((dir) => {
            if (dir.toLowerCase() === "r") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "O";
              }

              yValue = parseInt(yValue) - 1;
            } else if (dir.toLowerCase() === "l") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "O";
              }

              yValue = parseInt(yValue) + 1;
            } else if (dir.toLowerCase() === "f") {
              if (
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] === "X" ||
                isInfected
              ) {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "X";
                isInfected = true;
              } else {
                initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "O";
              }

              xValue = parseInt(xValue) + 1;
            }
          });
        }
      });

      setMatrix(initialMatrix);
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
