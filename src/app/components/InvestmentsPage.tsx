import { Card } from './Card';
import { ImageWithFallback } from './ImageWithFallback';

export function InvestmentsPage() {
  const investmentAreas = [
    {
      title: 'B2B SaaS Replacement & Verticalization',
      description:
        'We invest in companies replacing traditional SaaS models with AI-driven systems. These companies build vertically integrated solutions that improve performance, reduce costs, and eliminate unnecessary dependencies.',
      themes: ['Low external dependency', 'High scalability', 'Full ownership'],
      image: 'https://images.unsplash.com/photo-1744146177772-0c9642153e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwc3lzdGVtJTIwYmxvY2tzJTIwc3RydWN0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzUyMTk1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'Geometric shapes in cube-shaped grids representing modular systems'
    },
    {
      title: 'Martech',
      description:
        'Marketing technology enables companies to acquire and retain customers through data-driven systems. We focus on AI-powered platforms that optimize acquisition, personalization, and automation at scale.',
      themes: [],
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxlbWFpbCUyMG1hcmtldGluZyUyMGF1dG9tYXRpb24lMjBjYW1wYWlnbiUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc3NTIyMDU1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'Social media marketing platforms and channels'
    },
    {
      title: 'Fintech',
      description:
        'Financial technology powers modern digital infrastructure. We invest in systems that enable efficient payments, financial operations, and scalable transaction processing.',
      themes: [],
      image: 'https://images.unsplash.com/photo-1758874573126-cf93a36261e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGlnaXRhbCUyMHBheW1lbnQlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzUyMTk1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'Digital payment and fintech technology'
    }
  ];

  return (
    <div className="w-full pt-[95px] pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl mb-8 tracking-tight text-[#fafafa]">Areas of Focus</h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed">
            We focus on sectors where software can be redefined through AI, efficiency, and vertical
            integration.
          </p>
        </div>

        {/* Investment Areas */}
        <div className="space-y-32">
          {investmentAreas.map((area, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-4xl md:text-5xl mb-6 tracking-tight text-[#fafafa]">{area.title}</h2>
                <p className="text-lg text-[#a3a3a3] leading-relaxed mb-8">
                  {area.description}
                </p>
                {area.themes.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-wider text-[#6366f1]">
                      Key Themes
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {area.themes.map((theme, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-[#27272A] border border-[#262626] rounded-full text-sm text-[#fafafa]"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Image */}
              <div
                className={`relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <ImageWithFallback
                  src={area.image}
                  alt={area.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
