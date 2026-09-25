import type * as Darwin from '../index.js';

export type ActPayRequestSource = Darwin.ActPayRequestSource.OneTime | Darwin.ActPayRequestSource.SavedPaymentMethod;
export declare namespace ActPayRequestSource {
  interface OneTime {
    kind: 'one_time';
  }
  interface SavedPaymentMethod {
    kind: 'saved_payment_method';
    paymentMethodId: string;
  }
}
