
export default function CompanyInfo() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Company Info</h1>
            <ul className="flex flex-col text-left gap-4">
                <li className="flex flex-col gap-2">
                    <label htmlFor="companyName">Company Name</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Company Name" />
                </li>
                <li className="flex flex-col gap-2">
                    <label htmlFor="address">Address</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Address" />
                </li>
                <li className="flex flex-col gap-2">
                    <label htmlFor="city">City</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="City" />
                </li>
                <li className="flex flex-col gap-2">
                    <label htmlFor="phone">Phone</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Phone" />
                </li>
                <li className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Email" />
                </li>
            </ul>
        </div>
    )
}
