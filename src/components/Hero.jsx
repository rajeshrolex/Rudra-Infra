import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: hero1,
        title: "Building Dreams into Reality",
        subtitle: "Premium Construction & Property Development",
        description: "We transform visions into enduring landmarks with precision, quality, and innovation."
    },
    {
        id: 2,
        image: hero2,
        title: "Excellence in Every Detail",
        subtitle: "World-Class Interior & Architectural Design",
        description: "Creating spaces that blend functionality with aesthetic perfection."
    },
    {
        id: 3,
        image: hero3,
        title: "Communities for the Future",
        subtitle: "Sustainable & Modern Gated Communities",
        description: "Developing vibrant neighborhoods designed for a better quality of life."
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative h-[90vh] w-full overflow-hidden bg-slate-900">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center">
                <div className="container-custom px-6 md:px-12">
                    <motion.div
                        key={current + "-text"}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl text-white"
                    >
                        <span className="inline-block py-1 px-3 rounded bg-amber-500/20 text-amber-400 font-semibold text-sm mb-4 border border-amber-500/30 backdrop-blur-sm">
                            {slides[current].subtitle}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
                            {slides[current].title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                            {slides[current].description}
                        </p>
                        <div className="flex gap-4">
                            <Link to="/projects" className="btn-secondary">
                                View Projects
                            </Link>
                            <Link to="/contact" className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-white hover:bg-amber-500 hover:text-white transition-all backdrop-blur-sm border border-white/10"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-white hover:bg-amber-500 hover:text-white transition-all backdrop-blur-sm border border-white/10"
            >
                <ChevronRight size={24} />
            </button>

            {/* Identifiers */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-amber-500 w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
