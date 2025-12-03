/**
 * Mazu Water Solutions - Brand Tokens
 *
 * Usage:
 *   import { colors, fonts, assets } from './mazu-brand.js'
 *
 *   // In React/Vue/etc:
 *   <div style={{ backgroundColor: colors.cyan }}>
 *
 *   // In Node/build tools:
 *   console.log(colors.blue) // '#0081BC'
 */

export const colors = {
  // Primary palette - Water inspired
  cyan: '#3DE8D4',           // Medium Spring Green - Primary accent
  teal: '#2DD4BF',           // Teal
  turquoise: '#14B8A6',      // Deep Teal
  blue: '#0081BC',           // Mazu Blue - Primary brand color
  deepBlue: '#0369A1',       // Deep Blue
  ocean: '#075985',          // Ocean Blue
  forest: '#006859',         // Bangladesh Green - Deep teal

  // Gradient stops
  gradientStart: '#3DE8D4',
  gradientMid: '#2DD4BF',
  gradientEnd: '#0081BC',

  // Neutral colors
  white: '#FFFFFF',
  black: '#222222',          // Raisin Black
  silver: '#DADAD8',         // Light Silver
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  }
}

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.cyan} 0%, ${colors.blue} 100%)`,
  rich: `linear-gradient(135deg, ${colors.cyan} 0%, ${colors.teal} 50%, ${colors.deepBlue} 100%)`,
  vertical: `linear-gradient(180deg, ${colors.cyan} 0%, ${colors.turquoise} 100%)`,
  wave: `linear-gradient(90deg, ${colors.cyan} 0%, ${colors.teal} 50%, ${colors.blue} 100%)`,
}

export const fonts = {
  heading: {
    family: "'Ramus Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },
  body: {
    family: "'Helixa Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  }
}

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
}

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
}

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  cyan: '0 4px 20px rgba(61, 232, 212, 0.3)',
  blue: '0 4px 20px rgba(0, 129, 188, 0.3)',
}

export const assets = {
  // Logo variations (PNG)
  logos: {
    gradient: {
      horizontal: './MAZU - ID. VISUAL/LOGOTIPO/PNG/AZUL (GRADIENTE)/gradiente_horizontal.png',
      vertical: './MAZU - ID. VISUAL/LOGOTIPO/PNG/AZUL (GRADIENTE)/gradiente_vertical.png',
      shape: './MAZU - ID. VISUAL/LOGOTIPO/PNG/AZUL (GRADIENTE)/gradiente_shape.png',
      symbol: './MAZU - ID. VISUAL/LOGOTIPO/PNG/AZUL (GRADIENTE)/símbolo_símbolo1.png',
    },
    white: {
      horizontal: './MAZU - ID. VISUAL/LOGOTIPO/PNG/BRANCO/branco_horizontal.png',
      vertical: './MAZU - ID. VISUAL/LOGOTIPO/PNG/BRANCO/branco_vertical.png',
      shape: './MAZU - ID. VISUAL/LOGOTIPO/PNG/BRANCO/branco_shape.png',
      symbol: './MAZU - ID. VISUAL/LOGOTIPO/PNG/BRANCO/branco_símbolo1.png',
    },
    black: {
      horizontal: './MAZU - ID. VISUAL/LOGOTIPO/PNG/PRETO /preto_horizontal.png',
      vertical: './MAZU - ID. VISUAL/LOGOTIPO/PNG/PRETO /preto_vertical.png',
      shape: './MAZU - ID. VISUAL/LOGOTIPO/PNG/PRETO /preto_shape.png',
      symbol: './MAZU - ID. VISUAL/LOGOTIPO/PNG/PRETO /preto_símbolo.png',
    },
    green: {
      horizontal: './MAZU - ID. VISUAL/LOGOTIPO/PNG/VERDE/verde_horizontal.png',
      vertical: './MAZU - ID. VISUAL/LOGOTIPO/PNG/VERDE/verde_vertical.png',
      shape: './MAZU - ID. VISUAL/LOGOTIPO/PNG/VERDE/verde_shape.png',
      symbol: './MAZU - ID. VISUAL/LOGOTIPO/PNG/VERDE/verde_símbolo.png',
    },
  },
  // Typography fonts
  fonts: {
    helixa: './MAZU - ID. VISUAL/TIPOGRAFIA/Helixa Sans (Subtítulos, Texto Corrido)/Web Fonts/',
  }
}

// Brand information
export const brand = {
  name: 'Mazu',
  tagline: 'Water Measurement Solutions',
  description: 'Inspired by Mazu (媽祖), the Chinese goddess of the sea who protects fishermen and sailors',
  website: 'www.mazu.eco.br',
  email: 'contato@mazu.eco.br',
  industry: 'Water Meters & Automation - Sanitation Sector',
  experience: '30+ years in water measurement and automation',
}

// Default export for convenience
export default {
  colors,
  gradients,
  fonts,
  spacing,
  borderRadius,
  shadows,
  assets,
  brand,
}
