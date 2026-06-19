export const ideasConfigPath = ".pi-web/ideas.json";
export const ideasDirectoryPath = ".pi-web";
export const gitignorePath = ".gitignore";
const ideasConfigVersion = 1;
export function emptyIdeasConfig() {
    return { version: ideasConfigVersion, ideas: [], archive: [] };
}
export function parseIdeasConfig(value) {
    if (!isRecord(value))
        return emptyIdeasConfig();
    return {
        version: ideasConfigVersion,
        ideas: Array.isArray(value["ideas"]) ? value["ideas"].filter(isIdea) : [],
        archive: Array.isArray(value["archive"]) ? value["archive"].filter(isIdea) : [],
    };
}
export function createIdea(text) {
    return {
        id: createIdeaId(),
        text,
        createdAt: new Date().toISOString(),
    };
}
export function archiveIdea(idea) {
    return { ...idea, doneAt: new Date().toISOString() };
}
export function withRunSession(idea, sessionId, workspaceId) {
    return { ...idea, runSessionId: sessionId, runWorkspaceId: workspaceId };
}
export function ideasCacheKey(context) {
    return `${context.machine.id}:${context.workspace.projectId}:${context.workspace.id}`;
}
export function gitignoreContainsPiWeb(content) {
    return content.split(/\r?\n/u).some((line) => {
        const trimmed = line.trim();
        return trimmed === ideasDirectoryPath || trimmed === `${ideasDirectoryPath}/`;
    });
}
export function appendPiWebGitignoreEntry(content) {
    if (gitignoreContainsPiWeb(content))
        return content;
    return `${content}${content.endsWith("\n") || content === "" ? "" : "\n"}${ideasDirectoryPath}/\n`;
}
function createIdeaId() {
    return `idea-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function isIdea(value) {
    if (!isRecord(value))
        return false;
    return typeof value["id"] === "string"
        && typeof value["text"] === "string"
        && typeof value["createdAt"] === "string"
        && optionalString(value["runSessionId"])
        && optionalString(value["runWorkspaceId"])
        && optionalString(value["doneAt"]);
}
function optionalString(value) {
    return value === undefined || typeof value === "string";
}
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
//# sourceMappingURL=config.js.map