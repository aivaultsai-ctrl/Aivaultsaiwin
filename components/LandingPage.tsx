import React from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  FileText, 
  Zap, 
  BarChart, 
  Calendar, 
  ChevronDown, 
  Search, 
  ShieldCheck, 
  Video, 
  Rocket 
} from 'lucide-react';
import { Button } from './Button';
import { RoiCalculator } from './RoiCalculator';

// TODO: Replace with your actual Calendly booking URL
const CALENDLY_URL = "https://calendly.com";

const LandingPage: React.FC = () => {
  const scrollToBooking = () => {
    const section = document.getElementById('booking');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const painPoints = [
    "Wasting 10+ hours a week on unqualified, low-value phone calls?",
    "Losing high-ticket leads because your team can't respond after 5 PM?",
    "Quoting taking hours when it should take minutes for standard jobs?"
  ];

  return (
    <div className="flex flex-col w-full font-sans">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
          <Button fullWidth variant="primary">
            Book Audit (€497)
          </Button>
        </a>
      </div>

      {/* Navigation / Header */}
      <header className="flex justify-between items-center py-4 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-2xl font-black tracking-tighter text-brand-dark">
          AIVaults<span className="text-brand-red">AI</span>
        </div>
        <div className="hidden md:block">
           <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-brand-red transition-colors">
             Book Audit
           </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 md:px-12 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 bg-red-100 text-brand-red rounded-full text-sm font-bold uppercase tracking-wide mb-6 animate-pulse">
          Urgent: Stop Revenue Leakage
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 leading-tight">
          Stop Bleeding Money. Pinpoint the ONE Administrative Task Costing Your Business <span className="text-brand-red">€1,000s Per Month</span>.
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          The AIVaultsAI Quick-Win Audit: A 60-Minute Deep Dive to Identify and Blueprint Your Most Profitable AI Automation Fix. (Bookable for just €497)
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
            <Button withIcon className="text-xl px-10 py-5 shadow-xl shadow-red-500/20">
              👉 Book My Quick-Win AI Audit Now (€497)
            </Button>
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500 font-medium">
          Limited Slots Available • Guaranteed ROI Calculation
        </p>
      </section>

      {/* Pain Points Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            We speak directly to the Plumber/Roofer pain. <br/>
            <span className="text-brand-red">Are You Tired Of...</span>
          </h2>
          
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 transform transition hover:-translate-y-1">
                <XCircle className="w-8 h-8 text-brand-red flex-shrink-0 mt-1" />
                <p className="text-xl font-semibold text-gray-800">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              You don't need more staff. You need smarter systems. We found that <span className="font-bold text-brand-dark">90% of local service businesses</span> have one major administrative bottleneck that, when fixed, instantly pays for the solution.
            </p>
          </div>
        </div>
      </section>

      {/* AI Estimator (Bonus Section) */}
      <section className="bg-brand-dark py-16 px-6 md:px-12 relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-red rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 text-center mb-8">
           <h2 className="text-3xl font-bold text-white">Prove the Value Before You Pay</h2>
        </div>
        <RoiCalculator />
      </section>

      {/* Deliverables Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-dark">
          What You Get (The Deliverables)
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          This isn't vague consulting. This section justifies the €497 fee by emphasizing tangible deliverables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-blue/30 transition-all bg-white hover:shadow-xl">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-3">1-Hour Workflow Diagnostic Session</h3>
            <p className="text-gray-600 mb-4 font-medium">
              A focused, 60-minute session with Stephan Meester where we map your current Lead-to-Quote process and find the exact point of failure.
            </p>
            <p className="text-sm text-gray-500 italic">
              No time wasted. We immediately locate the biggest time sink (the "Quick-Win").
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-blue/30 transition-all bg-white hover:shadow-xl">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">The 1-Page AI Fix Blueprint</h3>
            <p className="text-gray-600 mb-4 font-medium">
              You receive a detailed, custom 1-page PDF detailing the specific Make.com → Gemini → CRM workflow that will solve your bottleneck.
            </p>
            <p className="text-sm text-gray-500 italic">
              Instant IP. You walk away with the exact, proven plan to fix the problem yourself, if you choose.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-blue/30 transition-all bg-white hover:shadow-xl">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <BarChart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Guaranteed ROI Calculation</h3>
            <p className="text-gray-600 mb-4 font-medium">
              We use your historical data to project the minimum time and money saved (e.g., "This system will save you 15 hours/week") if the automation is built.
            </p>
            <p className="text-sm text-gray-500 italic">
              Zero guesswork. You see the guaranteed return on investment before you pay for the build.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-2xl border-2 border-brand-red/20 transition-all bg-red-50/50 hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              RISK FREE
            </div>
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-2xl font-bold mb-3">€497 Credit Towards Build</h3>
            <p className="text-gray-600 mb-4 font-medium">
              If you decide AIVaultsAI is the right partner and hire us to build the system (The PRO Package), your €497 audit fee is fully credited back to you.
            </p>
            <p className="text-sm text-gray-500 italic">
              Zero Risk. This audit is essentially free if we proceed with the automation build.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-700 -z-10"></div>
            
            {[
              { 
                title: "Book", 
                desc: "Select a time slot below and complete the €497 payment to secure your hour.", 
                icon: Calendar 
              },
              { 
                title: "Audit", 
                desc: "We meet via video link and diagnose the bottleneck using your real workflow data.", 
                icon: Video 
              },
              { 
                title: "Deploy", 
                desc: "Within 48 hours, you receive the 1-Page AI Fix Blueprint and the projected ROI.", 
                icon: Rocket 
              },
              { 
                title: "Decide", 
                desc: "Use the blueprint yourself, or hire AIVaultsAI to build and manage the solution.", 
                icon: ShieldCheck 
              },
            ].map((step, idx) => (
              <div key={idx} className="flex-1 text-center z-10 w-full md:w-auto">
                <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg border-4 border-gray-800">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & CTA */}
      <section id="booking" className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="bg-blue-50 border-l-4 border-brand-blue p-8 text-left rounded-r-lg mb-12 shadow-sm">
          <p className="text-lg md:text-xl text-gray-700 italic mb-4">
            "Before the audit, our team was buried in filtering low-priority calls. Stephan's plan saved us 12 admin hours per week. The audit fee paid for itself instantly."
          </p>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-xs font-bold text-white">MJ</div>
             <div>
               <p className="font-bold text-brand-dark">M. de Jong</p>
               <p className="text-sm text-gray-500">HVAC Services, Utrecht</p>
             </div>
          </div>
        </div>

        <h2 className="text-4xl font-black text-brand-dark mb-4">
          Secure Your Spot.
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          We only take <span className="font-bold text-brand-red">5 Quick-Win Audits per week</span> to ensure maximum focus.
        </p>
        
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-2xl max-w-md mx-auto transform transition hover:scale-[1.01]">
            <h3 className="text-2xl font-bold mb-2">Quick-Win AI Audit</h3>
            <div className="text-4xl font-black text-brand-red mb-6">€497</div>
            <ul className="text-left space-y-3 mb-8 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> 60-Minute Deep Dive</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Custom AI Blueprint PDF</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Guaranteed ROI Report</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Money-Back on Build</li>
            </ul>
            <a 
              href={CALENDLY_URL} 
              target="_blank" 
              rel="noreferrer"
              className="block w-full"
            >
              <Button fullWidth variant="primary" className="text-lg animate-pulse hover:animate-none">
                📅 Click Here to Book
              </Button>
            </a>
            <p className="text-xs text-center text-gray-400 mt-4">
              Secure payment via Stripe. 100% Satisfaction Guarantee.
            </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AIVaultsAI. All rights reserved.</p>
        <p className="mt-2">Automating the un-automatable.</p>
      </footer>
    </div>
  );
};

export default LandingPage;