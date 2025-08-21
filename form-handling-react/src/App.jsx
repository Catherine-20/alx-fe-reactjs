import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";
import "./app.css";

export default function App() {
  return (
    <main className="container">
      <h1>Form Handling in React</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Controlled Components</h2>
        <RegistrationForm />
      </section>

      <section>
        <h2>Formik + Yup</h2>
        <FormikForm />
      </section>
    </main>
  );
}
