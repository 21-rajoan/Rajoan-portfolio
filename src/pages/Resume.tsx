import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import portfolioData from "@/data/portfolioData";

const Resume = () => {
  useEffect(() => {
    document.title = `${portfolioData.personal.name} — Resume`;
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1015] text-white flex flex-col">
      {/* Top Header */}
      <header className="border-b border-border/50 bg-[#0F161E]/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/80 hover:text-[#00E59B] transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="hidden sm:flex flex-col items-center">
            <span className="font-bold text-sm text-white">
              {portfolioData.personal.name}
            </span>
            <span className="text-xs text-white/50 font-mono">
              {portfolioData.personal.role}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              className="bg-[#00E59B] hover:bg-[#00E59B]/90 text-black font-bold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all"
              asChild
            >
              <a
                href="/Rajoan_Tamjid_CV.pdf"
                download="Rajoan_Tamjid_Antor_CV.pdf"
              >
                <Download size={15} className="mr-1.5" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Embedded Document View */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-3 sm:p-6 flex flex-col">
        <div className="flex-1 w-full bg-[#11181C] border border-border/50 rounded-2xl overflow-hidden shadow-2xl min-h-[85vh]">
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
