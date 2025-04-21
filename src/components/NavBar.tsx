import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* Glass morphism effect with subtle gradient */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      
      <div className="container mx-auto flex justify-between items-center py-5 px-4 relative z-10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden">
            <Image 
              src="/assets/logo.svg" 
              alt="SideQuest Logo" 
              width={150} 
              height={40} 
              className="relative z-10 transition duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-fuchsia-500 blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity"></div>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-white items-center">
          <Link href="#features" className="hover:text-fuchsia-500 transition-colors relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#spotify" className="hover:text-fuchsia-500 transition-colors relative group">
            Spotify Integration
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#how-it-works" className="hover:text-fuchsia-500 transition-colors relative group">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#download" className="hover:text-fuchsia-500 transition-colors relative group">
            Download
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="https://app.sidequest.com" 
            className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-fuchsia-600 px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/20 font-medium ml-4"
          >
            Get Started
          </Link>
        </div>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar; 