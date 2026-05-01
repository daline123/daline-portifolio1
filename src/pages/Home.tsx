import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full"
    >
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Full Screen Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/gallery/home-nova.png"
            alt="Daline Ribeiro — Dança e Movimento"
            className="w-full h-full object-cover"
          />
          
          {/* Top Left Text Information */}
          <div className="absolute inset-0 flex flex-col justify-start p-8 md:p-16 pt-32 md:pt-40">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-ink-primary font-display font-bold text-4xl md:text-6xl lg:text-7xl lowercase leading-[0.8] mb-4 tracking-[-0.02em]">
                daline ribeiro
              </h1>
              <p className="text-ink-primary font-display font-normal text-sm md:text-xl tracking-[0.1em] lowercase">
                dança. corpo. movimento
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
