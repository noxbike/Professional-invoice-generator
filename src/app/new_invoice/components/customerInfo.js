export default function CustomerInfo({ customer, setCustomer }) {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Informations Client
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-1"
          >
            Nom du client
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            placeholder="Nom du client"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
        </li>
        <li className="flex flex-col gap-2">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-1"
          >
            Adresse
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="address"
            placeholder="Adresse"
            value={customer.address}
            onChange={(e) =>
              setCustomer({ ...customer, address: e.target.value })
            }
          />
        </li>
        <li className="flex flex-col gap-2">
          <label
            htmlFor="zip"
            className="block text-gray-700 text-sm font-bold mb-1"
          >
            Code Postal
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="zip"
            placeholder="Code Postal"
            value={customer.zip}
            onChange={(e) => setCustomer({ ...customer, zip: e.target.value })}
          />
        </li>
        <li className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-1"
          >
            Téléphone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="phone"
            placeholder="Téléphone"
            value={customer.phone}
            onChange={(e) =>
              setCustomer({ ...customer, phone: e.target.value })
            }
          />
        </li>
        <li className="flex flex-col gap-2">
          <label
            htmlFor="country"
            className="block text-gray-700 text-sm font-bold mb-1"
          >
            Pays
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="country"
            placeholder="Pays"
            value={customer.country}
            onChange={(e) =>
              setCustomer({ ...customer, country: e.target.value })
            }
          />
        </li>
        <li className="flex flex-col gap-2">
          <label
            htmlFor="tva_number"
            className="block text-gray-700 text-sm font-bold mb-1"
          >
            Numéro de TVA
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="tva_number"
            placeholder="Numéro de TVA"
            value={customer.tva_number}
            onChange={(e) =>
              setCustomer({ ...customer, tva_number: e.target.value })
            }
          />
        </li>
      </ul>
    </div>
  );
}
