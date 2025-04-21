import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="pt-36 pb-20 relative overflow-hidden">
      {/* Animated background with improved gradients */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Large gradient sphere in background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full 
                      bg-gradient-to-b from-purple-900/40 to-fuchsia-700/30 
                      blur-[120px] opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full 
                      bg-gradient-to-tr from-blue-900/20 to-cyan-800/20 
                      blur-[100px] opacity-60"></div>
      </div>
      
      {/* Ambient light effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[80px]"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full filter blur-[80px]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Text content - centered on top */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-fuchsia-600/30 to-purple-600/30 text-fuchsia-400 text-sm font-medium border border-fuchsia-500/20 backdrop-blur-sm">
            Your festival experience, elevated
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
            Plan Your Festival <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400">Together</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            SideQuest makes it easy to create, share, and vote on festival schedules with your friends. Never miss your favorite artists again!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="https://apps.apple.com/app/sidequest" 
              className="transition-transform hover:scale-105"
            >
              <div className="bg-black text-white flex items-center justify-center rounded-lg py-2 px-4 h-[45px] border border-white/50">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs leading-none">Download on the</span>
                  <span className="text-xl font-semibold leading-tight">App Store</span>
                </div>
              </div>
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.sidequest"
              className="transition-transform hover:scale-105"
            >
              <div className="bg-black text-white flex items-center justify-center rounded-lg py-2 px-4 h-[45px] border border-white/50">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs leading-none">GET IT ON</span>
                  <span className="text-xl font-semibold leading-tight">Google Play</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Phone image - large and centered below */}
        <div className="relative max-w-md mx-auto">

            {/* Phone screen content */}
            <div className="pt-8 pb-8 px-4 relative z-10">
              <Image
                src="/assets/schedule2.png"
                alt="Festival Schedule App"
                width={500}
                height={1000}
                className="rounded-3xl"
                priority
              />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-[20%] -right-10 w-32 h-32 bg-cyan-400/10 rounded-full filter blur-[40px] animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] -left-20 w-40 h-40 bg-fuchsia-500/10 rounded-full filter blur-[50px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
    </section>
  );
};

export default Hero; 