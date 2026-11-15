import type * as Darwin from '../index.js';

export type GetPaymentOptionsResponseEligibleMethodsItem =
  | Darwin.GetPaymentOptionsResponseEligibleMethodsItem.HostedCheckout
  | Darwin.GetPaymentOptionsResponseEligibleMethodsItem.SavedMethod
  | Darwin.GetPaymentOptionsResponseEligibleMethodsItem.DarwinWallet;
export declare namespace GetPaymentOptionsResponseEligibleMethodsItem {
  interface HostedCheckout {
    kind: 'hosted_checkout';
    method: GetPaymentOptionsResponseEligibleMethodsItemHostedCheckout.Method;
  }
  namespace GetPaymentOptionsResponseEligibleMethodsItemHostedCheckout {
    const Method: {
      readonly HostedCheckout: 'hosted_checkout';
    };
    type Method = (typeof Method)[keyof typeof Method];
  }
  interface SavedMethod {
    kind: 'saved_method';
    method: GetPaymentOptionsResponseEligibleMethodsItemSavedMethod.Method;
  }
  namespace GetPaymentOptionsResponseEligibleMethodsItemSavedMethod {
    const Method: {
      readonly Card: 'card';
      readonly Bank: 'bank';
      readonly Mpp: 'mpp';
      readonly X402: 'x402';
      readonly Ucp: 'ucp';
      readonly Acp: 'acp';
    };
    type Method = (typeof Method)[keyof typeof Method];
  }
  interface DarwinWallet {
    kind: 'darwin_wallet';
    method: GetPaymentOptionsResponseEligibleMethodsItemDarwinWallet.Method;
  }
  namespace GetPaymentOptionsResponseEligibleMethodsItemDarwinWallet {
    const Method: {
      readonly DarwinWallet: 'darwin_wallet';
    };
    type Method = (typeof Method)[keyof typeof Method];
  }
}
