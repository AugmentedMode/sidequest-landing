import Image from 'next/image';

type StepProps = {
  number: number;
  title: string;
  description: string;
  isReversed?: boolean;
};

const Step = ({ number, title, description, isReversed = false }: StepProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 py-12`}>
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-600 text-white font-bold mb-4">
          {number}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
      <div className="flex-1 relative">
        {number === 1 && (
          <div className="relative w-full h-96 md:h-[550px] mx-auto">
            <Image
              src="/assets/app-mockup.svg"
              alt="Create your schedule"
              fill
              className="object-contain"
            />
          </div>
        )}
        {number === 2 && (
          <div className="relative w-full h-96 md:h-[550px] mx-auto">
            <Image
              src="/assets/schedule-mockup.svg"
              alt="Share with friends"
              fill
              className="object-contain"
            />
          </div>
        )}
        {number === 3 && (
          <div className="relative w-full h-96 md:h-[550px] mx-auto mt-4">
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="bg-fuchsia-600 text-white text-center p-8 rounded-xl max-w-md shadow-2xl">
                <h4 className="text-xl font-bold mb-2">Voting Results</h4>
                <p className="mb-4">Bass Nectar: 5 votes</p>
                <p className="mb-4">Tiesto: 2 votes</p>
                <p>Deadmau5: 3 votes</p>
                <div className="mt-6 bg-white text-fuchsia-600 py-3 px-6 rounded-full inline-block font-bold">
                  Go with Bass Nectar
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How <span className="text-fuchsia-500">SideQuest</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plan, share, and vote on your festival experience in three simple steps
          </p>
        </div>
        
        <div className="space-y-6">
          <Step 
            number={1}
            title="Create Your Festival Schedule"
            description="Build your personal schedule by selecting artists, stages, and set times you want to attend. Start with a schedule that's just for you."
          />
          
          <Step 
            number={2}
            title="Invite Your Festival Squad"
            description="With one tap, transform your solo schedule into a group experience. Share via text, email, or social media with a unique link that works even for friends who don't have the app yet."
            isReversed={true}
          />
          
          <Step 
            number={3}
            title="Vote and Decide Together"
            description="When conflicts arise, use the democratic voting system to decide which artists to see. Everyone's voice is heard, and the majority rules!"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 