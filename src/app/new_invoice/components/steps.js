export default function steps({step}) {
    const tab = [1, 2, 3, 4]
    return (  
            <ol className="sm:ml-[5rem] flex w-full p-3 space-x-2 text-left justify-center items-center">
                {tab.map((stepper) =>(
                    <li key={stepper} className="relative w-full mb-6">
                        <div className="flex items-center">
                            <div className={`z-10 flex items-center justify-center w-6 h-6 ${step > stepper ? 'bg-blue-600' :  'bg-gray-200'} rounded-full ring-0 ring-white  sm:ring-8  shrink-0`}>
                                <svg className={`w-2.5 h-2.5 ${step > stepper ? 'text-blue-100' : 'text-gray-900 '} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                            </div>
                            {stepper < 4 && <div className="flex w-full bg-gray-200 h-0.5 "></div>}
                        </div>
                        <div className="mt-3">
                            <h3 className="font-medium text-gray-900 ">Step {stepper}</h3>
                        </div>
                    </li>
                ))}
            </ol>
    )
}
