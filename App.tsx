
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  CheckCircle2,
  Menu,
  X,
  MessageCircle,
  MapPin,
  Star,
  Zap,
  ShieldCheck,
  Layout,
  MousePointer2
} from 'lucide-react';
import { TOOLS, SERVICES, PORTFOLIO, EXPERIENCE, TESTIMONIALS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERTISE', href: '#expertise' },
    { name: 'WORK', href: '#work' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 premium-blur py-4 border-b border-gray-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-xl font-bold tracking-[0.2em] text-brand-charcoal">
          JOSEPHINE<span className="text-brand-deepPink">.</span>
        </a>

        <div className="hidden md:flex gap-12 items-center font-bold text-[10px] tracking-[0.4em] text-brand-grayText">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-charcoal transition-colors">{link.name}</a>
          ))}
          <a href="#contact" className="bg-brand-charcoal text-white px-8 py-3 rounded-full hover:bg-brand-deepPink transition-all shadow-xl text-white">HIRE ME</a>
        </div>

        <button className="md:hidden text-brand-charcoal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-10 text-[14px] font-bold tracking-[0.4em] transition-all duration-500 md:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <button className="absolute top-8 right-6" onClick={() => setIsOpen(false)}><X size={32} /></button>
        {links.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
        ))}
        <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-charcoal text-white px-10 py-4 rounded-full">LET'S TALK</a>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-brand-accentPink text-brand-deepPink text-[9px] font-black tracking-[0.3em] mb-12 uppercase shadow-sm reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-deepPink animate-pulse" />
            Digital Marketing Specialist • Operations & Course Support
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] text-brand-charcoal max-w-5xl mx-auto mb-12 reveal" style={{ animationDelay: '0.2s' }}>
            I help businesses build a <span className="italic text-brand-deepPink">visible, organized</span> digital presence.
          </h1>
          <p className="text-lg md:text-xl text-brand-grayText max-w-2xl mx-auto leading-relaxed mb-16 reveal" style={{ animationDelay: '0.4s' }}>
            Handling content strategy, social media management, SEO, and operations support so you can focus on scaling your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 reveal" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="px-12 py-6 bg-brand-charcoal text-white rounded-full flex items-center justify-center gap-3 font-bold text-xs tracking-[0.2em] hover:bg-brand-deepPink hover:translate-y-[-4px] transition-all shadow-2xl">
              START A PROJECT <ArrowRight size={16} />
            </a>
            <a href="https://josephinedelacruz.my.canva.site/portfolio" target="_blank" className="px-12 py-6 bg-white border border-gray-100 text-brand-charcoal rounded-full font-bold text-xs tracking-[0.2em] hover:bg-brand-softPink transition-all shadow-sm">
              VIEW MY WORK
            </a>
          </div>

          <div className="mt-24 grid grid-cols-3 gap-8 md:gap-24 reveal" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-serif font-bold text-brand-deepPink">3+</span>
              <span className="text-[10px] font-black tracking-widest text-brand-grayText uppercase mt-3">Years Exp.</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-serif font-bold text-brand-deepPink">20+</span>
              <span className="text-[10px] font-black tracking-widest text-brand-grayText uppercase mt-3">Clients Served</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-serif font-bold text-brand-deepPink">100%</span>
              <span className="text-[10px] font-black tracking-widest text-brand-grayText uppercase mt-3">Success Rate</span>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] bg-brand-accentPink/20 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-10 left-[-5%] w-[30%] h-[30%] bg-brand-softPink rounded-full blur-[100px] -z-0"></div>
      </header>

      {/* Optimized Tech Stack */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black tracking-[0.4em] text-gray-300 uppercase mb-16">Preferred Toolset & Systems</p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-16 gap-x-12 items-center">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center group">
                <img src={tool.logo} alt={tool.name} className="h-6 grayscale-logo mb-4" />
                <span className="text-[8px] font-black tracking-widest text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity uppercase">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1 space-y-10">
            <h2 className="text-[10px] font-black tracking-[0.4em] text-brand-deepPink uppercase">About Me</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">My mission is to help you <span className="italic text-brand-deepPink">show up consistently</span>.</h3>
            <p className="text-lg text-brand-grayText leading-relaxed">
              I work with businesses that need help getting organized and visible online. Over three years, I've learned that business owners don't need more tasks—they need a <span className="text-brand-charcoal font-bold italic">strategic partner</span> who handles the backend without constant direction.
            </p>
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              {[
                { icon: <Zap size={20}/>, title: "Efficient", text: "Fast turnarounds without cutting corners." },
                { icon: <ShieldCheck size={20}/>, title: "Reliable", text: "Consistent delivery and accountability." },
                { icon: <Layout size={20}/>, title: "Strategic", text: "Thinking beyond tasks to your bigger goals." },
                { icon: <MousePointer2 size={20}/>, title: "Adaptable", text: "Quick learner across all platforms." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="text-brand-deepPink">{item.icon}</div>
                  <h4 className="font-bold text-sm tracking-widest uppercase">{item.title}</h4>
                  <p className="text-sm text-brand-grayText leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[3/4] bg-white rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Josephine" className="w-full h-full object-cover grayscale transition-all hover:grayscale-0 duration-1000" />
            </div>
            <div className="absolute -inset-4 border-2 border-brand-accentPink rounded-[3.5rem] -z-0 translate-x-8 translate-y-8"></div>
          </div>
        </div>
      </section>

      {/* Expertise / Services */}
      <section id="expertise" className="py-32 px-6 bg-brand-charcoal text-white rounded-[4rem] mx-4 my-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-[10px] font-black tracking-[0.5em] text-brand-accentPink uppercase mb-6">Services</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold italic">What I can do for you.</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-brand-accentPink hover:text-brand-charcoal transition-all duration-700 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-brand-accentPink/10 flex items-center justify-center text-brand-accentPink mb-10 group-hover:bg-brand-charcoal group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-6">{service.title}</h4>
                <p className="text-sm opacity-60 leading-relaxed group-hover:opacity-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-[10px] font-black tracking-[0.4em] text-brand-deepPink uppercase mb-6">The Track Record</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">Past <span className="italic text-brand-deepPink">Experiences</span>.</h3>
          </div>
          
          <div className="space-y-24">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-12 group">
                <div className="md:w-64 flex-shrink-0">
                  <span className="text-[11px] font-black tracking-[0.2em] text-brand-deepPink uppercase">{exp.date}</span>
                </div>
                <div className="flex-1 space-y-6">
                  <h4 className="text-3xl font-serif font-bold">{exp.title}</h4>
                  <p className="text-xs font-black tracking-[0.3em] text-gray-300 uppercase">{exp.company}</p>
                  <ul className="space-y-4">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-brand-grayText flex items-start gap-4 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-accentPink flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Mockups */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[10px] font-black tracking-[0.4em] text-brand-deepPink uppercase mb-6">Curated Works</h2>
          <h3 className="text-4xl font-serif font-bold mb-20 italic">A Collection of Visual Excellence.</h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {PORTFOLIO.map((item, idx) => (
              <div key={idx} className="group text-left">
                <div className="aspect-[4/5] bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl relative mb-8">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <a href={item.link} target="_blank" className="absolute bottom-10 right-10 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="px-4">
                  <p className="text-[10px] font-black tracking-[0.3em] text-brand-deepPink uppercase mb-2">{item.category}</p>
                  <h4 className="text-xl font-serif font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24">
            <a href="https://josephinedelacruz.my.canva.site/portfolio" target="_blank" className="inline-flex items-center gap-3 text-[11px] font-black tracking-[0.4em] border-b-2 border-brand-accentPink pb-2 hover:text-brand-deepPink transition-all uppercase">
              Full Design Portfolio <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-brand-softPink rounded-[4rem] p-16 md:p-24 text-center shadow-inner relative overflow-hidden">
          <Star className="text-brand-accentPink/20 absolute -top-10 -left-10" size={120} />
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl font-serif font-bold italic leading-tight mb-12 text-brand-charcoal">
              "{TESTIMONIALS[0].quote}"
            </p>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold uppercase tracking-[0.2em]">{TESTIMONIALS[0].author}</span>
              <span className="text-[10px] font-black tracking-[0.3em] text-brand-deepPink uppercase mt-3">{TESTIMONIALS[0].role} • {TESTIMONIALS[0].date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">Ready to <br /><span className="italic text-brand-deepPink">Elevate?</span></h2>
              <p className="text-lg text-brand-grayText max-w-md leading-relaxed">
                Whether you need help launching a program, managing systems, or optimizing your SEO—I'm here to help. Send me a message and let's discuss your project.
              </p>
              
              <div className="space-y-10 pt-6">
                <a href="mailto:hellojosephinesocials@gmail.com" className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-brand-accentPink transition-all shadow-sm">
                    <Mail size={24} className="text-brand-charcoal" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-300 font-black tracking-widest uppercase mb-1">Email</p>
                    <p className="text-xl font-bold">hellojosephinesocials@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/639101445742" target="_blank" className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-brand-accentPink transition-all shadow-sm">
                    <MessageCircle size={24} className="text-brand-charcoal" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-300 font-black tracking-widest uppercase mb-1">WhatsApp</p>
                    <p className="text-xl font-bold">+63 910 144 5742</p>
                  </div>
                </a>
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <MapPin size={24} className="text-brand-charcoal" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-300 font-black tracking-widest uppercase mb-1">Location</p>
                    <p className="text-xl font-bold">Metro Manila, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 shadow-2xl space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-widest uppercase text-gray-400">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-brand-softPink rounded-2xl px-6 py-5 outline-none border-none focus:ring-2 focus:ring-brand-accentPink transition-all font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-widest uppercase text-gray-400">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-brand-softPink rounded-2xl px-6 py-5 outline-none border-none focus:ring-2 focus:ring-brand-accentPink transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-widest uppercase text-gray-400">Interested In</label>
                  <select className="w-full bg-brand-softPink rounded-2xl px-6 py-5 outline-none border-none focus:ring-2 focus:ring-brand-accentPink transition-all font-medium appearance-none text-gray-400">
                    <option value="">Select a service...</option>
                    <option value="ops">Operations & Course Support</option>
                    <option value="smm">Social Media Management</option>
                    <option value="seo">SEO & Content Strategy</option>
                    <option value="canva">Canva Brand Design</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-widest uppercase text-gray-400">Message</label>
                  <textarea rows={4} placeholder="Tell me about your business goals..." className="w-full bg-brand-softPink rounded-2xl px-6 py-5 outline-none border-none focus:ring-2 focus:ring-brand-accentPink transition-all font-medium resize-none"></textarea>
                </div>
              </div>
              <button className="w-full py-6 bg-brand-charcoal text-white font-black rounded-2xl hover:bg-brand-deepPink transition-all text-xs tracking-[0.4em] uppercase shadow-2xl">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white border-t border-gray-50 text-center px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="font-serif text-4xl font-bold tracking-[0.2em] text-brand-charcoal">
            JOSEPHINE<span className="text-brand-deepPink">.</span>
          </div>
          <div className="flex justify-center gap-12 text-[10px] font-black tracking-[0.4em] text-gray-300 uppercase">
            <a href="https://linkedin.com/in/josephine-delacruz05" target="_blank" className="hover:text-brand-charcoal transition-colors">LinkedIn</a>
            <a href="https://josephinedelacruz.my.canva.site/portfolio" target="_blank" className="hover:text-brand-charcoal transition-colors">Portfolios</a>
          </div>
          <p className="text-[10px] text-gray-300 tracking-[0.4em] uppercase opacity-50">
            © 2024 JOSEPHINE DELA CRUZ. HIGH-END DIGITAL SUPPORT.
          </p>
        </div>
      </footer>
    </div>
  );
}
