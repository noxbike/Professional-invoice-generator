"use client";
import { useCallback } from "react";
import Button from "@/components/button";

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
        <div className="flex flex-col gap-4 justify-center align-items-center">
            <div>
                <h1 className="text-2xl text-center">Produits / Services</h1>
            </div>
            <div className="min-h-[300px]">
                <table className="text-left">
                    <thead>
                        <tr>
                            <th>Désignation</th>
                            <th>Quantité</th>
                            <th>Price/U</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td><input type="text" value={product.designation} onChange={(e) => handleProductChange(e.target.value, index, 'designation')}/></td>
                                <td><input  className="max-w-[80px]" type="number" value={product.quantity} onChange={(e) => handleProductChange(e.target.value, index, 'quantity')}/></td>
                                <td><input  className="max-w-[80px]" type="number" value={product.price} onChange={(e) => handleProductChange(e.target.value, index, 'price')}/></td>
                                <td>{product.quantity * product.price} €</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="gap-4 flex justify-end">
                <Button tailwind="bg-blue-500 text-white px-4 py-2 rounded-md" text="Ajouter un produit/service" onClick={addProduct} />
            </div>
        </div>
    )
}

