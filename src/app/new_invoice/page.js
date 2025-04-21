'use client';

import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import InvoiceGen from "@/components/ui/invoicegen";
import ProductsServices from "./components/products_services";
import Taxes from "./components/taxes";
import CustomerInfo from "./components/customerInfo";
import Steps from "./components/steps";
import ForceCompleteInfo from "../ForceCompleteInfo";
function NewInvoice() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState(1);
  const [tva, setTva] = useState(20);
  const [remise, setRemise] = useState(10);
  const [invoiceNumber, setInvoiceNumber] = useState(
    `1${new Date().getMonth()}${new Date().getFullYear()}`
  );
  const [products, setProducts] = useState([
    { designation: "service 1", quantity: 2, price: 50, total: 100 },
  ]);
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    zip: "",
    phone: "",
    country:"",
    tva_number:""
  });

  const updateStep = (step) => {
    if (step > 0 && step < 4) {
      setStep(step);
    }
  };

  const renderStep = () => {
    switch (step) {
      
      case 1:
        return <CustomerInfo customer={customer} setCustomer={setCustomer} />;
      case 2:
        return (
          <ProductsServices products={products} setProducts={setProducts} />
        );
      case 3:
        return (
          <Taxes
            total={total}
            tva={tva}
            remise={remise}
            setTva={setTva}
            setRemise={setRemise}
          />
        );
    }
  };

  useEffect(() => {
    const total = products.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
    const onepercent = total / 100;
    const tvacost = onepercent * tva;
    const remisecost = onepercent * remise;
    setTotal(total + tvacost - remisecost);
  }, [products, remise, tva]);

  return (
    <div className="mx-auto max-w-4xl py-8 px-4 sm:px-6 lg:px-8">
    <Steps step={step} />
    <div className="bg-white rounded-lg shadow-xl overflow-hidden mt-6">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center mb-4">
            <InvoiceGen />
            <ul className="flex items-center text-sm text-gray-600 space-x-4">
              <li>
                <span>Date: </span>
                <span className="font-medium">{date}</span>
              </li>
              <li>
                <span>N°: </span>
                <span className="font-medium">{invoiceNumber}</span>
              </li>
            </ul>
          </div>
          <div>{renderStep()}</div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end gap-3">
        {step !== 1 && (
          <Button
            tailwind="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded-md"
            text="Précédent"
            onClick={() => updateStep(step - 1)}
          />
        )}
        {step !== 3 && (
          <Button
            tailwind="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md"
            text="Suivant"
            onClick={() => updateStep(step + 1)}
          />
        )}
        {step === 3 && (
          <Button
            tailwind="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md"
            text="Générer la facture"
            onClick={() => generateInvoice()}
          />
        )}
      </div>
    </div>
  </div>
  );
}
export default ForceCompleteInfo(NewInvoice);