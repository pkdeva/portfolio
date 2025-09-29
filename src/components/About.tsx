import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Engineering resilient systems that scale beyond expectations while driving innovation at the intersection of technology and business impact
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  I'm currently a DevOps Engineer and SRE at <strong className="text-blue-600">Clinikally, a Y-Combinator backed health-tech startup</strong>, 
                  where I architect robust, scalable infrastructure for India's prominent digital health platform. My expertise spans <strong className="text-blue-600">CloudFinOps</strong> optimization, 
                  delivering significant cost efficiencies while maintaining peak performance.
                </p>
                <p className="mb-6">
                  With over 2 years of experience in cloud infrastructure, I specialize in multi-cloud environments (AWS & GCP), 
                  Kubernetes orchestration, and advanced CI/CD automation. My approach combines technical excellence with business 
                  impact, focusing on <strong className="text-blue-600">security-first architecture</strong> and intelligent cost optimization.
                </p>
                <p>
                  I'm passionate about the <strong className="text-blue-600">"automate everything"</strong> mindset and believe in building systems that not only 
                  work today but scale effortlessly for tomorrow. Currently pursuing opportunities to work on exciting projects as a freelancer.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scalable Solutions</h3>
              <p className="text-gray-600 mb-6">Effortless scaling with cloud automation.</p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">→ Auto-scaling infrastructure</h4>
                    <p className="mt-2 text-gray-600">
                      Intelligent resource provisioning with automated scaling policies and predictive load management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Target className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">→ Load balancing</h4>
                    <p className="mt-2 text-gray-600">
                      Advanced traffic distribution strategies ensuring high availability and optimal performance across regions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">→ Resource optimization</h4>
                    <p className="mt-2 text-gray-600">
                      Strategic resource allocation and right-sizing for maximum efficiency and cost-effectiveness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">→ Cost management</h4>
                    <p className="mt-2 text-gray-600">
                      CloudFinOps expertise delivering significant cost reductions through intelligent resource management and optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;