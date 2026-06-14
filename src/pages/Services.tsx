import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Truck, TrendingUp, Home as HomeIcon, Cpu, ChevronRight } from 'lucide-react';
import translationData from '../data/translationData.json';

interface ServicesProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
  onPageChange: (page: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
}

export const Services: React.FC<ServicesProps> = ({ currentLang, onLangChange, onPageChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const data = translationData[langKey].home.entitiesSection;
  const entities = translationData[langKey].home.entities;
  const isRtl = currentLang === 'AR';

  const getEntityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="h-6 w-6 text-[#38bdf8]" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-[#38bdf8]" />;
      case 'Home':
        return <HomeIcon className="h-6 w-6 text-[#38bdf8]" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-[#38bdf8]" />;
      default:
        return <Truck className="h-6 w-6 text-[#38bdf8]" />;
    }
  };

  const getSubServices = (entityId: string) => {
    if (currentLang === 'AR') {
      switch (entityId) {
        case 'machinery':
          return ['تأجير رافعات ثقيلة وخفيفة', 'حفارات وجرافات للمقاولات العامة', 'ممهدات ورصاصات الطرق البلدية', 'عقود صيانة دورية للآليات في الموقع'];
        case 'logistics':
          return ['نقل بري ثقيل بين المدن الصناعية', 'خدمات الشحن البحري والجوي الدولي', 'شحن مبرد وحساس لدرجات الحرارة', 'تخزين وإدارة سلاسل الإمداد اللوجستي'];
        case 'development':
          return ['تطوير أبراج تجارية ومكاتب ذكية', 'مجمعات سكنية فاخرة بنظام ذكي', 'إدارة وتأجير العقارات والأصول', 'تصميم وتخطيط البنية التحتية المستدامة'];
        case 'ventures':
          return ['الاستثمار الجريء في شركات التقنية الناشئة', 'حاضنة أعمال للذكاء الاصطناعي والأتمتة', 'تطوير منصات لوجستية ذكية', 'تحويل العمليات الصناعية إلى بيئة رقمية'];
        default:
          return [];
      }
    } else {
      switch (entityId) {
        case 'machinery':
          return ['Heavy crawler crane and loader leasing', 'Excavation & site prep machinery contracts', 'Municipal sweepers and compactors', '24/7 on-site diagnostic & repair teams'];
        case 'logistics':
          return ['Cross-border heavy-haul trucking network', 'Express industrial distribution hubs', 'Temperature-controlled reefer networks', 'End-to-end custom clearance & warehouse support'];
        case 'development':
          return ['LEED-certified grade A commercial towers', 'Smart gated luxury residential complexes', 'Corporate facility & property management', 'Futuristic urban zoning layouts'];
        case 'ventures':
          return ['Strategic early-stage funding for SaaS startups', 'AI & automation supply-chain incubation', 'Proptech asset management platform buildout', 'Enterprise IoT sensor systems integration'];
        default:
          return [];
      }
    }
  };

  return (
    <div className={`min-h-screen bg-[#0b132b] text-zinc-300 flex flex-col justify-between font-sans overflow-x-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} activePage="services" onPageChange={onPageChange} />

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
              {currentLang === 'AR' ? 'خدماتنا الاستراتيجية' : 'Subsidiary & Operational Services'}
            </h1>
            <p className="text-sm md:text-base text-zinc-400 mt-4 leading-relaxed font-semibold">
              {data.subtitle}
            </p>
          </div>

          {/* Detailed Entities Grid */}
          <div className="space-y-12">
            {entities.map((entity: any) => (
              <div 
                key={entity.id} 
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 lg:p-12 hover:border-[#38bdf8]/35 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/[0.01] grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Entity Overview */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl w-fit">
                      {getEntityIcon(entity.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wider block">
                        {entity.category}
                      </span>
                      <h2 className="text-xl md:text-2xl font-black text-white mt-1">
                        {entity.name}
                      </h2>
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-400 font-semibold">
                      {entity.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-850">
                    {entity.metrics.map((metric: any, index: number) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-600">
                          {metric.label}
                        </span>
                        <span className="text-sm font-black text-white mt-0.5 font-sans">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-services / Detailed List */}
                <div className="lg:col-span-7 bg-slate-950/40 border border-slate-850/80 rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-black text-[#38bdf8] uppercase tracking-widest mb-6 border-b border-slate-900 pb-3">
                      {currentLang === 'AR' ? 'مجالات التخصص الدقيق' : 'Core Capabilities'}
                    </h3>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {getSubServices(entity.id).map((sub: string, index: number) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0" />
                          <span className="text-xs text-zinc-400 font-semibold leading-relaxed">
                            {sub}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 flex justify-end">
                    <button 
                      onClick={() => onPageChange('contact')}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-slate-800 hover:border-[#38bdf8] hover:text-[#38bdf8] rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-white cursor-pointer"
                    >
                      <span>{currentLang === 'AR' ? 'طلب عرض خدمة' : 'Inquire for Service'}</span>
                      <ChevronRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onPageChange={onPageChange} />

    </div>
  );
};

export default Services;
