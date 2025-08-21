import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().trim().min(3, "At least 3 characters").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
});

const initialValues = { username: "", email: "", password: "" };

async function submitToApi(values) {
  const res = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}

export default function FormikForm() {
  return (
    <div className="card">
      <h2 className="title">Registration (Formik + Yup)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setStatus({ success: "", error: "" });
          try {
            const data = await submitToApi(values);
            setStatus({ success: `Registered! id: ${data.id}`, error: "" });
            resetForm();
          } catch (err) {
            setStatus({ success: "", error: err.message || "Something went wrong" });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <label>
              Username
              <Field name="username" type="text" placeholder="e.g. kath123" autoComplete="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </label>

            <label>
              Email
              <Field name="email" type="email" placeholder="you@example.com" autoComplete="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </label>

            <label>
              Password
              <Field name="password" type="password" placeholder="••••••••" autoComplete="new-password" />
              <ErrorMessage name="password" component="div" className="error" />
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Create account"}
            </button>

            {status?.success && <p className="success">{status.success}</p>}
            {status?.error && <p className="error">{status.error}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
