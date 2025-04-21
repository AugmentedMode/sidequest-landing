import Image from 'next/image';

const SpotifyIntegration = () => {
  return (
    <section id="spotify" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/sound-wave-pattern.svg')] opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500 rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-fuchsia-500 rounded-full filter blur-[140px] opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-green-500 to-transparent"></div>
            <span className="text-green-500 font-semibold">SPOTIFY INTEGRATION</span>
            <div className="h-px w-12 bg-gradient-to-l from-green-500 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Discover Artists <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">You'll Love</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect your Spotify account and let SideQuest create personalized festival recommendations based on your listening history.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Content */}
          <div className="space-y-8">
            <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-500/30 transition-colors shadow-lg hover:shadow-green-500/10 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-400 w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white ml-4">Tailored Recommendations</h3>
              </div>
              <p className="text-gray-300">
                SideQuest analyzes your Spotify listening history to recommend artists at the festival that match your musical taste.
              </p>
            </div>
            
            <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-500/30 transition-colors shadow-lg hover:shadow-green-500/10 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-400 w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white ml-4">Music Discovery</h3>
              </div>
              <p className="text-gray-300">
                Discover new artists you'll love based on your music preferences and similar artists you already enjoy.
              </p>
            </div>
            
            <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-500/30 transition-colors shadow-lg hover:shadow-green-500/10 group">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-400 w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white ml-4">Match Score</h3>
              </div>
              <p className="text-gray-300">
                Each artist gets a personalized match score showing how well they align with your music preferences.
              </p>
            </div>
          </div>
          
          {/* Right side: Mockup */}
          <div className="relative">
            {/* Spotify integration mockup - This would ideally be an actual mockup image */}
            <div className="relative w-full h-[500px] bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl">
              <div className="absolute top-0 left-0 w-full h-14 bg-black flex items-center px-5">
                <div className="w-8 h-8 mr-3">
                  <svg viewBox="0 0 24 24" fill="#1DB954">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div className="text-white font-bold">Spotify Match</div>
              </div>
              
              <div className="pt-20 p-6">
                <h3 className="text-white text-xl font-bold mb-4">Lineup Recommendations</h3>
                <p className="text-gray-400 text-sm mb-6">Based on your Spotify listening history</p>
                
                <div className="space-y-4">
                  {/* Artist match 1 */}
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">David Guetta</div>
                      <div className="text-gray-400 text-sm">edm • dance</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">97.2%</div>
                      <div className="text-gray-400 text-sm">Match Score</div>
                    </div>
                  </div>
                  
                  {/* Artist match 2 */}
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">Skrillex</div>
                      <div className="text-gray-400 text-sm">dubstep • electronic</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">94.8%</div>
                      <div className="text-gray-400 text-sm">Match Score</div>
                    </div>
                  </div>
                  
                  {/* Artist match 3 */}
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">Daft Punk</div>
                      <div className="text-gray-400 text-sm">electronic • house</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">92.5%</div>
                      <div className="text-gray-400 text-sm">Match Score</div>
                    </div>
                  </div>
                  
                  {/* Connect button */}
                  <button className="mt-6 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full flex items-center justify-center gap-2 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24C13.68 15.84 10.14 15.48 5.939 16.44c-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02z"/>
                      <path d="M18.961 14.04c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2z"/>
                      <path d="M19.081 10.68c-3.84-2.28-10.26-2.52-13.92-1.38-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Connect with Spotify
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-green-500 opacity-30 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-fuchsia-500 opacity-30 animate-float" style={{ animationDelay: '1.3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifyIntegration; 