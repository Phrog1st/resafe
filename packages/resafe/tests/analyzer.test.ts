import { describe, it, assert } from "poku"
import { analyze } from "../src/core/analyzer.ts"

describe("Analyzer Engine", () => {
  it("detects nested quantifiers via spectral analysis", () => {
    const res = analyze("(a+)+$")
    assert.strictEqual(res.safe, false)
    assert.strictEqual(res.radius, 4.0)
  })

  it("detects overlapping alternatives", () => {
    const res = analyze("(a|aa)+")
    assert.strictEqual(res.safe, false)
    assert.strictEqual(res.radius > 1.0, true)
  })

  it("detects character class repetition", () => {
    const res = analyze("([a-z]+)*")
    assert.strictEqual(res.safe, false)
    assert.strictEqual(res.radius, 4.0)
  })

  it("detects safe optional patterns", () => {
    const res = analyze("a?a?a?a?a?a?a?a?a?a?aaaaaaaaaa")
    assert.strictEqual(res.safe, true)
    assert.strictEqual(res.radius, 0)
  })

  it("respects custom threshold", () => {
    const res = analyze("(a+)+", { threshold: 5.0 })
    assert.strictEqual(res.safe, true)
    assert.strictEqual(res.radius, 4.0)
  })

  it("returns radius value", () => {
    const res = analyze("(a+)+")
    assert.strictEqual(typeof res.radius, "number")
    assert.strictEqual(res.radius, 4.0)
  })
})
