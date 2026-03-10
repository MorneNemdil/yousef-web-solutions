import { useTheme } from "@/components/theme-provider"
import { useEffect } from "react";
import HeroSection from "./home-sections/hero-section";
import { Element } from 'react-scroll'
import ServicesSection from "./home-sections/services-section";
import ProjectsSection from "./home-sections/projects-section";
import ApproachSection from "./home-sections/approach-section";
import AboutSection from "./home-sections/about-section";
import SkillsSection from "./home-sections/skills-section";
import ContactSection from "./home-sections/contact-section";
import { Footer } from "./home-sections/footer";

const HomePage = () => {
    const { setTheme } = useTheme();

    useEffect(() => setTheme('light'), []);
    return (
        <div className="flex flex-col">
            <Element name="home">
                <HeroSection />
            </Element>
            <Element name="services">
                <ServicesSection />
            </Element>
            <Element name="projects">
                <ProjectsSection />
            </Element>
            <Element name="approach">
                <ApproachSection />
            </Element>
            <Element name="about">
                <AboutSection />
            </Element>
            <Element name="skills">
                <SkillsSection />
            </Element>
            <Element name="contact">
                <ContactSection />
            </Element>
            <Element name="footer">
                <Footer />
            </Element>
        </div>
    )
}

export default HomePage