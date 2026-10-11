import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import StatsBar from '@/sections/StatsBar';
import About from '@/sections/About';
import DoctorSection from '@/sections/DoctorSection';
import DiagnosticsSection from '@/sections/DiagnosticsSection';
import LocationSection from '@/sections/LocationSection';
import Footer from '@/sections/Footer';
import MobileFloatingBar from '@/components/MobileFloatingBar';
import BookAppointmentModal from '@/components/BookAppointmentModal';
import LabReportsModal from '@/components/LabReportsModal';
import FloatingBookTab from '@/components/FloatingBookTab';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFCFF] text-slate-800 selection:bg-brand-cyan selection:text-white pb-16 md:pb-0">
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <DoctorSection />
        <DiagnosticsSection />
        <LocationSection />
      </main>
      <Footer />
      <MobileFloatingBar />
      <FloatingBookTab />
      <BookAppointmentModal />
      <LabReportsModal />
    </div>
  );
}

export default App;
