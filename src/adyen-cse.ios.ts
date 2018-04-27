import { Card } from './card';
import { AdyenCseCommon } from './adyen-cse.common';

declare var ADYEncrypter: any;
declare class ADYCard extends NSObject {
  public static new(): ADYCard;
  public encode(): NSData;
  number: any;
  holderName: any;
  cvc: any;
  expiryMonth: any;
  expiryYear: any;
  generationtime: any;
};

export class AdyenCse extends AdyenCseCommon {
  public encrypt(card: Card, publicKey: string): string {
    var adyCard = ADYCard.new();
    adyCard.number = card.number;
    adyCard.holderName = card.holderName;
    adyCard.cvc = card.cvc;
    adyCard.expiryMonth = card.expiryMonth;
    adyCard.expiryYear = card.expiryYear;
    adyCard.generationtime = card.generationTime;

    var encoded = adyCard.encode();
    return ADYEncrypter.encryptPublicKeyInHex(encoded, publicKey);
  }
}
