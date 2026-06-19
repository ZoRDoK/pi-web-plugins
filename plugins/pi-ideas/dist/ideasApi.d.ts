import type { WorkspacePanelContext } from "@jmfederico/pi-web/plugin-api";
export interface WorkspacePanelSessionInfo {
    id: string;
    workspaceId?: string;
}
export declare function writeWorkspaceFile(context: WorkspacePanelContext, path: string, content: string): Promise<void>;
export declare function startIdeaSession(context: WorkspacePanelContext, ideaId: string, prompt: string): Promise<WorkspacePanelSessionInfo>;
