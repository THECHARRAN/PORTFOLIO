import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from '../components/SocialLinks';
import type { ContactForm } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      await emailjs.sendForm(
        'service_hnxi254',  // Replace with your EmailJS service ID
        'template_verjiwc', // Replace with your EmailJS template ID
        formRef.current,
        'DKOh7ND4cCYFgxmqv'  // Replace with your EmailJS public key
      );

      setStatusMessage('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatusMessage('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn btn-primary py-3"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && (
              <p className={`text-center mt-4 ${statusMessage.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                {statusMessage}
              </p>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center items-center space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Connect With Me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Follow me on social media for updates and more content
              </p>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
