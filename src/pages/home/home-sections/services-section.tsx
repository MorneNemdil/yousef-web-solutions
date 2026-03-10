import { Droplets, Flame, Settings, PenTool as Tool, Thermometer, ShieldCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "General Plumbing",
      description: "Expert leak detection, pipe repairs, and full bathroom installations with precision engineering.",
      icon: <Droplets className="text-secondary" size={32} />,
    },
    {
      title: "Heating Systems",
      description: "Comprehensive central heating design and installation to ensure optimal thermal efficiency.",
      icon: <Flame className="text-accent" size={32} />,
    },
    {
      title: "Boiler Servicing",
      description: "Annual safety inspections and maintenance to maximize the lifespan of your heating unit.",
      icon: <Settings className="text-primary" size={32} />,
    },
    {
      title: "Emergency Repairs",
      description: "Rapid response for critical failures, providing stability when your infrastructure fails.",
      icon: <Tool className="text-accent" size={32} />,
    },
    {
      title: "Underfloor Heating",
      description: "Modern, high-efficiency floor heating solutions tailored for comfort and energy savings.",
      icon: <Thermometer className="text-secondary" size={32} />,
    },
    {
      title: "Gas Safety",
      description: "Certified Gas Safe inspections for landlords and homeowners to ensure total compliance.",
      icon: <ShieldCheck className="text-primary" size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-muted/30" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-header inline-block mb-4">Our Core Competencies</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Providing comprehensive mechanical solutions with a focus on durability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 p-3 bg-muted rounded-xl inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;