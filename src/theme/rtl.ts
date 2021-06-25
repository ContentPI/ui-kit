export function rtl(css: string) {
  return `
    *[dir='rtl'] & {
      ${css}
    }
  `
}
