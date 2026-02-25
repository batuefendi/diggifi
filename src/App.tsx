/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Maximize2, ExternalLink } from "lucide-react";

export default function App() {
  // Added &hide-ui=1 and changed scaling to scale-down-to-fit for better mobile fitting
  const figmaUrl = "https://embed.figma.com/proto/0hrqRyW0LnLP5X1Gyo3nMd/DIGGIFI?page-id=4436%3A22800&node-id=4436-22801&viewport=825%2C371%2C0.17&scaling=scale-down-to-fit&content-scaling=fixed&starting-point-node-id=4436%3A22914&embed-host=share&hide-ui=1";

  return (
    <div className="h-[100dvh] w-full bg-black flex flex-col font-sans selection:bg-white selection:text-black overflow-hidden">
      {/* Header - Desktop Only */}
      <header className="hidden md:flex h-16 border-b border-white/10 bg-zinc-900 items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xs">D</span>
          </div>
          <h1 className="font-medium tracking-tight text-white">DIGGIFI Prototype</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={figmaUrl.replace("embed.figma.com", "www.figma.com")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            Open in Figma
          </a>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white">
            <Maximize2 size={18} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full h-full md:p-8 flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full md:max-w-6xl md:h-[80vh] bg-black md:rounded-2xl md:shadow-2xl md:border md:border-white/10 overflow-hidden relative"
        >
          <iframe 
            style={{ border: "none" }}
            width="100%" 
            height="100%" 
            src={figmaUrl} 
            allowFullScreen
            title="DIGGIFI Figma Prototype"
            className="w-full h-full block"
          />
        </motion.div>
      </main>

      {/* Footer - Desktop Only */}
      <footer className="hidden md:flex py-4 px-8 border-t border-white/10 bg-zinc-900 justify-between items-center text-zinc-500 text-[10px] uppercase tracking-widest font-medium shrink-0">
        <p>© 2026 DIGGIFI DESIGN SYSTEM</p>
      </footer>
    </div>
  );
}
