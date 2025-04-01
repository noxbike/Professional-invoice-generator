import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex-col items-center justify-center w-full">
      <div className="p-16 gap-16 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col align-items-center justify-center lg:flex-row-reverse shadow-lg">
        <Image src="/invoice.png" alt="invoice" width={550} height={550}/>
        <div className="flex flex-col gap-12 text-center lg:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Image src="/invoice.svg" alt="invoice" width={25} height={25} />
              <h1 className="text-xl font-bold leading-tight">Générez des factures en quelques clics</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Image src="/square-check.svg" alt="check" width={25} height={25} />
              <h3>Simple, rapide et efficace</h3>
            </div>
            <div className="mt-4">
              <a 
                className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors text-white text-lg md:text-xl px-8 py-4 rounded-lg shadow-lg hover:shadow-xl" 
                href="/new_invoice"
              >
                Créer une facture
              </a>
            </div>
          </div>
      </div>
     <div className="p-4 text-black">
        <div className="flex flex-col mt-8 m-auto gap-8 p-6 md:max-w-[600px] border-1 border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-bold">Pourquoi utiliser notre outil ?</h2>
          <div>
            <ul className="flex flex-col justify-center gap-2 max-w-xs m-auto lg:max-w-full lg:flex-row">
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
    </div>
  );
}
