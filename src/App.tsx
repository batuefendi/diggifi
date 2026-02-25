/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Maximize2, ExternalLink } from "lucide-react";

export default function App() {
  const figmaUrl = "https://embed.figma.com/proto/0hrqRyW0LnLP5X1Gyo3nMd/DIGGIFI?page-id=4436%3A22800&node-id=4436-22801&viewport=825%2C371%2C0.17&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4436%3A22914&embed-host=share";

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="h-16 border-b border-black/5 bg-white flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">D</span>
          </div>
          <h1 className="font-medium tracking-tight text-zinc-900">DIGGIFI Prototype</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={figmaUrl.replace("embed.figma.com", "www.figma.com")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black transition-colors"
          >
            <ExternalLink size={14} />
            Open in Figma
          </a>
          <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-500 hover:text-black">
            <Maximize2 size={18} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-6xl aspect-video bg-white rounded-2xl shadow-xl shadow-black/5 border border-black/5 overflow-hidden relative"
        >
          <iframe 
            style={{ border: "none" }}
            width="100%" 
            height="100%" 
            src={figmaUrl} 
            allowFullScreen
            title="DIGGIFI Figma Prototype"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-400 text-[10px] uppercase tracking-widest font-medium">
        <p>© 2026 DIGGIFI DESIGN SYSTEM</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition-colors">Documentation</a>
          <a href="#" className="hover:text-black transition-colors">Components</a>
          <a href="#" className="hover:text-black transition-colors">Feedback</a>
        </div>
      </footer>
    </div>
  );
}
