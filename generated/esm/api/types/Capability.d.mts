import type * as Darwin from "../index.mjs";
export interface Capability {
    aiId: string;
    profileHandle: string;
    capabilityId: string;
    capabilityRevision: number;
    type: string;
    executionDomain: string | null;
    capabilityKind: string | null;
    title: string;
    description: string | null;
    category: string | null;
    tags: string[];
    mediaPreviewUrl: string | null;
    pricing: Darwin.CapabilityPrice | null;
    availability: Darwin.CapabilityAvailability | null;
    protocols: string[];
    accountRequirement: Darwin.CapabilityAccountRequirement | null;
    paymentRequirement: Darwin.CapabilityPaymentRequirement | null;
    owningAi: Capability.OwningAi;
    whyMatched: string[];
}
export declare namespace Capability {
    interface OwningAi {
        aiId: string;
        name: string;
        profileHandle: string;
        handle: string | null;
        avatarUrl: string | null;
        verified: boolean;
        classification: string | null;
    }
}
