import HandCashConnect from "@handcash/handcash-connect";
import {NextResponse} from "next/server";

// const appId = process.env.NEXT_PUBLIC_handcash_app_id;
// const appSecret = process.env.NEXT_PUBLIC_handcash_app_secret;

// const handCashConnect = new HandCashConnect({
//   appId: appId,
//   appSecret: appSecret,
// });

// class HandCashService {
//   constructor(authToken) {
//     this.account = handCashConnect.getAccountFromAuthToken(authToken);
//   }

//   async getProfile() {
//     return this.account.profile.getCurrentProfile();
//   }

//   async pay({destination, amount, currencyCode}) {
//     return this.account.wallet.pay({
//       payments: [{destination, amount, currencyCode}],
//       description: "Testing Connect SDK",
//     });
//   }

//   getRedirectionUrl() {
//     return handCashConnect.getRedirectionUrl();
//   }
// }

export async function GET(req) {
  //   const handCashConnect = new HandCashConnect({
  //     appId: "64ff2abc11627dfd8d01313b",
  //     appSecret:
  //       "ac5ab95f5718bcfe794dde9e0d9ee2af8d2ff03e1714fd7bdf410d89a79dec52",
  //   });
  //   const redirectionUrl = handCashConnect.getRedirectionUrl();
  //   console.log(redirectionUrl);

  return NextResponse.json({data: "success"}, {status: 200});
}
