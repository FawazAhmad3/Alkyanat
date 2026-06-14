import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MapPin, Phone, Mail, CheckCircle, ChevronRight, Clock } from 'lucide-react';
import translationData from '../data/translationData.json';

interface ContactProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
  onPageChange: (page: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
}

export const Contact: React.FC<ContactProps> = ({ currentLang, onLangChange, onPageChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const data = translationData[langKey].home.contactSection;
  const navData = translationData[langKey].navigation;
  const isRtl = currentLang === 'AR';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    entity: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      entity: 'general',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className={`min-h-screen bg-[#0b132b] text-zinc-300 flex flex-col justify-between font-sans overflow-x-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} activePage="contact" onPageChange={onPageChange} />

      {/* Main Content */}
      <main className="flex-grow pt-36 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Page Title Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8]">
              {data.tagline}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mt-2 leading-tight">
              {data.title}
            </h1>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-medium">
              {data.subtitle}
            </p>
          </div>

          {/* Form and Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Details Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Headquarters Address */}
              <div className="flex gap-4 p-5 bg-slate-900/30 border border-slate-800 rounded-3xl">
                <div className="p-3 bg-slate-950 text-[#38bdf8] border border-slate-800 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-600 block">
                    {data.addressLabel}
                  </span>
                  <span className="text-xs text-zinc-300 font-bold mt-1.5 block leading-relaxed">
                    {navData.contactInfo.address}
                  </span>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex gap-4 p-5 bg-slate-900/30 border border-slate-800 rounded-3xl">
                <div className="p-3 bg-slate-950 text-[#38bdf8] border border-slate-800 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-600 block">
                    {data.phoneLabel}
                  </span>
                  <a
                    href={`tel:${navData.contactInfo.phone}`}
                    className="text-xs text-zinc-300 font-extrabold hover:text-[#38bdf8] mt-1.5 block transition-colors"
                  >
                    {navData.contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex gap-4 p-5 bg-slate-900/30 border border-slate-800 rounded-3xl">
                <div className="p-3 bg-slate-950 text-[#38bdf8] border border-slate-800 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-650 block">
                    {data.emailLabel}
                  </span>
                  <a
                    href={`mailto:${navData.contactInfo.email}`}
                    className="text-xs text-zinc-300 font-extrabold hover:text-[#38bdf8] mt-1.5 block transition-colors"
                  >
                    {navData.contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex gap-4 p-5 bg-slate-900/30 border border-slate-800 rounded-3xl">
                <div className="p-3 bg-slate-950 text-[#38bdf8] border border-slate-800 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-650 block">
                    {isRtl ? 'ساعات العمل الرسمية' : 'Operating Hours'}
                  </span>
                  <span className="text-xs text-zinc-300 font-bold mt-1.5 block leading-normal">
                    {navData.contactInfo.hours}
                  </span>
                </div>
              </div>

            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-fade-in">
                  <CheckCircle className="h-14 w-14 text-emerald-500" />
                  <h3 className="text-xl font-extrabold text-white">
                    {data.successTitle}
                  </h3>
                  <p className="text-xs text-zinc-450 max-w-sm leading-relaxed font-semibold">
                    {data.successDesc}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 mt-4 bg-slate-900 border border-slate-850 hover:border-[#38bdf8] text-white hover:text-[#38bdf8] font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                  >
                    {data.successReset}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-black text-zinc-450">
                        {data.nameInputLabel}
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={data.formPlaceholders.name}
                        className="px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:border-[#38bdf8] focus:outline-none text-xs font-semibold text-white placeholder-zinc-700"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-black text-zinc-450">
                        {data.emailInputLabel}
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={data.formPlaceholders.email}
                        className="px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:border-[#38bdf8] focus:outline-none text-xs font-semibold text-white placeholder-zinc-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-black text-zinc-450">
                        {data.companyInputLabel}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={data.formPlaceholders.company}
                        className="px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:border-[#38bdf8] focus:outline-none text-xs font-semibold text-white placeholder-zinc-700"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-black text-zinc-455">
                        {data.phoneInputLabel}
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={data.formPlaceholders.phone}
                        className="px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:border-[#38bdf8] focus:outline-none text-xs font-semibold text-white placeholder-zinc-700"
                      />
                    </div>
                  </div>

                  {/* Entity Select dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-black text-zinc-450">
                      {data.entitySelectLabel}
                    </label>
                    <select
                      name="entity"
                      value={formData.entity}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:border-[#38bdf8] focus:outline-none text-xs font-semibold text-white cursor-pointer"
                    >
                      {data.selectOptions.map((opt: any) => (
                        <option key={opt.id} value={opt.id} className="bg-slate-950">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-black text-zinc-450">
                      {data.messageInputLabel}
                    </label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={data.formPlaceholders.message}
                      className="px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl focus:border-[#38bdf8] focus:outline-none text-xs font-semibold text-white placeholder-zinc-700 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#38bdf8] hover:bg-[#0ea5e9] text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{data.submitBtn}</span>
                    <ChevronRight className={`h-4.5 w-4.5 stroke-[3] ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onPageChange={onPageChange} />

    </div>
  );
};

export default Contact;
