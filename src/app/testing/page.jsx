"use client";
export default function FF() {
  const androidChromeMarketPlace =
    "https://play.google.com/store/apps/details?id=com.android.chrome";

  const androidFallback = `intent://xclusive.market#Intent;scheme=http;package=com.android.chrome;S.browser_fallback_url=${androidChromeMarketPlace};end`;

  return (
    <>
      <div
        onClick={async () => {
          const res = await fetch("https://gerioernrongoer.regoiremg.com");
          console.log(res);
        }}
      >
        hiiiii!!!!!!
      </div>
      <button
        style={{ padding: "20px", backgroundColor: "tomato" }}
        onClick={() => {
          window.open("https://xclusive.market/?openExternalBrowser=1");
        }}
      >
        click me!! ( ios + android , line)
      </button>

      <button
        style={{ padding: "20px", backgroundColor: "tomato" }}
        onClick={() => {
          window.open(
            `kakaotalk://web/openExternal?url=${encodeURIComponent(
              "https://xclusive.market"
            )}`
          );
        }}
      >
        click me!! ( ios + android , kakao)
      </button>

      <button
        style={{ padding: "20px", backgroundColor: "tomato" }}
        onClick={() => {
          window.open(androidFallback);
        }}
      >
        click me!! ( android default browser- chrome)
      </button>

      <button
        style={{ padding: "20px", backgroundColor: "tomato" }}
        onClick={() => {
          window.open(`googlechrome:////xclusive.market`);
        }}
      >
        click me!! ( ios browser- chrome) {"https://xclusive.market"}
      </button>

      <button
        style={{ padding: "20px", backgroundColor: "tomato" }}
        onClick={() => {
          window.open(
            `x-web-search://?${encodeURIComponent("xclusive.market")}`
          );
        }}
      >
        click me!! ( ios default browser - safari )
      </button>
    </>
  );
}
