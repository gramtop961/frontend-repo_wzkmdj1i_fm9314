import { motion } from 'framer-motion';
import { FaBolt, FaFeatherAlt, FaShieldAlt, FaBroadcastTower } from 'react-icons/fa';

const systems = [
  { title: 'Zanjutsu', desc: 'Blade arts that carve destinies—precision and resolve.', icon: <FaFeatherAlt /> },
  { title: 'Kido', desc: 'Incantations of binding and destruction, woven from spirit.', icon: <FaBroadcastTower /> },
  { title: 'Cero', desc: 'Primal beams of hollowed power; a scream of light.', icon: <FaBolt /> },
  { title: 'Blut', desc: 'Lattice of reishi—defense and power through divine flow.', icon: <FaShieldAlt /> },
];

export default function Systems() {
  return (
    <section className="relative py-16 sm:py-20" id="systems">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="font-cinzel text-2xl tracking-[0.2em] text-gradient-gold sm:text-3xl">Systems</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Master the disciplines that define combat and fate. Every art refines your path toward ascension.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-[1px]"
              style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.18), rgba(244,208,63,0.08))' }}
            >
              <div className="h-full rounded-2xl bg-charcoal/60 p-5 backdrop-blur-md transition duration-300 ease-gentle group-hover:shadow-gold-inner">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(197,148,29,0.2), rgba(244,208,63,0.1))' }}>
                  <span className="text-gold">{s.icon}</span>
                </div>
                <h3 className="font-cinzel text-lg tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{s.desc}</p>
                <div className="mt-5 inline-block text-xs text-gold/80">Hover to see the aura</div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-[2px] transition duration-300 ease-gentle group-hover:opacity-100" style={{ boxShadow: '0 0 24px 2px rgba(212,175,55,0.35), inset 0 0 0 1px rgba(212,175,55,0.25)' }} />
              <motion.div aria-hidden className="pointer-events-none absolute -inset-10 opacity-0 transition duration-300 ease-gentle group-hover:opacity-60" style={{ background: 'radial-gradient(30% 30% at 50% 50%, rgba(212,175,55,0.2), rgba(0,0,0,0))' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
