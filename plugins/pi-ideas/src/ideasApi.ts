import type { WorkspacePanelContext } from "@jmfederico/pi-web/plugin-api";

export interface WorkspacePanelSessionInfo {
  id: string;
  workspaceId?: string;
}

interface WritableWorkspaceFiles {
  writeFile(path: string, content: string): Promise<void>;
}

interface WorkspacePanelSessions {
  startWithPrompt(prompt: string, options?: { newWorkspace?: boolean | undefined; ideaId?: string | undefined }): Promise<WorkspacePanelSessionInfo>;
}

interface IdeasWorkspacePanelContext extends WorkspacePanelContext {
  files: WorkspacePanelContext["files"] & Partial<WritableWorkspaceFiles>;
  sessions?: WorkspacePanelSessions;
}

export async function writeWorkspaceFile(context: WorkspacePanelContext, path: string, content: string): Promise<void> {
  const files = (context as IdeasWorkspacePanelContext).files;
  if (files.writeFile === undefined) throw new Error("Workspace Ideas requires a Pi Web version with WorkspaceFiles.writeFile support.");
  await files.writeFile(path, content);
}

export async function startIdeaSession(context: WorkspacePanelContext, ideaId: string, prompt: string): Promise<WorkspacePanelSessionInfo> {
  const sessions = (context as IdeasWorkspacePanelContext).sessions;
  if (sessions === undefined) throw new Error("Workspace Ideas requires a Pi Web version with WorkspacePanelSessions.startWithPrompt support.");
  return await sessions.startWithPrompt(prompt, { newWorkspace: true, ideaId });
}
