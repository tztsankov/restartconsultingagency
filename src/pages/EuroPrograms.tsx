import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Rocket, LineChart, Euro, XCircle } from 'lucide-react';

export function EuroPrograms() {
  return (
    <>
      <SEO 
        title="Европрограми и финансиране за нов бизнес | Рестарт" 
        description="Провери дали има реалистични възможности за европрограми, финансиране, работа или стартиране на бизнес в България." 
      />
      
      <section className="bg-slate-900 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <Euro className="w-16 h-16 text-teal-400 mx-auto mb-8" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Искаш нов доход или малък бизнес?
          </h1>
          <p className="text-xl text-slate-300 text-balance mb-10 max-w-2xl mx-auto">
             Преди да мечтаеш за милиони, първо провери дали финансирането е реалистично за теб и каква е истината зад "безплатните пари".
          </p>
          <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg leading-[1.3]">
            <Link to="/diagnostic">Провери възможностите си</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-4">Големите възможности</h2>
              <div className="space-y-6">
                 <div>
                   <h3 className="font-bold flex items-center gap-2 mb-2"><LineChart className="w-5 h-5 text-teal-600" /> ПКИП (Конкурентоспособност)</h3>
                   <p className="text-slate-600 text-sm">Програми за дигитализация, оборудване и разширяване на вече съществуващ бизнес.</p>
                 </div>
                 <div>
                   <h3 className="font-bold flex items-center gap-2 mb-2"><Rocket className="w-5 h-5 text-amber-600" /> ПВУ (План за възстановяване)</h3>
                   <p className="text-slate-600 text-sm">Специфични фондове и грантове за модернизация, зелен преход и иновации.</p>
                 </div>
                 <div>
                   <h3 className="font-bold flex items-center gap-2 mb-2"><Euro className="w-5 h-5 text-blue-600" /> ПРСР (Селски райони)</h3>
                   <p className="text-slate-600 text-sm">Популярни възможности за земеделие, селски туризъм и неземеделски дейности в малките общини.</p>
                 </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-4">Твърдата реалност</h2>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                <p className="text-slate-700 font-medium mb-6">Европрограмите <strong className="text-rose-600">не са</strong> "безплатни пари", които се дават за гола идея.</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-600">
                    <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                    <span className="text-sm">Изискват стриктна фискална чистота (без публични задължения).</span>
                  </li>
                  <li className="flex gap-3 text-slate-600">
                    <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                    <span className="text-sm">Изискват допустим сектор (не всеки бизнес може да бъде финансиран).</span>
                  </li>
                  <li className="flex gap-3 text-slate-600">
                    <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                    <span className="text-sm">Често изискват собствено съфинансиране (от 10% до 50%).</span>
                  </li>
                   <li className="flex gap-3 text-slate-600">
                    <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                    <span className="text-sm">Изискват тежка документация и следене на срокове.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Има смисъл да говорим, ако...</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
               Искате да направите предварителна оценка. Нашият екип ще анализира идеята ви, профила ви (или този на фирмата ви) и ще ви каже честно: има ли отворена или предстояща програма за вас, или не.
            </p>
            <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg leading-[1.3]">
              <Link to="/diagnostic">Заяви Рестарт Диагностика</Link>
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}
