"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const EmailPopup = () => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-body">
            <div className="bg-background rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] max-w-[800px] w-full relative grid md:grid-cols-2 overflow-hidden mx-auto">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-20"
                  aria-label="Close popup"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col justify-center p-8 sm:p-12 text-center order-2 md:order-1">
                    <h2 className="font-accent-script text-[40px] md:text-[44px] text-brand-text-dark leading-tight">
                        Become an insider
                    </h2>
                    <p className="mt-2 text-brand-text-medium text-base leading-snug">
                        Be the first to know about new launches and more
                    </p>

                    <form className="mt-6 w-full" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 border border-brand-border-light rounded-md text-brand-text-dark bg-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-shadow duration-200 text-sm"
                        />
                        <button
                          type="submit"
                          className="w-full mt-4 bg-brand-dusty-rose hover:bg-brand-dusty-rose-hover text-brand-text-dark font-medium py-3 rounded-lg uppercase tracking-wider text-sm transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="mt-4 text-center text-xs text-muted-foreground underline-offset-4 hover:underline uppercase tracking-wider"
                    >
                        Maybe next time
                    </button>
                </div>

                <div className="relative h-64 md:h-auto order-1 md:order-2">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/Untitled_design_94-6.png"
                      alt="Woman holding a periwinkle Cloud Clip"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                </div>
            </div>
        </div>
    );
};

export default EmailPopup;