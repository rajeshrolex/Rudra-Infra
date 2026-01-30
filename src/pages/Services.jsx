import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import hero3 from '../assets/images/hero3.png';
import { servicesData } from '../data/servicesData';

export default function Services() {
    return (
        <div className="pt-20">
            {/* Page Header */}
            <div className="relative h-64 md:h-80 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero3})` }}></div>
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="relative container-custom h-full flex flex-col justify-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <div className="flex items-center gap-2 text-slate-300">
                        <span>Home</span>
                        <span className="text-amber-500">/</span>
                        <span>Services</span>
                    </div>
                </div>
            </div>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">What We Offer</h2>
                        <p className="text-slate-600">
                            We provide a comprehensive range of services tailored to meet the diverse needs of the real estate and construction sector.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service) => (
                            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group overflow-hidden flex flex-col">
                                <div className="h-56 overflow-hidden">
                                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {service.desc}
                                    </p>
                                    <Link
                                        to={`/services/${service.id}`}
                                        className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors mt-auto"
                                    >
                                        View Details <ArrowRight size={18} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
