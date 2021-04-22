'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dfe218ad9d78153b2e4deb02e65c401e",
"assets/assets/fonts/Cocon-RegularTR.ttf": "3cb2dc7f975186787930e7b93ee18dc0",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/icons/alert-triangle-outline.svg": "71486662773d7880b113d26b3f226969",
"assets/assets/icons/aonly.png": "41b36a5fc0bdf683fcfcb4bb8357bf39",
"assets/assets/icons/apple_icon.svg": "0b1172280f37170efd38930058db89b7",
"assets/assets/icons/arrow-back-outline.svg": "c4a253c8fc2e465ada9ab367364de75e",
"assets/assets/icons/arrow-ios-downward-outline.svg": "b33d018c650d1b44248d60559aec363b",
"assets/assets/icons/arrow-ios-upward-outline.svg": "cb9bc2d12e02fc679566185cdda41101",
"assets/assets/icons/cake.svg": "841161dcf3ed9eb4abf3f0b0e9caebc0",
"assets/assets/icons/cake_with_bg.svg": "921653e0046281e4d8b410a3bcc654c2",
"assets/assets/icons/calendar.svg": "92be5dcd8a3be78086c5fec49a113c11",
"assets/assets/icons/calender.svg": "3f6ae8f589f61411a90e9c2104446d86",
"assets/assets/icons/calender_outline.svg": "1937367be0db5f8cba553c6e2ec281c1",
"assets/assets/icons/clipboard-outline.svg": "870f4e36b0cb29ca1d89beab28e4a000",
"assets/assets/icons/clock.svg": "53b61e2c4c24422af12ddfd0f6a345a1",
"assets/assets/icons/close-circle-outline.svg": "3049547e3a3a77b67df19590c25eec83",
"assets/assets/icons/credit_card.svg": "ac7fde1400658ecfe7d7583b9ef371d9",
"assets/assets/icons/dot.svg": "db7f2ac0708de2b158ff5304edb5f9a6",
"assets/assets/icons/facebook_icon.svg": "1d9962604d02e7de39382278f516efd7",
"assets/assets/icons/google_icon.svg": "46c45f7af688bf0043893fe58bff47c0",
"assets/assets/icons/gps.svg": "ee30224d1603521ed97c5b64c50774c7",
"assets/assets/icons/hamburger.svg": "34f93f2e785101e6ef49cd4a6faeb01f",
"assets/assets/icons/heart.svg": "e4ed0efa7172a261f818443a5b789ebf",
"assets/assets/icons/level1.svg": "e4095cf424670a42de419d25a2cd51e8",
"assets/assets/icons/level2.svg": "1d6f133d348e1c39887dbab131367cc7",
"assets/assets/icons/level3.svg": "23d48674aac98c8719743274bed1155e",
"assets/assets/icons/list-outline.svg": "5f28d359420ea30a74d817b08c4c0574",
"assets/assets/icons/Map.svg": "905aabd1eb15814448ae6d018249e517",
"assets/assets/icons/no_events.svg": "6f65093969cd3e0197db3723cbfcd6da",
"assets/assets/icons/people.svg": "bccd7b9398c83d484de22a88bc21cfdb",
"assets/assets/icons/person.svg": "a081b756370609e654c025404307366d",
"assets/assets/icons/pin.png": "4e5f7753725c733d5a20c3123731222a",
"assets/assets/icons/pin.svg": "5b9b6ab7d3e6656050b3a26582fc6ade",
"assets/assets/icons/qr-code.svg": "8c6d167a24134ac9d21c3692de790c69",
"assets/assets/icons/search-outline.svg": "d20b124f937b0403d1710a562360b481",
"assets/assets/icons/star-outline.svg": "c389261741f0031107738d614e32c8c2",
"assets/assets/icons/tickets.svg": "ac41ae4ac75d7808675b73d883748f44",
"assets/assets/icons/trophy1.svg": "9bc2e5a4cf1f2145b7e86071432bbe54",
"assets/assets/icons/trophy2.svg": "3b7891db8a770619944f92bef372d957",
"assets/assets/icons/trophy3.svg": "2f6853e0bd48e72a7f7225613dbc646a",
"assets/assets/images/appollo_logo_a_purple.png": "6437abb4c76c7889681247f48e47f74f",
"assets/assets/images/appollo_logo_a_white.png": "bfa30b3494875c2421fdd4c07e7aa87d",
"assets/assets/images/appollo_logo_black.png": "2725adf2dee98c5d35eb950f89cc8c51",
"assets/assets/images/appollo_logo_purple.png": "e26432ba029a5dec8f36ec2480259e82",
"assets/assets/images/appollo_logo_white.png": "ffd0e5e72daa46f682a44f49ea197af7",
"assets/assets/images/appstore.svg": "f54563d839be5e4bfa1a49e60cc600d4",
"assets/assets/images/Map.jpg": "239af7484a2fa20499e1b320733435b5",
"assets/assets/images/Map.png": "5e6b08ac3eec8e1090f1b976d88270f9",
"assets/assets/images/placeholderImages/bar_chart_sample_4.png": "47eb8c0ebe66b10016cd46a345c178c4",
"assets/assets/images/playstore.svg": "82258ec055a487721095072f4796d040",
"assets/FontManifest.json": "7427687f28c88abd3e7f42b3f9b20b33",
"assets/fonts/Cocon-RegularTR.ttf": "3cb2dc7f975186787930e7b93ee18dc0",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/icons/aonly.png": "41b36a5fc0bdf683fcfcb4bb8357bf39",
"assets/icons/apple_icon.svg": "0b1172280f37170efd38930058db89b7",
"assets/icons/calendar.svg": "92be5dcd8a3be78086c5fec49a113c11",
"assets/icons/credit_card.svg": "ac7fde1400658ecfe7d7583b9ef371d9",
"assets/icons/facebook_icon.svg": "1d9962604d02e7de39382278f516efd7",
"assets/icons/google_icon.svg": "46c45f7af688bf0043893fe58bff47c0",
"assets/images/appollo_logo_a_purple.png": "6437abb4c76c7889681247f48e47f74f",
"assets/images/appollo_logo_a_white.png": "bfa30b3494875c2421fdd4c07e7aa87d",
"assets/images/appollo_logo_black.png": "2725adf2dee98c5d35eb950f89cc8c51",
"assets/images/appollo_logo_purple.png": "e26432ba029a5dec8f36ec2480259e82",
"assets/images/appollo_logo_white.png": "ffd0e5e72daa46f682a44f49ea197af7",
"assets/images/appstore.svg": "f54563d839be5e4bfa1a49e60cc600d4",
"assets/images/placeholderImages/bar_chart_sample_4.png": "47eb8c0ebe66b10016cd46a345c178c4",
"assets/images/playstore.svg": "82258ec055a487721095072f4796d040",
"assets/NOTICES": "862e26287c5ab96d3102db714acc1b8a",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/elo.png": "523ddd31d37dd0cd6727d7006c328f8e",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"favicon.png": "ada9d55a88c5596a756af517c294bb34",
"index.html": "78c9e3ec1e774eb6a81707cf5a1d0615",
"/": "78c9e3ec1e774eb6a81707cf5a1d0615",
"main.dart.js": "afc736aef75d7acb677bb87782b8dbb0",
"manifest.json": "780ec3bc81fc9b57e70c68352e984c33",
"version.json": "26f69b3b3b105846dc78118785e86cef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
