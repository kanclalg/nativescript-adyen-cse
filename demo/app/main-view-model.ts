import { Observable } from 'tns-core-modules/data/observable';
import { AdyenCse, Card } from 'nativescript-adyen-cse';
var dialogs = require("ui/dialogs");

export class HelloWorldModel extends Observable {
  public message: string;
  private adyenCse: AdyenCse;

  constructor() {
    super();

    this.adyenCse = new AdyenCse();
    const data: Card = {
      cvc: '737',
      expiryMonth: '08',
      expiryYear: '2018',
      generationTime: new Date(),
      holderName: 'holderName',
      number: '4111111111111111'
    };

    let encrypted = this.adyenCse.encrypt(data, 'your_adyen_public_key');
  }
}
