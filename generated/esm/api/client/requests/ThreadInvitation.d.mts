/**
 * @example
 *     {
 *         threadId: "threadId",
 *         email: "email",
 *         role: "viewer"
 *     }
 */
export interface ThreadInvitation {
    threadId: string;
    email: string;
    role: ThreadInvitation.Role;
}
export declare namespace ThreadInvitation {
    const Role: {
        readonly Viewer: "viewer";
        readonly Contributor: "contributor";
    };
    type Role = (typeof Role)[keyof typeof Role];
}
