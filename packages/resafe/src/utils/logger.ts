const C = {
  reset: "\x1b[0m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  gray: "\x1b[90m",
}

export const S = { WARN: "!", ERROR: "x" }

export const log = {
  warn: (m: string) => console.log(`${C.yellow}${S.WARN}${C.reset} ${m}`),
  error: (m: string) => console.log(`${C.red}${S.ERROR}${C.reset} ${m}`),
  hint: (m: string) => console.log(`${C.gray}${m}${C.reset}`),
}
