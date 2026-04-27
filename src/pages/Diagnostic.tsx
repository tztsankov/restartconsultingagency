import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Scale, TrendingUp, CheckCircle, ShieldAlert, BadgeInfo } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export function Diagnostic() {
  return (
    <>
      <SEO 
        title="Рестарт | Разбери какви са реалните ти опции" 
        description="Провери ситуацията си при стари дългове, ЧСИ, запори, завръщане в България и възможности за нов доход или финансиране." 
      />
      
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-20 pb-[48px] lg:pt-28 relative">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-2px] mb-8 text-balance">
            Искаш да се върнеш в България, но старите дългове не ти дават спокойствие?
          </h1>
          <p className="text-[18px] lg:text-[20px] text-slate-300 leading-[1.6] mb-10 max-w-3xl mx-auto">
            Разбери какви са реалните ти опции при ЧСИ, запори, стари кредити, завръщане в България и възможности за ново начало.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-[16px] leading-[1.3]">
              <a href="#request-form">Разбери какви са реалните ти опции</a>
            </Button>
          </div>
          <p className="mt-8 text-[12px] font-semibold text-slate-400">
            Без обещания за автоматичен резултат. Само реална оценка, поверителност и конкретни следващи стъпки.
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">Това звучи ли ти познато?</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-teal-50/50 border border-teal-100/50 rounded-3xl p-6 lg:p-10 shadow-sm relative overflow-hidden">
            
            {/* Image Column */}
            <div className="w-full lg:w-[40%] shrink-0">
               <img 
                 src="/content/ChatGPT Image Apr 27, 2026, 03_45_47 PM.png" 
                 alt="Пациент в несигурност" 
                 className="w-full object-cover aspect-[4/5] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]" 
               />
            </div>

            {/* Bullets Column */}
            <div className="w-full lg:w-[60%]">
              <ul className="space-y-6 py-2 lg:py-6">
                {[
                  "Не знаеш дали имаш активен ЧСИ, дело или запор.",
                  "Имаш стари кредити и не знаеш колко са станали с лихвите.",
                  "Искаш да се върнеш в България, но те е страх какво ще стане с първата ти заплата.",
                  "Не знаеш дали има давност или дали още могат да те търсят.",
                  "Не искаш семейството ти да разбере.",
                  "Уморен си от противоречиви съвети във Facebook.",
                  "Не търсиш чудо. Търсиш истината."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-800 text-[17px] leading-relaxed">
                    <div className="mt-1 bg-amber-100 text-amber-600 rounded-full p-1 shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>



      {/* Visual Breathing Divider */}
      <div className="py-[60px] flex justify-center bg-white">
        <div className="w-[60%] h-px bg-[#E0F2EE]"></div>
      </div>

      {/* Main Argument */}
      <section className="py-24 bg-white leading-relaxed border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldAlert className="w-16 h-16 text-teal-600 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-1px] mb-10 text-slate-900 text-balance">
            Най-опасното не е, че имаш проблем. Най-опасното е да взимаш решения на сляпо.
          </h2>
          <div className="text-[18px] text-slate-500 space-y-6 text-balance max-w-3xl mx-auto">
            <p>
              Ако не знаеш какво реално дължиш, дали има ЧСИ, дали има запор, дали можеш да се върнеш спокойно и дали имаш право на подкрепа, всяко решение може да е грешно.
            </p>
            
            <div className="w-full max-w-[900px] mx-auto py-8 lg:py-10 mb-[40px]">
              <img 
                src="/image_1777302515332_hn5wdf.png" 
                alt="Chaos of blind decisions preview" 
                className="w-full aspect-video object-cover" 
              />
            </div>

            <div className="font-semibold text-slate-700 px-6 py-8 bg-slate-50 rounded-2xl grid md:grid-cols-2 gap-4 text-left border border-slate-200 shadow-sm">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>Да платиш на сляпо може да е грешка.</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>Да чакаш може да е грешка.</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>Да се върнеш без подготовка може да е грешка.</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>Да слушаш случайни съвети може да е грешка.</span>
            </div>
            <p className="pt-4 font-bold text-2xl text-teal-600 tracking-[-1px]">
              Затова първата стъпка не е паника. Първата стъпка е диагностика.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="py-24 bg-[#EAF5F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Какво е Рестарт Диагностика?</h2>
            <p className="text-lg text-slate-600">
              Рестарт Диагностика е първоначална оценка, която ти помага да разбереш къде стоиш, какви са реалните ти опции и коя е следващата разумна стъпка.
            </p>
          </div>

          <div className="max-w-[1100px] mx-auto">
            <div className="w-full mb-[40px]">
              <img 
                src="/content/ChatGPT Image Apr 27, 2026, 04_20_51 PM.png" 
                alt="Трите етапа на Рестарт Диагностика" 
                className="w-full aspect-video object-cover mix-blend-darken" 
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <Scale className="w-10 h-10 text-teal-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Миналото</h3>
                <p className="text-slate-600">
                  Дългове, ЧСИ, запори, давност, личен фалит, документи и законови възможности.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <FileText className="w-10 h-10 text-teal-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Настоящето</h3>
                <p className="text-slate-600">
                  Завръщане в България, работа, адрес, банкова сметка, програма "Избирам България" и подготовка.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <TrendingUp className="w-10 h-10 text-teal-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Бъдещето</h3>
                <p className="text-slate-600">
                  Доход, работа, бизнес, европрограми, финансиране и реалистична оценка.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Transition */}
      <section className="py-[60px] bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <img 
            src="/content/ChatGPT Image Apr 27, 2026, 05_53_47 PM.png" 
            alt="Conceptual transition to one chosen path" 
            className="w-full aspect-[16/9] object-cover mb-4" 
          />
          <p className="text-center text-[#0A1628] text-[18px]">
            Един път, не сто различни съвета.
          </p>
        </div>
      </section>

      {/* Visual Breathing Divider */}
      <div className="py-[60px] flex justify-center bg-white">
        <div className="w-[60%] h-px bg-[#E0F2EE]"></div>
      </div>

      {/* Target Audience & Anti-promises */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">За кого е?</h2>
            <ul className="space-y-4">
               {[
                "За българи в Германия, Англия, Испания, Нидерландия или друга държава.",
                "За хора със стари дългове в България.",
                "За хора, които имат или се страхуват от ЧСИ.",
                "За хора със запори или блокирани сметки.",
                "За хора, които искат да се върнат, но не знаят какво ги чака.",
                "За хора, които искат да започнат бизнес или нов доход, но са блокирани.",
                "За хора, които искат някой да погледне цялата картина."
               ].map((text, i) => (
                 <li key={i} className="flex gap-3 text-slate-700">
                   <div className="bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5"><span className="text-slate-600 text-xs font-bold">{i+1}</span></div>
                   <span>{text}</span>
                 </li>
               ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4 flex items-center gap-3">
              <BadgeInfo className="w-6 h-6 text-amber-500" />
              Какво НЕ обещаваме
            </h2>
             <ul className="space-y-4 mb-8">
               {[
                "Не обещаваме автоматично изтриване на дългове.",
                "Не обещаваме, че ЧСИ спира веднага във всеки случай.",
                "Не обещаваме гарантирано одобрение по 'Избирам България'.",
                "Не обещаваме гарантирано европейско финансиране.",
                "Не продаваме магическо решение.",
                "Не те караме да започваш голям процес, преди да разбереш реалната картина."
               ].map((text, i) => (
                 <li key={i} className="flex gap-3 text-slate-700">
                   <div className="text-amber-500 shrink-0 mt-0.5">—</div>
                   <span>{text}</span>
                 </li>
               ))}
            </ul>
            <div className="bg-amber-50 rounded-xl p-6 text-amber-900 font-medium">
              Първо проверяваме. После казваме какви са реалните опции.
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Как работи процесът?</h2>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 mb-[40px]">
          <img 
            src="/content/ChatGPT Image Apr 27, 2026, 05_56_46 PM.png" 
            alt="Ръце, работещи по документ" 
            className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover rounded-xl" 
          />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-100 group-[.is-active]:bg-teal-600 text-teal-600 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">1</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 text-lg mb-2">Попълваш кратка заявка</h4>
                <p className="text-slate-600">Казваш ни къде живееш, какъв е проблемът и какво те притеснява най-много.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">2</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 text-lg mb-2">Преглеждаме ситуацията</h4>
                <p className="text-slate-600">Екипът ни определя кои теми трябва да се проверят: дългове, ЧСИ, завръщане, програми или финансиране.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">3</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 text-lg mb-2">Провеждаме разговор</h4>
                <p className="text-slate-600">Обясняваме на разбираем език какви са възможните посоки и какво не трябва да се прави прибързано.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-100 text-teal-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">4</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 p-6 rounded-2xl shadow">
                <h4 className="font-bold text-white text-lg mb-2">Получаваш следваща стъпка</h4>
                <p className="text-slate-300">Разбираш дали има смисъл да продължиш с личен фалит, преструктуриране, програма за завръщане, европрограма или друг план.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Breathing Divider */}
      <div className="py-[60px] flex justify-center bg-white">
        <div className="w-[60%] h-px bg-[#E0F2EE]"></div>
      </div>

      {/* Why Restart */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Защо Рестарт?</h2>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 mb-[50px]">
          <img 
            src="/content/1777302676148-f3qfzm41uv.png" 
            alt="Cold lawyer vs Warm Restart team comparison" 
            className="w-full aspect-video object-cover" 
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
               {[
                 "Гледаме цялата картина, не само един документ.",
                 "Обединяваме правна, икономическа и практическа експертиза.",
                 "Работим с българи в чужбина дистанционно.",
                 "Говорим ясно, без сложен юридически език.",
                 "Не обещаваме без проверка.",
                 "Подхождаме поверително и без осъждане."
               ].map((reason, i) => (
                 <div key={i} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-teal-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{reason}</span>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="request-form" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
            <div className="mb-10 text-center">
              <h2 className="text-[28px] font-extrabold text-slate-900 mb-4 tracking-[-1px]">Разбери какви са реалните ти опции</h2>
              <p className="text-slate-500 text-[14px]">Информацията ти се разглежда поверително. Не даваме обещания без проверка на ситуацията.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-semibold text-slate-600 mb-1.5">Име</label>
                  <input type="text" className="w-full p-3 rounded-lg border-2 border-slate-200 bg-white text-[14px] text-slate-900 outline-none focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-slate-600 mb-1.5">Имейл</label>
                  <input type="email" className="w-full p-3 rounded-lg border-2 border-slate-200 bg-white text-[14px] text-slate-900 outline-none focus:border-teal-500" />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-slate-600 mb-1.5">Телефон</label>
                <input type="tel" className="w-full p-3 rounded-lg border-2 border-slate-200 bg-white text-[14px] text-slate-900 outline-none focus:border-teal-500" />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-slate-600 mb-1.5">Viber / WhatsApp (ако е различен)</label>
                <input type="tel" className="w-full p-3 rounded-lg border-2 border-slate-200 bg-white text-[14px] text-slate-900 outline-none focus:border-teal-500" />
              </div>
              
              <div>
                <label className="block text-[12px] font-semibold text-slate-600 mb-1.5">Къде живееш в момента?</label>
                <input type="text" placeholder="напр. Германия, Великобритания, България" className="w-full p-3 rounded-lg border-2 border-slate-200 bg-white text-[14px] text-slate-900 outline-none focus:border-teal-500" />
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
                  <span className="text-slate-700 text-[14px] font-medium">Искам да се върна в България</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
                  <span className="text-slate-700 text-[14px] font-medium">Имам стари кредити или задължения</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
                  <span className="text-slate-700 text-[14px] font-medium">Имам информация за ЧСИ, запор или дело</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
                  <span className="text-slate-700 text-[14px] font-medium">Интересувам се от работа, бизнес или финансиране</span>
                </label>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <label className="block text-[12px] font-semibold text-slate-600 mb-1.5">Знаеш ли приблизително колко дължиш? (По желание)</label>
                <input type="text" className="w-full p-3 rounded-lg border-2 border-slate-200 bg-white text-[14px] text-slate-900 outline-none focus:border-teal-500" />
              </div>

               <div className="pt-4">
                <label className="block text-[12px] font-semibold text-slate-600 mb-1.5">Какво те притеснява най-много? (Опиши накратко)</label>
                <textarea rows={4} className="w-full p-4 rounded-lg border-2 border-slate-200 bg-white text-[14px] text-slate-900 outline-none focus:border-teal-500 resize-none"></textarea>
              </div>

              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-[16px]">
                  Изпрати заявка за Рестарт Диагностика
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Често задавани въпроси</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
            <Accordion>
              <AccordionItem title="Ако живея в чужбина, мога ли да направя диагностика дистанционно?">
                Да. Първата стъпка може да започне дистанционно чрез телефон, имейл, Viber или WhatsApp.
              </AccordionItem>
              <AccordionItem title="Трябва ли да знам точно колко дължа?">
                Не. Ако не знаеш, това е част от проблема. Първата стъпка е да подредим фактите и да проверим какво е реалното състояние.
              </AccordionItem>
              <AccordionItem title="Ще ми изтриете ли дълговете?">
                Не обещаваме автоматичен резултат. Ще проверим дали има законови възможности според конкретния случай, като например давност или производство по несъстоятелност.
              </AccordionItem>
              <AccordionItem title="Ако имам ЧСИ, има ли смисъл?">
                Да, има смисъл поне да се направи оценка. ЧСИ не означава автоматично, че няма опции за реакция, защита на доход или споразумение.
              </AccordionItem>
              <AccordionItem title="Ще разбере ли семейството ми?">
                Процесът е поверителен. Подхождаме дискретно и без осъждане към ситуацията ви.
              </AccordionItem>
              <AccordionItem title="Мога ли да кандидатствам по ‘Избирам България’?">
                Зависи от актуалните условия, статуса на програмата и личната ви ситуация. Това трябва да се провери спрямо изискванията на държавата в конкретния момент.
              </AccordionItem>
              <AccordionItem title="Мога ли да взема европрограма за бизнес?">
                Зависи от програмата, фирмата, сектора, документите, собственото участие и сроковете. Първо се прави оценка на допустимостта.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
