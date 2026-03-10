import { motion, type Variants } from "framer-motion";
import { FileSearch, PencilRuler, Rocket, Terminal } from "lucide-react";

const steps = [
  { 
    title: "Discovery & Requirements", 
    desc: "Defining the core problem and establishing a roadmap.", 
    icon: <FileSearch className="h-6 w-6" /> 
  },
  { 
    title: "Wireframing & UX", 
    desc: "Mapping the user journey through rapid prototyping.", 
    icon: <PencilRuler className="h-6 w-6" /> 
  },
  { 
    title: "Development & Iteration", 
    desc: "Writing clean, scalable code with the hand picked tools for the project.", 
    icon: <Terminal className="h-6 w-6" /> 
  },
  { 
    title: "Delivery & Support", 
    desc: "Final testing, deployment, and ongoing technical guidance.", 
    icon: <Rocket className="h-6 w-6" /> 
  }
];

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ApproachSection() {
  return (
    <section id="approach" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">My Development Process</h2>
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-start gap-6 group"
            >
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                {step.icon}
              </div>
              <div className="border-l-2 border-border pl-8 group-last:border-transparent pb-8">
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}