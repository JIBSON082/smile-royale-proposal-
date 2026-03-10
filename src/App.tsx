/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  User, 
  Calendar, 
  Image as ImageIcon, 
  MessageCircle, 
  Smartphone, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock,
  Globe,
  Award,
  Download,
  Printer,
  ExternalLink,
  Instagram,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Components ---

const PageWrapper = ({ children, pageNumber }: { children: React.ReactNode, pageNumber: number }) => (
  <div className="proposal-page page-break font-sans">
    <div className="flex-grow">
      {children}
    </div>
    <footer className="mt-8 pt-6 border-t border-slate-100 text-[10px] text-slate-400 flex justify-between items-end">
      <div>
        <p className="font-semibold text-slate-600">© 2026 Smile Royale Dental. All rights reserved</p>
        <div className="flex gap-4 mt-1">
          <span className="flex items-center gap-1"><Phone size={10} /> 08103564479</span>
          <span className="flex items-center gap-1"><Instagram size={10} /> @smileroyale.ng</span>
        </div>
      </div>
      <div className="text-right">
        <p className="font-display font-bold text-dental-blue">Page {pageNumber}</p>
      </div>
    </footer>
  </div>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="font-display text-3xl font-bold text-slate-800 tracking-tight">{children}</h2>
    {subtitle && <p className="text-dental-blue font-medium mt-1">{subtitle}</p>}
    <div className="w-12 h-1 bg-dental-blue mt-4 rounded-full" />
  </div>
);

const Card = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-10 h-10 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
      <Icon className="text-dental-blue" size={20} />
    </div>
    <h3 className="font-display font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </div>
);

// --- Pages ---

const CoverPage = () => (
  <div className="h-full flex flex-col justify-between relative overflow-hidden">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-dental-blue/5 rounded-full -mr-48 -mt-48 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-dental-blue/5 rounded-full -ml-32 -mb-32 blur-2xl" />
    
    <div className="pt-12">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
          <img 
            src="https://image2url.com/r2/default/images/1773149545396-f6cd8545-2fb5-443b-ba50-6497db652c79.jpg" 
            alt="Smile Royale Logo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-slate-800 uppercase">Smile Royale <span className="text-dental-blue">Dental</span></span>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
          Digital Patient <br />
          <span className="text-dental-blue">Booking Platform</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium tracking-wide border-l-4 border-dental-blue pl-6 py-1">
          Your Smile. Our Passion. Our Pride.
        </p>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Prepared For</p>
        <h4 className="font-display font-bold text-slate-800 text-lg">Smile Royale Dental</h4>
        <p className="text-sm text-slate-500">Founded by Dr. Farouk Adebiyi</p>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Prepared By</p>
        <h4 className="font-display font-bold text-slate-800 text-lg">David Ajibua</h4>
        <p className="text-sm text-slate-500">Web Developer</p>
        <div className="flex flex-col gap-1 mt-2 text-xs text-slate-400">
          <span>07068634125</span>
          <span>davidajibua78@gmail.com</span>
        </div>
      </div>
    </div>

    <div className="flex justify-between items-end border-t border-slate-100 pt-8">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Website</p>
        <a href="https://smile-royale-ng.vercel.app/" className="text-dental-blue font-bold text-sm hover:underline">smile-royale-ng.vercel.app</a>
      </div>
      <div className="text-right">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Date</p>
        <p className="font-bold text-slate-800">10th March 2026</p>
      </div>
    </div>
  </div>
);

