'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const heroVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#231F20' }}>
      <header className="bg-white p-4 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#3EBF80' }}>MegaPlug</div>
          <div>
            <Link href="#features" className="p-2">Features</Link>
            <Link href="#how-it-works" className="p-2">How It Works</Link>
            <Link href="#contact" className="p-2">Contact</Link>
          </div>
        </nav>
      </header>

      <main>
        <motion.section
          className="text-center py-20"
          style={{ backgroundColor: '#3EBF80', color: 'white' }}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.h1 className="text-5xl font-bold mb-4" variants={heroVariants}>
            Charge Your Future with MegaPlug
          </motion.h1>
          <motion.p className="text-xl mb-8" variants={heroVariants}>
            The smartest way to power your electric vehicle
          </motion.p>
          <motion.a
            href="#"
            className="py-3 px-6 rounded font-bold"
            style={{ backgroundColor: '#E86F00', color: 'white' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download App
          </motion.a>
        </motion.section>

        <section id="features" className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🔌', title: 'Smart Charging', description: 'Multiple connector types and power levels' },
              { icon: '💳', title: 'Easy Payments', description: 'Digital wallet and RFID technology' },
              { icon: '📱', title: 'Mobile App', description: 'Real-time monitoring and notifications' },
              { icon: '🌍', title: 'Network Coverage', description: 'Extensive station network' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={featureCardVariants}
              >
                <h3 className="text-2xl font-bold mb-2">{feature.icon} {feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="py-20 px-4 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center">
            {[
              { title: 'Top-up', description: 'Top-up your wallet' },
              { title: 'Find', description: 'Locate nearby charging stations' },
              { title: 'Connect', description: 'Plug in your vehicle with RFID or app' },
              { title: 'Charge', description: 'Monitor your session in real-time' },
              { title: 'Deduct', description: 'Automatic payment from your wallet' },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="mb-8 md:mb-0"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={stepVariants}
              >
                <div className="text-3xl font-bold rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#3EBF80', color: 'white' }}>{i + 1}</div>
                <p className="font-bold">{step.title}</p>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p>For support or business inquiries, please email us at <a href="mailto:support@megaplug.com" style={{ color: '#3EBF80' }}>support@megaplug.com</a></p>
        </section>
      </main>

      <footer className="text-center py-4" style={{ backgroundColor: '#231F20', color: 'white' }}>
        <p>&copy; 2025 MegaPlug. All rights reserved.</p>
        <Link href="/privacy-policy" style={{ color: '#3EBF80' }}>Privacy Policy</Link>
      </footer>
    </div>
  );
}