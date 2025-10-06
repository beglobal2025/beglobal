'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Prerequisite() {
      const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        🚀 Turn Your Business Idea into a Powerful Brand
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
                        We help entrepreneurs and businesses create, launch, and grow their brand — from registration to marketing.
                    </p>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">🏁 Prerequisites to Start Your Brand </h2>
                        <p className="text-xl text-gray-600">
                            Before we help you build your dream brand, here’s what you need to have in place
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "Business Registration",
                                answer: [
                                    "• Choose your business type: Proprietorship, Partnership/LLP, or Private Limited Company.",
                                    "• Legal registration protects your brand and builds trust."
                                ]
                            },
                            {
                                question: "GST Registration",
                                answer: [
                                    "• Get your GST number to sell products or services and issue invoices.",
                                    "• Essential if you plan to sell online or scale your business"
                                ]
                            },
                            {
                                question: "Business Bank Account",
                                answer: [
                                    "• Keep personal and business finances separate.",
                                    "• Makes accounting, tax filing, and cash flow management easy."
                                ]
                            },
                            {
                                question: "Brand Identity Basics",
                                answer: [
                                    "• Pick a business name.",
                                    "• Define your tagline, mission, and target audience.",
                                    "• This helps us design a logo and branding strategy that truly represents you."
                                ]
                            },
                            {
                                question: "Compliance & Licenses (If Applicable)",
                                answer: [
                                    "• FSSAI (for food businesses), Trade License (for shops), or Trademark Registration (to protect your brand name/logo)."]
                            },
                            {
                                question: "Digital Readiness",
                                answer: [
                                    "• Decide on a domain name & social media handles.",
                                    "• We can guide you if you need help choosing."
                                ]
                            },
                            {
                                question: "Goals & Budget",
                                answer: [
                                    "• Be clear on your business goals (branding, marketing, or both).",
                                    "• Have a budget range in mind — we create solutions that fit your growth stage."
                                ]
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>

                                {Array.isArray(faq.answer) ? (
                                    <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                                        {faq.answer.map((point, i) => (
                                            <li key={i}>{point.replace(/^•\s*/, "")}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

                  <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => router.push("/services")} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Select Your Plan
            </button>
          </div>
        </div>
      </section>
        </div>
    );
}