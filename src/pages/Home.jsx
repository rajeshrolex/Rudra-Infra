import Hero from '../components/Hero';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import constructionImg from '../assets/images/construction.png';
import developmentImg from '../assets/images/development.png';
import partnerImg from '../assets/images/partner.png';
import architectureImg from '../assets/images/architecture.png';
import interiorImg from '../assets/images/interior.png';
import marketingImg from '../assets/images/marketing.png';

export default function Home() {
    return (
        <div>
            <Hero />

            {/* Introduction Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Welcome to Sri Rudra Infra</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Constructing Visions, Building Realities</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            We are a premier construction and property development company dedicated to delivering excellence.
                            From residential complexes to commercial spaces, we build with precision, integrity, and a commitment to quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Construction", desc: "High-quality residential and commercial construction services.", img: constructionImg },
                            { title: "Property Development", desc: "Transforming land into thriving communities and landmarks.", img: developmentImg },
                            { title: "Channel Partner", desc: "Trusted marketing partner for premium real estate projects.", img: partnerImg },
                            { title: "Architecture & Planning", desc: "Comprehensive architectural design and planning services to ensure space utilization and aesthetic appeal.", img: architectureImg },
                            { title: "Interior Design", desc: "Creating beautiful, functional interiors that reflect your style and enhance your living or working environment.", img: interiorImg },
                            { title: "Marketing & Sales", desc: "Strategic marketing solutions for real estate projects to reach the right audience and achieve sales targets.", img: marketingImg }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100 group overflow-hidden">
                                <div className="h-48 overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 mb-6">{item.desc}</p>
                                    <Link to="/services" className="text-amber-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-slate-900 text-white">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Excellence in Every Square Foot</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            With years of experience in the industry, Sri Rudra Infra Developers has established a reputation for reliability and superior quality. We don't just build structures; we build relationships based on trust.
                        </p>

                        <div className="space-y-4">
                            {[
                                "On-time Project Delivery",
                                "Superior Quality Materials",
                                "Transparent Dealings",
                                "Customer-Centric Approach"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-amber-500/20 p-1 rounded-full">
                                        <CheckCircle className="text-amber-500" size={18} />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Link to="/about" className="btn-secondary">About Our Company</Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-amber-500/20 rounded-2xl blur-xl"></div>
                        <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                                    <span className="block text-4xl font-bold text-amber-500 mb-2">50+</span>
                                    <span className="text-sm text-slate-400">Projects Completed</span>
                                </div>
                                <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                                    <span className="block text-4xl font-bold text-amber-500 mb-2">100%</span>
                                    <span className="text-sm text-slate-400">Client Satisfaction</span>
                                </div>
                                <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                                    <span className="block text-4xl font-bold text-amber-500 mb-2">10+</span>
                                    <span className="text-sm text-slate-400">Years Experience</span>
                                </div>
                                <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                                    <span className="block text-4xl font-bold text-amber-500 mb-2">24/7</span>
                                    <span className="text-sm text-slate-400">Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-amber-500">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Project?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Contact us today for a consultation. Let's discuss how we can bring your vision to life.</p>
                    <Link to="/contact" className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
