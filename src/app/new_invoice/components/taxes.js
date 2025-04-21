"use client";
import {useCallback} from "react";

export default function Taxes({total, setTva, setRemise, tva, remise}) {
    const handleTvaChange = useCallback((num) => {
        setTva(num);
    }, [setTva]);
    const handleRemiseChange = useCallback((num) => {
        setRemise(num);
    }, [setRemise]);

    const calculateTotal = useCallback(() => {
        const onepercent = total/100
        const tvacost = onepercent * tva
        const remisecost = onepercent * remise
        return(total + tvacost - remisecost);
    }, [tva, remise, total]);
    return (
            <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-8">
  {/* Titre */}
  <div className="mb-4">
    <h1 className="text-2xl font-semibold text-gray-800 text-center">Taxes et Réductions</h1>
  </div>

  {/* Tableau */}
  <div className="overflow-x-auto shadow-md rounded-lg">
    <table className="min-w-full text-left text-sm md:text-base">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="py-3 px-4 font-semibold text-left">TVA (%)</th>
          <th className="py-3 px-4 font-semibold text-left">Remise (%)</th>
          <th className="py-3 px-4 font-semibold text-left">TOTAL</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="py-3 px-4 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="w-20 border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={tva}
                onChange={(e) => handleTvaChange(e.target.value)}
              />
              <span>%</span>
            </div>
          </td>
          <td className="py-3 px-4 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="w-20 border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={remise}
                onChange={(e) => handleRemiseChange(e.target.value)}
              />
              <span>%</span>
            </div>
          </td>
          <td className="py-3 px-4 whitespace-nowrap font-medium text-gray-900">{calculateTotal().toFixed(2)} €</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    )
}
