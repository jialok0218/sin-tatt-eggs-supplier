import Image from 'next/image';
import logistics from '@/assets/logistics.png';
import quality from '@/assets/quality.png';
import pricing from '@/assets/pricing.png';
import afterSales from '@/assets/afterSales.png';
import eggTray from '@/assets/eggTray.jpg';

const services = [
    {
        image: logistics,
        alt: "Efficient Logistics",
        title: "Efficient Logistics",
        description: "Our fleet of 13 lorries ensures timely and reliable delivery across the region, meeting all customer needs."
    },
    {
        image: quality,
        alt: "Quality Assurance",
        title: "Quality Assurance",
        description: "We source only the freshest eggs, ensuring top quality and satisfaction for our customers."
    },
    {
        image: pricing,
        alt: "Reasonable Pricing",
        title: "Reasonable Pricing",
        description: "We offer competitive pricing without compromising on quality, ensuring value for money for our customers."
    },
    {
        image: afterSales,
        alt: "After Sales Service",
        title: "After Sales Service",
        description: "Our commitment to excellent service extends beyond the sale, ensuring customer satisfaction and support."
    }
];

export const ServiceHighlights = () => {
    return (
        <section
        className="py-20 bg-gray-100 text-center"
    >
            <div className="container mx-auto">
                <h2 className="section-title mb-4">
                    <span className="text-yellow-500">"Eggsquisite"</span> Service, Reliable Delivery 
                </h2>
                <p className="section-description mb-8">
                    Delivering quality and freshness with every egg, backed by our dedicated team and efficient logistics.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 bg-white shadow-lg rounded-3xl">
                            <div className="flex justify-center items-center h-32 mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-orange-600 p-8">
                                {service.title}
                            </h3>
                            <p className="text-gray-800">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};