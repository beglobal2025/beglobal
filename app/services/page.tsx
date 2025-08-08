import { Palette, Smartphone, Monitor, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    title: 'Creative Design',
    icon: Palette,
    description: 'Transform your brand with stunning visual identity and creative solutions',
    features: [
      'Brand Identity & Logo Design',
      'Marketing Material Design',
      'Social Media Graphics',
      'Print Design Solutions',
      'Creative Campaign Development',
      'Brand Guidelines Creation'
    ],
    gradient: 'from-blue-600 to-blue-700',
    iconBg: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Mobile Apps Design',
    icon: Smartphone,
    description: 'Create engaging mobile experiences that drive user engagement and growth',
    features: [
      'iOS & Android App Design',
      'User Experience (UX) Design',
      'Interactive Prototyping',
      'App Store Optimization',
      'Cross-Platform Solutions',
      'Performance Optimization'
    ],
    gradient: 'from-slate-600 to-slate-700',
    iconBg: 'from-slate-500 to-slate-600'
  },
  {
    title: 'Website Design',
    icon: Monitor,
    description: 'Build professional websites that convert visitors into customers',
    features: [
      'Responsive Web Design',
      'E-commerce Development',
      'SEO Optimization',
      'Content Management Systems',
      'Performance & Speed Optimization',
      'Ongoing Maintenance & Support'
    ],
    gradient: 'from-gray-600 to-gray-700',
    iconBg: 'from-gray-500 to-gray-600'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Comprehensive digital solutions to help your business succeed in the global marketplace
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white`}>
                  <div className={`bg-gradient-to-br ${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg opacity-90">{service.description}</p>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-r ${service.gradient} rounded-full p-1`}>
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center space-x-2`}>
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business goals and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive plan for success' },
              { step: '03', title: 'Design & Development', description: 'Creating and building your solution' },
              { step: '04', title: 'Launch & Support', description: 'Going live and providing ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-slate-800 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}