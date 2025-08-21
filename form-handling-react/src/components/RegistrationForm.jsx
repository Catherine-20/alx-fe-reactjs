import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  const validate = () => {
    const errs = {};
    if (!username.trim()) errs.username = "Username is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Min 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, message: "", error: "" });
    try {
      const res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      setStatus({ loading: false, message: `Registered! id: ${data.id}`, error: "" });
      // clear form
      setUsername("");
      setEmail("");
      setPassword("");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
