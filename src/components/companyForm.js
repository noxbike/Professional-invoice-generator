export default function CompanyForm() {
    return(
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
    )
}