import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <div className="p-16 gap-16 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col align-items-center justify-center lg:flex-row-reverse shadow-lg">
        <div className="relative">
          <Image 
            src="/invoice.png" 
            alt="Exemple de facture" 
            width={550} 
            height={550}
            className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
            <p className="font-bold">Factures professionnelles</p>
            <p className="text-sm">Format standard</p>
          </div>
        </div>

        <div className="flex flex-col gap-12 text-center lg:text-left max-w-xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image src="/invoice.svg" alt="icône facture" width={35} height={35} className="animate-bounce" />
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              Générez vos factures en quelques clics
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-200">
            <Image src="/square-check.svg" alt="check" width={25} height={25} />
            <h3 className="text-xl">Simple, rapide et professionnel</h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              className="inline-block bg-blue-600 hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-white text-lg md:text-xl px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
              href="/new_invoice"
            >
              Créer une facture
            </Link>
            <Link 
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all text-lg md:text-xl px-8 py-4 rounded-lg"
              href="/invoices"
            >
              Voir les exemples
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-8 text-black">
        <div className="flex flex-col mt-8 m-auto gap-12 p-8 md:max-w-[800px] border border-gray-200 rounded-2xl shadow-xl bg-white">
          <h2 className="text-3xl text-center font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Pourquoi choisir notre solution ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <Image src="/square-check.svg" alt="check" width={40} height={40} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2">Interface intuitive</h3>
              <p className="text-gray-600 text-center">Créez vos factures sans effort avec notre interface simple</p>
            </div>

            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <Image src="/square-check.svg" alt="check" width={40} height={40} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2">Export PDF</h3>
              <p className="text-gray-600 text-center">Téléchargez vos factures au format PDF professionnel</p>
            </div>

            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <Image src="/square-check.svg" alt="check" width={40} height={40} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2">Calcul automatique</h3>
              <p className="text-gray-600 text-center">Taxes et remises calculées automatiquement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}