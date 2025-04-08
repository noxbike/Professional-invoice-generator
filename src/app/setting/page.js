export default function Setting () {
    return(
        <div className="text-black">
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-8">Paramètres</h1>
                
                {/* Paramètres généraux */}
                <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Paramètres généraux</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Logo de l&apos;entreprise</label>
                            <div className="flex items-center space-x-4">
                                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400">Logo</span>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                    Télécharger
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">Nom de l&apos;entreprise</label>
                            <input 
                                type="text" 
                                id="company-name" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Votre entreprise"
                            />
                        </div>
                        <div>
                            <label htmlFor="company-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" 
                                id="company-email" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="contact@entreprise.fr"
                            />
                        </div>
                        <div>
                            <label htmlFor="company-phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                            <input 
                                type="tel" 
                                id="company-phone" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="+33 1 23 45 67 89"
                            />
                        </div>
                        <div>
                            <label htmlFor="siret" className="block text-sm font-medium text-gray-700 mb-1">Numéro SIRET</label>
                            <input 
                                type="text" 
                                id="siret" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="123 456 789 00010"
                            />
                        </div>
                        <div>
                            <label htmlFor="company-address" className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                            <textarea 
                                id="company-address" 
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                rows="3"
                                placeholder="123 Rue des Lilas, 75000 Paris, France"
                            ></textarea>
                        </div>
                    </div>
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