import React, { useState } from 'react';
import { ChevronDown, Droplets, Waves, Circle, Copy, Check, Eye, EyeOff } from 'lucide-react';

// Mazu Brand Colors
const colors = {
  primary: {
    mediumSpringGreen: { hex: '#05eab0', rgb: '5, 234, 176', name: 'Medium Spring Green', usage: 'Primary accent, highlights, CTAs' },
    blueNCS: { hex: '#0081bc', rgb: '0, 129, 188', name: 'Mazu Blue', usage: 'Primary brand color, headings' },
    bangladeshGreen: { hex: '#006859', rgb: '0, 104, 89', name: 'Deep Teal', usage: 'Secondary accent, depth elements' },
  },
  neutral: {
    white: { hex: '#ffffff', rgb: '255, 255, 255', name: 'Pure White', usage: 'Backgrounds, text on dark' },
    lightSilver: { hex: '#dadad8', rgb: '218, 218, 216', name: 'Light Silver', usage: 'Subtle backgrounds, borders' },
    raisinBlack: { hex: '#222222', rgb: '34, 34, 34', name: 'Raisin Black', usage: 'Text, dark backgrounds' },
  }
};

// Color Swatch Component
const ColorSwatch = ({ color, large }) => {
  const [copied, setCopied] = useState(false);
  
  const copyHex = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className={`group cursor-pointer ${large ? 'flex-1 min-w-[180px]' : ''}`} onClick={copyHex}>
      <div 
        className={`${large ? 'h-32' : 'h-24'} rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl flex items-end justify-end p-3`}
        style={{ backgroundColor: color.hex }}
      >
        {copied ? (
          <Check className={`${color.hex === '#ffffff' || color.hex === '#dadad8' ? 'text-gray-700' : 'text-white'} w-5 h-5`} />
        ) : (
          <Copy className={`${color.hex === '#ffffff' || color.hex === '#dadad8' ? 'text-gray-400' : 'text-white/60'} w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity`} />
        )}
      </div>
      <div className="mt-3 space-y-1">
        <p className="font-semibold text-gray-800 text-sm">{color.name}</p>
        <p className="text-xs font-mono text-gray-500">{color.hex.toUpperCase()}</p>
        <p className="text-xs text-gray-400">RGB: {color.rgb}</p>
        {large && <p className="text-xs text-gray-500 mt-2">{color.usage}</p>}
      </div>
    </div>
  );
};

