export default function CustomerInfo({customer, setCustomer}) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Customer Info</h1>
            <ul className="flex flex-col text-left gap-4">
                <li className="flex flex-col gap-2">
                    <label htmlFor="name">Customer Name</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Customer Name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
                </li>
                <li className="flex flex-col gap-2">
                    <label htmlFor="address">Address</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Address" value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} />
                </li>
                <li className="flex flex-col gap-2">
                    <label htmlFor="zip">Zip</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Zip" value={customer.zip} onChange={(e) => setCustomer({ ...customer, zip: e.target.value })} />
                </li>
                <li className="flex flex-col gap-2">
                    <label htmlFor="phone">Phone</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Phone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
                </li>
            </ul>
        </div>
    )
}
