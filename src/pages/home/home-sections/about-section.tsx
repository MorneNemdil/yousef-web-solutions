import { CheckCircle2 } from "lucide-react";
import AboutPicture from "@/assets/about-picture.png"

const AboutSection = () => {
  const highlights = [
    "Fully Insured & Gas Safe Registered",
    "Over 15 Years of Industry Experience",
    "Local, Reliable Family-Run Business",
    "Emergency 24/7 Support Available",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Evidence Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/20">
              <img
                src={AboutPicture}
                alt="Chris Barrow at work"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative Geometry */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-full -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-lg -z-0" />
          </div>

          {/* Narrative Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="section-header mb-8 text-primary">
              The Standard of Excellence
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              At Chris Barrow Plumbing & Heating, we understand that your home’s infrastructure is paramount to your comfort. Our mission is to provide high-caliber technical solutions with the integrity you expect from a local specialist.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Whether we are conducting a routine boiler service or executing a complex full-property replumb, our methodology remains consistent: precision, efficiency, and absolute transparency.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-primary font-semibold">
                  <CheckCircle2 className="text-accent" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;