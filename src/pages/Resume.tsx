import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import portfolioData from "@/data/portfolioData";

const Resume = () => {
  useEffect(() => {
    document.title = `${portfolioData.personal.name} — Resume`;
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] flex flex-col selection:bg-[#e8a317]/25 selection:text-[#e8a317]">
      {/* Top Header */}
      <header className="border-b border-[#1f1f1f] bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-50 px-4 py-3 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#a3a3a3] hover:text-[#e8a317] transition-colors text-xs font-medium"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="hidden sm:flex flex-col items-center">
            <span
              className="font-bold text-sm text-[#f0f0f0] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {portfolioData.personal.name}
            </span>
            <span className="text-xs text-[#a3a3a3]">
              {portfolioData.personal.role}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Rajoan_Tamjid_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#a3a3a3] hover:text-[#f0f0f0] border border-[#242424] hover:border-[#383838] px-3 py-1.5 rounded-lg bg-[#141414] transition-all"
            >
              <ExternalLink size={13} />
              Open in New Tab
            </a>
            <a
              href="/Rajoan_Tamjid_CV.pdf"
              download="Rajoan_Tamjid_Antor_Resume.pdf"
              className="btn-amber text-xs px-4 py-1.5 rounded-lg"
            >
              <Download size={14} className="mr-1" />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* Embedded Document View */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-3 sm:p-6 flex flex-col">
        <div className="flex-1 w-full bg-[#111111] border border-[#222222] rounded-xl overflow-hidden shadow-2xl min-h-[85vh] relative flex flex-col">
          <iframe
            src="/Rajoan_Tamjid_CV.pdf#toolbar=0"
            title={`${portfolioData.personal.name} Resume`}
            className="w-full flex-1 min-h-[85vh] border-0"
          />
        </div>
      </main>
    </div>
  );
};

export default Resume;
