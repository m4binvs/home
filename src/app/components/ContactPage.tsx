import { useState, FormEvent } from 'react';
import { Input, Textarea, Select } from './Input';
import { Button } from './Button';
import { Card } from './Card';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    category: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const subject = encodeURIComponent(`M4B Partnership Inquiry - ${formData.category}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:info@m4binvestments.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full pt-[95px] pb-20 px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#fafafa]">Start a Conversation</h1>
          <p className="text-xl text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
            We review a limited number of opportunities aligned with our focus areas.
          </p>
        </div>

        {/* Form Card */}
        <Card>
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl mb-4 text-[#fafafa]">Thank you for your interest</h2>
              <p className="text-[#a3a3a3]">
                Your email client should have opened. If not, please email us directly at{' '}
                <span className="text-[#fafafa]">info@m4binvestments.com</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                <Input
                  label="Company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                />
              </div>

              <Input
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />

              <Select
                label="Category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="Startup seeking growth funding">
                  Startup seeking growth funding
                </option>
                <option value="Existing company seeking verticalization and scale">
                  Existing company seeking verticalization and scale
                </option>
                <option value="Entrepreneur seeking seed funding">
                  Entrepreneur seeking seed funding
                </option>
              </Select>

              <Textarea
                label="Message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your company and opportunity..."
              />

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          )}
        </Card>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-[rgba(26,26,26,0.3)] rounded-lg border border-[#262626]">
          <p className="text-sm text-[#a3a3a3] leading-relaxed">
            <strong className="text-[#fafafa]">Note:</strong> We only respond to inquiries that
            fall within:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#a3a3a3] ml-6">
            <li className="list-disc">Startups seeking growth funding</li>
            <li className="list-disc">Existing companies seeking scale and verticalization</li>
            <li className="list-disc">Innovative models seeking seed funding</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
