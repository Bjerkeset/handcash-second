import {NextResponse} from "next/server";
// import {HandCashService} from "@handcash/handcash-connect";

export async function GET(request) {
  //   const handCashConnect = new HandCashConnect({
  //     appId: "64ff2abc11627dfd8d01313b",
  //     appSecret:
  //       "ac5ab95f5718bcfe794dde9e0d9ee2af8d2ff03e1714fd7bdf410d89a79dec52",
  //   });
  //   const redirectionUrl = handCashConnect.getRedirectionUrl();
  //   console.log(redirectionUrl);

  return NextResponse.json({data: "success"}, {status: 200});
}
