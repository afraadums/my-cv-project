import { Gamepad2, FileText, CheckCircle, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Gamepad2,
      title: 'Mini Game Project 1',
      category: 'Quality Assurance',
      description: 'Led comprehensive QA testing for an engaging puzzle game, ensuring smooth gameplay across iOS and Android platforms.',
      achievements: [
        'Zero critical bugs at launch',
        'Tested 200+ scenarios',
        '99.5% crash-free rate',
      ],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Gamepad2,
      title: 'Mini Game Project 2',
      category: 'Quality Assurance',
      description: 'Performed extensive testing for an action-packed arcade game with focus on performance optimization.',
      achievements: [
        'Improved load time by 30%',
        'Identified 150+ bugs',
        'Cross-device compatibility',
      ],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Gamepad2,
      title: 'Mini Game Project 3',
      category: 'Quality Assurance',
      description: 'Conducted thorough QA for a multiplayer casual game with emphasis on network stability and user experience.',
      achievements: [
        'Stress tested 1000+ users',
        'Optimized network calls',
        'Enhanced UX flow',
      ],
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Gamepad2,
      title: 'Mini Game Project 4',
      category: 'Quality Assurance',
      description: 'Managed end-to-end testing for an educational game, ensuring accessibility and educational value.',
      achievements: [
        'Accessibility compliance',
        '95% user satisfaction',
        'Multi-language testing',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileText,
      title: 'Mobile App Documentation',
      category: 'Technical Writing',
      description: 'Created comprehensive technical documentation for a complex mobile application, including API references and user guides.',
      achievements: [
        '100+ pages documented',
        'API reference guide',
        'Integration tutorials',
      ],
      color: 'from-purple-600 to-pink-500',
    },
    {
      icon: FileText,
      title: 'Developer Knowledge Base',
      category: 'Technical Writing',
      description: 'Established a centralized knowledge base for development team with best practices and coding standards.',
      achievements: [
        '50+ articles published',
        'Code style guides',
        'Process documentation',
      ],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of successful projects demonstrating analytical excellence and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <span className="inline-block text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-slate-700">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`mt-6 w-full py-2 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span>View Details</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
