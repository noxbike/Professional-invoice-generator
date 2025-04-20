'use client';

import CompanyInfo from "@/app/company_info/page";
import ForceCompleteInfo from "@/app/ForceCompleteInfo";

function Setting () {

    return(
        <div className="text-black">
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-8">Paramètres</h1>
                
                {/* Paramètres généraux */}
                <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Paramètres généraux</h2>
                    <CompanyInfo/>
                </div>

                {/*cordonné bancaire*/}
                <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Cordonnée bancaire</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="company-iban" className="block text-sm font-medium text-gray-700 mb-1">IBAN</label>
                            <input 
                                type="text" 
                                id="company-iban" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="1234-5678-9012-3456"
                            />
                        </div>
                        <div>
                            <label htmlFor="company-bics" className="block text-sm font-medium text-gray-700 mb-1">BICS</label>
                            <input 
                                type="text" 
                                id="company-bics" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="CMCIFR2A"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Paramètres facturation */}
                <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Paramètres facturation</h2>
                    <div className="space-y-4">
                        
                        <div>
                            <label htmlFor="default-tax" className="block text-sm font-medium text-gray-700 mb-1">Taux de TVA par défaut (%)</label>
                            <input 
                                type="number" 
                                id="default-tax" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="20"
                                min="0"
                                max="100"
                            />
                        </div>
                        <div>
                            <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">Devise par défaut</label>
                            <select 
                                id="currency" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="EUR">Euro (€)</option>
                                <option value="USD">Dollar américain ($)</option>
                                <option value="GBP">Livre sterling (£)</option>
                                <option value="CHF">Franc suisse (CHF)</option>
                                <option value="CAD">Dollar canadien (CAD)</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="payment-terms" className="block text-sm font-medium text-gray-700 mb-1">Conditions de paiement par défaut</label>
                            <select 
                                id="payment-terms" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="immediate">Paiement à réception</option>
                                <option value="15days">Paiement à 15 jours</option>
                                <option value="30days">Paiement à 30 jours</option>
                                <option value="60days">Paiement à 60 jours</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="invoice-prefix" className="block text-sm font-medium text-gray-700 mb-1">Préfixe des numéros de facture</label>
                            <input 
                                type="text" 
                                id="invoice-prefix" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="INV-"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Personnalisation */}
                <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Personnalisation</h2>
                    <div className="space-y-4">
                        
                        <div>
                            <label htmlFor="primary-color" className="block text-sm font-medium text-gray-700 mb-1">Couleur principale</label>
                            <div className="flex items-center space-x-2">
                                <input 
                                    type="color" 
                                    id="primary-color" 
                                    className="w-12 h-10 border-0 p-0"
                                    defaultValue="#3B82F6"
                                />
                                <input 
                                    type="text" 
                                    className="w-32 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="#3B82F6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="microentreprise" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                <input 
                                    type="checkbox" 
                                    id="microentreprise" 
                                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                Micro-entreprise (TVA non applicable, article 293B du CGI)
                            </label>
                        </div>
                        <div>
                            <label htmlFor="notes-default" className="block text-sm font-medium text-gray-700 mb-1">Notes par défaut sur les factures</label>
                            <textarea 
                                id="notes-default" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                rows="3"
                                placeholder="Merci pour votre confiance."
                            ></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-end">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Enregistrer les modifications
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ForceCompleteInfo(Setting);