// Mazu Symbol SVG Component - Based on official brand logo
const MazuSymbol = ({ className, gradient = true, uniqueId = '' }) => (
  <svg viewBox="0 0 120 100" className={className}>
    <defs>
      {/* Top gradient - cyan/turquoise */}
      <linearGradient id={`mazuTopGradient${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3DE8D4" />
        <stop offset="50%" stopColor="#2DD4BF" />
        <stop offset="100%" stopColor="#14B8A6" />
      </linearGradient>
      {/* Bottom gradient - deep blue */}
      <linearGradient id={`mazuBottomGradient${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0369A1" />
        <stop offset="100%" stopColor="#075985" />
      </linearGradient>
      {/* Clip path for the circle */}
      <clipPath id={`mazuCircleClip${uniqueId}`}>
        <circle cx="60" cy="50" r="38" />
      </clipPath>
    </defs>

    {/* Main circle background - top cyan part */}
    <circle cx="60" cy="50" r="38" fill={gradient ? `url(#mazuTopGradient${uniqueId})` : "currentColor"} />

    {/* Bottom wave/mountain shape - deep blue */}
    <path
      d="M22 50
         Q35 42 48 50
         Q60 58 60 58
         Q60 58 72 50
         Q85 42 98 50
         L98 88
         Q60 88 22 88 Z"
      fill={gradient ? `url(#mazuBottomGradient${uniqueId})` : "currentColor"}
      clipPath={`url(#mazuCircleClip${uniqueId})`}
    />

    {/* Extended wave lines - left side */}
    <path
      d="M8 48 Q20 40 35 48"
      stroke={gradient ? "#2DD4BF" : "currentColor"}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M12 53 Q22 46 34 53"
      stroke={gradient ? "#5EEAD4" : "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />

    {/* Extended wave lines - right side */}
    <path
      d="M85 48 Q100 40 112 48"
      stroke={gradient ? "#2DD4BF" : "currentColor"}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M86 53 Q98 46 108 53"
      stroke={gradient ? "#5EEAD4" : "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />

    {/* Center M-shaped wave */}
    <path
      d="M28 52 Q42 42 54 52 Q60 56 66 52 Q78 42 92 52"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Water droplet */}
    <path
      d="M60 24
         Q54 34 54 38
         Q54 44 60 44
         Q66 44 66 38
         Q66 34 60 24 Z"
      fill="white"
    />
  </svg>
);

// Wave Pattern Component
const WavePattern = ({ className }) => (
  <svg viewBox="0 0 400 100" className={className} preserveAspectRatio="none">
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#05eab0" />
        <stop offset="50%" stopColor="#006859" />
        <stop offset="100%" stopColor="#0081bc" />
      </linearGradient>
    </defs>
    <path d="M0 50 Q100 20 200 50 Q300 80 400 50 L400 100 L0 100 Z" fill="url(#waveGradient)" opacity="0.3" />
    <path d="M0 60 Q100 30 200 60 Q300 90 400 60 L400 100 L0 100 Z" fill="url(#waveGradient)" opacity="0.5" />
    <path d="M0 70 Q100 40 200 70 Q300 100 400 70 L400 100 L0 100 Z" fill="url(#waveGradient)" opacity="0.8" />
  </svg>
);

// Section Component
const Section = ({ id, title, subtitle, children, dark }) => (
  <section 
    id={id} 
    className={`py-20 px-8 ${dark ? 'bg-gray-900 text-white' : 'bg-white'}`}
  >
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className={`text-3xl font-light tracking-wide ${dark ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-2 text-lg ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        )}
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
      </div>
      {children}
    </div>
  </section>
);

// Navigation Item
const NavItem = ({ href, children, active }) => (
  <a 
    href={href}
    className={`px-4 py-2 text-sm transition-colors ${
      active 
        ? 'text-cyan-400 border-b-2 border-cyan-400' 
        : 'text-gray-300 hover:text-white'
    }`}
  >
    {children}
  </a>
);

// Main Component
export default function MazuBrandGuidelines() {
  const [activeSection, setActiveSection] = useState('brand');
  const [showClearSpace, setShowClearSpace] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl" />
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <MazuSymbol className="w-10 h-10" uniqueId="nav" />
            <span className="text-xl font-light tracking-wider italic">mazu</span>
          </div>
          <div className="flex gap-2">
            <NavItem href="#brand" active={activeSection === 'brand'}>Brand</NavItem>
            <NavItem href="#colors" active={activeSection === 'colors'}>Colors</NavItem>
            <NavItem href="#typography" active={activeSection === 'typography'}>Typography</NavItem>
            <NavItem href="#logo" active={activeSection === 'logo'}>Logo</NavItem>
            <NavItem href="#applications" active={activeSection === 'applications'}>Applications</NavItem>
          </div>
        </nav>

        <div className="relative z-10 px-8 py-24 text-center">
          <div className="flex justify-center mb-8">
            <MazuSymbol className="w-28 h-28 drop-shadow-2xl" uniqueId="hero" />
          </div>
          <h1 className="text-5xl font-light tracking-widest mb-4 italic">mazu</h1>
          <p className="text-xl text-gray-300 font-light tracking-wide">Brand Guidelines</p>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Inspired by Mazu (媽祖), the revered Chinese goddess of the sea who protects fishermen and sailors,
            our brand embodies the protective spirit of water management and innovation.
          </p>
        </div>
        
        <WavePattern className="absolute bottom-0 left-0 right-0 h-24" />
      </header>

      {/* Brand Story Section */}
      <Section id="brand" title="Brand Story" subtitle="The Spirit of Water Protection">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-cyan-500" />
                Our Name Origin
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-cyan-700">Mazu (媽祖)</strong> is the Chinese goddess of the sea, 
                revered for centuries as the protector of seafarers, fishermen, and all those whose 
                lives depend on water. With over 30 years of experience in water measurement and 
                automation, we carry this protective spirit into modern water resource management.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🌊', title: 'Quality', desc: 'International standards' },
                { icon: '💡', title: 'Innovation', desc: 'Modern solutions' },
                { icon: '🌱', title: 'Sustainability', desc: 'Future-focused' }
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 rounded-3xl p-8 flex items-center justify-center">
              <MazuSymbol className="w-48 h-48 drop-shadow-xl" uniqueId="brand" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Industry</p>
              <p className="font-semibold text-gray-800">Water Meters & Automation</p>
              <p className="text-sm text-gray-500">Sanitation Sector</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Color Palette Section */}
      <Section id="colors" title="Color Palette" subtitle="A fluid spectrum inspired by water" dark>
        <div className="space-y-12">
          {/* Primary Colors */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              Primary Colors
            </h3>
            <div className="flex flex-wrap gap-6">
              {Object.values(colors.primary).map((color, i) => (
                <ColorSwatch key={i} color={color} large />
              ))}
            </div>
          </div>
          
          {/* Neutral Colors */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              Neutral Colors
            </h3>
            <div className="flex flex-wrap gap-6">
              {Object.values(colors.neutral).map((color, i) => (
                <ColorSwatch key={i} color={color} large />
              ))}
            </div>
          </div>

          {/* Gradient Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Waves className="w-4 h-4 text-cyan-400" />
              Brand Gradients
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="h-24 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Primary Gradient</span>
              </div>
              <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-700 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Rich Gradient</span>
              </div>
              <div className="h-24 rounded-xl bg-gradient-to-b from-cyan-300 to-teal-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Vertical Flow</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Typography Section */}
      <Section id="typography" title="Typography" subtitle="Clean, modern, and fluid">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Primary Font */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-600 font-semibold">Primary Font</span>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">Ramus Sans</h3>
              </div>
              <span className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full border">Logos & Headlines</span>
            </div>
            <div className="space-y-4">
              <p className="text-5xl font-light italic text-gray-800 tracking-wide">mazu</p>
              <p className="text-3xl font-semibold text-gray-700">Water Innovation</p>
              <p className="text-xl text-gray-600">Solutions for Tomorrow</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-400 mb-2">Complete alphabet:</p>
                <p className="text-sm text-gray-600 tracking-wide">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-sm text-gray-600 tracking-wide">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-sm text-gray-600">0123456789</p>
              </div>
            </div>
          </div>

          {/* Secondary Font */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-600 font-semibold">Secondary Font</span>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">Helixa Sans</h3>
              </div>
              <span className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full border">Body & UI</span>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Com mais de 30 anos de experiência no comércio exterior, 
                fornecemos soluções de medição e automação para o setor de saneamento.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Conectamos empresas a tecnologias inovadoras, garantindo qualidade, 
                eficiência e ótimo custo-benefício.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-400 mb-2">Weights available:</p>
                <div className="space-y-1">
                  <p className="text-sm font-light text-gray-600">Light 300</p>
                  <p className="text-sm font-normal text-gray-600">Regular 400</p>
                  <p className="text-sm font-medium text-gray-600">Medium 500</p>
                  <p className="text-sm font-semibold text-gray-600">SemiBold 600</p>
                  <p className="text-sm font-bold text-gray-600">Bold 700</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Type Scale */}
        <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Type Scale</h3>
          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-20">Display</span>
              <span className="text-5xl font-light text-gray-800 italic">Mazu</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-20">H1</span>
              <span className="text-4xl font-semibold text-gray-800">Water Solutions</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-20">H2</span>
              <span className="text-2xl font-semibold text-gray-700">Measurement Innovation</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-20">Body</span>
              <span className="text-base text-gray-600">High-quality water meters and automation systems.</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-20">Caption</span>
              <span className="text-sm text-gray-500">International certifications and standards.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Logo Section */}
      <Section id="logo" title="Logo System" subtitle="Versatile marks for any context" dark>
        {/* Logo Versions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Horizontal */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px]">
            <div className="flex items-center gap-4">
              <MazuSymbol className="w-16 h-16" uniqueId="logo-h" />
              <span className="text-3xl font-light text-blue-700 italic tracking-wide">mazu</span>
            </div>
            <span className="text-xs text-gray-400 mt-4">Horizontal</span>
          </div>

          {/* Vertical */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px]">
            <MazuSymbol className="w-20 h-20 mb-4" uniqueId="logo-v" />
            <span className="text-2xl font-light text-blue-700 italic tracking-wide">mazu</span>
            <span className="text-xs text-gray-400 mt-4">Vertical</span>
          </div>

          {/* Symbol Only */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px]">
            <MazuSymbol className="w-24 h-24" uniqueId="logo-s" />
            <span className="text-xs text-gray-400 mt-4">Symbol Only</span>
          </div>
        </div>

        {/* Color Variations */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Color Variations</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 flex items-center justify-center">
              <MazuSymbol className="w-16 h-16" uniqueId="var1" />
            </div>
            <div className="bg-blue-700 rounded-xl p-6 flex items-center justify-center">
              <MazuSymbol className="w-16 h-16 text-white" gradient={false} uniqueId="var2" />
            </div>
            <div className="bg-teal-600 rounded-xl p-6 flex items-center justify-center">
              <MazuSymbol className="w-16 h-16 text-white" gradient={false} uniqueId="var3" />
            </div>
            <div className="bg-gray-900 rounded-xl p-6 flex items-center justify-center border border-gray-700">
              <MazuSymbol className="w-16 h-16" uniqueId="var4" />
            </div>
          </div>
        </div>

        {/* Clear Space */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Clear Space & Minimum Size</h3>
            <button 
              onClick={() => setShowClearSpace(!showClearSpace)}
              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
            >
              {showClearSpace ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showClearSpace ? 'Hide' : 'Show'} Guidelines
            </button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative inline-block">
              {showClearSpace && (
                <>
                  <div className="absolute inset-0 border-2 border-dashed border-cyan-400/50 -m-8 rounded-lg" />
                  <div className="absolute top-0 left-0 right-0 h-8 -mt-8 flex items-center justify-center">
                    <span className="text-xs text-cyan-400">X</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 -mb-8 flex items-center justify-center">
                    <span className="text-xs text-cyan-400">X</span>
                  </div>
                </>
              )}
              <div className="flex items-center gap-4 bg-white rounded-xl p-8">
                <MazuSymbol className="w-16 h-16" uniqueId="clearspace" />
                <span className="text-3xl font-light text-blue-700 italic">mazu</span>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-400 text-sm mt-8">
            Maintain clear space equal to "X" (the height of the symbol) around all sides of the logo.
            Minimum size: 30px height for digital, 10mm for print.
          </p>
        </div>
      </Section>

      {/* Applications Section */}
      <Section id="applications" title="Applications" subtitle="Bringing the brand to life">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Business Card Mockup */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Business Card</h3>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg aspect-[1.75/1] p-5 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/30 rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-teal-500/40 rounded-full -mr-5 -mb-5" />
                <div className="relative flex items-center gap-2">
                  <MazuSymbol className="w-10 h-10" uniqueId="card" />
                  <span className="text-xl font-light text-white italic">mazu</span>
                </div>
                <p className="relative text-white/80 text-xs">www.mazu.eco.br</p>
              </div>
            </div>
          </div>

          {/* Water Meter Mockup */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Product Application</h3>
            <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg aspect-square flex items-center justify-center">
              <div className="relative bg-white rounded-full w-48 h-48 border-8 border-blue-600 flex flex-col items-center justify-center shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <MazuSymbol className="w-8 h-8" uniqueId="meter" />
                  <span className="text-lg font-light text-blue-700 italic">mazu</span>
                </div>
                <div className="text-xs text-gray-500">Q₃ 2.5 m³/h</div>
                <div className="absolute bottom-6 bg-gray-100 rounded px-3 py-1">
                  <span className="text-xs font-mono text-gray-600">00452.378</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stationery */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Letterhead</h3>
            <div className="bg-white rounded-lg shadow-md aspect-[1/1.4] p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <MazuSymbol className="w-8 h-8" uniqueId="letter" />
                  <span className="text-lg font-light text-blue-700 italic">mazu</span>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-gray-200 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-full" />
                <div className="h-2 bg-gray-200 rounded w-5/6" />
                <div className="h-2 bg-gray-200 rounded w-full" />
              </div>
              <div className="text-xs text-gray-400 pt-4 border-t border-gray-100">
                contato@mazu.eco.br | www.mazu.eco.br
              </div>
            </div>
          </div>

          {/* Digital */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Digital Presence</h3>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 aspect-video flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <MazuSymbol className="w-6 h-6" uniqueId="digital" />
                <span className="text-sm font-light text-white italic">mazu</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="text-white text-2xl font-light mb-2">Water Solutions</h4>
                <p className="text-gray-400 text-sm">Innovating resource management</p>
              </div>
              <div className="flex gap-2">
                <div className="h-8 px-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center">
                  <span className="text-xs text-white font-medium">Learn More</span>
                </div>
                <div className="h-8 px-4 bg-white/10 rounded-full flex items-center">
                  <span className="text-xs text-white">Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <MazuSymbol className="w-12 h-12" uniqueId="footer" />
            <div>
              <span className="text-2xl font-light italic tracking-wide">mazu</span>
              <p className="text-xs text-gray-500">Water Measurement Solutions</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">Brand Guidelines v1.0</p>
            <p className="text-gray-500 text-xs mt-1">© 2025 Mazu. All rights reserved.</p>
          </div>
        </div>
        <WavePattern className="mt-12 h-16 opacity-30" />
      </footer>
    </div>
  );
}