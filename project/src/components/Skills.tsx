import { useState } from 'react';
import { Code2, FileText, Wrench, Users } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('qa');

  const categories = [
    {
      id: 'qa',
      title: 'Quality Assurance',
      icon: Code2,
      color: 'from-blue-600 to-cyan-500',
      skills: [
        { name: 'Manual Testing', level: 95 },
        { name: 'Test Case Design', level: 90 },
        { name: 'Bug Tracking & Reporting', level: 95 },
        { name: 'Regression Testing', level: 90 },
        { name: 'Game Testing', level: 85 },
        { name: 'Cross-Platform Testing', level: 85 },
      ],
    },
    {
      id: 'technical',
      title: 'Technical Writing',
      icon: FileText,
      color: 'from-cyan-500 to-teal-500',
      skills: [
        { name: 'Technical Documentation', level: 90 },
        { name: 'API Documentation', level: 85 },
        { name: 'User Guides', level: 95 },
        { name: 'Process Documentation', level: 90 },
        { name: 'Content Structure', level: 85 },
        { name: 'Technical Communication', level: 90 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'JIRA', level: 90 },
        { name: 'TestRail', level: 85 },
        { name: 'Git', level: 80 },
        { name: 'Confluence', level: 85 },
        { name: 'Browser DevTools', level: 85 },
        { name: 'Mobile Testing Tools', level: 80 },
      ],
    },
    {
      id: 'soft',
      title: 'Core Competencies',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Analytical Thinking', level: 95 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Attention to Detail', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 90 },
        { name: 'Time Management', level: 85 },
      ],
    },
  ];

  const activeData = categories.find(cat => cat.id === activeCategory) || categories[0];
  const Icon = activeData.icon;

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive skill set honed through years of hands-on experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const CategoryIcon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <CategoryIcon size={20} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className={`w-16 h-16 bg-gradient-to-r ${activeData.color} rounded-xl flex items-center justify-center`}>
              <Icon className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">{activeData.title}</h3>
          </div>

          <div className="grid gap-6">
            {activeData.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-900">{skill.name}</span>
                  <span className="text-slate-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r ${activeData.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
