import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const factions = [
  {
    key: 'Shinigami',
    title: 'Shinigami',
    tagline: 'Balancers of Souls',
    desc:
      'Masters of Zanjutsu and Kido, enforcing cosmic order between life and death.',
    colors: 'from-black/70 via-white/10 to-black/50',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop',
  },
  {
    key: 'Quincy',
    title: 'Quincy',
    tagline: 'Monks of Destruction',
    desc: 'Weave Heilig Bogen and Blut to unleash pristine devastation and celestial control.',
    colors: 'from-blue-900/60 via-white/10 to-yellow-600/30',
    img: 'https://images.unsplash.com/photo-1520975922284-9d950375f42e?q=80&w=1920&auto=format&fit=crop',
  },
  {
    key: 'Arrancar',
    title: 'Arrancar',
    tagline: 'Unmasked Hollows',
    desc: 'Wield Cero, Hierro, and Sonido—raw force tempered by unveiled will.',
    colors: 'from-zinc-200/60 via-amber-50/10 to-amber-100/20',
    img: 'https://images.unsplash.com/photo-1520975682031-6c4b1a5a2b1f?q=80&w=1920&auto=format&fit=crop',
  },
  {
    key: 'Fullbringer',
    title: 'Fullbringer',
    tagline: 'Matter Manipulators',
    desc: 'Channel object affinity to bend the tangible into supernatural artistry.',
    colors: 'from-black/70 via-emerald-300/10 to-green-500/20',
    img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1920&auto=format&fit=crop',
  },
];

export default function Factions() {
  const [active, setActive] = useState('Shinigami');

  return (
    <section id="factions" className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-cinzel text-2xl tracking-[0.2em] text-gradient-gold sm:text-3xl">Factions</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Choose your path. Each order holds ancient techniques and destinies intertwined with the soul.
            </p>
          </div>
          <div className="hidden items-center gap-2 text-gold sm:flex">
            <FaStar />
            <span className="text-xs uppercase tracking-widest">Duet Reveal</span>
          </div>
        </div>

        <div className="relative grid h-[520px] grid-cols-4 gap-3 sm:h-[600px]">
          {factions.map((f) => {
            const isActive = active === f.key;
            return (
              <motion.div
                key={f.key}
                onMouseEnter={() => setActive(f.key)}
                onClick={() => setActive(f.key)}
                layout
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                className="relative flex cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-charcoal/50"
                animate={{ width: isActive ? '60%' : '13%' }}
              >
                <div className="absolute inset-0">
                  <div className={`absolute inset-0 bg-gradient-to-b ${f.colors}`} />
                  <img src={f.img} alt={f.title} className="h-full w-full object-cover opacity-60 mix-blend-overlay" />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.25)' }} />

                <div className="relative z-10 flex w-full flex-col justify-end p-5">
                  <div className="mb-auto">
                    <motion.h3 layout className="font-cinzel text-lg tracking-wide sm:text-xl">{f.title}</motion.h3>
                    <motion.p layout className="text-xs text-muted">{f.tagline}</motion.p>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="mt-4"
                      >
                        <p className="max-w-sm text-sm text-zinc-200">{f.desc}</p>
                        <button
                          className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-black"
                          style={{ background: 'linear-gradient(90deg, #C5941D, #D4AF37, #F4D03F)' }}
                        >
                          View Skills
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
