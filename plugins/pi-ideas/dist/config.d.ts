import type { WorkspacePanelContext } from "@jmfederico/pi-web/plugin-api";
export declare const ideasConfigPath = ".pi-web/ideas.json";
export declare const ideasDirectoryPath = ".pi-web";
export declare const gitignorePath = ".gitignore";
declare const ideasConfigVersion = 1;
export interface IdeasConfig {
    version: typeof ideasConfigVersion;
    ideas: Idea[];
    archive: Idea[];
}
export interface Idea {
    id: string;
    text: string;
    createdAt: string;
    runSessionId?: string;
    runWorkspaceId?: string;
    doneAt?: string;
}
export declare function emptyIdeasConfig(): IdeasConfig;
export declare function parseIdeasConfig(value: unknown): IdeasConfig;
export declare function createIdea(text: string): Idea;
export declare function archiveIdea(idea: Idea): Idea;
export declare function withRunSession(idea: Idea, sessionId: string, workspaceId: string): Idea;
export declare function ideasCacheKey(context: WorkspacePanelContext): string;
export declare function gitignoreContainsPiWeb(content: string): boolean;
export declare function appendPiWebGitignoreEntry(content: string): string;
export {};
