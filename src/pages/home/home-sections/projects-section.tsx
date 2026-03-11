import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BarberImage from "@/assets/barberImage.png";
import OaklandConstructionImage from "@/assets/oaklandConstructionImage.png";
import TrueFlowImage from "@/assets/trueFlowImage.png";


const projects = [
  {
    title: "Sleek Plumbing and Heating Business",
    image: TrueFlowImage,
    tech: ["React", "Tailwind"],
    link: "https://true-flow-plumbing-heating.vercel.app/",
  }, {
    title: "Innovative Construction Company",
    image: OaklandConstructionImage,
    tech: ["React", "Tailwind"],
    link: "https://oakland-carpentry-website.vercel.app/",
  }, {
    title: "Professional Barber Platform",
    image: BarberImage,
    tech: ["React", "Tailwind"],
    link: "https://barber-with-booking.vercel.app/",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="overflow-hidden border-border bg-card group">
                <div
                  className="relative aspect-video overflow-hidden cursor-pointer group"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Desktop Hover Overlay: Hidden on touch devices, visible on hover */}
                  <div className="hidden md:flex absolute inset-0 bg-slate-900/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 items-center justify-center gap-4">
                    <div className="p-3 bg-background/90 text-foreground rounded-full shadow-xl">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Mobile Indicator: Visible only on mobile to hint at interactivity */}
                  <div className="absolute bottom-3 right-3 rounded-full bg-background/80 p-2 md:hidden">
                    <ExternalLink className="h-4 w-4 text-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tech.map(t => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}