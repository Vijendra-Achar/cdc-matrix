export const traceMovement = (value, matrix, directions, length, breadth) => {
  console.log("The data");
  let initialMatrix = matrix;

  let xValue = value?.x;
  let yValue = value?.y;
  let position = value?.p;
  let isInfected = false;

  // For the initial position of North
  if (position?.trim().toLowerCase() === "n") {
    directions?.forEach((dir) => {
      if (dir.toLowerCase() === "f" && initialMatrix?.length - parseInt(yValue) - 1 - 1 < length) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "O";
        }

        yValue = parseInt(yValue) + 1;
      } else if (dir.toLowerCase() === "r" && parseInt(xValue) + 1 < breadth) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "O";
        }

        xValue = parseInt(xValue) + 1;
      } else if (dir.toLowerCase() === "l" && parseInt(xValue) - 1 < breadth) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] === "X" || isInfected) {
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
  if (position?.trim().toLowerCase() === "s") {
    directions?.forEach((dir) => {
      if (dir.toLowerCase() === "f" && initialMatrix?.length - parseInt(yValue) - 1 + 1 < length) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "O";
        }

        yValue = parseInt(yValue) - 1;
      } else if (dir.toLowerCase() === "r" && parseInt(xValue) - 1 < breadth) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] = "O";
        }

        xValue = parseInt(xValue) - 1;
      } else if (dir.toLowerCase() === "l" && parseInt(xValue) + 1 < breadth) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] === "X" || isInfected) {
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
  if (position?.trim().toLowerCase() === "w") {
    directions?.forEach((dir) => {
      if (dir.toLowerCase() === "r" && initialMatrix?.length - parseInt(yValue) - 1 - 1 < length) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "O";
        }

        yValue = parseInt(yValue) + 1;
      } else if (dir.toLowerCase() === "l" && initialMatrix?.length - parseInt(yValue) - 1 + 1 < length) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "O";
        }

        yValue = parseInt(yValue) - 1;
      } else if (dir.toLowerCase() === "f" && parseInt(xValue) - 1 < breadth) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) - 1] === "X" || isInfected) {
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
  if (position?.trim().toLowerCase() === "e") {
    directions?.forEach((dir) => {
      if (dir.toLowerCase() === "r" && initialMatrix?.length - parseInt(yValue) - 1 + 1 < length) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 + 1][parseInt(xValue)] = "O";
        }

        yValue = parseInt(yValue) - 1;
      } else if (dir.toLowerCase() === "l" && initialMatrix?.length - parseInt(yValue) - 1 - 1 < length) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1 - 1][parseInt(xValue)] = "O";
        }

        yValue = parseInt(yValue) + 1;
      } else if (dir.toLowerCase() === "f" && parseInt(xValue) + 1 < breadth) {
        if (initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] === "X" || isInfected) {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "X";
          isInfected = true;
        } else {
          initialMatrix[initialMatrix?.length - parseInt(yValue) - 1][parseInt(xValue) + 1] = "O";
        }

        xValue = parseInt(xValue) + 1;
      }
    });
  }

  return initialMatrix;
};
