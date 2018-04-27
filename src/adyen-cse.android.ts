import { Card } from './card';
import { AdyenCseCommon } from './adyen-cse.common';

declare var adyen: any;

export class AdyenCse extends AdyenCseCommon {
  public encrypt(card: Card, publicKey: string): string {
    let adyenCard = new adyen.com.adyencse.pojo.Card.Builder()
      .setNumber(card.number)
      .setCvc(card.cvc)
      .setHolderName(card.holderName)
      .setExpiryYear(card.expiryYear)
      .setExpiryMonth(card.expiryMonth)
      .setGenerationTime(new java.util.Date(card.generationTime))
      .build();

    return adyenCard.serialize(publicKey);
  }
}
