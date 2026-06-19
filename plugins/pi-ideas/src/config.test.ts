import { describe, expect, it } from "vitest";
import { appendPiWebGitignoreEntry, createIdea, emptyIdeasConfig, gitignoreContainsPiWeb, parseIdeasConfig, withRunSession } from "./config.js";

describe("pi-ideas config", () => {
  it("parses valid ideas and drops invalid entries", () => {
    const config = parseIdeasConfig({
      version: 1,
      ideas: [createIdea("ship it"), { id: 1 }],
      archive: [{ ...createIdea("done"), doneAt: "2026-06-19T00:00:00.000Z" }, null],
    });

    expect(config.ideas).toHaveLength(1);
    expect(config.ideas[0]?.text).toBe("ship it");
    expect(config.archive).toHaveLength(1);
  });

  it("falls back to an empty config for invalid input", () => {
    expect(parseIdeasConfig(null)).toEqual(emptyIdeasConfig());
  });

  it("detects and appends .pi-web gitignore entries", () => {
    expect(gitignoreContainsPiWeb("dist\n.pi-web/\n")).toBe(true);
    expect(gitignoreContainsPiWeb("dist\n")).toBe(false);
    expect(appendPiWebGitignoreEntry("dist\n")).toBe("dist\n.pi-web/\n");
  });

  it("records the started session and workspace", () => {
    expect(withRunSession(createIdea("idea"), "session-1", "workspace-1")).toMatchObject({
      runSessionId: "session-1",
      runWorkspaceId: "workspace-1",
    });
  });
});
