export default function Invoices() {
  return <div className="max-w-xl m-auto flex flex-col justify-around align-items-center">
    <div className="p-4 gap-4">
        <h1 className="text-3xl font-bold text-black">Invoices</h1>
        <p className="text-gray-600 mt-2">View and manage all your invoices in one place. Search, filter and track payment status.</p>
    </div>
<div className="relative overflow-x-auto sm:rounded-lg">
    <div className="flex flex-col gap-8 mb-6">
        <div className="flex flex-row gap-4 items-center">
            <div className="flex-1">
                <input type="text" 
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Search by client name..." 
                />
            </div>
            <div className="flex-1">
                <input type="date" 
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

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 text-gray-400">
        <thead className="text-xs text-gray-700 uppercase text-gray-400">
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
            <tr className="border-b bg-white border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                    #1234
                </td>
                <td className="px-6 py-4">
                    2024-01-15
                </td>
                <td className="px-6 py-4">
                    John Smith
                </td>
                <td className="px-6 py-4">
                    Paid
                </td>
                <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                        <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                        <a href="#" className="font-medium text-green-600 hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                    </div>
                </td>
            </tr>
            <tr className="border-b bg-white border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                    #1235
                </td>
                <td className="px-6 py-4">
                    2024-01-16
                </td>
                <td className="px-6 py-4">
                    Sarah Johnson
                </td>
                <td className="px-6 py-4">
                    Pending
                </td>
                <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                        <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                        <a href="#" className="font-medium text-green-600 hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                    </div>
                </td>
            </tr>
            <tr className=" border-b bg-white border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                    #1236
                </td>
                <td className="px-6 py-4">
                    2024-01-17
                </td>
                <td className="px-6 py-4">
                    Mike Wilson
                </td>
                <td className="px-6 py-4">
                    Unpaid
                </td>
                <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                        <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                        <a href="#" className="font-medium text-green-600 hover:underline">Edit</a>
                        <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                    </div>
                </td>
            </tr>
        </tbody>
        
    </table>
</div>

  </div>;
}