const ExecutiveSummary = () => (
  <div className="py-8">
    <SectionTitle>Executive Summary</SectionTitle>
    
    <div className="space-y-8">
      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
        <p className="text-lg text-slate-600 leading-relaxed italic">
          "In the modern healthcare landscape, the first point of contact between a patient and a clinic is no longer the front desk—it's the digital screen."
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-dental-blue rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-dental-blue/20">
            <Globe size={24} />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-800 text-xl mb-2">Digital-First Discovery</h4>
            <p className="text-slate-500 leading-relaxed">
              Modern patients prefer discovering and booking healthcare services online. A robust digital presence is essential for capturing this growing demographic of tech-savvy patients who prioritize convenience and transparency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[
            { title: "Attract New Patients", desc: "Reach patients searching for dental care in your area." },
            { title: "Simplify Scheduling", desc: "Reduce friction in the booking process for patients." },
            { title: "Build Credibility", desc: "A professional site reflects the quality of your clinical care." },
            { title: "Showcase Results", desc: "Visual proof of your expertise through smile transformations." }
          ].map((item, i) => (
            <div key={i} className="p-5 border border-slate-100 rounded-2xl bg-white">
              <div className="w-2 h-2 bg-dental-blue rounded-full mb-3" />
              <h5 className="font-bold text-slate-800 mb-1">{item.title}</h5>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 bg-dental-blue rounded-3xl text-white">
        <h4 className="font-display font-bold text-xl mb-2">The Goal</h4>
        <p className="opacity-90 leading-relaxed">
          The system creates a professional digital presence that helps Smile Royale Dental grow its patient base while streamlining internal operations. We aren't just building a website; we're building a growth engine for your clinic.
        </p>
      </div>
    </div>
  </div>
);

const TheSolution = () => (
  <div className="py-8">
    <SectionTitle subtitle="Digital Patient Booking Platform">The Solution</SectionTitle>
    
    <div className="space-y-8">
      <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <ExternalLink size={14} className="text-dental-blue" />
          </div>
          <span className="text-sm font-medium text-slate-600">Live Platform:</span>
          <a href="https://smile-royale-ng.vercel.app/" className="text-sm font-bold text-dental-blue hover:underline">https://smile-royale-ng.vercel.app/</a>
        </div>
      </div>

      <div className="relative">
        {/* Laptop Mockup Placeholder */}
        <div className="w-full aspect-[16/10] bg-slate-800 rounded-t-3xl border-x-8 border-t-8 border-slate-700 relative overflow-hidden shadow-2xl">
          <img 
            src="https://picsum.photos/seed/dental-web/1200/800" 
            alt="Website Mockup" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center max-w-xs">
              <div className="w-12 h-12 bg-dental-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Smartphone size={24} />
              </div>
              <h5 className="font-display font-bold text-slate-800 mb-1">Fully Responsive</h5>
              <p className="text-xs text-slate-500">Optimized for all devices</p>
            </div>
          </div>
        </div>
        <div className="h-4 bg-slate-600 rounded-b-xl mx-auto w-[105%] -ml-[2.5%]" />
        <div className="h-2 bg-slate-500 rounded-b-xl mx-auto w-[20%] mt-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-display font-bold text-slate-800 text-xl">Key Objectives</h4>
          <ul className="space-y-3">
            {[
              "Improve patient engagement through interactive content",
              "Simplify appointment scheduling for both staff and patients",
              "Allow patients to discover the clinic via search engines",
              "Submit appointment requests with zero friction"
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-dental-blue flex-shrink-0" size={18} />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            A fully functional dental website and booking platform has been developed, specifically tailored to the unique needs of Smile Royale Dental. The platform serves as a 24/7 digital receptionist, ensuring no patient inquiry goes unanswered.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const PlatformFeatures = () => (
  <div className="py-8">
    <SectionTitle>Platform Features</SectionTitle>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card 
        icon={Globe} 
        title="Professional Dental Website" 
        description="Clean modern website designed specifically for high-end dental clinics."
      />
      <Card 
        icon={User} 
        title="Dentist Authority Profile" 
        description="Dedicated page introducing Dr. Farouk Adebiyi to build patient trust."
      />
      <Card 
        icon={ImageIcon} 
        title="Before & After Gallery" 
        description="Smile transformation gallery featuring 1 high-res image and 2 videos."
      />
      <Card 
        icon={Calendar} 
        title="Smart Booking Form" 
        description="Patients can easily submit appointment requests in under 60 seconds."
      />
      <Card 
        icon={Mail} 
        title="Automatic Email Notification" 
        description="Instant appointment details sent directly to the dentist's inbox."
      />
      <Card 
        icon={MessageCircle} 
        title="WhatsApp Instant Booking" 
        description="Direct contact via pre-filled WhatsApp messages for immediate response."
      />
      <Card 
        icon={Smartphone} 
        title="Mobile Responsive Design" 
        description="Optimized experience for smartphones, tablets, and desktops."
      />
      <Card 
        icon={Award} 
        title="Modern UI & Branding" 
        description="Clean design language that reflects the clinic's professionalism."
      />
    </div>
  </div>
);

const Benefits = () => (
  <div className="py-8">
    <SectionTitle>Benefits to Smile Royale</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { icon: TrendingUp, title: "Increase Patient Bookings", desc: "Remove barriers to entry with easy online scheduling." },
        { icon: ShieldCheck, title: "Improve Online Credibility", desc: "Professional digital presence builds immediate trust." },
        { icon: Zap, title: "Automate Management", desc: "Booking requests are delivered and tracked automatically." },
        { icon: Clock, title: "Reduce Reception Workload", desc: "Less manual phone scheduling required for the team." },
        { icon: ImageIcon, title: "Showcase Treatment Results", desc: "Patients gain confidence from visible, proven results." },
        { icon: Users, title: "Strengthen Digital Presence", desc: "Positions Smile Royale Dental as a modern, leading clinic." }
      ].map((benefit, i) => (
        <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-white rounded-xl flex-shrink-0 flex items-center justify-center text-dental-blue shadow-sm">
            <benefit.icon size={24} />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-800 mb-1">{benefit.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 p-8 border-2 border-dashed border-slate-200 rounded-3xl text-center">
      <p className="text-slate-500 font-medium italic">
        "Digital transformation is not an expense, it's an investment in the clinic's future scalability."
      </p>
    </div>
  </div>
);

const Investment = () => (
  <div className="py-8">
    <SectionTitle>Investment</SectionTitle>
    
    <div className="space-y-8">
      <div className="bg-slate-900 rounded-3xl p-6 md:p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-dental-blue/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="flex flex-col md:flex-row justify-between items-start relative z-10 gap-6">
          <div>
            <h4 className="font-display font-bold text-2xl mb-2">Website Development</h4>
            <p className="text-slate-400 text-sm">Full digital platform implementation</p>
          </div>
          <div className="text-left md:text-right">
            <div className="text-4xl font-display font-black text-dental-blue">$500</div>
            <div className="text-slate-400 font-medium">₦700,000</div>
            <div className="text-[10px] uppercase tracking-widest mt-2 text-slate-500 font-bold">One-time cost</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 relative z-10">
          {[
            "Full Dental Website",
            "Appointment Booking System",
            "WhatsApp Integration",
            "Before & After Gallery",
            "Mobile Optimization",
            "Professional UI/UX Design"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-dental-blue" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold text-slate-800 text-xl mb-4">Maintenance & Support</h4>
        <div className="p-6 md:p-8 bg-dental-blue/5 border border-dental-blue/20 rounded-3xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-dental-blue text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Included</div>
            <h5 className="font-display font-bold text-slate-800">FREE Maintenance for 1 Full Year</h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
            {[
              "Content Updates",
              "Uploading Images/Videos",
              "Minor Improvements",
              "Booking System Monitoring",
              "Technical Support"
            ].map((item, i) => (
              <div key={i} className="text-sm text-slate-600 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-dental-blue rounded-full" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-400 italic">
            * After the first year, maintenance can be discussed if needed.
          </p>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Developer</p>
            <h4 className="font-display font-bold text-slate-800">David Ajibua</h4>
            <p className="text-xs text-slate-500">Web Developer</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-xs text-slate-500">07068634125</p>
            <p className="text-xs text-slate-500">davidajibua78@gmail.com</p>
            <a href="https://smile-royale-ng.vercel.app/" className="text-xs text-dental-blue font-bold hover:underline">smile-royale-ng.vercel.app</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-4 md:py-12 px-2 md:px-4">
      {/* Proposal Pages */}
      <div className="proposal-container">
        <PageWrapper pageNumber={1}>
          <CoverPage />
        </PageWrapper>
        
        <PageWrapper pageNumber={2}>
          <ExecutiveSummary />
        </PageWrapper>
        
        <PageWrapper pageNumber={3}>
          <TheSolution />
        </PageWrapper>
        
        <PageWrapper pageNumber={4}>
          <PlatformFeatures />
        </PageWrapper>
        
        <PageWrapper pageNumber={5}>
          <Benefits />
        </PageWrapper>
        
        <PageWrapper pageNumber={6}>
          <Investment />
        </PageWrapper>
      </div>
    </div>
  );
}