import { createFileRoute } from "@tanstack/react-router";
import clinicImg from "@/assets/clinic.jpg";
import doctorImg from "@/assets/doctor.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { n: "01", title: "EEG Testing", desc: "Diagnostic electroencephalography to evaluate brain electrical activity for seizure disorders." },
  { n: "02", title: "EMG & NCS", desc: "Comprehensive nerve conduction studies and electromyography for muscle and nerve health." },
  { n: "03", title: "Evaluation And Management Of Headache", desc: "FDA-approved therapeutic injections for patients suffering from chronic migraine episodes." },
  { n: "04", title: "Sleep Evaluation", desc: "Specialized assessment for sleep-related disorders including apnea and narcolepsy." },
  { n: "06", title: "Cognitive Testing", desc: "Detailed neurocognitive screening for memory loss and cognitive decline assessment." },
];

const conditionGroups: { title: string; items: string[] }[] = [
  { title: "Neuromuscular", items: ["Peripheral Neuropathy", "Myasthenia Gravis", "ALS / Motor Neuron Disease", "Muscle Dystrophy"] },
  { title: "Movement & Memory", items: ["Parkinson's Disease", "Alzheimer's & Dementia", "Essential Tremor", "Huntington's Chorea"] },
  { title: "Vascular & Seizure", items: ["Stroke & TIA Follow-up", "Epilepsy & Seizures", "TBI / Concussion Recovery"] },
  { title: "Neuro-Immunology", items: ["Multiple Sclerosis (MS)", "Optic Neuritis", "Autoimmune Encephalitis"] },
];

const faqs = [
  { q: "Do I need a referral to see Dr. Govindarajan?", a: "Most insurance plans require a referral from your primary care physician. Please check with your provider before scheduling." },
  { q: "How long does an initial consultation take?", a: "Typically, an initial visit lasts 45–60 minutes, allowing for a thorough history taking and physical examination." },
  { q: "When will I receive my test results?", a: "Results for EEG and EMG studies are usually available within 3–5 business days and will be discussed during a follow-up visit." },
];

