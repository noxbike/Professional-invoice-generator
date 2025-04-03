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
        <div>
            <div className="flex flex-col gap-4 min-h-[300px]">
                <h1 className="text-2xl text-center">Taxes et réductions</h1>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th>TVA</th>
                            <th>Remise</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="number" value={tva} onChange={(e) => handleTvaChange(e.target.value)} /></td>
                            <td><input type="number" value={remise} onChange={(e) => handleRemiseChange(e.target.value)} /></td>
                            <td>{calculateTotal().toFixed(2)} €</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
