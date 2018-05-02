# NativeScript Adyen CSE Plugin
Adyen NativeScript client-side encryption

## Installation

```
tns plugin add nativescript-adyen-cse
```

## Usage 

``` TypeScript
import { AdyenCse, Card } from 'nativescript-adyen-cse';

this.adyenCse = new AdyenCse();
const data: Card = {
  cvc: '737',
  expiryMonth: '08',
  expiryYear: '2018',
  generationTime: new Date(),
  holderName: 'holderName',
  number: '4111111111111111'
};

let encryptedCardString = this.adyenCse.encrypt(data, 'your_adyen_public_Key');
```

## License

MIT
