import { useEffect, useState } from "react";

export default function ShowForm() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/form")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">All Form Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((d, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{d.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.state}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
