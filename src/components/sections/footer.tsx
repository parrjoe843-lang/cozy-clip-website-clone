import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-foreground">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12 py-12">
            <div className="pb-5 lg:pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5 space-y-5">
                        <p className="text-muted-foreground text-base">
                            The Cloud Clip® does what your claw clip can&apos;t, all while remaining the same style you know and love. Patent-pending
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/thecloudclip" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/thecloudclip/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div className="sm:col-span-2 lg:col-span-2 lg:col-start-8">
                        <h3 className="font-display text-base font-bold uppercase tracking-widest text-foreground">Home</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/" className="text-sm text-muted-foreground hover:underline">Home</Link></li>
                            <li><Link href="/collections/all" className="text-sm text-muted-foreground hover:underline">Shop</Link></li>
                            <li><Link href="/pages/about-us" className="text-sm text-muted-foreground hover:underline">About</Link></li>
                            <li><Link href="/pages/contact" className="text-sm text-muted-foreground hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>
                    
                    <div className="sm:col-span-2 lg:col-span-3">
                        <h3 className="font-display text-base font-bold uppercase tracking-widest text-foreground">Shipping</h3>
                        <ul className="mt-4 space-y-2">
                          <li><Link href="/pages/shipping-information" className="text-sm text-muted-foreground hover:underline">Shipping</Link></li>
                          <li><Link href="/pages/international-shipping" className="text-sm text-muted-foreground hover:underline">International Shipping</Link></li>
                          <li><Link href="/policies/terms-of-service" className="text-sm text-muted-foreground hover:underline">Terms of Service</Link></li>
                          <li><Link href="/policies/privacy-policy" className="text-sm text-muted-foreground hover:underline">Privacy Policy</Link></li>
                          <li><Link href="/policies/refund-policy" className="text-sm text-muted-foreground hover:underline">Refund Policy</Link></li>
                          <li><Link href="/pages/brand-ambassador" className="text-sm text-muted-foreground hover:underline">Become a Brand Ambassador</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;