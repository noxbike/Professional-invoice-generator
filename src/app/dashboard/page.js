"use client";

import invoicesData from "@/data/invoices_data.json";
import ForceCompleteInfo from "../ForceCompleteInfo";
import Link from 'next/link';

function Invoices() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Factures</h1>
          <p className="text-gray-600 mt-1 text-sm">
            Gérez et visualisez toutes vos factures. Recherchez, filtrez et suivez l'état des paiements.
          </p>
        </div>
        <Link
          href="/new_invoice"
          className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-150 text-sm"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Ajouter
        </Link>
      </div>

      {/* Filtres (simplifiés et alignés) */}
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Rechercher par nom"
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <input
            type="date"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <select className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Filtrer par statut</option>
            <option value="paid">Payée</option>
            <option value="pending">En attente</option>
            <option value="unpaid">Non payée</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Facture
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                Statut
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {invoicesData.invoices.map((invoice, index) => (
              <tr
                key={index}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{invoice.invoice_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{invoice.issue_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{invoice.client.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center py-1 px-2 rounded-full text-xs font-semibold ${
                    invoice.status === 'paid' ? 'text-green-500 bg-green-100' :
                    invoice.status === 'pending' ? 'text-yellow-500 bg-yellow-100' :
                    'text-red-500 bg-red-100'
                  }`}>
                    {invoice.status === 'paid' ? 'Payée' : invoice.status === 'pending' ? 'En attente' : 'Non payée'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/invoices/${index}`} className="font-medium text-indigo-600 hover:underline">
                      Voir
                    </Link>
                    <Link href={`/invoices/edit/${index}`} className="font-medium text-green-600 hover:underline">
                      Modifier
                    </Link>
                    <button className="font-medium text-red-600 hover:underline focus:outline-none">
                      Supprimer
                    </button>
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
