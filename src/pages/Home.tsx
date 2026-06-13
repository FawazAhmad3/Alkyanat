import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import translationData from '../data/translationData.json';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { EntityCard } from '../components/EntityCard';
import { StatCard } from '../components/StatCard';

interface HomeProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
}

export const Home: React.FC<HomeProps> = ({ currentLang, onLangChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const { hero, entitiesSection, entities, statsSection, stats, pillarsSection, pillars, contactSection } = translationData[langKey].home;

  const isRtl = currentLang === 'AR';

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    entity: 'machinery',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        entity: 'machinery',
        message: ''
      });
    }, 800);
  };

  return (
    <div className={`min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500 selection:text-zinc-950 overflow-x-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[10%] w-[35%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 sm:pb-24 lg:pt-40 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-medium tracking-wide uppercase font-sans">{hero.tagline}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight font-sans">
              {hero.title}{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-600">
                {hero.highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-10 font-light font-sans">
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="#entities"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-sm font-semibold rounded-xl text-zinc-950 bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-300 hover:to-green-500 shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-sans"
              >
                <span>{hero.primaryCta}</span>
                <Icons.ArrowRight className={`ml-2 h-4 w-4 stroke-[2.5] ${isRtl ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-zinc-800 text-sm font-semibold rounded-xl text-white bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 cursor-pointer font-sans"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </section>

      {/* Entities Section */}
      <section id="entities" className="relative py-20 sm:py-28 bg-zinc-950 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-3 font-sans">
              {entitiesSection.tagline}
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 font-sans">
              {entitiesSection.title}
            </p>
            <p className="text-base text-zinc-500 leading-relaxed font-light font-sans">
              {entitiesSection.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {entities.map((entity) => (
              <EntityCard key={entity.id} entity={entity} isRtl={isRtl} />
            ))}
          </div>

        </div>
      </section>

      {/* Achievements / Stats Section */}
      <section id="stats" className="relative py-20 bg-zinc-950/40 border-y border-zinc-900 z-10">
        <div className="absolute inset-0 bg-radial-gradient from-zinc-900/50 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-3 font-sans">
              {statsSection.tagline}
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 font-sans">
              {statsSection.title}
            </p>
            <p className="text-base text-zinc-500 leading-relaxed font-light font-sans">
              {statsSection.subtitle}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} isRtl={isRtl} />
            ))}
          </div>

        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="relative py-20 sm:py-28 bg-zinc-950 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Content */}
            <div className="space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 font-sans">
                {pillarsSection.tagline}
              </h2>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
                {pillarsSection.title}
              </p>
              <p className="text-base text-zinc-400 leading-relaxed font-light font-sans">
                {pillarsSection.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors font-sans"
                >
                  <span>{pillarsSection.cta}</span>
                  <Icons.ArrowRight className={`ml-2 h-4 w-4 ${isRtl ? 'rotate-180 mr-2 ml-0' : ''}`} />
                </a>
              </div>
            </div>

            {/* Right Pillars list */}
            <div className="lg:col-span-2 space-y-6">
              {pillars.map((val, idx) => {
                const ValIcon = (Icons as any)[val.iconName] || Icons.CheckCircle;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row items-start sm:items-center p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-colors duration-300 ${
                      isRtl ? 'sm:flex-row-reverse space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-6' : 'space-y-4 sm:space-y-0 sm:space-x-6'
                    }`}
                  >
                    <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-emerald-500 shrink-0">
                      <ValIcon className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 tracking-wide font-sans">
                        {val.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed font-light font-sans">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Contact & Enquiry Section */}
      <section id="contact" className="relative py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Info Grid */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-3 font-sans">
                  {contactSection.tagline}
                </h2>
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6 font-sans">
                  {contactSection.title}
                </p>
                <p className="text-base text-zinc-400 leading-relaxed font-light font-sans">
                  {contactSection.subtitle}
                </p>
              </div>

              {/* Operations Card details */}
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 space-y-5">
                <div className={`flex items-center space-x-3 text-zinc-400 ${isRtl ? 'space-x-reverse' : ''}`}>
                  <Icons.Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-sans uppercase">{contactSection.phoneLabel}</span>
                    <span className="text-sm font-medium font-sans">{translationData[langKey].navigation.contactInfo.phone}</span>
                  </div>
                </div>
                <div className={`flex items-center space-x-3 text-zinc-400 ${isRtl ? 'space-x-reverse' : ''}`}>
                  <Icons.Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-sans uppercase">{contactSection.emailLabel}</span>
                    <span className="text-sm font-medium font-sans">{translationData[langKey].navigation.contactInfo.email}</span>
                  </div>
                </div>
                <div className={`flex items-start space-x-3 text-zinc-400 ${isRtl ? 'space-x-reverse' : ''}`}>
                  <Icons.MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-sans uppercase">{contactSection.addressLabel}</span>
                    <span className="text-sm font-medium leading-relaxed font-sans">{translationData[langKey].navigation.contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form desk */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm shadow-2xl relative">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="inline-flex p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full mb-2">
                      <Icons.CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-sans">{contactSection.successTitle}</h3>
                    <p className="text-zinc-400 text-sm max-w-sm mx-auto font-light leading-relaxed font-sans">
                      {contactSection.successDesc}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-flex text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 focus:outline-none cursor-pointer font-sans"
                    >
                      {contactSection.successReset}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans">
                          {contactSection.nameInputLabel}
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-sans"
                          placeholder={contactSection.formPlaceholders.name}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans">
                          {contactSection.emailInputLabel}
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-sans"
                          placeholder={contactSection.formPlaceholders.email}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans">
                          {contactSection.companyInputLabel}
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-sans"
                          placeholder={contactSection.formPlaceholders.company}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans">
                          {contactSection.phoneInputLabel}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-sans"
                          placeholder={contactSection.formPlaceholders.phone}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="entity" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans">
                        {contactSection.entitySelectLabel}
                      </label>
                      <div className="relative">
                        <select
                          name="entity"
                          id="entity"
                          value={formData.entity}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm appearance-none cursor-pointer font-sans"
                        >
                          {contactSection.selectOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <div className={`pointer-events-none absolute inset-y-0 flex items-center px-4 text-zinc-500 ${isRtl ? 'left-0' : 'right-0'}`}>
                          <Icons.ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans">
                        {contactSection.messageInputLabel}
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm resize-none font-sans"
                        placeholder={contactSection.formPlaceholders.message}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-sm font-semibold rounded-xl text-zinc-950 bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-300 hover:to-green-500 hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-300 cursor-pointer font-sans"
                    >
                      <span>{contactSection.submitBtn}</span>
                      <Icons.Send className={`ml-2 h-4 w-4 ${isRtl ? 'mr-2 ml-0 rotate-180' : ''}`} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
};
export default Home;
