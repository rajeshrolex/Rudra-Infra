import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import hero1 from '../assets/images/hero1.png';

export default function Contact() {
    return (
        <div className="pt-20">
            {/* Page Header */}
            <div className="relative h-64 md:h-80 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero1})` }}></div>
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="relative container-custom h-full flex flex-col justify-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <div className="flex items-center gap-2 text-slate-300">
                        <span>Home</span>
                        <span className="text-amber-500">/</span>
                        <span>Contact</span>
                    </div>
                </div>
            </div>

            <section className="section-padding">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Get In Touch</span>
                        <h2 className="text-3xl font-bold mb-8 text-slate-900">We'd Love To Hear From You</h2>
                        <p className="text-slate-600 mb-10">
                            Have a project in mind or want to know more about our services? Reach out to us using the contact details below or fill out the form.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Our Location</h4>
                                    <p className="text-slate-600">
                                        03-167/Q38P Sri Ram Nagar Colony,<br />
                                        Krishna Nagar, Suraram, Hyderabad 500055
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Phone Number</h4>
                                    <p className="text-slate-600">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Email Address</h4>
                                    <p className="text-slate-600">info@srirudrainfra.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Business Hours</h4>
                                    <p className="text-slate-600">Monday to Sunday: 9:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">Send Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="+91" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 w-full bg-slate-200 flex items-center justify-center">
                <p className="text-slate-500 font-medium">Google Map Embed Placeholder</p>
            </section>
        </div>
    );
}
