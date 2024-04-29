"use client";
export default function FF() {
  const androidChromeMarketPlace =
    "https://play.google.com/store/apps/details?id=com.android.chrome";

  const androidFallback = `intent://xclusive.market#Intent;scheme=http;package=com.android.chrome;S.browser_fallback_url=${androidChromeMarketPlace};end`;

  const origin = `xclusive.market/ko`;
  const scheme = "https://";
  // const androidChromeMarketPlace = encodeURIComponent("market://details?id=com.android.chrome");
  const lineFallback = `${
    scheme + encodeURIComponent(origin)
  }/?openExternalBrowser=1`;
  const kakaoFallback = `kakaotalk://web/openExternal?url=${
    scheme + encodeURIComponent(origin)
  }`;
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
          window.open(lineFallback);
        }}
      >
        click me!! ( ios + android , line)
      </button>

      <button
        style={{ padding: "20px", backgroundColor: "tomato" }}
        onClick={() => {
          window.open(kakaoFallback);
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
          setTimeout(() => {
            alert("hello world");
          }, 4000);
          window.open(
            // `x-web-search://?${encodeURIComponent("xclusive.market")}`
            `x-safari-https://xclusive.market`
          );
        }}
      >
        click me!! ( ios default browser - safari )
      </button>
    </>
  );
}