function Index() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] font-[var(--font-body)] text-[var(--color-brand-fg)] selection:bg-[var(--color-brand-primary)]/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--color-brand-bg)]/80 backdrop-blur-md border-b border-[var(--color-brand-border)]/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex flex-col">
            <span className="font-[var(--font-display)] font-bold text-xl tracking-tight leading-none uppercase">Dr. Sarala Govindarajan</span>
            <span className="font-[var(--font-mono)] text-[10px] tracking-widest text-[var(--color-brand-primary)] uppercase mt-1">Neurology Specialist</span>
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm font-medium hover:text-[var(--color-brand-primary)] transition-colors">Services</a>
            <a href="#conditions" className="text-sm font-medium hover:text-[var(--color-brand-primary)] transition-colors">Conditions</a>
            <a href="#profile" className="text-sm font-medium hover:text-[var(--color-brand-primary)] transition-colors">About</a>
            <a href="#appointments" className="px-5 py-2.5 bg-[var(--color-brand-fg)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-brand-primary)] transition-all">Request Appointment</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-reveal">
            <h1 className="font-[var(--font-display)] text-5xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05] mb-8">
              Specialized Care for the <span className="text-[var(--color-brand-primary)]">Complexities</span> of the Brain.
            </h1>
            <p className="text-lg text-[var(--color-brand-muted)] max-w-lg mb-10 text-pretty">
              Dr. Sarala Govindarajan provides evidence-based neurological consultation and diagnostic testing for patients across the region.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col p-4 border border-[var(--color-brand-border)] rounded-xl bg-white">
                <span className="font-[var(--font-mono)] text-[10px] uppercase text-[var(--color-brand-muted)] mb-1">Location</span>
                <span className="font-medium">2/1 Hunters Lane, Choolai, Chennai - 600112</span>
              </div>
              <div className="flex flex-col p-4 border border-[var(--color-brand-border)] rounded-xl bg-white">
                <span className="font-[var(--font-mono)] text-[10px] uppercase text-[var(--color-brand-muted)] mb-1">Phone</span>
                <span className="font-medium">+91 94441 07480</span>
              </div>
            </div>
          </div>
          <div className="animate-reveal [animation-delay:200ms] relative">
            <img
              src={clinicImg}
              alt="Modern neurology clinic interior"
              width={1200}
              height={1408}
              className="w-full aspect-[4/5] object-cover bg-slate-100 rounded-3xl outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-[var(--color-brand-primary)] text-white p-8 rounded-2xl hidden md:block max-w-[240px] shadow-2xl">
              <p className="text-sm leading-relaxed font-medium">"Treating every patient with the precision of science and the warmth of human connection."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-[var(--color-brand-surface)] border-y border-[var(--color-brand-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-brand-primary)]">01 / Diagnostics</span>
              <h2 className="font-[var(--font-display)] text-4xl font-bold mt-4">Neurological Services</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((s) => (
              <div key={s.n} className="p-10 bg-white border border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/50 transition-colors">
                <span className="font-[var(--font-mono)] text-[12px] text-[var(--color-brand-primary)] mb-6 block">{s.n}</span>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-brand-primary)]">02 / Expertise</span>
              <h2 className="font-[var(--font-display)] text-4xl font-bold mt-4 mb-6">Conditions We Treat</h2>
              <p className="text-[var(--color-brand-muted)] leading-relaxed">We specialize in a broad spectrum of neurological disorders, providing tailored treatment plans based on modern clinical standards.</p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-12">
              {conditionGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="font-[var(--font-mono)] text-[11px] uppercase tracking-tighter text-[var(--color-brand-primary)] border-b border-[var(--color-brand-border)] pb-2 mb-6">{g.title}</h3>
                  <ul className="space-y-4">
                    {g.items.map((it) => (
                      <li key={it} className="font-medium">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="py-24 bg-[var(--color-brand-fg)] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <img
              src={doctorImg}
              alt="Dr. Sarala Govindarajan"
              loading="lazy"
              width={1024}
              height={1216}
              className="w-full aspect-[3/4] object-cover bg-white/10 rounded-2xl outline outline-1 outline-white/10"
            />
            <div>
              <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-brand-primary)]">03 / The Provider</span>
              <h2 className="font-[var(--font-display)] text-4xl font-bold mt-4 mb-8">Meet Dr. Sarala Govindarajan</h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>Dr. Govindarajan is a Board-Certified Neurologist with over 26 years of experience in diagnosing and treating complex neurological disorders. She completed her residency at Madras Medical College and served as professor of neurology in MMC and RGGGH Chennai and has dedicated her career to solo practice, allowing for a more personalized patient experience.</p>
                <p>She believes that the best medical outcomes are achieved when patients are heard and understood. Her practice combines state-of-the-art diagnostic technology with a compassionate, patient-first approach.</p>
                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
                  <div>
                    <span className="block text-xs uppercase text-white/40 mb-2">Education</span>
                    <p className="text-sm">MD, Johns Hopkins University<br />Residency, Cleveland Clinic</p>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-white/40 mb-2">Certifications</span>
                    <p className="text-sm">ABPN Board Certified<br />Clinical Neurophysiology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[var(--font-display)] text-4xl font-bold text-center mb-16">Frequent Questions</h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-bold text-lg mb-2">{f.q}</h3>
                <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-brand-surface)] pt-24 pb-12 border-t border-[var(--color-brand-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 mb-20">
            <div>
              <div className="flex flex-col mb-8">
                <span className="font-[var(--font-display)] font-bold text-xl tracking-tight leading-none uppercase">Dr. Sarala Govindarajan</span>
                <span className="font-[var(--font-mono)] text-[10px] tracking-widest text-[var(--color-brand-primary)] uppercase mt-1">Neurology Practice</span>
              </div>
              <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed">
                Providing specialized neurological care in Chennai and the surrounding communities.
              </p>
            </div>
            <div>
              <h3 className="font-[var(--font-mono)] text-[11px] uppercase text-[var(--color-brand-primary)] mb-6">Contact Details</h3>
              <div className="text-sm space-y-2">
                <p>2/1 Hunters Lane</p>
                <p>Choolai, Chennai - 600112</p>
                <p className="pt-4 font-bold text-[var(--color-brand-fg)]">+91 94441 07480</p>
              </div>
            </div>
            <div>
              <h3 className="font-[var(--font-mono)] text-[11px] uppercase text-[var(--color-brand-primary)] mb-6">Office Hours</h3>
              <div className="text-sm grid grid-cols-2 gap-y-2">
                <span className="text-[var(--color-brand-muted)]">Mon – Thu</span><span className="text-right">8:00 AM – 5:00 PM</span>
                <span className="text-[var(--color-brand-muted)]">Friday</span><span className="text-right">8:00 AM – 12:00 PM</span>
                <span className="text-[var(--color-brand-muted)]">Sat – Sun</span><span className="text-right">Closed</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[var(--color-brand-border)] gap-6">
            <p className="text-[11px] text-[var(--color-brand-muted)] uppercase tracking-widest font-[var(--font-mono)]">&copy; 2024 Sarala Govindarajan MD, PA. All rights reserved.</p>
            <div className="flex gap-8 text-[11px] font-[var(--font-mono)] text-[var(--color-brand-muted)] uppercase tracking-widest">
              <a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Patient Portal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
