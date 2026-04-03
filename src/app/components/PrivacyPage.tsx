export function PrivacyPage() {
  const sections = [
    {
      title: '1. Introduction',
      content:
        'This Privacy Policy describes how M4B Investments collects, uses, and protects personal data submitted through this website.'
    },
    {
      title: '2. Data Collected',
      content: 'We collect only data submitted via the contact form:',
      list: ['Name', 'Company', 'Email', 'Message', 'Inquiry category']
    },
    {
      title: '3. Use of Data',
      content: 'Used only to:',
      list: ['Evaluate opportunities', 'Respond to inquiries', 'Maintain internal records'],
      note: 'No marketing use.'
    },
    {
      title: '4. Data Sharing',
      content:
        'We do not sell or distribute data. Data may be shared internally or with service providers when necessary.'
    },
    {
      title: '5. Data Retention',
      content: 'Data is retained only as long as necessary for evaluation and records.'
    },
    {
      title: '6. Security',
      content: 'We apply reasonable security measures to protect data.'
    },
    {
      title: '7. User Rights',
      content: 'Users may request:',
      list: ['Access', 'Correction', 'Deletion']
    },
    {
      title: '8. Third-Party Services',
      content: 'We may use infrastructure providers for hosting and form processing.'
    },
    {
      title: '9. Cookies',
      content: 'Only minimal functional cookies may be used. No tracking or advertising cookies.'
    },
    {
      title: '10. Updates',
      content: 'Policy may be updated periodically.'
    },
    {
      title: '11. Contact',
      content: 'Privacy inquiries must be submitted via the website form.'
    }
  ];

  return (
    <div className="w-full pt-[95px] pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#fafafa]">Privacy Policy</h1>
          <p className="text-lg text-[#a3a3a3]">
            Last updated: April 3, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl mb-4 text-[#fafafa]">{section.title}</h2>
              <p className="text-[#a3a3a3] leading-relaxed mb-4">{section.content}</p>
              {section.list && (
                <ul className="space-y-2 ml-6 text-[#a3a3a3]">
                  {section.list.map((item, i) => (
                    <li key={i} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-4 text-[#a3a3a3] italic">{section.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 p-8 bg-[rgba(26,26,26,0.3)] rounded-lg border border-[#262626]">
          <h3 className="text-xl mb-4 text-[#fafafa]">Questions about this policy?</h3>
          <p className="text-[#a3a3a3]">
            Please submit your privacy-related questions through our contact form.
          </p>
        </div>
      </div>
    </div>
  );
}
