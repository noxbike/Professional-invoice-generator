import Image from "next/image";
import Link from "next/link";

export default function NewInvoice() {
  return (
  <div className="m-6 text-black p-6 flex flex-col align-items-center justify-center max-w-xl m-auto gap-8 border-1 border-gray-200 rounded-lg shadow-lg">
    <div>
      <Link href="/">
        <p className="flex flex-row text-center font-style-italic font-bold">
          <span className="text-black">INVOICE</span>
          <span className="text-red-500">GEN</span> 
        </p>
      </Link>
    </div>
    <div>
      <ul className="flex flex-row w-full justify-between items-center">
        <li><p><span>Date: </span><span>01/01/2025</span></p></li>
        <li><span>N°</span><span>1012025</span></li>
      </ul>
    </div>
    <div className="flex flex-row w-full justify-between items-center">
      <ul className="flex flex-col">
        <li className="font-bold">INVOICE GEN</li>
        <li>37 rue de la paix</li>
        <li>75000 Paris</li>
        <li>01 23 45 67 89</li>
        <li>contact@entreprise.com</li>
      </ul>
      <ul className="flex flex-col">
        <li className="font-bold">Mr John Doe</li>
        <li>37 rue de la paix</li>
        <li>75000 Paris</li>
        <li>01 23 45 67 89</li>
      </ul>
    </div>
    <div>

      <div className="flex flex-col gap-4 justify-center align-items-center">
      <div>
        <h1 className="text-2xl text-center">Produits / Services</h1>
      </div>
        <table>
          <thead>
            <tr className="text-left">
              <th>Désignation</th>
              <th>Quantité</th>
              <th>Prix unitaire</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>service 1</td>
              <td>2</td>
              <td>50 €</td>
              <td>100 €</td>
            </tr>
          </tbody>
        </table>
        <div className="gap-4 flex justify-end">
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md">Ajouter un produit/service</a>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl text-center">Taxes et réductions</h1>
      <table className="w-full">
        <tbody>
          <tr>
            <td>TVA 20%</td>
            <td>Remise -10%</td>
            <td>TOTAL 117 €</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="flex flex-row align-items-center justify-end gap-4">
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md">Télécharger PDF</a>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md">Envoyer par email</a>
    </div>
  </div>)
}
