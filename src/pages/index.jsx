'use client';

import { useState, useEffect } from 'react';
import {
  Download,
  Github,
  CheckCircle2,
  LayoutDashboard,
  ListTodo,
  MessageSquare,
  BarChart3,
  FileText,
  CreditCard,
  Lock,
  Terminal,
  Sparkles,
  ArrowRight,
  Users,
  Mail,
  Moon,
  Sun
} from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/app.exe';
    link.download = 'Tasky-Setup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Tableau de bord complet",
      description: "Vue d'ensemble intuitive de tous vos projets et tâches en temps réel"
    },
    {
      icon: <ListTodo className="w-8 h-8" />,
      title: "Gestion des tâches",
      description: "Organisez vos tâches et sous-tâches avec une interface drag & drop fluide"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat en temps réel",
      description: "Communication instantanée entre membres de l'équipe directement dans l'app"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Graphiques & Analytics",
      description: "Visualisez vos performances avec des graphiques dynamiques et interactifs"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Gestion documentaire",
      description: "Centralisez et organisez tous vos documents importants au même endroit"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Gestion financière",
      description: "Suivez vos budgets, dépenses et revenus avec précision"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Authentification sécurisée",
      description: "Protection de vos données avec authentification multi-facteurs"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Terminal intégré",
      description: "Exécutez des commandes directement depuis l'application"
    }
  ];

  const team = [
    {
      name: "LAMRISSI Bahaa-eddine",
      email: "lam.bahae7@gmail.com",
      photo: "/pahae.jpg"
    },
    {
      name: "Tayef Jihane",
      email: "tayefjihane1@gmail.com",
      photo: "/jihane.jpg"
    },
    {
      name: "GANA Anas",
      email: "anasgana2003@gmail.com",
      photo: "/anas.jpg"
    },
    {
      name: "Kafi Amina",
      email: "amina.kafi@gmail.com",
      photo: "/amina.jpg"
    }
  ];

  const isVisible = (element) => {
    if (typeof window === 'undefined') return false;
    const rect = element?.getBoundingClientRect();
    return rect && rect.top < window.innerHeight * 0.8;
  };

  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => {
        if (isVisible(el)) {
          el.classList.add('animate-in');
        }
      });
    };

    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-black text-white' 
        : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
    }`}>
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-black/80 border-gray-800' 
          : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" className="w-10 h-10" alt="Tasky Logo" />
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Tasky
              </span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a 
                href="#features" 
                className={`transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Fonctionnalités
              </a>
              <a 
                href="#team" 
                className={`transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Équipe
              </a>
              <a 
                href="#download" 
                className={`transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Télécharger
              </a>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a
                href="https://github.com/oPahae/Tasky"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${darkMode ? 'opacity-10' : 'opacity-30'}`}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? 'rgb(255 255 255)' : 'rgb(203 213 225)'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${
                darkMode 
                  ? 'bg-blue-950 text-blue-400 border-blue-900' 
                  : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}>
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Application Desktop Professionnelle</span>
              </div>

              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Gérez vos projets avec{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Tasky
                </span>
              </h1>

              <p className={`text-xl leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-slate-600'
              }`}>
                L'application desktop tout-en-un pour la gestion de projets, collaboration d'équipe et suivi financier.
                Augmentez votre productivité avec une interface moderne et des fonctionnalités puissantes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownload}
                  className="group flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Télécharger Tasky</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#features"
                  className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-gray-900 text-white border-gray-700 hover:border-blue-600' 
                      : 'bg-white text-slate-900 border-slate-200 hover:border-blue-600'
                  }`}
                >
                  <span className="font-semibold">Découvrir les fonctionnalités</span>
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    100%
                  </div>
                  <div className={darkMode ? 'text-gray-400 text-sm' : 'text-sm text-slate-600'}>
                    Gratuit
                  </div>
                </div>
                <div className={`h-12 w-px ${darkMode ? 'bg-gray-700' : 'bg-slate-300'}`} />
                <div className="text-center">
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    8+
                  </div>
                  <div className={darkMode ? 'text-gray-400 text-sm' : 'text-sm text-slate-600'}>
                    Fonctionnalités
                  </div>
                </div>
                <div className={`h-12 w-px ${darkMode ? 'bg-gray-700' : 'bg-slate-300'}`} />
                <div className="text-center">
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    24/7
                  </div>
                  <div className={darkMode ? 'text-gray-400 text-sm' : 'text-sm text-slate-600'}>
                    Disponible
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Screenshot */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl blur-3xl opacity-20 animate-pulse" />
              <div className={`relative rounded-2xl shadow-2xl border overflow-hidden transform hover:scale-105 transition-transform duration-500 ${
                darkMode 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-white border-slate-200'
              }`}>
                <div className={`px-4 py-3 flex items-center space-x-2 bg-black`}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex-1 text-center text-slate-400 text-sm font-medium">Tasky Dashboard</div>
                </div>
                <img
                  src={darkMode ? "/dashboard-dark.png" : "/dashboard.png"}
                  alt="Tasky Dashboard Screenshot"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-black' : 'bg-slate-50'
      }`}>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 space-y-4 scroll-animate">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${
              darkMode 
                ? 'bg-blue-950 text-blue-400 border-blue-900' 
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Fonctionnalités</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Tout ce dont vous avez besoin
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-slate-600'
            }`}>
              Tasky regroupe tous les outils essentiels pour gérer vos projets efficacement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`scroll-animate group rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-black border-black hover:border-blue-600 shadow-blue-800/20' 
                    : 'bg-white border-slate-200 hover:border-blue-500 shadow-black/20'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 space-y-4 scroll-animate">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${
              darkMode 
                ? 'bg-blue-950 text-blue-400 border-blue-900' 
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Notre Équipe</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              L'équipe derrière Tasky
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-slate-600'
            }`}>
              Des développeurs passionnés dédiés à créer la meilleure expérience utilisateur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`scroll-animate group rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-gradient-to-b from-gray-900 to-black border-gray-800 hover:border-blue-600' 
                    : 'bg-gradient-to-b from-slate-50 to-white border-slate-200 hover:border-blue-500'
                }`}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg relative group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className={`text-lg font-bold text-center mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {member.name}
                </h3>

                <a
                  href={`mailto:${member.email}`}
                  className={`flex items-center justify-center space-x-2 transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{member.email}</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative scroll-animate">

          <div className="space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Prêt à booster votre productivité ?
            </h2>
            <p className="text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto">
              Téléchargez Tasky dès maintenant et découvrez une nouvelle façon de gérer vos projets.
              Installation simple et rapide, aucune configuration complexe requise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleDownload}
              className="group flex items-center space-x-3 px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl font-bold text-lg"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Télécharger pour Windows</span>
            </button>

            <a
              href="https://github.com/oPahae/Tasky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-10 py-5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl font-bold text-lg"
            >
              <Github className="w-6 h-6" />
              <span>Voir sur GitHub</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm text-blue-50">Installation rapide</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm text-blue-50">100% Gratuit</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm text-blue-50">Open Source</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-black text-white' : 'bg-slate-900 text-white'
      }`}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Tasky</span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/oPahae/Tasky"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

          </div>

          <div className={`mt-8 pt-8 border-t text-center ${
            darkMode 
              ? 'border-gray-800 text-gray-400' 
              : 'border-slate-800 text-slate-400'
          }`}>
            <p>&copy; 2024 Tasky. Tous droits réservés. Développé avec passion par notre équipe.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}