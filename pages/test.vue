<template>
  <div class="page-container">
    <h1 class="page-title">--- TEST ---</h1>
    <div class="main-container">
      <div class="timeline-container">
        <div
          v-for="(entry, index) in entries"
          :key="index"
          class="entry"
          :class="{ 'entry-left': index % 2 !== 0 }"
        >
          <!-- <div class="title" :class="{ big: entry.year === 2013 }"> -->
          <div class="title">
            {{ entry.year }}
            <div class="title-icon"></div>
          </div>
          <div class="timeline-body">
            <p v-for="(tlTitle, i) in entry.tlTitle" :key="i">
              {{ tlTitle }}
            </p>
            <p
              v-for="(paragraph, i) in entry.paragraphs"
              :key="i"
              class="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: [
        {
          year: "2017-2020",
          tlTitle: ["IT業界に興味を持つ"],
          paragraphs: [
            `目的もなく高校に入学`,
            `中学の頃から毎晩のように友人と通話しながらPCゲームをしてました。`,
            `ゲームやPCのソフト、スマホアプリなどからプログラミングに興味を持ちました。`,
          ],
        },
        {
          year: 2020,
          tlTitle: ["ITの専門学校に入学"],
          paragraphs: [
            `ITの専門学校に入学し、プログラミングを本格的に学ぶ。`,
            `HTML, CSS, Javascript, Python, PHPなどの基本的な学習をしました。`,
          ],
        },
        {
          year: 2021,
          tlTitle: ["応用に挑戦"],
          paragraphs: [
            `友人と授業の中でwebアプリを開発しました。`,
            `AIなどを使い1年間かけて開発し、いろいろなことを学びました。`,
          ],
        },
        {
          year: 2022,
          tlTitle: ["ITアルバイトに挑戦"],
          paragraphs: [
            `実務経験を積むためにITアルバイトに挑戦しました。`,
            `デザイン会社にてホームページの修正、更新、新規追加などをしました。`,
          ],
        },
        {
          year: 2023,
          tlTitle: ["さらにいろいろなことに挑戦"],
          paragraphs: [
            "vue.jsやNuxt.jsを学習しました。",
            "Flutterなどのモバイルアプリなども学習し始めました。",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
}
@media (max-width: 767px) {
  .page-title {
    font-size: 25px;
  }
}

.main-container {
  margin-top: 50px;
  display: flex;
}

/* .main-container::after {
  content: "";
  display: block;
  position: fixed;
  position: absolute;
  top: 0px;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  width: 4px;
  background-color: #00ff00;
} */

.timeline-container {
  width: calc(100% - 80px);
  max-width: 800px;
  height: 100%;
  margin: auto;
  position: relative;
}

.timeline-container::after {
  content: "";
  display: block;
  position: fixed;
  position: absolute;
  top: 0px;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  width: 4px;
  background-color: #00ff00;
}

.timeline-container .entry {
  width: calc(50% - 80px);
  float: left;
  padding: 20px;
  clear: both;
  text-align: right;
  background-color: #1d1d1d;
  border-radius: 10px;
  margin-bottom: 30px;
}

.timeline-container .entry:not(:first-child) {
  margin-top: -60px;
}

.timeline-container .entry .title {
  font-size: 32px;
  margin-bottom: 12px;
  position: relative;
  color: #fff;
  background-color: #1d1d1d;
}

.timeline-container .entry .title::before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  border: 4px solid #00ff00;
  background-color: #00ff00;
  border-radius: 100%;
  top: 50%;
  transform: translate(8px, -50%);
  /* right: -73px; */
  z-index: 1;
}

.timeline-container .entry .title.big::before {
  width: 24px;
  height: 24px;
  transform: translate(8px, -50%);
}

.timeline-container .entry .title:not(.big)::before {
  right: auto;
  left: 376px;
}

.timeline-container .entry .title:not(.big)::before {
  transform: translate(-8px, -50%);
}

.timeline-container .entry .timeline-body {
  color: #aaa;
}

.timeline-container .entry .timeline-body p {
  line-height: 1.4em;
  background-color: #1d1d1d;
  text-align: left;
}

.timeline-container .entry:nth-child(2n) {
  text-align: left;
  float: right;
}

.timeline-container .entry:nth-child(2n) .title::before {
  left: auto;
  right: 360px;
}

.timeline-container .entry:nth-child(2n) .timeline-body {
  text-align: left;
}

.timeline-container .entry:nth-child(2n) {
  float: right;
}

.paragraph {
  font-size: 13px;
}
</style>
