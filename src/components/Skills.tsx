import React, { useState, useEffect, useRef } from 'react';
import { Code, Server, Cloud, Container, Cpu, Database } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Azure', level: 80 },
        { name: 'Google Cloud', level: 75 },
        { name: 'Digital Ocean', level: 85 }
      ]
    },
    {
      title: 'Containerization',
      icon: Container,
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'OpenShift', level: 80 },
        { name: 'Helm', level: 85 }
      ]
    },
    {
      title: 'CI/CD & Automation',
      icon: Cpu,
      skills: [
        { name: 'Jenkins', level: 95 },
        { name: 'GitLab CI', level: 90 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Ansible', level: 90 }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: Code,
      skills: [
        { name: 'Terraform', level: 95 },
        { name: 'CloudFormation', level: 85 },
        { name: 'Pulumi', level: 75 },
        { name: 'CDK', level: 80 }
      ]
    },
    {
      title: 'Operating Systems',
      icon: Server,
      skills: [
        { name: 'Linux (Ubuntu/CentOS)', level: 95 },
        { name: 'Windows Server', level: 80 },
        { name: 'Shell Scripting', level: 95 },
        { name: 'PowerShell', level: 75 }
      ]
    },
    {
      title: 'Monitoring & Databases',
      icon: Database,
      skills: [
        { name: 'Prometheus', level: 90 },
        { name: 'Grafana', level: 85 },
        { name: 'ELK Stack', level: 90 },
        { name: 'PostgreSQL', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My expertise spans across modern DevOps tools and technologies, 
            with years of hands-on experience in production environments.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="neon-border bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl group hover:bg-gray-800/60 transition-all duration-500"
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-4">
                  <category.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold text-sm">
                        {isVisible ? skill.level : 0}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AWS Certified Solutions Architect',
              'Kubernetes Administrator (CKA)',
              'Docker Certified Associate',
              'Red Hat Certified Engineer',
              'HashiCorp Terraform Associate'
            ].map((cert, index) => (
              <div
                key={index}
                className="neon-border bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-cyan-400 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;