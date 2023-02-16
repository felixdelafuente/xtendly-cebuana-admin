'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1a9afa17097b0f7ec75f53e7864e3b64",
"assets/FontManifest.json": "a6327fb918fa047c04be559f521fe7d4",
"assets/fonts/Italiana-Regular.ttf": "74b49c9a4458212601a5f2276d348ed3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/images/arrow_down.png": "ca91ecc91d080967aa616e1cc9f780b4",
"assets/images/arrow_up.png": "f77280bb041e25c267b177f0eed6a4a9",
"assets/images/blog_icon.svg": "0a55760075abc7b10dba797cde4a50c0",
"assets/images/bookings.png": "ca31befcaddb9d220e7a868cf8414c7a",
"assets/images/bookings.svg": "859803d026fb2e9ae5c7bb83362cb601",
"assets/images/bpi_logo.png": "88e10325a50868a35a3694f14e3e619f",
"assets/images/btnx-button.png": "fbe8f122d5478e3b8649d61a41219467",
"assets/images/clj_logo.svg": "bceb6eccb7c95768df08889a6dee9a36",
"assets/images/clj_logo_dark.svg": "58d5800bc9c1e47e61585ab7800ada7b",
"assets/images/close_password.png": "ec6fb8ea359e7e154d69cc65102659ef",
"assets/images/close_password.svg": "002aaddde175b0f004449d9efce06a57",
"assets/images/crm.svg": "fbde60d43918a48c9739e098fa81b173",
"assets/images/customers_icon.svg": "6afd1d7434576e4b00a300127f9771c5",
"assets/images/dashboard_icon.svg": "d0846ba286c661dd8b1cc64ea687ccfe",
"assets/images/delete.png": "4bddd2b82185e9c97577d47a9b7ff9f3",
"assets/images/edit.png": "1269b56fee28c7f34a8c8352411e6303",
"assets/images/email.png": "cab207b11cb49a81ba05adf69dafd80f",
"assets/images/facebook_icon.svg": "1ec22d8a6931dd083abd44595a0cb203",
"assets/images/frame-menu.png": "71c3efb346e1f029fa7e76f5bd1b6912",
"assets/images/gcash_logo.png": "52933cd5f7da9b523eefba89ff356f0e",
"assets/images/grabpay_logo.png": "d2b18f0c1f47e507bbcf0f97988a992b",
"assets/images/groupeye.png": "83ab18babcbeba5251b4c2bec0d8df21",
"assets/images/info_icon.svg": "f46c6cda5c3498ca05f4ab06b629ac5d",
"assets/images/instagram_icon.svg": "9fe1f9b2fcc3603a8ba9afe060934eb0",
"assets/images/lg_box.png": "e62f4c3dbf49302300a8057474294f12",
"assets/images/lg_pouch.png": "bb0c8e799c6c7a95c489c6e358558a41",
"assets/images/logout.png": "f6e938ec55a9a63e885ed1a529711fea",
"assets/images/marketing_icon.svg": "80c406658902bd91c3470a8fafa8d72c",
"assets/images/mastercard_logo.png": "d4d35444bb9ce401a6061a9c1a21cc0a",
"assets/images/md_box.png": "e42d84b0a90f124db9c49e495dddb84d",
"assets/images/md_pouch.png": "e400e7dff15fee7303365b3720ce59c0",
"assets/images/open_password.png": "02eb05a45f40ad6319a828e15bde1797",
"assets/images/open_password.svg": "75ecd3a9568b9444f40e69a827c0c099",
"assets/images/orders_icon.svg": "833710d17d346bfb1a394d7e8bd6f7ee",
"assets/images/paymaya_logo.png": "47fda74732dbb559fe3dee39f143c2cb",
"assets/images/payment_icon.svg": "7d28e25844ac6b705d1711cca4744dd8",
"assets/images/products_icon.svg": "4665b3f05d4c819150c5d8c8803a87ce",
"assets/images/profile-picture.png": "6fc79f1bfebd7ab1d096c870b6eb813f",
"assets/images/rcbc_logo.png": "1c036bae260946cdea578f4900e33601",
"assets/images/reports.png": "cb79e5569e430be1f3505ee506d976ba",
"assets/images/reports.svg": "d2a600a4ec8b49d5a886d7a0ef296dd4",
"assets/images/reports_icon.svg": "3fb5172248aacc88c1dc87a9e467d84c",
"assets/images/sample_product.png": "5bfe4da11f528939fbca5bf5d8c5f458",
"assets/images/sb.jpg": "88d11f3917aa0c1f7d6b679ea6842915",
"assets/images/settings.png": "ce597ff303409d3b604a8414930b9839",
"assets/images/settings.svg": "417ee5bde8df3a376401ac17f65dcbc4",
"assets/images/settings_icon.svg": "f97b2ab6ae578433592ae14f3d22e6d3",
"assets/images/settings_icon1.svg": "d9e4caa337ff34050cd6357b3e35398f",
"assets/images/sm_box.png": "cc4e7e1ccf53430d95acf95a588cb2af",
"assets/images/sm_pouch.png": "5cc50622b40e82ca504c59dd0683b63b",
"assets/images/staff.png": "926a5d4f73bb028b8d310c0f797d3ca2",
"assets/images/staff.svg": "9d8a5be0b00c1941b7606d732c30e87e",
"assets/images/sven_logo.png": "25c53fb84d4e18bdd28519fbb9195e5a",
"assets/images/ubp_logo.png": "b04c738c306d6e2a887e8a4a30311a04",
"assets/images/users.png": "1c42a16f6ed251e223cf5673cb1c6628",
"assets/images/visa_logo.png": "b54dec316d0c7f4b6058933c4bbb73f8",
"assets/images/xl_box.png": "85a39c45eeb8eb6def6d96a8a4b6b6f7",
"assets/images/xs_pouch.png": "7eaddf555c2955ad7a987a1634e75ab9",
"assets/images/xtendly-icon-2.png": "d5d046d6fcf8fefc60a3b405114fcf9a",
"assets/images/xtendly-icon.png": "d5d046d6fcf8fefc60a3b405114fcf9a",
"assets/NOTICES": "8780c2155cf5f14b14c05532f8098070",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview_quill/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview_quill/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/math_keyboard/fonts/CustomKeyIcons.ttf": "b0bace3f25c2bd05862680e5ad4c6b54",
"assets/packages/youtube_player_flutter_quill/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "2256a69722fa856e011b6fe81bfd7125",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "845ea08942a993c266b55e4adf7f8ed8",
"/": "845ea08942a993c266b55e4adf7f8ed8",
"main.dart.js": "d3ea0c74c17c12fe99d2bceb8520c715",
"manifest.json": "1f34edc543f5495b71b73a95f02dfd56",
"version.json": "82ef681001b1335055e8b6db516d0a17"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
