import { useEffect, useState } from "react";

export default function ShowForm() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/form")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>All Form Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>State</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.state}</td>
              <td>{d.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
