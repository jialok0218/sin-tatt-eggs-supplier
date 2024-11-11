import Image from 'next/image';
import yolk from '@/assets/yolk.png';
import eggShell1 from '@/assets/eggShell1.png';
import eggShell2 from '@/assets/eggShell2.png';

export const Hero = () => {
    return (
        <section className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
            <div className="container">
                <div className="md:flex items-center">
                    <div className="md:w-[478px] mt-44">
                         <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-orange-600">
                        Sin Tatt
                        </h1>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                            Your Source of Quality Eggs
                        </h1>
                        <p className="text-xl text-white tracking-tight mt-6">
                            Providing you with the best quality eggs from our farm to your table.
                        </p>
                <div className="flex gap-1 items-center mt-[30px]">
                    <button className="btn-primary">Discover More</button>
                </div>
                </div>
                <div className="mt-20 md:mt-10 md:h-[648px] md:flex-1 relative">
                <Image
                            src={yolk}
                            alt="Egg Yolk"
                            width={600} 
                            height={600} 
                            className="md:absolute md:max-w-none md:left-0 md:top-24 lg:left-0"
                        />
                <Image 
                    src={eggShell1} 
                    alt="First Egg Shell" 
                    width={220}
                    height={220}
                    className="hidden md:block -top-8 -left-32 md:absolute rotate-[30deg]"
                    />
                <Image 
                    src={eggShell2} 
                    alt="Second Egg Shell" 
                    width={220}
                    className="hidden md:block absolute top-[524px] left-[448px] rotate-[30deg]"
                    />
                </div>
                </div>
            </div>
       </section>
    );
};