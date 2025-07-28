// components/SplashLoader.tsx
import { motion } from "framer-motion";
import LogoMark from "../../../public/Logo_PACK-02.png";
import Image from "next/image";

export default function SplashLoader() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-16 h-16 mb-6 rounded-full border-2 border-dashed border-gray-300"
        animate={{
          rotate: [0, 5, -5, 0],
          borderColor: ["#e2e8f0", "#cbd5e1", "#e2e8f0"],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Image
          src={LogoMark}
          alt="Sustain;ed Logo"
          className="w-16 h-16 mb-4"
          width={64}
          height={64}
        />
        <div className="flex items-center justify-center w-full h-full">
          <span className="text-2xl">🌱</span>
        </div>
      </motion.div>

      <h2 className="text-xl font-medium text-gray-600 mb-2">
        Choosing your journey...
      </h2>
      <p className="text-sm text-gray-400">
        Just a moment while we prepare your experience
      </p>
    </motion.div>
  );
}
