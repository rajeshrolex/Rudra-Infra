import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowLeft } from 'lucide-react';
import hero3 from '../assets/images/hero3.png';

export default function ServiceDetail() {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h2>
                <Link to="/services" className="text-amber-600 hover:text-amber-700 font-medium flex items-center justify-center gap-2">
                    <ArrowLeft size={20} /> Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-20">
            {/* Page Header */}
            <div className="relative h-64 md:h-96 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.img})` }}></div>
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="relative container-custom h-full flex flex-col justify-center text-white">
                    <div className="mb-4">
                        <Link to="/services" className="inline-flex items-center text-slate-300 hover:text-white transition-colors mb-4">
                            <ArrowLeft size={18} className="mr-2" /> Back to Services
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                    <div className="flex items-center gap-2 text-slate-300">
                        <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
                        <span className="text-amber-500">/</span>
                        <Link to="/services" className="hover:text-amber-500 transition-colors">Services</Link>
                        <span className="text-amber-500">/</span>
                        <span>{service.title}</span>
                    </div>
                </div>
            </div>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img src={service.img} alt={service.title} className="w-full h-auto object-cover" />
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-slate-900">{service.title}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {service.detailedDesc || service.desc}
                                </p>
                            </div>

                            {service.features && (
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 gap-6">
                                        {service.features.map((feature, index) => (
                                            <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                                                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {service.closingDesc && (
                                <p className="text-lg font-medium text-slate-800 italic border-l-4 border-amber-500 pl-4 py-2">
                                    {service.closingDesc}
                                </p>
                            )}

                            <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Interested in this service?</h3>
                                <p className="text-slate-300 mb-8 max-w-md">
                                    Contact us today to discuss your requirements and see how we can help you achieve your goals.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/contact" className="btn-primary flex-1 text-center py-4 bg-amber-500 hover:bg-amber-600 border-none">
                                        Get Started
                                    </Link>
                                    <a href="tel:+91XXXXXXXXXX" className="flex-1 text-center py-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
                                        Call Us Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
