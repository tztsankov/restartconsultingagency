import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Scale, AlertCircle, ShieldAlert, CheckCircle2 } from 'lucide-react';

export function Bankruptcy() {
  return (
    <>
      <SEO 
        title="Личен фалит, ЧСИ и запори | Рестарт" 
        description="Разбери какви законови опции може да има при стари дългове, ЧСИ, запори и продължителна неплатежоспособност." 
      />
      
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Scale className="w-16 h-16 text-teal-400 mx-auto mb-8" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Имаш стари дългове, ЧСИ или запор?
          </h1>
          <p className="text-xl text-slate-300 text-balance mb-10">
            Първо разбери какви са реалните ти законови опции, преди да взимаш решения или да плащаш на сляпо.
          </p>
          <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg leading-[1.3]">
            <Link to="/diagnostic">Провери ситуацията си</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Какво е "личен фалит"?</h2>
              <p className="text-slate-600 leading-relaxed">
                Понятието "личен фалит" често се използва в медиите, но в България законовата рамка около несъстоятелността на физически лица е специфична. Тя не е "магическо копче", което автоматично изтрива дълговете, ако просто заявите, че нямате пари.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <div className="flex gap-4">
                 <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                 <p className="text-sm text-slate-700 font-medium">Всяко производство или опция за защита изисква обстоен преглед на активите, историята на дълга и добросъвестността на длъжника.</p>
               </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">Защо "изтриването" не е автоматично?</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Много хора смятат, че след определен брой години дълговете изчезват от само себе си. Това не е вярно. Въпреки че съществува институтът на абсолютната давност и различни давностни срокове, те трябва да бъдат активно приложени или позовани по правилния законов ред. Ако имате образувано изпълнително дело при ЧСИ, давността често се прекъсва.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
             <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl">
               <ShieldAlert className="w-8 h-8 text-rose-500 mb-4" />
               <h4 className="font-bold text-slate-900 mb-2">Рискът от грешно плащане</h4>
               <p className="text-sm text-slate-600">
                 Ако платите дори малка сума по стар дълг (напр. на колекторска фирма), можете неволно да прекъснете давността и да признаете дълга отново.
               </p>
             </div>
             <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl">
               <CheckCircle2 className="w-8 h-8 text-teal-600 mb-4" />
               <h4 className="font-bold text-slate-900 mb-2">Нуждата от оценка</h4>
               <p className="text-sm text-slate-600">
                 Всяко ЧСИ, запор или стар кредит трябва да се разгледат индивидуално — кога е възникнал дългът, има ли съдебно решение, правен ли е запор.
               </p>
             </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Не действайте на сляпо</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Преди да се договорите с кредитор или да подпишете документи, които не разбирате, направете диагностика на ситуацията си. Нека установим заедно кои са реалистичните ви законови възможности.
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
