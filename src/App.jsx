import Hero from './components/Hero';
import Factions from './components/Factions';
import WorldScroll from './components/WorldScroll';
import Systems from './components/Systems';

function App() {
  return (
    <main className="relative bg-obsidian text-white">
      <Hero />
      <Factions />
      <WorldScroll />
      <Systems />
      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted">© {new Date().getFullYear()} Soul Ascension. All rights reserved.</p>
            <nav className="flex gap-6 text-xs text-zinc-300">
              <a href="#factions" className="transition-colors hover:text-gold">Factions</a>
              <a href="#worlds" className="transition-colors hover:text-gold">Worlds</a>
              <a href="#systems" className="transition-colors hover:text-gold">Systems</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
