import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <img src={logo} alt="SRID Logo" className="h-12 w-auto rounded border border-white/10" />
                        <span className="font-bold text-white text-xl tracking-wide">SRI RUDRA INFRA</span>
                    </div>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        Building dreams with precision and excellence. Your trusted partner in construction, property development, and real estate marketing.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="bg-slate-800 p-2 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 border border-slate-700">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Services', path: '/services' },
                            { name: 'Contact Us', path: '/contact' },
                        ].map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:w-3 transition-all"></span>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                    <ul className="space-y-3">
                        {[
                            'Construction',
                            'Property Development',
                            'Channel Partner Services',
                            'Interior Design',
                            'Real Estate Marketing',
                            'Consultation'
                        ].map((service) => (
                            <li key={service} className="hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-amber-500 transition-colors"></span>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                            <span>
                                03-167/Q38P Sri Ram Nagar Colony,<br />
                                Krishna Nagar, Suraram,<br />
                                Hyderabad 500055
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-amber-500 shrink-0" size={20} />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-amber-500 shrink-0" size={20} />
                            <span>info@srirudrainfra.com</span>
                        </li>
                        <li className="mt-4 pt-4 border-t border-slate-800">
                            <span className="block text-sm text-slate-500">Business Hours:</span>
                            <span className="text-white">Mon - Sun: 9:00 AM - 9:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Sri Rudra Infra Developers. All rights reserved.</p>
            </div>
        </footer>
    );
}
