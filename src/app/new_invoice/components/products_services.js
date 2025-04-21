"use client";
import { useCallback } from "react";
import Button from "@/components/ui/button";

export default function ProductsServices({products,setProducts}) {
    
    function handleProductChange(value, index, key ) {
        const newProducts = [...products];
        newProducts[index][key] = value;
        setProducts(newProducts);
    }
    
    const addProduct = useCallback(() => {
        setProducts([...products, {designation: "", quantity: 1, price: 0, total: 0}]);
    }, [products, setProducts]);

    return (
        <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-8">
  {/* Titre */}
  <div className="mb-4">
    <h1 className="text-2xl font-semibold text-gray-800 text-center">Produits / Services</h1>
  </div>

  {/* Tableau */}
  <div className="overflow-x-auto shadow-md rounded-lg">
    <table className="min-w-full text-left text-sm md:text-base">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="py-3 px-4 font-semibold text-left">Désignation</th>
          <th className="py-3 px-4 font-semibold text-left">Quantité</th>
          <th className="py-3 px-4 font-semibold text-left">Prix/U</th>
          <th className="py-3 px-4 font-semibold text-left">Total</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {products.map((product, index) => (
          <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
            <td className="py-3 px-4 whitespace-nowrap">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={product.designation}
                onChange={(e) => handleProductChange(e.target.value, index, 'designation')}
              />
            </td>
            <td className="py-3 px-4 whitespace-nowrap">
              <input
                type="number"
                className="w-24 border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={product.quantity}
                onChange={(e) => handleProductChange(e.target.value, index, 'quantity')}
              />
            </td>
            <td className="py-3 px-4 whitespace-nowrap">
              <input
                type="number"
                className="w-24 border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={product.price}
                onChange={(e) => handleProductChange(e.target.value, index, 'price')}
              />
            </td>
            <td className="py-3 px-4 whitespace-nowrap font-medium text-gray-900">{product.quantity * product.price} €</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Bouton Ajouter */}
  <div className="flex justify-end mt-4">
    <Button
      tailwind="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      text="Ajouter un produit/service"
      onClick={addProduct}
    />
  </div>
</div>
    )
}

