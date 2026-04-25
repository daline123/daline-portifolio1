import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full overflow-hidden bg-bg-primary flex flex-col items-center"
    >
      {/* Hero Section */}
      <div className="flex-1 w-full max-w-7xl pt-[calc(var(--nav-height)+20px)] pb-12 px-6 md:px-12 flex items-center">
        <div className="relative w-full h-full max-h-[88vh] overflow-hidden group shadow-sm bg-bg-secondary">
          <img
            src="/images/gallery/home-capa.jpg"
            alt="Daline Ribeiro — Dança e Movimento"
            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-[1.03]"
          />
          
          {/* Subtle Overlay with Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-white font-display font-medium text-6xl md:text-[min(10vw,110px)] lowercase leading-[0.8] mb-6 drop-shadow-xl">
                daline ribeiro
              </h1>
              <p className="text-white/90 font-display font-normal text-sm md:text-xl tracking-[0.15em] lowercase">
                intérprete e criadora.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
