import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

const GOLD_PARTICLE = 'rgba(212,175,55,0.8)';
const GOLD_PARTICLE_FADE = 'rgba(244,208,63,0.35)';

export default function Hero() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let raf = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
    };
    const initParticles = () => {
      const ratio = window.devicePixelRatio || 1;
      const count = Math.floor((canvas.width * canvas.height) / (14000 * ratio));
      particles.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };
    const draw = () => {
      const ratio = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.4,
        0,
        canvas.width * 0.5,
        canvas.height * 0.4,
        Math.max(canvas.width, canvas.height) * 0.7
      );
      grad.addColorStop(0, 'rgba(212,175,55,0.06)');
      grad.addColorStop(1, 'rgba(5,5,5,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, GOLD_PARTICLE);
        g.addColorStop(1, GOLD_PARTICLE_FADE);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * ratio, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      initParticles();
    };

    resize();
    initParticles();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0" style={{ width: '100%', height: '100%' }} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-gradient-gold font-cinzel text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            SOUL ASCENSION
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
            className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg"
          >
            Defy Fate, Ascend the Soul. Explore ethereal realms, master ancient arts, and forge your legend in a world of shadow and gold.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            className="mt-10 flex justify-center"
          >
            <a
              href="#factions"
              className="group relative inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-semibold tracking-wide"
            >
              <span className="absolute inset-0 rounded-full bg-gold-sheen backdrop-blur-xs transition duration-300 ease-expo group-hover:shadow-gold-glow" />
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  padding: 1,
                  background:
                    'linear-gradient(180deg, rgba(197,148,29,0.7), rgba(212,175,55,0.9), rgba(244,208,63,0.7))',
                  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <span className="relative z-10">Play Free</span>
              <FaPlay className="relative z-10 text-gold transition-transform duration-300 ease-expo group-hover:translate-x-0.5" />
              <span
                className="absolute inset-0 -z-10 rounded-full opacity-0 transition duration-300 ease-expo group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg, #C5941D, #D4AF37, #F4D03F)' }}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
