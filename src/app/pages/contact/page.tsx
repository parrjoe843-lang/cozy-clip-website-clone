"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import AnnouncementBar from "@/components/sections/announcement-bar";

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Failed to send message. Please try again.");
        setIsSubmitting(false);
        return;
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#fef3f2] to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-brand-text-medium max-w-2xl mx-auto">
            Have questions about the Cloud Clip®? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text-dark mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-periwinkle focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-periwinkle focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-text-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-periwinkle focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Subject Dropdown */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brand-text-dark mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-periwinkle focus:border-transparent transition-all bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select a subject</option>
                  <option value="order-inquiry">Order Inquiry</option>
                  <option value="product-question">Product Question</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="brand-ambassador">Brand Ambassador Program</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-brand-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-periwinkle focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-dusty-rose text-brand-text-dark font-medium text-base uppercase py-4 px-8 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:shadow-[0_2px_0_rgba(0,0,0,0.15)] active:translate-y-0.5 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[0_4px_0_rgba(0,0,0,0.15)] disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Required Fields Note */}
              <p className="text-sm text-brand-text-medium text-center">
                * Required fields
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-brand-background-light border border-brand-border-light rounded-lg p-8">
            <h3 className="font-display font-medium text-2xl mb-4">
              We'll Get Back to You Soon!
            </h3>
            <p className="text-brand-text-medium">
              We typically respond to all inquiries within 24-48 hours during business days. Thank you for your patience and for supporting the Cloud Clip®!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}