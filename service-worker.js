if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"2d63a5a9ad7e6f3622754d901233072f"},{url:"about/blog/index.html",revision:"092557f8e69c35fbecf5b8bd35fd054c"},{url:"about/index.html",revision:"86170ad19eaecbf2ee8de124a6660f00"},{url:"article/index.html",revision:"a6bbc028d7593b073252d289526ad039"},{url:"assets/css/0.styles.774a1ab7.css",revision:"b44cf0edcb2f7b7657f79b219eabb3e5"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/chrome192.png",revision:"e8bc1e4a40e2255522bd408a47cb2f9f"},{url:"assets/img/blog-1.7c972966.png",revision:"7c9729663a55ac243dd41bf024b8b8f2"},{url:"assets/img/blog-2.71d4bf21.png",revision:"71d4bf21092aa8a510c9eb916d991a6e"},{url:"assets/img/blog-3.61333c76.png",revision:"61333c76700767afde74e6e85f83ae07"},{url:"assets/img/blog-4.5171af21.png",revision:"5171af212cbf9437da84e17648c1f1d9"},{url:"assets/img/blog-5.bdf3971f.png",revision:"bdf3971f97adb5cc90d79825f5926d34"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/18.396422b4.js",revision:"da89129056185c716c6bfd14179557b0"},{url:"assets/js/app.b075d000.js",revision:"caf667aeb33e1bce0800e14497b93bc8"},{url:"assets/js/layout-Blog.d72c5acb.js",revision:"9fdb068a130508e5fb0d8abd464515d1"},{url:"assets/js/layout-Layout.6f4f8ad5.js",revision:"e4aa8f986af220b96695620ad87e6aa9"},{url:"assets/js/layout-NotFound.fbf1b33e.js",revision:"ba37e7da2355a257c7c35f582b22e894"},{url:"assets/js/page-913-919工作计划--107fdf94.63512c64.js",revision:"081f7ad9b1fa41037d726a2577d7c7a7"},{url:"assets/js/page-920-926工作计划--3dd28198.5ab0f456.js",revision:"54eeadb71c515ee420c2b3cff08f4b90"},{url:"assets/js/page-博客介绍--59e59bc8.eae554ce.js",revision:"3c4ec246b74329d2edcb319a7776c8de"},{url:"assets/js/page-工作室介绍--5663e287.e0573ed7.js",revision:"00a311f05e515e91a8369a07b5560c6f"},{url:"assets/js/page-工作室招新--347e5093.d0797502.js",revision:"ab1e3ca6f708c207996e07e008d70da7"},{url:"assets/js/page-工作日程--e4e20ada.d87d7e97.js",revision:"98c883765d0d84bc96d178ee0259c1d7"},{url:"assets/js/page-希望工作室--707b6c83.2b69e9f3.js",revision:"96c879cca2482d378f113eea2a7e18dd"},{url:"assets/js/page-希望工作室招新--9fa7ff10.2d264f3e.js",revision:"393a35553d7b9987b965a16880405b26"},{url:"assets/js/page-情况说明--641d0f90.44dd218f.js",revision:"c66fa51d7e9a716d0e0b6231eca6e3ae"},{url:"assets/js/vendors~flowchart.c4d9f9dc.js",revision:"e26119d36d5cf2f5b6c5ccd0aa6677fb"},{url:"assets/js/vendors~layout-Blog~layout-Layout.84a765a8.js",revision:"86c86babd1ce333c11e69fa69676b275"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.f36842b2.js",revision:"7524be8b7160047839de51f6b3ae8905"},{url:"assets/js/vendors~layout-Layout.a6d472cd.js",revision:"9034f2ceeae6560740f77d8fc9f5ab43"},{url:"category/index.html",revision:"98e27162a32f0f72c5fd96e2315faa93"},{url:"index.html",revision:"153bde44d6b2aa29cff32d968ea7da4b"},{url:"invite/index.html",revision:"be0ca97dbf26cd13835481e1d41b9a25"},{url:"invite/need/index.html",revision:"cccdbd1111d37615dc93e99b758d8564"},{url:"invite/notice/index.html",revision:"4abfff4fe4677fb4848d407f2d4e4809"},{url:"logo.png",revision:"aa08d5a639f28b43eabb30d4ea7f1c79"},{url:"plan/index.html",revision:"56f06b6edf786761e8270ec15fdedfbb"},{url:"plan/week1/index.html",revision:"bebc0fa1d5e476d6172be8c2c6ae2601"},{url:"plan/week2/index.html",revision:"72024a0ccd68a30b460514ffd744710b"},{url:"tag/index.html",revision:"8af53a182928271e16620cedfdb21ddf"},{url:"timeline/index.html",revision:"bcb08ead261659944ac529a3e8605474"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
