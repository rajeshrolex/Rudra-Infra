import { Award, Users, Target } from 'lucide-react';
import hero2 from '../assets/images/hero2.png'; // Reusing hero image for internal banner

export default function About() {
    return (
        <div className="pt-20">
            {/* Page Header */}
            <div className="relative h-64 md:h-80 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero2})` }}></div>
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="relative container-custom h-full flex flex-col justify-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <div className="flex items-center gap-2 text-slate-300">
                        <span>Home</span>
                        <span className="text-amber-500">/</span>
                        <span>About</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="section-padding">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Story</span>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Sri Rudra Infra Developers</h2>
                        <h3 className="text-xl text-slate-700 font-medium mb-4">Located at Sri Ram Nagar Colony, Krishna Nagar, Suraram, Hyderabad.</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We are a leading construction and property development firm dedicated to reshaping the urban landscape.
                            With a focus on quality, innovation, and sustainability, we strive to deliver projects that stand the test of time.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Our expertise extends beyond just construction; we act as strategic channel partners for major companies,
                            helping market and sell premium properties. We understand the nuances of the real estate market and provide
                            tailored solutions to our clients.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { title: "Our Mission", text: "To deliver world-class infrastructure that enhances the quality of life.", icon: Target },
                            { title: "Our Vision", text: "To be the most trusted name in the construction and real estate industry.", icon: Users },
                            { title: "Our Values", text: "Integrity, Quality, Innovation, and Customer Satisfaction are at our core.", icon: Award }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500 flex items-start gap-4">
                                <div className="bg-slate-100 p-3 rounded-full text-amber-600">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-slate-600 text-sm">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
