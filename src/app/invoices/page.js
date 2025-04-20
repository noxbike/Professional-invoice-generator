"use client";

import invoicesData from "@/data/invoices_data.json";
import ForceCompleteInfo from "../ForceCompleteInfo";
function Invoices() {

  return (
    <div className="max-w-4xl m-auto flex flex-col justify-around align-items-center">
      <div className="p-4 gap-4">
        <h1 className="text-3xl font-bold text-black">Invoices</h1>
        <p className="text-gray-600 mt-2">
          View and manage all your invoices in one place. Search, filter and
          track payment status.
        </p>
      </div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <div className="flex flex-col gap-8 mb-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by client name..."
              />
            </div>
            <div className="flex-1">
              <input
                type="date"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <select className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Filter by status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
          </div>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase light:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                invoice
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Voir</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {invoicesData.invoices.map((invoice, index) => (
              <tr
                key={index}
                className=" border-b bg-white border-gray-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4">{invoice.invoice_id}</td>
                <td className="px-6 py-4">{invoice.issue_date}</td>
                <td className="px-6 py-4">{invoice.client.name}</td>
                <td className="px-6 py-4">{invoice.status}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <a
                      href={`/invoices/${index}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      View
                    </a>
                    <a
                      href={`/invoices/${index}`}
                      className="font-medium text-green-600 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href={`/invoices/${index}`}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ForceCompleteInfo(Invoices);
