import { describe, it, assert } from "poku"
import { check } from "../src/index.ts"

describe("Configuration Options", () => {
  it("respects custom thresholds", () => {
    const res = check("(a+)+", { threshold: 5.0, silent: true })
    assert.strictEqual(res.safe, true)
    assert.strictEqual(res.radius, 4.0)
  })

  it("uses default threshold of 1.0", () => {
    const res = check("(a+)+", { silent: true })
    assert.strictEqual(res.safe, false)
    assert.strictEqual(res.radius, 4.0)
  })

  it("detects safe patterns", () => {
    const res = check("a?a?a?a?a?a?a?a?a?a?aaaaaaaaaa", { silent: true })
    assert.strictEqual(res.safe, true)
    assert.strictEqual(res.radius, 0)
  })

  it("threshold affects safety determination", () => {
    const pattern = "(a+)+"
    const r1 = check(pattern, { threshold: 1.0, silent: true })
    const r2 = check(pattern, { threshold: 10.0, silent: true })

    assert.strictEqual(r1.safe, false)
    assert.strictEqual(r2.safe, true)
    assert.strictEqual(r1.radius, r2.radius)
    assert.strictEqual(r1.radius, 4.0)
  })
})
