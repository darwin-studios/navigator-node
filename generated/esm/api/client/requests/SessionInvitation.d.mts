/**
 * @example
 *     {
 *         sessionId: "sessionId",
 *         email: "email",
 *         role: "viewer"
 *     }
 */
export interface SessionInvitation {
    sessionId: string;
    email: string;
    role: SessionInvitation.Role;
}
export declare namespace SessionInvitation {
    const Role: {
        readonly Viewer: "viewer";
        readonly Contributor: "contributor";
    };
    type Role = (typeof Role)[keyof typeof Role];
}
