import React, { useState } from "react";
import "./App.scss";

import { Navigation } from "./components/ui-components";

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
        <Navigation heading="Center for disease control" />

        <InputForm submit={formData} clearData={clearData} />

        {formValues && <Gird data={formValues} />}
      </div>
    </div>
  );
}

export default App;
