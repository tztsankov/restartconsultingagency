import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SEO } from '@/components/SEO';
import { Users, Info, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <>
      <SEO 
        title="За Рестарт | Екип за правна яснота, завръщане и ново начало" 
        description="Научи повече за екипа на Рестарт: юристи, икономисти и експерти, които помагат на хора с дългове, ЧСИ страх и нужда от нов план." 
      />
      
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 text-balance">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8">
            Ние не гледаме на теб като на длъжник.
            <br className="hidden md:block"/>
            <span className="text-teal-400">
            Гледаме на теб като на човек, който има нужда от ясен път напред.</span>
          </h1>
          <p className="text-xl text-slate-300">
            Обединяваме експертиза от различни сфери, за да решим проблема из основи, а не просто да запълним една дупка.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Защо съществува "Рестарт"?</h2>
            <div className="prose prose-lg text-slate-600 prose-teal">
              <p>
                Много българи в чужбина или у дома са блокирани в живота си заради стари грешки – кредити, които са набъбнали неузнаваемо, неясноти около ЧСИ и запори, или просто страх от сблъсък с институциите.
              </p>
              <p>
                Тези хора често стават жертва на адвокати, които искат хонорари напред без реален шанс за успех, или на "консултанти" във фейсбук групи, които дават грешни, но успокояващи съвети.
              </p>
              <p className="font-semibold text-slate-900">
                Рестарт е създаден като противовес. Ние вярваме, че първата стъпка винаги трябва да бъде честна оценка на ситуацията — без илюзии, но и без излишно сплашване.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 border-y border-slate-200 py-16 mb-16">
            <div>
              <ShieldCheck className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Нашият процес</h3>
              <p className="text-slate-600 text-sm">Работим структурирано. Първо проверяваме фактите, анализираме рисковете и чак след това предлагаме решения.</p>
            </div>
            <div>
               <Users className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Дистанционна работа</h3>
              <p className="text-slate-600 text-sm">Обслужваме клиенти от Германия, Англия, Испания и други държави изцяло онлайн с пълна поверителност.</p>
            </div>
            <div>
               <Info className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Без обещания без проверка</h3>
              <p className="text-slate-600 text-sm">Ние не сме агенция за чудеса. Казваме истината, дори когато тя означава, че дългът трябва да се плати.</p>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Нашият екип</h2>
            <p className="max-w-[720px] mx-auto text-[16px] text-slate-600 text-center mb-[32px]">
              "Рестарт" е екип от професионалисти с опит в правото, бизнеса и финансите, обединени от мисията да помогнат на хората да намерят законен и устойчив изход от задълженията си. Работим с клиенти в България и българи в чужбина — индивидуално, дискретно и насочено към реални резултати.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
              {/* Card 1 */}
              <div className="bg-[#FAFAFA] rounded-xl border border-slate-200 p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col items-center">
                <img 
                  src="/101. Красимир Дончев.JPG" 
                  alt="Красимир Дончев" 
                  className="w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] rounded-xl object-cover object-top" 
                />
                <h3 className="text-[22px] font-bold text-[#0A1628] text-center mt-[16px]">Красимир Дончев</h3>
                <p className="text-[#14B8A6] text-[14px] font-normal text-center mt-[4px]">Народен представител и експерт</p>
                <p className="text-slate-600 text-[15px] leading-[1.6] text-left mt-[16px]">
                  Народен представител в 51-то Народно събрание с опит в законодателната и институционалната среда. Участва активно както в обсъжданията, така и в самото гласуване на Закона за личния фалит, което му дава уникална и цялостна перспектива върху замисъла, целите и приложението на закона. Предприемач с дългогодишен опит в различни бизнес сектори, включително недвижими имоти, и с международно образование.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FAFAFA] rounded-xl border border-slate-200 p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col items-center">
                <img 
                  src="/105. Марин Поповски.JPG" 
                  alt="Марин Поповски" 
                  className="w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] rounded-xl object-cover object-top" 
                />
                <h3 className="text-[22px] font-bold text-[#0A1628] text-center mt-[16px]">Марин Поповски</h3>
                <p className="text-[#14B8A6] text-[14px] font-normal text-center mt-[4px]">Адвокат</p>
                <p className="text-slate-600 text-[15px] leading-[1.6] text-left mt-[16px]">
                  Адвокат с над 7 години практика и 13 години юридически опит. Специализира в гражданско право, бракоразводни дела, административно-наказателни производства и изпълнителни дела. Работи активно по казуси, свързани със защита на длъжници и правни решения при финансови затруднения.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FAFAFA] rounded-xl border border-slate-200 p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col items-center">
                <img 
                  src="/IMG_1295.jpeg" 
                  alt="Росица Червенлиева" 
                  className="w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] rounded-xl object-cover object-top" 
                />
                <h3 className="text-[22px] font-bold text-[#0A1628] text-center mt-[16px]">Росица Червенлиева</h3>
                <p className="text-[#14B8A6] text-[14px] font-normal text-center mt-[4px]">Правен консултант</p>
                <p className="text-slate-600 text-[15px] leading-[1.6] text-left mt-[16px]">
                  Икономист по образование и юрист по призвание, към момента завършва своето юридическо образование. Притежава над 10 години опит в сферата на търговията и реален поглед върху финансовите затруднения на хората. В "Рестарт" участва като правен консултант и сътрудник, с фокус върху намирането на ясни, разбираеми и приложими решения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-[60px] md:py-24 bg-teal-50 text-center">
        <div className="max-w-2xl mx-auto px-6 text-balance">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Готов ли си за яснота?</h2>
          <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg">
            <Link to="/diagnostic">Започни с Рестарт Диагностика</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
