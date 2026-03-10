import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Trophy, Target, BookOpen } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutSection() {
  const interests = [
    { name: "Gym & Fitness", icon: <Dumbbell className="h-4 w-4" /> },
    { name: "Programming", icon: <Trophy className="h-4 w-4" /> },
    { name: "Learning Theory", icon: <BookOpen className="h-4 w-4" /> },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-foreground">
              Engineering <span className="text-primary italic">Clarity</span> Through Code.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a developer and student, I view web development through the lens of learning theory and user-centered design. At Yousef Web Solutions, my goal is to strip away complexity, providing clean, accessible interfaces that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-3">
              {interests.map((i) => (
                <Badge key={i.name} variant="secondary" className="px-4 py-2 flex items-center gap-2 border-border/50">
                  {i.icon} {i.name}
                </Badge>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-card border border-border p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4"><Target className="text-primary" /> Philosophy</h3>
              <p className="text-muted-foreground italic leading-relaxed">
                "Code should be as instructive as it is functional. I believe the best software doesn't just work—it teaches the user how to succeed."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}