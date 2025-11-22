import { Brain, Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'Analytical Mindset',
      description: 'Expert in breaking down complex systems and identifying critical issues through systematic analysis',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Proven track record of resolving technical challenges with creative and efficient solutions',
    },
    {
      icon: Lightbulb,
      title: 'Detail-Oriented',
      description: 'Meticulous approach to quality assurance ensuring flawless user experiences',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Committed to staying current with industry trends and best practices',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A passionate professional with a unique blend of technical expertise and communication skills,
            dedicated to ensuring software quality and creating clear, comprehensive documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-blue-50 leading-relaxed text-lg">
            With over 5 years of experience spanning software quality assurance and technical writing,
            I've developed a keen eye for detail and a passion for creating bug-free experiences.
            My journey has taken me through the exciting world of game development, where I've contributed
            to releasing 4 successful mini-games, and through comprehensive technical documentation projects
            that bridge the gap between complex systems and end users.
          </p>
        </div>
      </div>
    </section>
  );
}
