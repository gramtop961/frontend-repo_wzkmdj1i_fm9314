import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const worlds = [
  {
    title: 'The Seireitei',
    desc: 'Ivory citadels and endless sakura drifts—seat of balance where captains hold court.',
    img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'Hueco Mundo',
    desc: 'A pale desert beneath a frozen moon; echoes of hunger shaped into iron will.',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'The Wandenreich',
    desc: 'Gilded halls and stellar tapestries—sanctum of archers that bend constellations.',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop',
  },
];

export default function WorldScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 1], [0.3, 1, 0.6]);

  return (
    <section ref={ref} className="relative py-20 sm:py-28" id="worlds">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="font-cinzel text-2xl tracking-[0.2em] text-gradient-gold sm:text-3xl">Worlds</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Karakura Town, The Seireitei, Hueco Mundo, and The Wandenreich await—each with mysteries etched in shadow and light.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {worlds.map((w) => (
            <div key={w.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60">
              <motion.img src={w.img} alt={w.title} className="h-56 w-full object-cover opacity-80 md:h-64" style={{ y: y1, opacity }} />
              <div className="space-y-2 p-5">
                <motion.h3 style={{ y: y2 }} className="font-cinzel text-lg tracking-wide">{w.title}</motion.h3>
                <motion.p style={{ y: y2 }} className="text-sm text-zinc-300">{w.desc}</motion.p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.18)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
