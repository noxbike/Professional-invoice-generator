"use client";

import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function CompanyForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const [logo, setLogo] = useState("/url de l'image");
  const [company_name, setCompanyName] = useState("");
  const [address_complete, setAddressComplete] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("FRANCE");
  const [siret_number, setSiretNumber] = useState("");
  const [tva_number, setTvaNumber] = useState("");
  const [mention_rcs, setMentionRcs] = useState("");

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    try{
      const response = await fetch("/company_info/api/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          logo,
          company_name,
          phone,
          address_complete,
          postal_code,
          city,
          country,
          tva_number,
          mention_rcs,
          siret_number,
          user_id: session.user.id,
        })
      })
      const data = await response.json();
      if(data.ok){
        router.push("/invoices");
      } else {
        console.log('failed')
      }
     
      
    } catch(error) {
      console.log(error);
    };
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Informations de l&apos;Entreprise
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="nom_ou_raison_sociale"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nom ou Raison Sociale
            </label>
            <input
              type="text"
              id="nom_ou_raison_sociale"
              name="nom_ou_raison_sociale"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="adresse_complete"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Adresse Complète
            </label>
            <input
              type="text"
              id="adresse_complete"
              name="adresse_complete"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setAddressComplete(e.target.value)}
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="code_postal"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Code Postal
              </label>
              <input
                type="text"
                id="code_postal"
                name="code_postal"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="ville"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Ville
              </label>
              <input
                type="text"
                id="ville"
                name="ville"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="pays"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Pays
            </label>
            <select
              id="pays"
              name="pays"
              defaultValue={country}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="FRANCE" selected>
                FRANCE
              </option>
              <option value="ALLEMAGNE">ALLEMAGNE</option>
              <option value="BELGIQUE">BELGIQUE</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="numero_tva"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Numéro de TVA (FRXXNNNNNNNNN)
            </label>
            <input
              type="text"
              id="numero_tva"
              name="numero_tva"
              pattern="FR[A-Z]{2}[0-9]{11}"
              placeholder="FRXXNNNNNNNNN"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setTvaNumber(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="numero_siret"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Numéro de SIRET (NNNNNNNNNNNNNNN)
            </label>
            <input
              type="text"
              id="numero_siret"
              name="numero_siret"
              pattern="[0-9]{14}"
              placeholder="NNNNNNNNNNNNNNN"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSiretNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="mention_rcs"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Mention RCS (facultatif, ex: RCS Paris XXXXXXXX)
            </label>
            <input
              type="text"
              id="mention_rcs"
              name="mention_rcs"
              placeholder="RCS Paris XXXXXXXX"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setMentionRcs(e.target.value)}
            />
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Informations de Contact
            </h3>
            <div>
              <label
                htmlFor="telephone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Téléphone (facultatif)
              </label>
              <input
                type="tel"
                id="telephone"
                name="informations_contact[telephone]"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
