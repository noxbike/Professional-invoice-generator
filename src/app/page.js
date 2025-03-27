import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-[url(/invoiceimg.png)] bg-right flex flex-col items-start justify-center h-screen w-full">
        <div>
          <div className="flex flex-col gap-8 p-8">
            <div className="flex items-center gap-2">
              <Image src="/invoice.svg" alt="invoice" width={25} height={25} />
              <h1 className="text-2xl font-bold">Générez des factures en quelques clics</h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/square-check.svg" alt="check" width={25} height={25} />
              <h3>Simple, rapide et efficace</h3>
            </div>
            <div>
              <a className="bg-blue-500 text-center text-white px-4 py-2 rounded-md" href="/new_invoice">Créer une facture</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 m-0 p-8 w-full">
        <h2 className="text-2xl text-center font-bold">Pourquoi utiliser notre outil ?</h2>
        <div>
          <ul className="flex flex-col justify-around gap-2 flex-row w-full">
            <li className="flex items-center gap-2">
              <Image src="/square-check.svg" alt="check" width={25} height={25} />
              <p>Facile à utiliser</p>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/square-check.svg" alt="check" width={25} height={25} />
              <p>Export en PDF</p>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/square-check.svg" alt="check" width={25} height={25} />
              <p>Calcul automatique des taxes</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
