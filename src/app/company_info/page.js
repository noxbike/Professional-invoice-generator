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
  const [country, setCountry] = useState("");
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
    <div class="bg-gray-100 py-10">
      <div class="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">
          Informations de l&apos;Entreprise
        </h2>
        <form onSubmit={handleFormSubmit} class="space-y-4" noValidate>
          <div>
            <label
              for="nom_ou_raison_sociale"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Nom ou Raison Sociale
            </label>
            <input
              type="text"
              id="nom_ou_raison_sociale"
              name="nom_ou_raison_sociale"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div>
            <label
              for="adresse_complete"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Adresse Complète
            </label>
            <input
              type="text"
              id="adresse_complete"
              name="adresse_complete"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setAddressComplete(e.target.value)}
            />
          </div>

          <div class="flex space-x-4">
            <div class="w-1/2">
              <label
                for="code_postal"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Code Postal
              </label>
              <input
                type="text"
                id="code_postal"
                name="code_postal"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div class="w-1/2">
              <label
                for="ville"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Ville
              </label>
              <input
                type="text"
                id="ville"
                name="ville"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              for="pays"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Pays
            </label>
            <select
              id="pays"
              name="pays"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              for="numero_tva"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Numéro de TVA (FRXXNNNNNNNNN)
            </label>
            <input
              type="text"
              id="numero_tva"
              name="numero_tva"
              pattern="FR[A-Z]{2}[0-9]{11}"
              placeholder="FRXXNNNNNNNNN"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setTvaNumber(e.target.value)}
            />
          </div>

          <div>
            <label
              for="numero_siret"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Numéro de SIRET (NNNNNNNNNNNNNNN)
            </label>
            <input
              type="text"
              id="numero_siret"
              name="numero_siret"
              pattern="[0-9]{14}"
              placeholder="NNNNNNNNNNNNNNN"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSiretNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              for="mention_rcs"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Mention RCS (facultatif, ex: RCS Paris XXXXXXXX)
            </label>
            <input
              type="text"
              id="mention_rcs"
              name="mention_rcs"
              placeholder="RCS Paris XXXXXXXX"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setMentionRcs(e.target.value)}
            />
          </div>

          <div class="border-t border-gray-200 pt-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">
              Informations de Contact
            </h3>
            <div>
              <label
                for="telephone"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Téléphone (facultatif)
              </label>
              <input
                type="tel"
                id="telephone"
                name="informations_contact[telephone]"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div class="flex items-center justify-end">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
