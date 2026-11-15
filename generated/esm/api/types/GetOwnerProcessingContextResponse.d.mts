export type GetOwnerProcessingContextResponse = {
    available: string;
    reason?: "acting_identity_required" | undefined;
} | {
    available: string;
    contractVersion: "owner-processing-context/1";
    kind: "owner-local-processing";
    actingAiId: string;
    targetAiId: string;
    operationId: "darwin.process-data";
    expiresAt: string;
    profile: "pure-processing/0.2.0";
    rootNodeId: "creora-workflow.execute-v2";
    registryRevision: string;
    capabilitySnapshotSha256: string;
    observedAt: string;
    nodeCount: string;
    executionGranted: string;
    capability: Record<string, unknown>;
};
