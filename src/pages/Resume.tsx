import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import portfolioData from "@/data/portfolioData";

const Resume = () => {
  useEffect(() => {
    document.title = `${portfolioData.personal.name} — Resume`;
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#8892B0] flex flex-col">
      {/* Top Header */}
      <header className="border-b border-[#233554] bg-[#0A192F]/90 backdrop-blur-md sticky top-0 z-50 px-4 py-3 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-xs font-mono"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="hidden sm:flex flex-col items-center">
            <span className="font-bold text-sm text-[#CCD6F6]">
              {portfolioData.personal.name}
            </span>
            <span className="text-xs text-[#8892B0] font-mono">
              {portfolioData.personal.role}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Rajoan_Tamjid_CV.pdf"
              download="Rajoan_Tamjid_Antor_CV.pdf"
              className="btn-primary text-xs font-mono px-3.5 py-1.5"
            >
              <Download size={14} className="mr-1.5" />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* Embedded Document View */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-3 sm:p-6 flex flex-col">
        <div className="flex-1 w-full bg-[#112240] border border-[#233554] rounded-xl overflow-hidden shadow-2xl min-h-[85vh]">
          <iframe
            src="/Rajoan_Tamjid_CV.pdf"
            title={`${portfolioData.personal.name} CV`}
            className="w-full h-full min-h-[85vh] border-0"
          />
        </div>
      </main>
    </div>
  );
};

export default Resume;
