import { motion, type Variants } from "framer-motion";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { Code2, Bug, Figma } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Building scalable apps with React, Appwrite, and Tailwind.",
    icon: <Code2 className="h-8 w-8 text-primary" />,
    tools: ["React", "Appwrite", "Tailwind"]
  },
  {
    title: "UI/UX Prototyping",
    desc: "Theory-driven design focusing on user-centered clarity.",
    icon: <Figma className="h-8 w-8 text-primary" />,
    tools: ["Figma", "Wireframing"]
  },
  {
    title: "Debugging & Optimization",
    desc: "Technical guidance to solve complex software bottlenecks.",
    icon: <Bug className="h-8 w-8 text-primary" />,
    tools: ["Chrome DevTools", "Google Search console"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Core Capabilities
          </h2>
          <p className="mt-4 text-muted-foreground">Specialized solutions for modern digital problems.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -5 }}>
              <Card className="h-full border-border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/5">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span key={tool} className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}