import { motion } from 'framer-motion';

export default function AnimatedBg() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#05000a]">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0029] via-[#05000a] to-[#000000]" />

            {/* Floating Orbs - Optimized: Reduced scale extremes and blur size slightly to improve FPS on weaker devices */}
            <motion.div
                animate={{
                    opacity: [0.15, 0.3, 0.15],
                    x: [0, 30, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-neon-purple/20 blur-[80px] will-change-transform"
            />
            <motion.div
                animate={{
                    opacity: [0.1, 0.25, 0.1],
                    x: [0, -40, 0],
                    y: [0, 40, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] right-[0%] w-[35%] h-[35%] rounded-full bg-neon-pink/10 blur-[80px] will-change-transform"
            />
            <motion.div
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 20, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-neon-cyan/10 blur-[90px] will-change-transform"
            />
        </div>
    );
}
