import Test from "@/components/test";

export default async function Home() {
  // You can now use the getRedirectionUrl function here
  // const redirection = getRedirectionUrl();

  return (
    <>
      <h1>home</h1>
      <Test />
      {/* Optionally display the redirection URL or use it as needed */}
      {/* <p>{redirection}</p> */}
      {/* <Test /> */}
    </>
  );
}
