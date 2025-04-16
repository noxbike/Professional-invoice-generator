import Link from "next/link";

export default function InvoiceGen() {
  return (
    <Link href="/">
        <p className="flex flex-row text-center font-style-italic font-bold">
            <span className="text-black dark:text-white">INVOICE</span> <span className="text-red-500">GEN</span> 
        </p>
    </Link>
  )
}
