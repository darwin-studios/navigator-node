export interface CapabilityPaymentRequirement {
  mode: CapabilityPaymentRequirement.Mode;
  handlers: CapabilityPaymentRequirement.Handlers.Item[];
}
export declare namespace CapabilityPaymentRequirement {
  const Mode: {
    readonly Free: 'free';
    readonly Fixed: 'fixed';
    readonly Quote: 'quote';
    readonly Usage: 'usage';
  };
  type Mode = (typeof Mode)[keyof typeof Mode];
  type Handlers = Handlers.Item[];
  namespace Handlers {
    const Item: {
      readonly HostedCheckout: 'HOSTED_CHECKOUT';
      readonly UcpSpt: 'UCP_SPT';
      readonly AcpSpt: 'ACP_SPT';
      readonly MppSpt: 'MPP_SPT';
      readonly X402: 'X402';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
}
