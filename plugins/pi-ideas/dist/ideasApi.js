export async function writeWorkspaceFile(context, path, content) {
    const files = context.files;
    if (files.writeFile === undefined)
        throw new Error("Workspace Ideas requires a Pi Web version with WorkspaceFiles.writeFile support.");
    await files.writeFile(path, content);
}
export async function startIdeaSession(context, ideaId, prompt) {
    const sessions = context.sessions;
    if (sessions === undefined)
        throw new Error("Workspace Ideas requires a Pi Web version with WorkspacePanelSessions.startWithPrompt support.");
    return await sessions.startWithPrompt(prompt, { newWorkspace: true, ideaId });
}
//# sourceMappingURL=ideasApi.js.map