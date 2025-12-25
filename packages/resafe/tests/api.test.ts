import { describe, it, assert } from "poku"
import { check } from "../src/index.ts"

describe("Public API", () => {
  it("returns radius via check()", () => {
    const res = check("(a+)+", { silent: true })
    assert.strictEqual(typeof res.radius, "number")
    assert.strictEqual(res.safe, false)
    assert.strictEqual(res.radius, 4.0)
  })

  it("throws error with throwErr option for unsafe patterns", () => {
    assert.throws(() => {
      check("(a+)+", { silent: true, throwErr: true })
    })
  })

  it("returns safe result for safe patterns", () => {
    const res = check("a?a?a?a?a?a?a?a?a?a?aaaaaaaaaa", { silent: true })
    assert.strictEqual(res.safe, true)
    assert.strictEqual(res.radius, 0)
  })

  it("accepts RegExp objects", () => {
    const res = check(/(a+)+/, { silent: true })
    assert.strictEqual(res.safe, false)
    assert.strictEqual(res.radius, 4.0)
  })

  it("returns consistent results", () => {
    const r1 = check("(a+)+", { silent: true })
    const r2 = check("(a+)+", { silent: true })
    assert.strictEqual(r1.safe, r2.safe)
    assert.strictEqual(r1.radius, r2.radius)
  })
})
