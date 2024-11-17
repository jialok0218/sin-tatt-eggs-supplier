import Image from 'next/image';
import Link from 'next/link';
import eggBucket from '@/assets/eggBucket.png';

export const AboutSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-orange-100 text-center">
            <div className="container mx-auto">
                <h2 className="section-title mb-4">
                    About Us
                </h2>
                <Image
                    src={eggBucket}
                    alt="Eggs in a nest"
                    width={300}
                    height={300}
                    className="mx-auto mb-8"
                />
                <p className="section-description mt-5 mb-5">
                    <strong>Sin Tatt Eggs Supplier Sdn. Bhd.</strong> , located at No. 545, Kawasan Perindustrian Tandop, has been a cornerstone in the egg supply industry since 1979. With a dedicated team of 30 members and a fleet of 13 lorries, we ensure the delivery of fresh and high-quality eggs across the region. Our commitment to excellence and growth has been unwavering, driven by a close-knit community of staff and management working together to meet the needs of our customers.
                </p>
                <p className="section-description mb-8">
                    As we look to the future, we remain focused on innovation and quality, striving to achieve greater success in the years to come.
                </p>
                <Link href="/about-us">
                    <button className="btn-primary">
                        Explore More
                    </button>
                </Link>
            </div>
        </section>
    );
};
