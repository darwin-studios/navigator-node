/**
 * @example
 *     {
 *         sessionId: "sessionId",
 *         memberId: "memberId",
 *         role: "viewer"
 *     }
 */
export interface SessionMemberChange {
    sessionId: string;
    memberId: string;
    role: SessionMemberChange.Role;
}
export declare namespace SessionMemberChange {
    const Role: {
        readonly Viewer: "viewer";
        readonly Contributor: "contributor";
    };
    type Role = (typeof Role)[keyof typeof Role];
}
