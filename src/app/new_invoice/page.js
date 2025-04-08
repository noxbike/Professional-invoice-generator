"use client";

import { useEffect, useState } from "react";
import Button from "@/components/button";
import InvoiceGen from "@/components/invoicegen";
import ProductsServices from "./products_services";
import Taxes from "./taxes";
import CustomerInfo from "./customerInfo";
import CompanyInfo from "./companyInfo";
import Steps from "./steps";

export default function NewInvoice() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState(1);
  const [tva, setTva] = useState(20);
  const [remise, setRemise] = useState(10);
  const [invoiceNumber, setInvoiceNumber] = useState(`1${new Date().getMonth()}${new Date().getFullYear()}`);
  const [products, setProducts] = useState([
    {designation: "service 1", quantity: 2, price: 50, total: 100},
  ]);
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    zip: "",
    phone: "",
  });

  const updateStep = (step) => {
    if(step > 0 && step < 5) {
      setStep(step);
    }
  }
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <CompanyInfo />
      case 2:
        return <CustomerInfo customer={customer} setCustomer={setCustomer} />
      case 3:
        return <ProductsServices products={products} setProducts={setProducts}/>
      case 4:
        return <Taxes total={total} tva={tva} remise={remise} setTva={setTva} setRemise={setRemise} />
    }
  }
  
  useEffect(() => {
    const total = products.reduce((acc, product) => acc + product.quantity * product.price, 0);
    const onepercent = total/100
    const tvacost = onepercent * tva
    const remisecost = onepercent * remise
    setTotal(total + tvacost - remisecost);
  }, [products, remise, tva]);

  return (
  <div className="flex flex-col m-auto max-w-4xl gap-4 p-2">
    <Steps step={step} />
    <div className="m-auto text-black p-6 flex flex-col align-items-center justify-between w-full min-h-[650px] gap-8 border-1 border-gray-200 rounded-lg shadow-lg">
      <div className="mr-auto flex flex-col gap-4 w-full">
        <InvoiceGen />
        <div>
          <ul className="flex flex-row w-full justify-between items-center">
            <li><p><span>Date: </span><span>{date}</span></p></li>
            <li><span>N°</span><span>{invoiceNumber}</span></li>
          </ul>
        </div>
      </div>
      <div>
        {renderStep()}
      </div>

      <div className="flex flex-row align-items-center justify-end gap-4">
        {step !== 1 && <Button tailwind="bg-blue-500 text-white px-4 py-2 rounded-md" text="Précédent" onClick={() => updateStep(step - 1)} />}
        {step !== 4 && <Button tailwind="bg-blue-500 text-white px-4 py-2 rounded-md" text="Suivant" onClick={() => updateStep(step + 1)} />}
        {step === 4 && <Button tailwind="bg-blue-500 text-white px-4 py-2 rounded-md" text="Générer la facture" onClick={() => generateInvoice()} />}
      </div>
    </div>
  </div>
)}
