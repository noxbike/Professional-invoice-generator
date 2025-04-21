'use client';

import invoicesData from '@/data/invoices_data'
import InvoiceGen from '@/components/ui/invoicegen';
import Image from 'next/image';

export default function InvoicePage({ params }) {
  const invoice = invoicesData.invoices[parseInt(params.invoiceId)]

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-2xl rounded-xl p-8 border border-gray-100">

        {/* Header Section */}
        <div className="flex justify-between mb-12">
          <div className="flex gap-8 w-full justify-between">
            <div className="w-24 h-24 flex items-center justify-center">
              {invoice.company.logo ? (
                <Image 
                  src={invoice.company.logo}
                  alt="Company Logo" 
                  width={96}
                  height={96}
                  className="object-contain"
                />
              ) : (
                <InvoiceGen />
              )}
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">Invoice #{invoice.invoice_id}</p>
              <p className="text-gray-600 mt-4">Issue Date: {invoice.issue_date}</p>
              <p className="text-gray-600 mt-2">Due Date: {invoice.due_date}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center space-x-12 mb-12">
          {/* Company Section */}
          <div className="text-left flex-1">
            <h2 className="text-lg font-semibold text-gray-800">{invoice.company.name}</h2>
            <p className="text-gray-600 mt-4">{invoice.company.address}</p>
            <p className="text-gray-600 mt-2">{invoice.company.email}</p>
            <p className="text-gray-600 mt-2">SIRET: {invoice.company.siret}</p>
          </div>

          {/* Client Section */}
          <div className="flex-1 bg-gray-50 rounded-lg p-4">
            <p className="text-gray-800 font-bold">{invoice.client.name}</p>
            <p className="text-gray-600 mt-4">{invoice.client.company}</p>
            <p className="text-gray-600 mt-2">{invoice.client.address}</p>
            <p className="text-gray-600 mt-2">{invoice.client.email}</p>
          </div>
        </div>

        {/* Objet Section */}
        <div className="w-full text-center mb-12">
          <p className="text-gray-600 bg-gray-50 p-6 rounded-lg">{invoice.objet}</p>
        </div>

        {/* Items Table */}
        <div className='min-h-96'>
          <table className="w-full mb-12">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-6 text-gray-700">Description</th>
                <th className="text-right py-6 text-gray-700">Quantity</th>
                <th className="text-right py-6 text-gray-700">Price</th>
                <th className="text-right py-6 text-gray-700">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-6 text-gray-800">{item.description}</td>
                  <td className="text-right py-6 text-gray-600">{item.quantity}</td>
                  <td className="text-right py-6 text-gray-600">{item.unit_price.toFixed(2)} €</td>
                  <td className="text-right py-6 text-gray-800 font-medium">{(item.quantity * item.unit_price).toFixed(2)} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div className="flex justify-end">
          <div className="w-1/3 bg-gray-50 p-8 rounded-lg">
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-800 font-medium">{invoice.subtotal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">Tax (20%):</span>
              <span className="text-gray-800 font-medium">{invoice.tax_total.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <span className="text-lg font-semibold text-gray-800">Total:</span>
              <span className="text-lg font-bold text-gray-800">{invoice.total.toFixed(2)} €</span>
            </div>
          </div>
        </div>
        <h2 className="text-black text-xl font-semibold mb-4 border-b pb-2">Merci de votre confiance</h2>
        <div className='text-gray-400 text-[12px]'>
          <a href='#'>https://www.invoicegen.com</a>
        </div>
      </div>
    </div>
  );
}
