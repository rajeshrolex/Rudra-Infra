import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Projects() {
    return (
        <div className="pt-20">
            {/* Page Header */}
            <div className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay"></div>
                <div className="container-custom relative z-10 text-white text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Explore our portfolio of premium residential and commercial developments,
                        where architectural excellence meets thoughtful urban planning.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projectsData.map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100 flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                        {project.status}
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900/80 to-transparent text-white">
                                        <div className="flex items-center gap-1.5 text-sm opacity-90 font-medium">
                                            <MapPin size={14} className="text-amber-400" />
                                            {project.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-amber-600 text-xs font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-amber-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                        <Link to="/contact" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-amber-600 transition-colors group/link">
                                            Enquire Now
                                            <ArrowRight size={18} className="translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-white py-20 border-t border-slate-100">
                <div className="container-custom">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your dream space?</h2>
                            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                                Whether you're interested in our ongoing projects or custom construction services, our team is here to guide you.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
                                    Contact Us Today
                                </Link>
                                <a href="tel:+91XXXXXXXXXX" className="bg-white/10 hover:bg-white/20 transition-colors px-10 py-4 rounded-full font-bold text-lg border border-white/10">
                                    Call for More Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
