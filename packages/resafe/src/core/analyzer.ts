import {
  spectralRadius,
  buildNFA,
  removeEpsilon,
  buildMatrix,
} from "./spectral.ts"

export interface Config {
  threshold?: number
}

export interface Result {
  safe: boolean
  radius: number
}

export function analyze(pattern: string, config: Config = {}): Result {
  const threshold = config.threshold ?? 1.0

  try {
    const nfa = buildNFA(pattern)
    const epsilonFree = removeEpsilon(nfa)
    const matrix = buildMatrix(epsilonFree)
    const radius = Math.round(spectralRadius(matrix) * 10) / 10

    return { safe: radius <= threshold, radius }
  } catch {
    return { safe: true, radius: 0 }
  }
}
