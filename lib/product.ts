export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "SizeGuide",
  slug: "sizeguide",
  tagline: "Fewer returns from wrong-size guesses.",
  description: "From your garment measurements, generate a clear size chart with fit notes per size and a care/return line - unit toggle included.",
  toolTitle: "Build a size chart",
  resultLabel: "Your size guide",
  ctaLabel: "Build chart",
  features: [
  "Size chart from measurements",
  "Fit notes per size",
  "Care / return line",
  "cm / in toggle"
],
  inputs: [
  {
    "key": "measurements",
    "label": "Measurements per size",
    "type": "textarea",
    "placeholder": "e.g. S: chest 92cm waist 76cm / M: chest 98 waist 82"
  },
  {
    "key": "units",
    "label": "Units",
    "type": "select",
    "options": [
      "cm",
      "in"
    ]
  },
  {
    "key": "fit_note",
    "label": "Fit style",
    "type": "select",
    "options": [
      "True to size",
      "Runs small",
      "Runs large"
    ]
  }
] as InputField[],
  systemPrompt: "You are an apparel merchandiser. Given per-size measurements, units, and a fit style, produce a clean size chart, a one-line fit note per size, and a standard care/return line. Keep it copy-paste ready for a PDP. In demo (mock) mode, return a realistic sample chart following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "5 charts/mo"
  },
  {
    "tier": "Pro",
    "price": "$15/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const m = (inputs['measurements'] || '').trim()
  const u = inputs['units'] || 'cm'
  const fit = inputs['fit_note'] || 'True to size'
  if (!m) return 'Paste measurements per size to build a chart.'
  let out = 'SIZE CHART (' + u + ', ' + fit + ')\n\n'
  out += 'S  chest 92  waist 76\n'
  out += 'M  chest 98  waist 82\n'
  out += 'L  chest 104 waist 88\n\n'
  out += 'FIT: ' + fit + ' - when in doubt, size up for an oversized look.\n'
  out += 'CARE: machine wash cold, lay flat to dry. 30-day returns.\n'
  out += '\n--- (Mock demo. Paste your measurements for a tailored chart.)'
  return out
}
}
