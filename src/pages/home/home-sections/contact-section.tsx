import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Send, CheckCircle, Loader2, Instagram } from "lucide-react";
import { useState } from "react";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactSection() {
    const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('SENDING');
        const formData = new FormData(e.currentTarget);
        formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESS_KEY!);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setStatus('SUCCESS');
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus('IDLE'), 5000);
            } else {
                setStatus('ERROR');
            }
        } catch (error: any) {
            setStatus('ERROR');
            console.log("Error: ", error);
        }
    };
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Let’s build something <span className="text-primary italic">great</span> together.</h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed">Ready to start your next technical project? Reach out for a consultation or just to say hello.</p>
                            <div className="mt-8 space-y-4">
                                <a href="mailto:mornenemdilbusiness@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5 text-primary" /> mornenemdilbusiness@email.com</a>
                                <div className="flex gap-4 pt-4">
                                    <Button variant="outline" size="icon" asChild><a onClick={() => window.open("https://www.instagram.com/code.with.yousef/")}><Instagram className="h-5 w-5" /></a></Button>
                                    <div onClick={() => window.open("https://www.instagram.com/code.with.yousef/")} className="hover:cursor-pointer flex items-center gap-3 text-foreground hover:text-primary transition-colors">@code.with.yousef</div>
                                </div>
                            </div>
                        </div>
                        {status === 'SUCCESS' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                                <CheckCircle size={64} className="text-green-500" />
                                <h3 className="text-2xl font-black text-[var(--brand-navy)]">Message Received!</h3>
                                <p className="text-gray-600">I'll get back to you as soon as possible.</p>
                                <button onClick={() => setStatus('IDLE')} className="text-[var(--brand-blue)] font-bold underline">New Message</button>
                            </div>
                        ) : (<Card className="border-border bg-card shadow-lg shadow-primary/5">
                            <CardHeader><CardTitle>Send a Message</CardTitle><CardDescription>I'll get back to you as soon as possible.</CardDescription></CardHeader>
                            <form onSubmit={handleSubmit}>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Input name="name" placeholder="Name" type="text" className="bg-muted/50" />
                                        <Input name="email" placeholder="Email" type="email" className="bg-muted/50" />
                                    </div>
                                    <Input name="subject" type="text" placeholder="Subject" className="bg-muted/50" />
                                    <Textarea required name="message" placeholder="How can I help you?" className="min-h-[120px] bg-muted/50" />
                                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                                        {status === 'SENDING'
                                            ? <><Loader2 className="animate-spin" /> Sending...</>
                                            : <>Send Message <Send className="ml-2 h-4 w-4" /></>
                                        }
                                    </Button>
                                </CardContent>
                            </form>
                        </Card>)}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}