import Link from 'next/link';

const Download = () => {
  return (
    <section id="download" className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Download <span className="text-fuchsia-500">SideQuest</span> Today
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Transform your festival experience. Never miss your favorite artists or lose your friends again.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="https://apps.apple.com/app/sidequest" 
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-4 px-8 rounded-full transition-colors flex items-center justify-center"
          >
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-xl font-semibold">App Store</div>
            </div>
          </Link>
          
          <Link
            href="https://play.google.com/store/apps/details?id=com.sidequest"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-4 px-8 rounded-full transition-colors flex items-center justify-center"
          >
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl font-semibold">Google Play</div>
            </div>
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-gray-900 rounded-xl max-w-2xl mx-auto border border-purple-900">
          <h3 className="text-2xl font-bold mb-4 text-white">Upcoming Festivals</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold text-white">EDC Las Vegas 2024</h4>
                  <p className="text-gray-400">May 16 - May 18</p>
                </div>
                <Link
                  href="#"
                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm"
                >
                  Create Schedule
                </Link>
              </div>
            </div>
            
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold text-white">Tomorrowland 2025</h4>
                  <p className="text-gray-400">Jul 17 - Jul 26</p>
                </div>
                <Link
                  href="#"
                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm"
                >
                  Create Schedule
                </Link>
              </div>
            </div>
            
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold text-white">Electric Forest 2025</h4>
                  <p className="text-gray-400">Jun 18 - Jun 21</p>
                </div>
                <Link
                  href="#"
                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm"
                >
                  Create Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download; 