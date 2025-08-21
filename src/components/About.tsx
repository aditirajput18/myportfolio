import React from 'react';
import { Server, Cloud, Shield, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: 'Infrastructure Learning',
      description: 'Learning to design and manage cloud infrastructure with hands-on practice'
    },
    {
      icon: Cloud,
      title: 'AWS Enthusiast',
      description: 'Exploring AWS services and working towards certification'
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Learning security best practices and implementing basic security measures'
    },
    {
      icon: Zap,
      title: 'Automation Learner',
      description: 'Building CI/CD pipelines and exploring automation tools'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm <span className="text-cyan-400 font-semibold">Aditi Rajput</span>, an aspiring DevOps Engineer passionate about 
              learning modern infrastructure and automation technologies. I'm currently building my skills in cloud computing, 
              containerization, and CI/CD practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm focused on learning Docker, Kubernetes, AWS services, and building CI/CD pipelines. 
              Through hands-on projects and continuous learning, I'm developing practical skills in 
              Linux administration, automation, and cloud technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy working on personal projects, learning from the DevOps community, and staying updated 
              with the latest trends in cloud computing and automation technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-4">
                    <item.icon size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;