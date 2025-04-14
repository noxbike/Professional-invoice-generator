import { metadata } from "../layout"


export default function NewInvoiceLayout({children}) {
    metadata.title = "Créer une facture"
    metadata.description = "Créer une facture en quelques clics"

    return (
        <div className="text-black text-center">
            {children}
        </div>
    )
}
