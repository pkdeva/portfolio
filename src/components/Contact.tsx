import React, { useState } from 'react';
import useForm from '@web3forms/react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Twitter } from 'lucide-react';

const Contact = () => {
  const { submit, submitting, result } = useForm({
    access_key: "39716599-07e6-4701-a5f1-40c441460122",
    settings: {
      from_name: "Portfolio Contact Form",
      subject: "New Contact Form Submission from Portfolio",
    }
  });

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ready to optimize your infrastructure? Let's discuss your project requirements.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              I'm currently available for freelance DevOps and SRE projects. Whether you need 
              cloud migration, infrastructure optimization, or CI/CD implementation, I'd love to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <a href="mailto:priyanshu.txt@gmail.com" className="text-blue-600 hover:text-blue-700">
                    priyanshu.txt@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Connect with me</h4>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/pkdeva"
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-600 hover:text-gray-900 border border-gray-200"
                >
                  <Github className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/pkdeva"
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-600 hover:text-blue-600 border border-gray-200"
                >
                  <Linkedin className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/pkdevaa"
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-600 hover:text-blue-400 border border-gray-200"
                >
                  <Twitter className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {result.success ? (
              <div className="text-center py-12">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-medium text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Availability Notice */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            🚀 Available for New Projects
          </h3>
          <p className="text-lg text-blue-800 mb-6">
            I'm currently accepting new freelance projects and consulting opportunities. 
            Let's build something amazing together!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-blue-900">Response Time</div>
              <div className="text-blue-700">Within 24 hours</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-blue-900">Project Start</div>
              <div className="text-blue-700">Available immediately</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-blue-900">Communication</div>
              <div className="text-blue-700">Slack, Email, Video calls</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;