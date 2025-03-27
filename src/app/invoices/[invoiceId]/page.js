export default async function InvoicePage({ params }) {
  const { invoiceId } = await params;
  return <div>InvoicePage {invoiceId}</div>;
}

