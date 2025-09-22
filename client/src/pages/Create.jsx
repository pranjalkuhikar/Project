import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
  });

  const [cities, setCities] = useState([]);
  const router = useRouter();

  const statesCities = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Gujarat: ["Ahmedabad", "Surat", "Rajkot"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "state") {
      setCities(statesCities[value] || []);
      setForm({ ...form, state: value, city: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dummy fetch - replace with your API
    await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Form saved ✅");
    router.push("/show");
  };

  return (
    <div>
      <h2>Create Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <br />

        <select name="state" onChange={handleChange}>
          <option value="">Select State</option>
          {Object.keys(statesCities).map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>
        <br />

        <select name="city" onChange={handleChange} value={form.city}>
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
