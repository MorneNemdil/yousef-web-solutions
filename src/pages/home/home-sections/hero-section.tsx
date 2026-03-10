import { Button } from "@/components/ui/button";
import HeroHeating from "@/assets/hero-pictures/hero-heating.png";
import HeroPlumbing from "@/assets/hero-pictures/hero-plumbing.png";

const HeroSection = () => {
    const services = document.getElementById('services');
    const contact = document.getElementById('contact');

    return (
        <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20 lg:pt-0">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-0">
                {/* Left Column: Copy and CTA */}
                <div className="z-10 animate-in fade-in slide-in-from-left duration-1000 text-center lg:text-left">
                    <h1 className="text-4xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                        Chris Barrow <br />
                        <span className="text-accent italic">Plumbing & Heating</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
                        Delivering expert plumbing solutions and high-efficiency heating systems.
                        Reliable service for your home, backed by years of industry experience.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Button
                            onClick={() => {
                                window.scroll({
                                    top: contact?.offsetTop,
                                    behavior: 'smooth'
                                });
                            }}
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full"
                        >
                            Book a Service
                        </Button>
                        <Button
                            onClick={() => {
                                window.scroll({
                                    top: services?.offsetTop,
                                    behavior: 'smooth'
                                });
                            }}
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-full"
                        >
                            Our Services
                        </Button>
                    </div>
                </div>

                {/* Right Column: Visual Composition */}
                <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full animate-in fade-in slide-in-from-right duration-1000">
                    {/* Main Industry Image */}
                    <div className="absolute top-0 right-0 w-4/5 h-4/5 lg:w-5/6 lg:h-5/6 rounded-3xl overflow-hidden shadow-2xl bg-secondary/20">
                        <img
                            src={HeroPlumbing}
                            alt="Professional plumbing installation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Accent Detail Image */}
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl border-4 lg:border-8 border-white bg-accent/20">
                        <img
                            src={HeroHeating}
                            alt="High-efficiency boiler system"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Design Element - Only visible on Desktop to save space */}
                    <div className="hidden lg:block absolute top-1/2 -left-4 w-12 h-12 bg-secondary rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;