import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { PlaneLanding, MapPin, Briefcase, FileSearch } from 'lucide-react';

export function ReturnToBg() {
  return (
    <>
       <SEO 
        title="Завръщане в България с план | Рестарт" 
        description="За българи в чужбина, които искат да се върнат, но се страхуват от стари дългове, ЧСИ, запори или финансова несигурност." 
      />
      
      <section className="bg-slate-900 py-24 object-cover relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <PlaneLanding className="w-16 h-16 text-teal-400 mx-auto mb-8" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Искаш да се върнеш в България, но не знаеш какво те чака?
          </h1>
          <p className="text-xl text-slate-300 text-balance mb-10">
            Започни планирането с реалните факти. Разбери какво се случва със стари дългове и какви са опциите за ново начало.
          </p>
          <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg">
            <Link to="/diagnostic">Провери дали можеш да се върнеш с план</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Страхът от завръщането е разбираем</h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
            Много българи в чужбина отлагат завръщането си не защото не искат, а защото са блокирани от финансова несигурност и институционални проблеми от миналото.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-slate-900 mb-4 flex gap-3 items-center">
                <FileSearch className="w-6 h-6 text-teal-600" />
                Неяснота около дълговете
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2"><span>—</span> "Ако започна работа, ще ми запорират ли заплатата веднага?"</li>
                <li className="flex gap-2"><span>—</span> "Мога ли да си открия банкова сметка изобщо?"</li>
                <li className="flex gap-2"><span>—</span> "Имам ли стари ЧСИ-та, които ме чакат на границата?" (Спойлер: ЧСИ не спира на границата, но и митовете във фейсбук обикновено са преувеличени).</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-slate-900 mb-4 flex gap-3 items-center">
                <Briefcase className="w-6 h-6 text-teal-600" />
                Доход и програми
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2"><span>—</span> Трудна адаптация към българския пазар на труда.</li>
                <li className="flex gap-2"><span>—</span> Неяснота около документи и здравни осигуровки.</li>
                <li className="flex gap-2"><span>—</span> Възможности за държавни програми като "Избирам България" (и кой реално има право на тях).</li>
              </ul>
            </div>
          </div>

          <div className="py-[80px] w-full max-w-[600px] mx-auto">
             <img 
               src="/image_1777301939802_ah2a21.png"
               alt="От страх към яснота"
               className="w-full aspect-[4/5] object-cover"
             />
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 lg:p-12 text-center">
            <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Надеждата не е стратегия. Направи план.</h2>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Преди да си купиш билет или да напуснеш квартирата в чужбина, направи пълна "Рестарт Диагностика". Ние можем дистанционно да проверим ситуацията ви в България и да ви дадем реалистична оценка.
            </p>
            <div className="w-full max-w-[600px] mx-auto mb-[32px] overflow-hidden rounded-xl shadow-sm">
               <img 
                 src="/content/image_1777302834029_sxloy0 (1).png"
                 alt="Спокойно завръщане"
                 className="w-full aspect-[4/5] object-cover"
               />
            </div>
             <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg">
                <Link to="/diagnostic">Искам план за Рестарт</Link>
             </Button>
          </div>
        </div>
      </section>
    </>
  );
}
