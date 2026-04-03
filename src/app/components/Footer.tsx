interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-1 tracking-tight text-[#fafafa]">M4B INVESTMENTS - FZCO</h3>
            <p className="text-[#a3a3a3] text-sm">Registration Number: 57796</p>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <button
              onClick={() => onNavigate('privacy')}
              className="text-[#a3a3a3] hover:text-[#fafafa] transition-colors text-sm"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#262626]">
          <p className="text-sm text-[#a3a3a3]">
            This website is operated by M4B Investments. All information provided is for informational purposes only.
          </p>
          <p className="text-xs text-[#a3a3a3] mt-4 text-center">
            © 2026 M4B Investments FZCO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
