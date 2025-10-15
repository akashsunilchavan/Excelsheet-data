import React, { useEffect, useState } from "react";

function SheetData() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const spreadsheetId = "1B5txby8C3rc8V5b9x2JNfb1Bn2m_SWMZaYGEI0vgGmU";
    const range = "Sheet1!A:C";
    const apiKey = "AIzaSyBPDLeDBX-cXVWBLucPDNtA5AbOfTwgMnI"; // ⚠️ Add your valid Google Sheets API key

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const allRows = data.values || [];
        const bodyRows = allRows.slice(1);
        const mapped = bodyRows.map((r) => ({
          id: r[0],
          name: r[1],
          email: r[2],
        }));
        setRows(mapped);
      })
      .catch((err) => {
        console.error("Error fetching sheet data:", err);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Sheet Data
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg ">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">
                  ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.length > 0 ? (
                rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {row.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.email}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-gray-500 py-4 text-center italic"
                  >
                    Loading data...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SheetData;
