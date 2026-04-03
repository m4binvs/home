import { Button } from './Button';
import { Card } from './Card';
import { ImageWithFallback } from './ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const principles = [
    {
      title: 'AI-First Development',
      description: 'Software built with automation and intelligence at its core'
    },
    {
      title: 'Scalable Architectures',
      description: 'Systems designed for exponential growth'
    },
    {
      title: 'Ownership & Efficiency',
      description: 'Reduced reliance on external dependencies'
    }
  ];

  return (
    <div className="w-full pt-[75px]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(151.502deg, rgba(99, 102, 241, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(212, 175, 55, 0.05) 100%)' }} />

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1770210217380-d78a69acdc77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjBkYXJrJTIwZnV0dXJpc3RpYyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1MjIwNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="AI neural network visualization"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl mb-8 tracking-tight font-bold leading-[1.25]">
            <span className="text-[#fafafa]">Strategic Capital for the</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(99, 102, 241) 0%, rgb(105, 111, 232) 7.1429%, rgb(112, 118, 222) 14.286%, rgb(119, 125, 213) 21.429%, rgb(126, 132, 203) 28.571%, rgb(134, 138, 193) 35.714%, rgb(142, 143, 182) 42.857%, rgb(150, 148, 171) 50%, rgb(159, 153, 160) 57.143%, rgb(167, 157, 147) 64.286%, rgb(176, 161, 134) 71.429%, rgb(185, 165, 119) 78.571%, rgb(194, 168, 103) 85.714%, rgb(203, 172, 83) 92.857%, rgb(212, 175, 55) 100%)'
              }}
            >
              Next Generation
            </span>
            <br />
            <span className="text-[#fafafa]">of Software</span>
          </h1>
          <p className="text-lg md:text-xl text-[#a3a3a3] mb-12 max-w-3xl mx-auto leading-relaxed">
            We invest in and partner with technology companies building scalable, AI-driven systems
            designed for efficiency, ownership, and long-term advantage.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate('contact')}
              className="shadow-lg shadow-[#6366f1]/20"
            >
              Request Partnership
            </Button>
            <button
              onClick={() => onNavigate('investments')}
              className="px-8 py-4 text-lg rounded-lg border border-[#262626] text-[#fafafa] hover:bg-[#262626] transition-all duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 tracking-tight text-[#fafafa]">
                Building the Future of Software
              </h2>
              <div className="space-y-6 text-lg text-[#a3a3a3] leading-relaxed">
                <p>
                  M4B Investments is a strategic investment and consultancy firm focused on companies
                  developing software at scale using AI-first principles.
                </p>
                <p>
                  We work closely with founders and operators to design, optimize, and scale systems
                  that reduce dependency, increase efficiency, and create long-term defensibility.
                </p>
                <p className="text-[#fafafa]">
                  Our approach combines capital, technical insight, and operational execution.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771057761600-0bfaa2646bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZ2VvbWV0cmljJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc1MjE5NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Abstract architectural detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-32 px-6 lg:px-8 bg-[rgba(26,26,26,0.3)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-center tracking-tight text-[#fafafa]">
            Our Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#6366f1] flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white rounded" />
                  </div>
                  <h3 className="text-2xl text-[#fafafa]">{principle.title}</h3>
                  <p className="text-[#a3a3a3] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Call-to-Action Section */}
      <section
        className="py-24 px-6 lg:px-8"
        style={{
          background: 'linear-gradient(166.652deg, rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0.9) 50%, rgb(212, 175, 55) 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white tracking-tight font-bold">
            Ready to Scale Your Vision?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join the next generation of AI-driven software companies building scalable, efficient systems.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('contact')}
            className="shadow-xl"
          >
            Start the Conversation
          </Button>
        </div>
      </section>
    </div>
  );
}
