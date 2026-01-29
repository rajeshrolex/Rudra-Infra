import hero3 from '../assets/images/hero3.png';
import constructionImg from '../assets/images/construction.png';
import developmentImg from '../assets/images/development.png';
import partnerImg from '../assets/images/partner.png';
import architectureImg from '../assets/images/architecture.png';
import interiorImg from '../assets/images/interior.png';
import marketingImg from '../assets/images/marketing.png';

const services = [
    {
        title: "Construction",
        desc: "From residential villas to commercial complexes, we provide end-to-end construction services with a focus on structural integrity and timely delivery.",
        img: constructionImg
    },
    {
        title: "Property Development",
        desc: "We identify and develop high-potential properties, transforming land into valuable assets and thriving communities.",
        img: developmentImg
    },
    {
        title: "Channel Partner Services",
        desc: "We serve as authorized channel partners for reputed builders, helping you find the perfect property that meets your needs and budget.",
        img: partnerImg
    },
    {
        title: "Architecture & Planning",
        desc: "Comprehensive architectural design and planning services to ensure space utilization and aesthetic appeal.",
        img: architectureImg
    },
    {
        title: "Interior Design",
        desc: "Creating beautiful, functional interiors that reflect your style and enhance your living or working environment.",
        img: interiorImg
    },
    {
        title: "Marketing & Sales",
        desc: "Strategic marketing solutions for real estate projects to reach the right audience and achieve sales targets.",
        img: marketingImg
    }
];

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
                        {services.map((service, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group overflow-hidden">
                                <div className="h-56 overflow-hidden">
                                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
