import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import ContactLink from '../components/ContactLink';

export default function Contato() {
  return (
    <PageLayout label="Fale Comigo">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="font-display font-medium text-3xl md:text-[44px] leading-[1.1] text-ink-primary mb-14 md:mb-20 max-w-[16ch] lowercase"
      >
        vamos criar <span className="font-normal text-ink-accent tracking-normal lowercase">juntas?</span>
      </motion.h1>

      <div className="border-t border-line-subtle mb-14">
        <ContactLink
          index={0}
          label="e-mail"
          value="dalinesribeiro@gmail.com"
          href="mailto:dalinesribeiro@gmail.com"
        />
        <ContactLink
          index={1}
          label="whatsapp"
          value="+55 11 91620-8440"
          href="https://wa.me/5511916208440"
          external
        />
        <ContactLink
          index={2}
          label="instagram"
          value="@daline.ribeiro_"
          href="https://instagram.com/daline.ribeiro_"
          external
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="font-display text-lg md:text-xl text-ink-muted leading-snug max-w-[52ch]"
      >
        Disponível para projetos, ativações, workshops e colaborações artísticas.
      </motion.p>
    </PageLayout>
  );
}
