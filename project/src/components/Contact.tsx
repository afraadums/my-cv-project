import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'afraz@example.com',
      link: 'mailto:afraz@example.com',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/afraz',
      link: 'https://linkedin.com',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/afraz',
      link: 'https://github.com',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{method.label}</h3>
                <p className="text-slate-600 text-sm break-all">{method.value}</p>
              </a>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Send Me a Message
          </h3>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
              <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
