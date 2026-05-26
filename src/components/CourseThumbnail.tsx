import React from "react";
import { Sparkles, Play, Cpu, Layers, Terminal, Film, Code, Bot, Calendar, Eye } from "lucide-react";

interface CourseThumbnailProps {
  courseId: string;
  isHovered?: boolean;
}

export default function CourseThumbnail({ courseId, isHovered = false }: CourseThumbnailProps) {
  switch (courseId) {
    case "basics-master":
      return (
        <div className="relative w-full h-40 md:h-44 rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-900 group-hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between p-4">
          {/* Neon mesh background */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:12px_12px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent z-[1]" />
          
          {/* Top glowing orbs */}
          <div className="absolute top-2 left-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" />
          
          {/* Header */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-cyan-400">
            <span className="flex items-center gap-1.5 uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              Core prompt terminal
            </span>
            <span className="text-slate-500">status: active</span>
          </div>

          {/* Interactive Shell Input */}
          <div className="relative z-10 font-mono text-xs bg-slate-900/80 border border-white/5 backdrop-blur-sm rounded-lg p-2.5 shadow-sm space-y-1.5 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex items-center gap-1.5 text-cyan-300">
              <span className="text-pink-500 font-bold">&gt;</span>
              <span>/imagine prompt:</span>
            </div>
            <div className="text-slate-300 text-[11px] truncate pl-3">
              cinematic studio light, cyberpunk neo-tokyo street
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-500 pl-3">
              <span>--ar 16:9 --v 6.0</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            </div>
          </div>

          {/* Lower level visual indicators */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
            <span>Tokens: 42.5k / sec</span>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-spin-slow" />
              <span className="text-cyan-400/90">FOUNDATIONAL AI</span>
            </div>
          </div>
        </div>
      );

    case "media-production":
      return (
        <div className="relative w-full h-40 md:h-44 rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-900 group-hover:border-fuchsia-500/20 transition-all duration-300 flex flex-col justify-between p-4">
          {/* Neon mesh background */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#f0abfc_1px,transparent_1px),linear-gradient(to_bottom,#f0abfc_1px,transparent_1px)] bg-[size:16px_16px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent z-[1]" />
          
          {/* Top glowing orbs */}
          <div className="absolute top-6 right-10 w-24 h-24 bg-fuchsia-400/10 rounded-full blur-2xl animate-pulse" />
          
          {/* Header */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-fuchsia-400">
            <span className="flex items-center gap-1.5 uppercase tracking-wider">
              <Film className="w-3.5 h-3.5 text-fuchsia-400 animate-spin-slow" />
              Virtual production suite
            </span>
            <span className="text-slate-500">H.265 / ProRES</span>
          </div>

          {/* Video Timeline Simulation */}
          <div className="relative z-10 bg-slate-900/90 border border-white/5 backdrop-blur-sm rounded-lg p-2.5 shadow-sm space-y-2 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500">
              <div className="flex gap-1">
                <span className="text-fuchsia-400 font-bold">● REC</span>
                <span>00:14:02</span>
              </div>
              <span>FPS: 24.00</span>
            </div>
            
            {/* Timeline Wave tracks */}
            <div className="space-y-1">
              {/* Video Track */}
              <div className="h-2 w-full bg-slate-800 rounded relative overflow-hidden flex items-center">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded transition-all duration-500" 
                  style={{ width: isHovered ? "85%" : "60%" }}
                />
                <span className="absolute right-2 text-[7px] font-mono text-white/50">V_A_I</span>
              </div>
              {/* Audio Track */}
              <div className="h-2 w-full bg-slate-800 rounded relative overflow-hidden flex items-center">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded transition-all duration-500" 
                  style={{ width: isHovered ? "92%" : "75%" }}
                />
                <div className="absolute inset-0 flex items-center justify-around px-2 opacity-40">
                  <div className="h-1 w-0.5 bg-white animate-pulse" />
                  <div className="h-2 w-0.5 bg-white animate-pulse delay-75" />
                  <div className="h-1.5 w-0.5 bg-white animate-pulse delay-100" />
                  <div className="h-1 w-0.5 bg-white animate-pulse" />
                  <div className="h-2.5 w-0.5 bg-white animate-pulse delay-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
            <span>Audio: Synthetic Voice Clone</span>
            <div className="flex items-center gap-2">
              <Play className="w-3 h-3 text-fuchsia-400 fill-fuchsia-400" />
              <span className="text-fuchsia-400/90">CINEMATIC AI</span>
            </div>
          </div>
        </div>
      );

    case "vibe-coding":
      return (
        <div className="relative w-full h-40 md:h-44 rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-900 group-hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between p-4">
          {/* Neon mesh background */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[size:14px_14px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent z-[1]" />
          
          {/* Top glowing orbs */}
          <div className="absolute top-4 left-1/3 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl animate-pulse" />
          
          {/* Header */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-amber-500">
            <span className="flex items-center gap-1.5 uppercase tracking-wider">
              <Code className="w-3.5 h-3.5 text-amber-500" />
              Dev studio sandbox
            </span>
            <span className="text-slate-500">react / typescript</span>
          </div>

          {/* Code Window Simulation */}
          <div className="relative z-10 bg-slate-900/90 border border-white/5 backdrop-blur-sm rounded-lg p-2.5 shadow-sm space-y-1.5 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex gap-1.5 pb-1 border-b border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
            </div>
            <div className="font-mono text-[9px] text-slate-400 space-y-0.5">
              <div className="text-[#a78bfa]"><span className="text-[#f472b6]">const</span> App = () =&gt; &#123;</div>
              <div className="pl-2">
                <span className="text-[#38bdf8]">const</span> [state, setState] = <span className="text-[#38bdf8]">vibe</span>();
              </div>
              <div className="pl-2 text-amber-300">
                &lt;<span className="text-amber-400">Card</span> className=<span className="text-emerald-300">"glow-neon"</span> /&gt;
              </div>
              <div className="text-[#a78bfa]">&#125;</div>
            </div>
          </div>

          {/* Outcomes badge */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
            <span>Server: Vercel Cloud Node</span>
            <div className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-amber-500 animate-pulse" />
              <span className="text-amber-500/90">VIBE DEVELOPMENT</span>
            </div>
          </div>
        </div>
      );

    case "claude-mastery":
      return (
        <div className="relative w-full h-40 md:h-44 rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-900 group-hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between p-4">
          {/* Neon mesh background */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#818cf8_1px,transparent_1px),linear-gradient(to_bottom,#818cf8_1px,transparent_1px)] bg-[size:16px_10px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent z-[1]" />
          
          {/* Top glowing orbs */}
          <div className="absolute top-2 right-12 w-24 h-24 bg-indigo-500/15 rounded-full blur-2xl animate-pulse" />
          
          {/* Header */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-indigo-400">
            <span className="flex items-center gap-1.5 uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5 text-indigo-400 animate-bounce" />
              Claude cognitive node
            </span>
            <span className="text-slate-500">model: claude-3-5-sonnet</span>
          </div>

          {/* Workflow boxes */}
          <div className="relative z-10 flex gap-2 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex-1 bg-slate-900/90 border border-indigo-500/10 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center justify-center gap-1 cursor-default text-center">
              <span className="text-[8px] font-mono text-indigo-300 uppercase tracking-wider">User Input</span>
              <div className="w-full h-1.5 bg-indigo-950/50 rounded overflow-hidden">
                <div 
                  className="h-full bg-indigo-400" 
                  style={{ width: isHovered ? "100%" : "30%" }}
                />
              </div>
            </div>
            
            <div className="flex items-center text-indigo-500/40">
              <span className="text-xs">→</span>
            </div>

            <div className="flex-1 bg-slate-900/90 border border-indigo-500/20 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center justify-center gap-1 cursor-default text-center">
              <span className="text-[8px] font-mono text-purple-300 uppercase tracking-wider">Claude Agent</span>
              <div className="w-full h-1.5 bg-indigo-950/50 rounded overflow-hidden">
                <div 
                  className="h-full bg-purple-400 animate-pulse" 
                  style={{ width: isHovered ? "100%" : "60%" }}
                />
              </div>
            </div>

            <div className="flex items-center text-indigo-500/40">
              <span className="text-xs">→</span>
            </div>

            <div className="flex-1 bg-slate-900/90 border border-indigo-500/10 backdrop-blur-sm rounded-lg p-2 flex flex-col items-center justify-center gap-1 cursor-default text-center">
              <span className="text-[8px] font-mono text-emerald-300 uppercase tracking-wider">Result Block</span>
              <div className="w-full h-1.5 bg-indigo-950/50 rounded overflow-hidden">
                <div 
                  className="h-full bg-emerald-400" 
                  style={{ width: isHovered ? "100%" : "15%" }}
                />
              </div>
            </div>
          </div>

          {/* Outcomes badge */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
            <span>Memory: Context Restored</span>
            <div className="flex items-center gap-1">
              <Layers className="w-3 h-3 text-indigo-400" />
              <span className="text-indigo-400/90">INTELLIGENT WORKFLOWS</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
