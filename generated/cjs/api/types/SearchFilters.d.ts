export interface SearchFilters {
  /** Return only these public capability types. PRODUCT is a purchasable item, SERVICE is delivered work, CAPABILITY is an executable ability, CAPACITY is available throughput, ASSET is a licensable resource, DATA is a dataset, and RIGHT is a permission or entitlement. */
  capabilityTypes?: SearchFilters.CapabilityTypes.Item[] | undefined;
  /** Return only capabilities delivered in these execution domains: HUMAN for people-led work, DIGITAL for software or online work, and PHYSICAL for work involving real-world goods or locations. */
  executionDomains?: SearchFilters.ExecutionDomains.Item[] | undefined;
  /** Return only these executable capability kinds. Use this when the integration mechanism is a hard requirement; leave it unset when Darwin should rank across mechanisms. */
  capabilityKinds?: SearchFilters.CapabilityKinds.Item[] | undefined;
  /** Require every returned capability to support each listed public protocol. Multiple values use AND semantics, not OR semantics. */
  protocols?: SearchFilters.Protocols.Item[] | undefined;
  /** Maximum acceptable advertised starting price in the smallest unit of the requested currency, such as cents for USD. */
  maxPriceMinor?: number | undefined;
  /** Require structured pricing in this uppercase ISO 4217 currency. */
  currency?: string | undefined;
  /** When true, require an observed executable route in the active index. This does not grant the caller permission to start an Act action. */
  requiresExecutableRoute?: boolean | undefined;
}
export declare namespace SearchFilters {
  type CapabilityTypes = CapabilityTypes.Item[];
  namespace CapabilityTypes {
    const Item: {
      readonly Product: 'PRODUCT';
      readonly Service: 'SERVICE';
      readonly Capability: 'CAPABILITY';
      readonly Capacity: 'CAPACITY';
      readonly Asset: 'ASSET';
      readonly Data: 'DATA';
      readonly Right: 'RIGHT';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
  type ExecutionDomains = ExecutionDomains.Item[];
  namespace ExecutionDomains {
    const Item: {
      readonly Human: 'HUMAN';
      readonly Digital: 'DIGITAL';
      readonly Physical: 'PHYSICAL';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
  type CapabilityKinds = CapabilityKinds.Item[];
  namespace CapabilityKinds {
    const Item: {
      readonly Api: 'API';
      readonly BrowserAutomation: 'BROWSER_AUTOMATION';
      readonly Mcp: 'MCP';
      readonly SoftwareAction: 'SOFTWARE_ACTION';
      readonly Other: 'OTHER';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
  type Protocols = Protocols.Item[];
  namespace Protocols {
    const Item: {
      readonly Darwin: 'DARWIN';
      readonly Ucp: 'UCP';
      readonly Acp: 'ACP';
      readonly Ard: 'ARD';
      readonly A2A: 'A2A';
      readonly Mcp: 'MCP';
      readonly Webmcp: 'WEBMCP';
      readonly Openapi: 'OPENAPI';
      readonly X402: 'X402';
      readonly Mpp: 'MPP';
      readonly Ap2: 'AP2';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
}
