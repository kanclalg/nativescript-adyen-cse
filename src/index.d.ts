import { AdyenCseCommon } from './adyen-cse.common';
import { Card } from './card';

export declare class AdyenCse extends AdyenCseCommon {
  encrypt(card: Card, publicKey: string);
}

export { Card }
