export default function steps({step}) {
    return (
        <div className="w-full m-auto">     
            <ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                <li className={`flex items-center ${step === 1 ? "text-blue-600" : "text-gray-500"}`}>
                    <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${step === 1 ? "border-blue-600" : "border-gray-500"} rounded-full shrink-0`}>
                        1
                    </span>
                    Company
                    <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                    </svg>
                </li>
                <li className={`flex items-center ${step === 2 ? "text-blue-600" : "text-gray-500"}`}>
                    <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${step === 2 ? "border-blue-600" : "border-gray-500"} rounded-full shrink-0`}>
                        2
                    </span>
                    Customer
                    <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                    </svg>
                </li>
                <li className={`flex items-center ${step === 3 ? "text-blue-600" : "text-gray-500"}`}>
                    <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${step === 3 ? "border-blue-600" : "border-gray-500"} rounded-full shrink-0`}>
                        3
                    </span>
                   Services
                   <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                    </svg>
                </li>
                <li className={`flex items-center ${step === 4 ? "text-blue-600" : "text-gray-500"}`}>
                    <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${step === 4 ? "border-blue-600" : "border-gray-500"} rounded-full shrink-0`}>
                       4
                    </span>
                   Taxes
                </li>
            </ol>
        </div>

    )
}
