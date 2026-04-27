import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Map } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navigation = [
  { name: 'Начало', href: '/' },
  { name: 'Рестарт Диагностика', href: '/diagnostic' },
  { name: 'Личен фалит и ЧСИ', href: '/bankruptcy' },
  { name: 'Завръщане в България', href: '/return-to-bg' },
  { name: 'Европрограми', href: '/euro-programs' },
  { name: 'За нас', href: '/about' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-[60px]" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-[24px] font-extrabold tracking-[-1px] text-slate-900 uppercase">Рестарт</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Отвори главното меню</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-[14px] font-semibold uppercase tracking-[1px] transition-colors hover:text-teal-600",
                location.pathname === item.href ? "text-teal-600" : "text-slate-900"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-4 rounded bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
            Поверителност Гарантирана
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-slate-200 shadow-lg"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                    location.pathname === item.href 
                      ? "bg-slate-50 text-teal-600" 
                      : "text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
                 <Button asChild variant="outline" className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                   <Link to="/contact">Контакти</Link>
                </Button>
                <Button asChild className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/diagnostic">Разбери реалните си опции</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
