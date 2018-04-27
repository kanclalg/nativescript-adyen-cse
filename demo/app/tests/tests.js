var AdyenCse = require("nativescript-adyen-cse").AdyenCse;
var adyenCse = new AdyenCse();

describe("greet function", function() {
    it("exists", function() {
        expect(adyenCse.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(adyenCse.greet()).toEqual("Hello, NS");
    });
});