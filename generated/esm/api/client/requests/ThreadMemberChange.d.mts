/**
 * @example
 *     {
 *         threadId: "threadId",
 *         memberId: "memberId",
 *         role: "viewer"
 *     }
 */
export interface ThreadMemberChange {
    threadId: string;
    memberId: string;
    role: ThreadMemberChange.Role;
}
export declare namespace ThreadMemberChange {
    const Role: {
        readonly Viewer: "viewer";
        readonly Contributor: "contributor";
    };
    type Role = (typeof Role)[keyof typeof Role];
}
