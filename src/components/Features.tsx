import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  bgClass?: string;
  hoverClass?: string;
  delay?: string;
};

const FeatureCard = ({ icon, title, description, bgClass = "from-purple-600 to-fuchsia-600", hoverClass = "group-hover:shadow-fuchsia-500/20", delay = "0s" }: FeatureCardProps) => {
  return (
    <div 
      className="relative group transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: delay }}
    >
      {/* Card bg with hover effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${bgClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
      
      <div className={`bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800 group-hover:border-fuchsia-500/30 transition-all duration-300 ${hoverClass} h-full`}>
        <div className={`text-fuchsia-500 mb-6 text-3xl bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-purple-600 rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-fuchsia-600 rounded-full filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-fuchsia-500 to-transparent"></div>
            <span className="text-fuchsia-500 font-semibold">KEY FEATURES</span>
            <div className="h-px w-12 bg-gradient-to-l from-fuchsia-500 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Use <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500">SideQuest</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The ultimate festival companion to enhance your music experience with friends
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z" />
              </svg>
            }
            title="Create Your Personal Schedule"
            description="Build a customized schedule with all your must-see artists, set times, and stages."
            bgClass="from-purple-600 to-fuchsia-600"
            hoverClass="group-hover:shadow-fuchsia-500/20"
            delay="0s"
          />
          
          <FeatureCard 
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
              </svg>
            }
            title="Invite Friends & Share"
            description="Instantly transform your personal schedule into a collaborative group schedule with a unique shareable link."
            bgClass="from-fuchsia-600 to-purple-500"
            hoverClass="group-hover:shadow-purple-500/20"
            delay="0.1s"
          />
          
          <FeatureCard 
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M18,13H17.32L15.32,15H17.23L19,17H5L6.78,15H8.83L6.83,13H6L3,16V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V16L18,13M17,7.95L12.05,12.9L8.5,9.36L13.46,4.41L17,7.95M12.76,2.29L6.39,8.66C6,9.05 6,9.68 6.39,10.07L11.34,15C11.73,15.41 12.36,15.41 12.75,15L19.11,8.63C19.5,8.24 19.5,7.61 19.11,7.22L14.15,2.3C13.76,1.9 13.13,1.9 12.76,2.29Z" />
              </svg>
            }
            title="Vote on Artists"
            description="Democratically decide which performances to attend with your group through simple voting."
            bgClass="from-pink-600 to-fuchsia-600"
            hoverClass="group-hover:shadow-pink-500/20"
            delay="0.2s"
          />
          
          <FeatureCard 
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.7,16.04 9.67,17.5 12,17.5Z" />
              </svg>
            }
            title="Personalized Recommendations"
            description="Get artist recommendations based on your music preferences and listening history."
            bgClass="from-green-600 to-cyan-600"
            hoverClass="group-hover:shadow-green-500/20"
            delay="0.3s"
          />
          
          <FeatureCard 
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M10,5H14V7H10V5M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12C7,9.58 8.72,7.56 11,7.1V9.1C9.84,9.5 9,10.64 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12C15,10.64 14.16,9.5 13,9.1V7.1C15.28,7.56 17,9.58 17,12Z" />
              </svg>
            }
            title="Real-time Updates"
            description="Get notified about schedule changes, artist cancellations, and friend activities."
            bgClass="from-cyan-600 to-blue-600"
            hoverClass="group-hover:shadow-cyan-500/20"
            delay="0.4s"
          />
          
          <FeatureCard 
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            }
            title="Find Festival Friends"
            description="Discover friends attending the same festival and easily add them to your group."
            bgClass="from-blue-600 to-purple-600"
            hoverClass="group-hover:shadow-blue-500/20"
            delay="0.5s"
          />
        </div>
      </div>
    </section>
  );
};

export default Features; 