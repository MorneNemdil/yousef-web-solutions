import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import BgImage from "@/assets/heroImage.png"
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src={BgImage}
                    alt="Technical Background"
                    className="h-full w-full object-cover"

                />
                {/* Darkening/Color Overlay for contrast */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container relative z-10 mx-auto px-6 text-center"
            >
                <motion.div variants={itemVariants}>
                    <Badge variant="outline" className="mb-8 border-primary/20 bg-background/50 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md">
                        <Sparkles className="mr-2 h-3.5 w-3.5" />
                        Accepting Projects Now
                    </Badge>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="mx-auto max-w-5xl text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl text-foreground"
                >
                    Yousef Web <span className="text-primary italic">Solutions</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground/90 sm:text-2xl"
                >
                    Architecting high-performance digital ecosystems with a focus on UI/UX precision and scalable engineering logic.
                </motion.p>

                <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-6">
                    <ScrollLink
                        to={"projects"}
                        smooth={true}
                        duration={500}
                        offset={-64}
                        spy={true}
                    >
                        <Button size="lg" className="h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                            Explore Work <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </ScrollLink>
                    <ScrollLink
                        to={"services"}
                        smooth={true}
                        duration={500}
                        offset={-64}
                        spy={true}
                    >
                        <Button variant="outline" size="lg" className="h-14 border-primary/20 px-10 text-lg font-medium backdrop-blur-md transition-all hover:bg-primary/5">
                            View Services
                        </Button>
                    </ScrollLink>
                </motion.div>
            </motion.div>
        </section>
    );
}