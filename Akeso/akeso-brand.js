/**
 * Akeso Medical Solutions - Brand Tokens
 *
 * Usage:
 *   import { colors, fonts, assets } from './akeso-brand.js'
 *
 *   // In React/Vue/etc:
 *   <div style={{ backgroundColor: colors.primary }}>
 *
 *   // In Node/build tools:
 *   console.log(colors.primary) // '#2158AB'
 */

export const colors = {
  // Primary palette
  primary: '#2158AB',      // Deep blue - main brand color
  secondary: '#2E75B2',    // Medium blue
  accent: '#42BAC7',       // Teal
  highlight: '#4FCBCA',    // Light teal/cyan

  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
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

export const fonts = {
  // Update these with your actual brand fonts
  heading: {
    family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },
  body: {
    family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    weights: {
      regular: 400,
      medium: 500,
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
  full: '9999px',
}

export const assets = {
  logo: './SVGs/akeso-logo-optimized.svg',
  brandmarks: './SVGs/akeso-brandmarks-optimized.svg',
  logoVariations: './SVGs/akeso-logo-variations-optimized.svg',
  colorPalette: './SVGs/akeso-color-palette-optimized.svg',
  brandMockups: './SVGs/akeso-brand-mockups-optimized.svg',
  products: {
    overview: './SVGs/akeso-products-optimized.svg',
    syringeProduct: './SVGs/akeso-syringe-product-optimized.svg',
    syringePackage: './SVGs/akeso-syringe-package-optimized.svg',
    hydrocolloid: './SVGs/akeso-hydrocolloid-optimized.svg',
  }
}

// Default export for convenience
export default {
  colors,
  fonts,
  spacing,
  borderRadius,
  assets,
}
