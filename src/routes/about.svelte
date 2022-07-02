<script>
  import GlitchText from "$lib/GlitchText.svelte";

  const backgroundImageUrls = [
    // === Lain ===
    "https://media4.giphy.com/media/PZrjGkr334fXa/giphy.gif",
    "https://media0.giphy.com/media/udK21RQeWtaGQ/giphy.gif",
    "https://c.tenor.com/AL_kKT7aS9IAAAAC/serial-experiments-lain-yasuo-iwakura.gif",
    "https://c.tenor.com/_v4H6lwCZZ0AAAAC/serial-experiments-lain-lain.gif",
    "https://c.tenor.com/1nD0WjJfRr4AAAAC/lain-lain-iwakura.gif",
    "https://c.tenor.com/rz-36T9kAEIAAAAC/lain-playstation.gif",
    // src: https://tenor.com/view/anime-girl-gif-24497284
    "https://c.tenor.com/xK6H41lmjrQAAAAC/anime-girl.gif",
    "https://c.tenor.com/I2pOVoq3YAIAAAAC/lain-serial-experiments.gif",
    // === Anime ===
    // src: https://media4.giphy.com/media/nlk3Y1u3r1n5C/giphy.gif
    "https://64.media.tumblr.com/tumblr_m50esawubi1qghl49o1_r1_500.gifv",
    // src: https://media0.giphy.com/media/jsoMtBuP1Ahpu/giphy.gif
    "https://64.media.tumblr.com/697566623f56a200b381fa731c5d4b15/tumblr_merrziLMqG1qghl49o1_r1_500.gifv",
    "https://c.tenor.com/Ky-q-qGYd4AAAAAC/darker-than-black-dtb-hei.gif",
    "https://i.imgur.com/P3EwTea.gif",
    "https://c.tenor.com/aHBrM0hpUokAAAAC/air-airtv.gif",
    "https://c.tenor.com/tFggqYir3gEAAAAC/brain-powerd-brain-powered.gif",
    "https://c.tenor.com/ALHc1ovczTYAAAAC/dio-dio-brando.gif",
    "https://c.tenor.com/4oLj8LDw_-sAAAAC/digimon-tai.gif",
    "https://c.tenor.com/NrQ9k6ZJUk4AAAAC/edward-elric-fma.gif",
    "https://c.tenor.com/zPSOb4Cni_sAAAAC/fullmetal-alchemist-edward-elric.gif",
    "https://c.tenor.com/_Lsj1f5ioPEAAAAC/haman-gundam.gif",
    "https://c.tenor.com/GqWOrKpj8UAAAAAC/gundam-amuro.gif",
    "https://c.tenor.com/urtf9xuBAaMAAAAC/tengen-toppa.gif",
    // "https://c.tenor.com/0v63YjpRCuQAAAAC/madoka-magica.gif",
    "https://c.tenor.com/Ads_EGsOaioAAAAC/promare-anime.gif",
    "https://c.tenor.com/iF2QagbiCSIAAAAC/eureka-eureka-seven.gif",
    "https://c.tenor.com/R27oaZQSMi4AAAAC/haibane-renmei-ailes-grises.gif",
    "https://c.tenor.com/zLBsleCsdOQAAAAC/akane-shinj%C5%8D-shinjou-akane.gif",
    "https://c.tenor.com/d6b6YPHSgYoAAAAC/scopedog-votoms.gif",
    // === Game ===
    "https://c.tenor.com/SjuAbL0uMakAAAAC/yume-nikki-yume.gif",
    "https://c.tenor.com/6L6itJ6PXKoAAAAC/chrono-trigger-courtroom.gif",
    "https://c.tenor.com/0lv-4Uu_h_EAAAAC/giygas.gif",
    "https://c.tenor.com/43Sbat6QfUoAAAAC/xenogears-mecha.gif",
    "https://c.tenor.com/e6DP5Mypb2MAAAAC/xenogears-cross.gif",
    "https://c.tenor.com/8LexFYcsTmQAAAAC/va11hall-a-jill.gif",
    "https://c.tenor.com/TCEyVCo9wG0AAAAC/dark-souls-bonfire.gif",
    "https://s3.amazonaws.com/com.twilio.prod.twilio-docs/original_images/1tFKtacF7rSNxnHmwfYKSOFzQU6p2XU3MdUtBdhS4n5pRfCHrvlpNaEK9fMLXkgu9Ys-04iEuX.png",
    // src: https://tenor.com/view/namco-x-capcom-anime-video-games-kosmos-xenogears-gif-16674177
    "https://c.tenor.com/Z44G6YGKlnkAAAAC/namco-x-capcom-anime.gif",
    "https://c.tenor.com/cd2lzZRW9WUAAAAC/omega-zero-megaman.gif",
    "https://i.imgur.com/gL1P7Q1.gif",
    // === Pixel art ===
    "https://c.tenor.com/-GZI0TXyO-AAAAAC/subway-yuri.gif",
    "https://c.tenor.com/BrNtIejIcXUAAAAC/pixel-art.gif",
    "https://c.tenor.com/a6pDrWf6gJgAAAAC/pixel-city-art.gif",
    "https://cdn.discordapp.com/attachments/980799725068488704/980843396291772446/image0.gif",
    // === Movie ===
    "https://64.media.tumblr.com/414c6d09204aba6b054341b45b68758d/tumblr_n381ofewGD1qghl49o1_r1_500.gifv",
    "https://64.media.tumblr.com/4c10be689ac1391fc24526008320e33b/tumblr_moro5oFd9n1qghl49o1_r1_500.gifv",
    // "https://c.tenor.com/6-OKnddIaaIAAAAC/oddloop-frederic.gif",
    // "https://i.imgur.com/vGT9RRj.jpg",
    "https://i.imgur.com/SqCn8Gj.jpg",
  ];

  const randomTargetUrlArr = [
    // ========================================
    // home of the first website
    "http://info.cern.ch/",
    // Right versus pragmatic
    "https://marco.org/2012/02/25/right-vs-pragmatic",
    // 我漸漸不信任 UX 的原因
    "https://intersection.tw/%E6%88%91%E6%BC%B8%E6%BC%B8%E4%B8%8D%E4%BF%A1%E4%BB%BB-ux-%E7%9A%84%E5%8E%9F%E5%9B%A0-c9ea15dd2ca7",
    // How I experience web today
    "https://how-i-experience-web-today.com/",
    // ========================================
    // 正直的人
    "https://yclou.blogspot.com/2015/07/blog-post_20.html",
    // 無敵の人になりかけた
    "https://anond.hatelabo.jp/20190529235940",
    // Uncomfortable Truths - Existential Comics
    "https://existentialcomics.com/comic/431",
    // ========================================
    // 編程自學指南番外：如果媒體業像科技業一樣……
    "https://matters.news/@Andy/728-%E7%B7%A8%E7%A8%8B%E8%87%AA%E5%AD%B8%E6%8C%87%E5%8D%97%E7%95%AA%E5%A4%96-%E5%A6%82%E6%9E%9C%E5%AA%92%E9%AB%94%E6%A5%AD%E5%83%8F%E7%A7%91%E6%8A%80%E6%A5%AD%E4%B8%80%E6%A8%A3-zdpuAt6B8omvRQrg9WzkwKWWCC29DorS3ePdmAqiQwmimRW5Z",
    // 創業辯證法
    "https://matters.news/@Andy/6002-%E5%89%B5%E6%A5%AD%E8%BE%AF%E8%AD%89%E6%B3%95-zdpuB2fCc6WEa12hnher8fcsPVgsU58MDpwHyCcrEQF8H47m9",
    // 線性產值與指數產值
    "https://blog.kalan.dev/2021-10-17-linear-and-exponential-value/",
    // バッドノウハウと「奥が深い症候群」
    "http://0xcc.net/misc/bad-knowhow.html",
    // ========================================
    // 語用（pragmatic）
    "https://aaphi.blogspot.com/2010/03/pragmatic.html",
    // 全世界的文化都有某個道德規則又怎樣
    "https://aaphi.blogspot.com/2010/02/blog-post_28.html",
    // ========================================
    // 日常の失敗も品質管理で解決できる
    "https://honeshabri.hatenablog.com/entry/quality-of-life-management",
    // もっとうまく書けるかもという妄執をやめれば速くうまく書ける
    "https://readingmonkey.blog.fc2.com/blog-entry-759.html",
    // 「結果が出ない焦り」と向き合う方法
    "https://note.com/4bata/n/n6f78b20d9814",
    // どんな服が良いのか分からない時は、他人の服装を丸パクリせよ
    "https://healthy-person-emulator.memo.wiki/d/%a4%c9%a4%f3%a4%ca%c9%fe%a4%ac%ce%c9%a4%a4%a4%ce%a4%ab%ca%ac%a4%ab%a4%e9%a4%ca%a4%a4%bb%fe%a4%cf%a1%a2%c2%be%bf%cd%a4%ce%c9%fe%c1%f5%a4%f2%b4%dd%a5%d1%a5%af%a5%ea%a4%bb%a4%e8",
    // 健康的な生活リズムを確立したほうがよい
    "https://healthy-person-emulator.memo.wiki/d/%b7%f2%b9%af%c5%aa%a4%ca%c0%b8%b3%e8%a5%ea%a5%ba%a5%e0%a4%f2%b3%ce%ce%a9%a4%b7%a4%bf%a4%db%a4%a6%a4%ac%a4%e8%a4%a4",
    // 自分の思っていることを相手にしっかり伝えるようにする
    "https://healthy-person-emulator.memo.wiki/d/%bc%ab%ca%ac%a4%ce%bb%d7%a4%c3%a4%c6%a4%a4%a4%eb%a4%b3%a4%c8%a4%f2%c1%ea%bc%ea%a4%cb%a4%b7%a4%c3%a4%ab%a4%ea%c5%c1%a4%a8%a4%eb%a4%e8%a4%a6%a4%cb%a4%b9%a4%eb",
    // ========================================
  ];

  function getRandomEleFromArr(arr) {
    return arr[Math.floor(arr.length * Math.random())];
  }

  const backgroundImage = getRandomEleFromArr(backgroundImageUrls);
  let targetUrl = getRandomEleFromArr(randomTargetUrlArr);
  const text = "追体験で人は幸福になれない";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div
  class="about--background"
  style="background-image: url('{backgroundImage}')"
>
  <a
    href={targetUrl}
    class="about--background-caption"
    target="_blank"
    rel="noreferrer noopener"
    on:click={() => (targetUrl = getRandomEleFromArr(randomTargetUrlArr))}
  >
    <GlitchText {text} />
  </a>
</div>

<style scoped>
  .about--background {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 1000;
    transform: translate(-50%, -50%);
    overflow: hidden;

    background-color: black;
    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
  }

  .about--background-caption {
    align-self: center;
    min-height: 100%;

    font-size: 40px;
    text-align: center;
  }

  @media screen and (max-width: 576px) {
    .about--background-caption {
      font-size: 28px;
    }
  }
</style>
