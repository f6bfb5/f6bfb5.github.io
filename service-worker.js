!function(){"use strict";const e=1649997673955,i="cache"+e,n=["/client/client.698a6d9c.js","/client/inject_styles.5607aec6.js","/client/index.49a51a56.js","/client/about.7f0421d7.js","/client/[slug].efefe6a0.js"].concat(["/service-worker-index.html","/.nojekyll","/.well-known/brave-rewards-verification.txt","/ACG-the-curse-of-evangelion.srt","/The Irony of the Dunning-Kruger Effect.srt","/_c_choju22_0020_s512_choju22_0020_4.png","/_c_choju23_0036_s512_choju23_0036_11.png","/_c_choju38_0037_s512_choju38_0037_5.png","/_c_choju46_0040_s512_choju46_0040_11.png","/_c_choju49_0035_s512_choju49_0035_0.png","/_c_choju56_0008_s512_choju56_0008_1.png","/_c_choju57_0032_s512_choju57_0032_3.png","/_c_choju60_0025_s512_choju60_0025_0.png","/e0724_0.svg","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/browserconfig.xml","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/logo-192.png","/favicon/logo-512.png","/favicon/manifest.json","/favicon/mstile-150x150.png","/favicon/noun_great_buddha_of_kamakura_3572172.svg","/favicon/safari-pinned-tab.svg","/favicon/site.webmanifest","/favicon.ico","/fonts/Cubic_11_1.010_R.ttf","/fonts/Cubic_11_1.010_R.woff","/fonts/Cubic_11_1.010_R.woff2","/fonts/fonts.css","/global.css","/highlight.css","/logo.ico","/preview/2020-what-i-have-read-on-internet.png","/preview/2021-what-i-have-read-on-internet.png","/preview/2022-what-i-have-read-on-internet.png","/preview/ACG-80s-winter-age-of-anime.png","/preview/ACG-Pause-And-Select-Apocalypse.png","/preview/ACG-all-about-kaworu-ikuhara-kunihiko-interview.png","/preview/ACG-anime-report-2019.png","/preview/ACG-char-counterattack-fans-interview.png","/preview/ACG-comprehend-asani-inio-horograph.png","/preview/ACG-difference-of-director-and-producer.png","/preview/ACG-does-anno-hideaki-really-dont-know-what-he-is-making.png","/preview/ACG-does-otaku-culture-really-change-after-earthquake.png","/preview/ACG-emotion-of-mother-00.png","/preview/ACG-emotion-of-mother-01.png","/preview/ACG-emotion-of-mother-02.png","/preview/ACG-emotion-of-mother-03.png","/preview/ACG-eoe-interview.png","/preview/ACG-expression-of-light-and-heavy.png","/preview/ACG-ginza-demonstration.png","/preview/ACG-history-of-robot-anime.png","/preview/ACG-interview-of-jojo-sakuga-director.png","/preview/ACG-linda-cube-introduction.png","/preview/ACG-linda-cube-on-ps-archive.png","/preview/ACG-making-of-linda3.png","/preview/ACG-message-to-children-under-covid19-from-tomino.png","/preview/ACG-no-one-would-laugh-at-tear-of-maimoto.png","/preview/ACG-note.png","/preview/ACG-on-your-mark.png","/preview/ACG-our-bible-just-reissue-in-kindle.png","/preview/ACG-paintaking-of-anime-buble-tragedy-of-musashi-gundoh.png","/preview/ACG-petition-of-sakuga-otaku.png","/preview/ACG-planetes-is-the-treasure-of-life.png","/preview/ACG-problems-about-taiwan-students-facing-japan-culture.png","/preview/ACG-rockman-1-tas-glitch.png","/preview/ACG-seino-tooru.png","/preview/ACG-serial-experiments-lain-for-ps.png","/preview/ACG-sexual-illusion.png","/preview/ACG-super-manga-book-list.png","/preview/ACG-tenki-no-ko-is-sekaikei-also-not.png","/preview/ACG-the-curse-of-evangelion.png","/preview/ACG-the-influences-of-naoko-yamada.png","/preview/ACG-the-opening-of-shirobako-movie.png","/preview/ACG-the-way-of-quality-anubis-zone-of-enders-hd-edition.png","/preview/ACG-theory-of-traveller.png","/preview/ACG-thought-about-re-take.png","/preview/ACG-understanding-staff-of-anime.png","/preview/ACG-what-does-anime-describe-after-war.png","/preview/ACG-what-does-wall-of-meisaku-mean.png","/preview/ACG-what-is-games-done-quick.png","/preview/ACG-why-you-should-not-use-interpolation-on-anime.png","/preview/ACG-would-netflix-be-the-saviour-of-anime.png","/preview/ACG-yume-no-shima-de-aimashou.png","/preview/auto-generate-eyecatch-image-for-blog.png","/preview/blog-with-hexo.png","/preview/blog-with-svelte.png","/preview/capitalist-realism-mark-fisher.png","/preview/how-do-you-like-wendesday.png","/preview/how-to-check-font-family-name-in-computer.png","/preview/login-with-discord.png","/preview/lyrics-gift-from-you.png","/preview/lyrics-good-night-world.png","/preview/lyrics-hamada-shogo-j-boy.png","/preview/lyrics-higuchi-ryouichi-1-6-dream-traveller.png","/preview/lyrics-joanne-hogg-stars-of-tears.png","/preview/lyrics-mr-children-fake.png","/preview/lyrics-onitaba-chihiro-rollin.png","/preview/lyrics-onitaba-chihiro-waltz-with-me.png","/preview/lyrics-psy-s-earth-ark-on-the-tree.png","/preview/lyrics-radwimps-grand-escape.png","/preview/lyrics-saihate.png","/preview/lyrics-saitou-kazuyoshi-star-over-the-sky-is-so-beautiful.png","/preview/lyrics-sakai-mikio-wonderful-life.png","/preview/lyrics-sambomaster-people-call-it-passion.png","/preview/lyrics-see-saw-story-with-you.png","/preview/lyrics-susumu-hirasawa-kingdom.png","/preview/lyrics-suzuki-yume-one-and-only.png","/preview/lyrics-the-pillows-funny-bunny.png","/preview/lyrics-toshihide-baba-boys-on-the-run.png","/preview/lyrics-toshihide-baba-ordinary.png","/preview/lyrics-yoshida-takuro-dont-talk-about-life.png","/preview/lyrics-yui-makino-modokashii-sekai-no-ue-de.png","/preview/movie-pornostar.png","/preview/mpv.png","/preview/search-engine-operators.png","/preview/the-irony-of-the-dunning-kruger-effect.png","/preview/tool-list-creativity.png","/preview/tool-list-gaming.png","/preview/tool-list-system.png","/preview/use-foobar2k-to-listen-to-podcast.png","/preview/what-nft-is-not.png","/preview/why-is-life-so-boring.png","/preview/why-people-say-i-dont-understand-after-watching-movie.png","/scrollbar-thumb.css","/subtitles.parser.js","/youtube.external.subtitle.js","/youtube.external.subtitle.min.js"]),o=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(i).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==i&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const n=new URL(i.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&o.has(n.pathname)?i.respondWith(caches.match(i.request)):"only-if-cached"!==i.request.cache&&i.respondWith(caches.open("offline"+e).then(async e=>{try{const n=await fetch(i.request);return e.put(i.request,n.clone()),n}catch(n){const o=await e.match(i.request);if(o)return o;throw n}}))))})}();
