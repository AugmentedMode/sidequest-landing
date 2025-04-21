import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SpotifyIntegration from '../components/SpotifyIntegration';
import HowItWorks from '../components/HowItWorks';
import Download from '../components/Download';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <NavBar />
      <Hero />
      <Features />
      <SpotifyIntegration />
      <HowItWorks />
      <Download />
      <Footer />
    </main>
  );
}
