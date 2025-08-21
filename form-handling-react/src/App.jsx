import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";




function App() {
  const [useFormik, setUseFormik] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration</h1>

      <button onClick={() => setUseFormik(!useFormik)} style={{ marginBottom: "20px" }}>
        {useFormik ? "Switch to Controlled Form" : "Switch to Formik Form"}
      </button>

      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;
