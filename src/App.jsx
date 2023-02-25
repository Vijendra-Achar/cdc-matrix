import React, { useEffect, useState } from "react";
import "./App.scss";

import InputForm from "./components/form";
import Gird from "./components/grid";

function App() {
  const [formValues, setFormValues] = useState(undefined);

  const formData = (data) => {
    setFormValues(data);
  };

  const clearData = () => {
    setFormValues(undefined);
  };

  return (
    <div className="container">
      <div>
        <h3>Center for Disease Control</h3>

        <InputForm submit={formData} clearData={clearData} />

        <Gird data={formValues} />
      </div>
    </div>
  );
}

export default App;
