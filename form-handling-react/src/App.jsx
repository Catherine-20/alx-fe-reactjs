import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm.jsx";

import "./app.css";

export default function App() {
  const [mode, setMode] = useState("controlled"); // 'controlled' | 'formik'

  return (
    <main className="container">
      <h1>Form Handling in React</h1>

      <div style={{ display: "flex", gap: ".5rem", marginBottom: "1rem" }}>
        <button onClick={() => setMode("controlled")} disabled={mode === "controlled"}>
          Use Controlled
        </button>
        <button onClick={() => setMode("formik")} disabled={mode === "formik"}>
          Use Formik + Yup
        </button>
      </div>

      {mode === "controlled" ? <RegistrationForm /> : <FormikForm />}
    </main>
  );
}
