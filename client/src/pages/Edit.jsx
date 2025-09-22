import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    state: "",
    city: "",
    address: "",
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      const newForm = { ...prevForm, [name]: value };
      if (name === "state") {
        newForm.city = "";
        if (value) {
          axios
            .get(`/api/v1/locations/${encodeURIComponent(value)}/cities`)
            .then((res) => setCities(res.data.cities || []))
            .catch(() => setCities([]));
        } else {
          setCities([]);
        }
      }
      return newForm;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: form.name,
        mobileNumber: form.mobile,
        state: form.state,
        city: form.city,
        address: form.address,
      };
      await axios.put(`/api/v1/users/${id}`, payload, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Updated ✅");
      navigate("/show");
    } catch (error) {
      const message = error?.response?.data?.message || "Failed to save";
      alert(message);
      console.error(error);
    }
  };

  useEffect(() => {
    // Load states list
    axios
      .get("/api/v1/locations/states")
      .then((res) => setStates(res.data.states || []))
      .catch(() => setStates([]));

    const prefilled = location.state;
    if (prefilled) {
      setForm({
        name: prefilled.name || "",
        mobile: prefilled.mobileNumber || "",
        state: prefilled.state || "",
        city: prefilled.city || "",
        address: prefilled.address || "",
      });
      if (prefilled.state) {
        axios
          .get(
            `/api/v1/locations/${encodeURIComponent(prefilled.state)}/cities`
          )
          .then((res) => setCities(res.data.cities || []))
          .catch(() => setCities([]));
      }
      return;
    }
    axios
      .get(`/api/v1/users`)
      .then((res) => {
        const found = (res.data.users || []).find((u) => u._id === id);
        if (found) {
          setForm({
            name: found.name || "",
            mobile: found.mobileNumber || "",
            state: found.state || "",
            city: found.city || "",
            address: found.address || "",
          });
          if (found.state) {
            axios
              .get(
                `/api/v1/locations/${encodeURIComponent(found.state)}/cities`
              )
              .then((r) => setCities(r.data.cities || []))
              .catch(() => setCities([]));
          }
        }
      })
      .catch((err) => console.error(err));
  }, [id, location.state]);

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8 max-w-md">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Edit Entry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            value={form.name}
          />
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number (10 digits)"
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            value={form.mobile}
          />
        </div>

        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State <span className="text-red-500">*</span>
          </label>
          <select
            id="state"
            name="state"
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={form.state}
            required
          >
            <option value="">Select State</option>
            {states.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City <span className="text-red-500">*</span>
          </label>
          <select
            id="city"
            name="city"
            onChange={handleChange}
            value={form.city}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            onChange={handleChange}
            rows="3"
            value={form.address}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
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
