import { describe, expect, test } from "bun:test"

process.env.OPENCODE_CHANNEL = "prod"
process.env.MEMOWORK_UNSIGNED = "1"

const { default: config } = await import("./electron-builder.config.ts")

describe("MemoWork Electron Builder config", () => {
  test("uses MemoWork product metadata and artifact names", () => {
    expect(config.productName).toBe("MemoWork")
    expect(config.appId).toBe("dev.usay.memowork")
    expect(config.artifactName).toBe("memowork-${os}-${arch}.${ext}")
    expect(config.publish).toEqual({ provider: "github", owner: "NeoFantom", repo: "mimowork", channel: "latest" })
  })

  test("keeps internal opencode protocol while exposing MemoWork", () => {
    expect(config.protocols).toEqual({ name: "MemoWork", schemes: ["opencode"] })
  })

  test("builds unsigned preview artifacts explicitly", () => {
    expect(config.mac?.hardenedRuntime).toBe(false)
    expect(config.mac?.notarize).toBe(false)
    expect(config.mac?.identity).toBeNull()
    expect(config.dmg?.sign).toBe(false)
    expect(config.win?.target).toEqual(["nsis"])
  })
})
