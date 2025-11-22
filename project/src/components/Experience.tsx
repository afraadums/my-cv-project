import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Quality Assurance',
      period: 'December 2021 – May 2024',
      duration: '2 years 6 months',
      achievements: [
        'Successfully released 4 mini games with zero critical bugs post-launch',
        'Implemented comprehensive test strategies reducing bug discovery time by 40%',
        'Developed automated testing protocols improving efficiency by 35%',
        'Collaborated with cross-functional teams to ensure seamless game experiences',
        'Created detailed bug reports with analytical insights for rapid resolution',
        'Performed regression testing across multiple platforms and devices',
      ],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Technical Writer',
      period: 'January 2017 – March 2019',
      duration: '2 years 3 months',
      achievements: [
        'Authored comprehensive technical documentation for mobile applications',
        'Transformed complex technical concepts into user-friendly guides',
        'Collaborated with development teams to ensure documentation accuracy',
        'Created API documentation and integration guides for developers',
        'Maintained and updated documentation based on user feedback',
        'Established documentation standards and best practices',
      ],
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A track record of excellence in quality assurance and technical communication
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                      <div className="flex items-center text-slate-600 mt-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span className="text-slate-500">{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2
                        size={20}
                        className="text-green-500 flex-shrink-0 mt-1"
                      />
                      <p className="text-slate-700 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
