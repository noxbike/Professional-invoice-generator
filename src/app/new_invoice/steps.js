export default function steps({step}) {
    return (  
            <ol className="sm:ml-[5rem] flex w-full p-3 space-x-2 text-left justify-center items-center">
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className={`z-10 flex items-center justify-center w-6 h-6 ${step > 0 ? 'bg-blue-600' :  'bg-gray-200'} rounded-full ring-0 ring-white  sm:ring-8  shrink-0`}>
                            <svg className={`w-2.5 h-2.5 ${step > 0 ? 'text-blue-100': 'text-gray-900 '} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 ">Step 1</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className={`z-10 flex items-center justify-center w-6 h-6 ${step > 1 ? 'bg-blue-600' :  'bg-gray-200'} rounded-full ring-0 ring-white  sm:ring-8  shrink-0`}>
                            <svg className={`w-2.5 h-2.5 ${step > 1 ? 'text-blue-100': 'text-gray-900 '} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 ">Step 2</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className={`z-10 flex items-center justify-center w-6 h-6 ${step > 2 ? 'bg-blue-600' :  'bg-gray-200'} rounded-full ring-0 ring-white  sm:ring-8  shrink-0`}>
                            <svg className={`w-2.5 h-2.5 ${step > 2 ? 'text-blue-100': 'text-gray-900 '} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </div>
                        <div className="flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 ">Step 3</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className={`z-10 flex items-center justify-center w-6 h-6 ${step > 3 ? 'bg-blue-600' :  'bg-gray-200'} rounded-full ring-0 ring-white  sm:ring-8  shrink-0`}>
                            <svg className="w-2.5 h-2.5 {`w-2.5 h-2.5 ${step > 3 ? 'text-blue-100': 'text-gray-900 '} `} " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 ">Step 4</h3>
                    </div>
                </li>
            </ol>
    )
}
