// app/page.js or components/CloudInfrastructure.js

export default function CloudInfrastructure() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Cloud infrastructure{" "}
              <span className="text-orange-500">simplified</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We enable you with the right solution in any cloud platform of your choice 
              from AWS to Azure. Utilize the power of the cloud to deploy your applications 
              while keeping all the resources available and secure.
            </p>
            
            <button className="group inline-flex items-center gap-2 text-orange-500 font-semibold text-lg hover:text-orange-600 transition-colors duration-200">
              Explore DevOps & Cloud
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>
          
          {/* Right Illustration/Graphics */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Cloud infrastructure illustration using CSS */}
              <div className="relative">
                {/* Main server/cloud shape */}
                <div className="w-80 h-80 mx-auto relative">
                  {/* Cloud shape */}
                  <div className="absolute top-0 right-0 w-64 h-40 bg-orange-100 rounded-t-full rounded-bl-full">
                    <div className="absolute -top-8 -left-4 w-32 h-32 bg-orange-50 rounded-full"></div>
                    <div className="absolute -top-12 right-4 w-28 h-28 bg-orange-100 rounded-full"></div>
                  </div>
                  
                  {/* Server racks */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {/* Server 1 */}
                    <div className="w-16 h-32 bg-gray-800 rounded-lg relative overflow-hidden border-2 border-orange-400">
                      <div className="absolute top-2 left-1 right-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-2 left-1 right-1 space-y-1">
                        <div className="h-1 bg-orange-500/30 rounded"></div>
                        <div className="h-1 bg-orange-500/30 rounded w-3/4"></div>
                      </div>
                    </div>
                    
                    {/* Server 2 */}
                    <div className="w-16 h-40 bg-gray-800 rounded-lg relative overflow-hidden border-2 border-orange-400 mt-4">
                      <div className="absolute top-2 left-1 right-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-2 left-1 right-1 space-y-1">
                        <div className="h-1 bg-orange-500/30 rounded"></div>
                        <div className="h-1 bg-orange-500/30 rounded w-3/4"></div>
                        <div className="h-1 bg-orange-500/30 rounded w-1/2"></div>
                      </div>
                    </div>
                    
                    {/* Server 3 */}
                    <div className="w-16 h-36 bg-gray-800 rounded-lg relative overflow-hidden border-2 border-orange-400 mt-2">
                      <div className="absolute top-2 left-1 right-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-2 left-1 right-1 space-y-1">
                        <div className="h-1 bg-orange-500/30 rounded"></div>
                        <div className="h-1 bg-orange-500/30 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                    <line x1="120" y1="100" x2="180" y2="180" stroke="#F97316" strokeWidth="2" strokeDasharray="4" opacity="0.5"/>
                    <line x1="200" y1="120" x2="200" y2="180" stroke="#F97316" strokeWidth="2" strokeDasharray="4" opacity="0.5"/>
                    <line x1="280" y1="100" x2="220" y2="180" stroke="#F97316" strokeWidth="2" strokeDasharray="4" opacity="0.5"/>
                    
                    {/* Orbiting dots */}
                    <circle cx="180" cy="100" r="4" fill="#F97316" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="220" cy="80" r="4" fill="#F97316" opacity="0.6">
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="260" cy="120" r="4" fill="#F97316" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}