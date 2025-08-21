import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = "Username is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Min 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, message: "", error: "" });
    try {
      // Mock “registration” request to ReqRes
      const res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      setStatus({ loading: false, message: `Registered! id: ${data.id}`, error: "" });
      setForm({ username: "", email: "", password: "" });
      setErrors({});
    } catch (err) {
      setStatus({ loading: false, message: "", error: err.message || "Something went wrong" });
    }
  };

  return (
    <div className="card">
      <h2 className="title">Registration (Controlled)</h2>

      <form onSubmit={onSubmit} noValidate>
        <label>
          Username
          <input
            name="username"
            type="text"
            value={form.username}
            onChange={onChange}
            placeholder="e.g. kath123"
            autoComplete="username"
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            placeholder="••••••••"
            autoComplete="new-password"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </label>

        <button type="submit" disabled={status.loading}>
          {status.loading ? "Submitting..." : "Create account"}
        </button>

        {status.message && <p className="success">{status.message}</p>}
        {status.error && <p className="error">{status.error}</p>}
      </form>
    </div>
  );
}
