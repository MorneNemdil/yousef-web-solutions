import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Layout, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & UI",
    icon: <Layout className="h-5 w-5 text-primary" />,
    skills: ["React", "TypeScript", "JavaScript", "shadcn/ui", "Tailwind CSS", "CSS", "Vite", "Figma"]
  },
  {
    title: "Backend & Database",
    icon: <Terminal className="h-5 w-5 text-primary" />,
    skills: ["C#", "Entity Framework Core", "Java", "Node.js", "Appwrite", "PostgreSQL", "SQL", "SSMS"]
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="h-5 w-5 text-primary" />,
    skills: ["Git", "Fork", "GitHub", "Vercel", "VS Code", "Visual Studio"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const skillVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Technical Toolbox</h2>
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((cat, i) => (
            <motion.div key={i} variants={skillVariants}>
              <Card className="h-full border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    {cat.icon}
                    <h3 className="font-bold text-foreground">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {skill}
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