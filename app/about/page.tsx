import { Target, Award, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">BeGlobal</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Empowering businesses to reach global markets through innovative digital solutions
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to break down digital barriers, BeGlobal has been at the forefront of helping businesses expand their reach beyond borders. We understand that in today's interconnected world, having a strong digital presence is not just an advantage—it's essential.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team combines years of experience in web development, mobile app creation, and creative design to deliver solutions that don't just look great, but drive real business results in global markets.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries Reached</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To democratize global market access by providing world-class digital solutions that enable businesses of all sizes to compete and succeed internationally.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                A world where geographical boundaries don't limit business potential, and every company has the tools to reach global audiences effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, delivering solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                Staying ahead of trends and technologies to provide cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Partnership</h3>
              <p className="text-gray-600">
                Building long-term relationships with our clients based on trust and mutual success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Global Mindset</h3>
              <p className="text-gray-600">
                Understanding diverse markets and cultures to create universally appealing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets BeGlobal apart in the competitive digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-blue-600 text-white text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                5+
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Years of Experience</h3>
              <p className="text-gray-600">
                Proven track record of delivering successful digital solutions across various industries.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-slate-600 text-white text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                24/7
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Support</h3>
              <p className="text-gray-600">
                Round-the-clock support to ensure your business never misses an opportunity.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-gray-600 text-white text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                100%
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Satisfaction</h3>
              <p className="text-gray-600">
                Commitment to client satisfaction with guaranteed results and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's work together to take your business to the next level
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}