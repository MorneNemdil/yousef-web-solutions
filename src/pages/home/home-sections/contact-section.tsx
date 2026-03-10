import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="py-20 bg-primary text-primary-foreground overflow-hidden" id="contact">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Information Column */}
                    <div className="min-w-0">
                        <h2 className="section-header text-white mb-8 decoration-accent">Get In Touch</h2>
                        <div className="space-y-8">
                            <p className="text-lg opacity-80 mb-10 max-w-xl">
                                For urgent repairs, scheduled maintenance, or new system installations, please reach out via our direct channels. Our team aims to respond to all digital correspondence within 24 hours.
                            </p>
                            <div className="flex items-start gap-4 min-w-0">
                                <div className="p-3 bg-accent rounded-full text-white shrink-0"><Phone size={22} /></div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs opacity-60 uppercase tracking-widest">Call Us</p>
                                    <a href="tel:07921 022971" className="text-lg sm:text-xl font-semibold hover:text-accent transition-colors block truncate">07921 022971</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 min-w-0">
                                <div className="p-3 bg-secondary rounded-full text-primary shrink-0"><Mail size={22} /></div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs opacity-60 uppercase tracking-widest">Email Address</p>
                                    <a href="mailto:chrisbarrowplumbingandheating@hotmail.co.uk" className="text-lg sm:text-xl font-semibold hover:text-secondary transition-colors break-all block">chrisbarrowplumbingandheating@hotmail.co.uk</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 min-w-0">
                                <div className="p-3 bg-white/10 rounded-full text-white shrink-0"><MapPin size={22} /></div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs opacity-60 uppercase tracking-widest">Service Area</p>
                                    <p className="text-lg sm:text-xl font-semibold">Local and Surrounding Areas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Column - Optimized for Grid Containment */}
                    <div className="w-full">
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80584.18433355208!2d-0.19827011985955146!3d50.86337583648604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758509f620496d%3A0x5395725d70f14652!2sBrighton!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border rounded-2xl shadow-2xl w-full aspect-square lg:aspect-video"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;