const {HandCashConnect} = require("@handcash/handcash-connect");

const handCashConnect = new HandCashConnect({
  appId: "64ff2abc11627dfd8d01313b",
  appSecret: "ac5ab95f5718bcfe794dde9e0d9ee2af8d2ff03e1714fd7bdf410d89a79dec52",
});

export default class HandCashService {
  constructor(authToken) {
    this.account = handCashConnect.getAccountFromAuthToken(authToken);
  }

  async getProfile() {
    return this.account.profile.getCurrentProfile();
  }

  async pay({destination, amount, currencyCode}) {
    return this.account.wallet.pay({
      payments: [{destination, amount, currencyCode}],
      description: "Testing Connect SDK",
    });
  }

  getRedirectionUrl() {
    return handCashConnect.getRedirectionUrl();
  }
}
