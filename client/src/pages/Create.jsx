import { useState } from "react";

export default function CreateForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
  });

  const [cities, setCities] = useState([]);

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
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8 max-w-md">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Create New Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <select
            id="state"
            name="state"
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select State</option>
            {Object.keys(statesCities).map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <select
            id="city"
            name="city"
            onChange={handleChange}
            value={form.city}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
        >
          Save
        </button>
      </form>
    </div>
  );
}
