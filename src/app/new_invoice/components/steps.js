export default function steps({step}) {
    const tab = [1, 2, 3]
    return (  
        <ol className="flex items-center justify-between w-full p-4 sm:p-6 md:p-8">
        {tab.map((stepper) => (
          <li key={stepper} className="relative flex items-center space-x-4">
            {/* Cercle indicateur */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${
                step > stepper ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            >
              {step > stepper ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                stepper
              )}
            </div>
      
            {/* Ligne de progression */}
            {stepper < tab.length && (
              <div className="flex-grow h-0.5 bg-gray-300" />
            )}
      
            {/* Label de l'étape */}
            <div className="text-sm sm:text-base text-gray-700 font-medium">
              Étape {stepper}
            </div>
          </li>
        ))}
      </ol>
    )
}
