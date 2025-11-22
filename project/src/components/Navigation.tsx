import { Home, User, Briefcase, Award, FolderOpen, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Award, label: 'Skills' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-xl p-3 space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative block p-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              aria-label={item.label}
            >
              <Icon size={20} />
              <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
