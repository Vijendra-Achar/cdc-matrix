import React, { useState } from "react";

import "./styles.scss";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputLeftAddon,
  InputGroup,
  Button,
} from "@chakra-ui/react";

const InputForm = ({ submit, clearData }) => {
  const initialInfectedCell = { x: "", y: "" };
  const initialInfectedPerson = { x: "", y: "", p: "", movement: "" };
  const initialGridLayout = { length: "", breadth: "" };

  const [gridLayout, setGridLayout] = useState(initialGridLayout);

  const [infectedCells, setInfectedCells] = useState([initialInfectedCell]);
  const [infectedPeople, setInfectedPeople] = useState([initialInfectedPerson]);

  const addNewField = (type) => {
    if (type === "cell") {
      setInfectedCells((prevState) => {
        return [...prevState, { ...initialInfectedCell }];
      });
    } else if (type === "person") {
      setInfectedPeople((prevState) => {
        return [...prevState, { ...initialInfectedPerson }];
      });
    }
  };

  const handleFieldValueChange = (field, event, index) => {
    const value = event?.target?.value;

    switch (field) {
      case "length":
        setGridLayout((prevState) => {
          return { ...prevState, length: value };
        });
        break;
      case "breadth":
        setGridLayout((prevState) => {
          return { ...prevState, breadth: value };
        });
        break;
      case "cellX":
        const updatedXValue = editAndReturnNewArray(infectedCells, "x", value, index);
        setInfectedCells(updatedXValue);
        break;
      case "cellY":
        const updatedYValue = editAndReturnNewArray(infectedCells, "y", value, index);
        setInfectedCells(updatedYValue);
        break;
      case "personX":
        const updatedPXValue = editAndReturnNewArray(infectedPeople, "x", value, index);
        setInfectedPeople(updatedPXValue);
        break;
      case "personY":
        const updatedPYValue = editAndReturnNewArray(infectedPeople, "y", value, index);
        setInfectedPeople(updatedPYValue);
        break;
      case "personP":
        const updatedPPValue = editAndReturnNewArray(infectedPeople, "p", value, index);
        setInfectedPeople(updatedPPValue);
        break;
      case "personM":
        const updatedPMValue = editAndReturnNewArray(infectedPeople, "movement", value, index);
        setInfectedPeople(updatedPMValue);
        break;
    }
  };

  const editAndReturnNewArray = (array, key, value, index) => {
    const arr = [...array];
    const obj = arr[index];
    obj[key] = value;
    arr[index] = obj;
    return arr;
  };

  const handleSubmit = () => {
    const payload = {
      grid: gridLayout,
      infectedCells: infectedCells,
      persons: infectedPeople,
    };

    submit(payload);
  };

  const handleClear = () => {
    setInfectedCells([initialInfectedCell]);
    setInfectedPeople([initialInfectedPerson]);
    setGridLayout(initialGridLayout);

    clearData();
  };

  return (
    <div className="form-container">
      <FormControl>
        <div className="form-layout">
          {/* The Grid section */}
          <div>
            <FormLabel data-testid="heading">The Grid layout</FormLabel>
            <div className="section">
              <FormControl>
                <InputGroup className="input-group">
                  <InputLeftAddon children="X" />
                  <Input
                    type="number"
                    width="60px"
                    value={gridLayout?.length}
                    onChange={(e) => handleFieldValueChange("length", e)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup className="input-group">
                  <InputLeftAddon children="Y" />
                  <Input
                    type="number"
                    width="60px"
                    value={gridLayout?.breadth}
                    onChange={(e) => handleFieldValueChange("breadth", e)}
                  />
                </InputGroup>
              </FormControl>
            </div>
          </div>

          {/* The infected cells section */}
          <div>
            <FormLabel>Infected Cells</FormLabel>

            <div className="infected-cell">
              {infectedCells?.map((cell, index) => {
                return (
                  <div key={index} data-testid={`infected-cell-${index + 1}`} className="section">
                    <FormControl>
                      <InputGroup className="input-group">
                        <InputLeftAddon children="X" />
                        <Input
                          type="number"
                          width="60px"
                          value={cell?.x}
                          onChange={(e) => handleFieldValueChange("cellX", e, index)}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <InputGroup className="input-group">
                        <InputLeftAddon children="Y" />
                        <Input
                          type="number"
                          width="60px"
                          value={cell?.y}
                          onChange={(e) => handleFieldValueChange("cellY", e, index)}
                        />
                      </InputGroup>
                    </FormControl>
                  </div>
                );
              })}

              <Button onClick={() => addNewField("cell")}>Add new cell</Button>
            </div>
          </div>

          {/* The person's section */}
          <div>
            <FormLabel>Person's position and movement</FormLabel>

            <div className="section person">
              {infectedPeople.map((person, index) => {
                return (
                  <div className="person-container" data-testid={`person-${index + 1}`} key={index}>
                    <div className="input-layout">
                      <FormControl>
                        <InputGroup className="input-group">
                          <InputLeftAddon children="X" />
                          <Input
                            type="number"
                            width="60px"
                            value={person?.x}
                            onChange={(e) => handleFieldValueChange("personX", e, index)}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl>
                        <InputGroup className="input-group">
                          <InputLeftAddon children="Y" />
                          <Input
                            type="number"
                            width="60px"
                            value={person?.y}
                            onChange={(e) => handleFieldValueChange("personY", e, index)}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl>
                        <InputGroup className="input-group">
                          <InputLeftAddon children="Facing" />
                          <Input
                            type="text"
                            width="60px"
                            value={person?.p}
                            onChange={(e) => handleFieldValueChange("personP", e, index)}
                          />
                        </InputGroup>
                      </FormControl>
                    </div>

                    <FormControl>
                      <InputGroup className="input-group">
                        <InputLeftAddon children="Movement" />
                        <Input
                          type="text"
                          width="280px"
                          value={person?.movement}
                          onChange={(e) => handleFieldValueChange("personM", e, index)}
                        />
                      </InputGroup>
                    </FormControl>
                  </div>
                );
              })}
            </div>
            <Button onClick={() => addNewField("person")}>Add new person</Button>
          </div>
        </div>

        <div className="button-group">
          <Button onClick={() => handleSubmit()}>Submit</Button>
          <Button onClick={() => handleClear()} variant="outline">
            Clear
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default InputForm;
