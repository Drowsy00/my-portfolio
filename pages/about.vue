<template>
  <div class="page-container">
    <h1 class="page-title" ref="element1">
      <span v-if="textTitle">--- ABOUT ---</span>
      <span v-if="isTitle">{{ randomString }}</span>
    </h1>
    <div class="main-container">
      <div class="timeline-container">
        <!-- 2017-2020 -->
        <div
          class="entry"
          :class="{ 'entry-left': index % 2 !== 0 }"
          ref="element2"
        >
          <div class="title">
            <span v-if="isYear1">{{ randomStringYear }}</span>
            <span v-if="textYear1">{{ entries[0].year }}</span>
            <div class="title-icon"></div>
          </div>
          <div class="timeline-body">
            <p>
              <span v-if="isYear1">{{ randomString }}</span>
              <span v-if="textYear1">--- {{ entries[0].tlTitle }} ---</span>
            </p>
            <br />
            <p class="paragraph">
              <span v-if="isTlbody1">{{ randomString40 }}</span>
              <span v-if="textTlbody1">{{ entries[0].paragraphs[0] }}</span>
              <br />
              <span v-if="isTlbody1">{{ randomString70 }}</span>
              <span v-if="textTlbody1">{{ entries[0].paragraphs[1] }}</span>
            </p>
          </div>
        </div>

        <!-- 2020 -->
        <div
          class="entry"
          :class="{ 'entry-left': index % 2 !== 0 }"
          ref="element3"
        >
          <div class="title">
            <span v-if="isYear2">{{ randomStringYear }}</span>
            <span v-if="textYear2">{{ entries[1].year }}</span>
            <div class="title-icon"></div>
          </div>
          <div class="timeline-body">
            <p>
              <span v-if="isYear2">{{ randomString }}</span>
              <span v-if="textYear2">--- {{ entries[1].tlTitle }} ---</span>
            </p>
            <br />
            <p class="paragraph">
              <span v-if="isTlbody2">{{ randomString30 }}</span>
              <span v-if="textTlbody2">{{ entries[1].paragraphs[0] }}</span>
              <br />
              <span v-if="isTlbody2">{{ randomString40 }}</span>
              <span v-if="textTlbody2">{{ entries[1].paragraphs[1] }}</span>
            </p>
          </div>
        </div>

        <!-- 2021 -->
        <div
          class="entry"
          :class="{ 'entry-left': index % 2 !== 0 }"
          ref="element4"
        >
          <div class="title">
            <span v-if="isYear3">{{ randomStringYear }}</span>
            <span v-if="textYear3">{{ entries[2].year }}</span>
            <div class="title-icon"></div>
          </div>
          <div class="timeline-body">
            <p>
              <span v-if="isYear3">{{ randomString }}</span>
              <span v-if="textYear3">--- {{ entries[2].tlTitle }} ---</span>
            </p>
            <br />
            <p class="paragraph">
              <span v-if="isTlbody3">{{ randomString30 }}</span>
              <span v-if="textTlbody3">{{ entries[2].paragraphs[0] }}</span>
              <br />
              <span v-if="isTlbody3">{{ randomString30 }}</span>
              <span v-if="textTlbody3">{{ entries[2].paragraphs[1] }}</span>
            </p>
          </div>
        </div>

        <!-- 2022 -->
        <div
          class="entry"
          :class="{ 'entry-left': index % 2 !== 0 }"
          ref="element5"
        >
          <div class="title">
            <span v-if="isYear4">{{ randomStringYear }}</span>
            <span v-if="textYear4">{{ entries[3].year }}</span>
            <div class="title-icon"></div>
          </div>
          <div class="timeline-body">
            <p>
              <span v-if="isYear4">{{ randomString }}</span>
              <span v-if="textYear4">--- {{ entries[3].tlTitle }} ---</span>
            </p>
            <br />
            <p class="paragraph">
              <span v-if="isTlbody4">{{ randomString30 }}</span>
              <span v-if="textTlbody4">{{ entries[3].paragraphs[0] }}</span>
              <br />
              <span v-if="isTlbody4">{{ randomString30 }}</span>
              <span v-if="textTlbody4">{{ entries[3].paragraphs[1] }}</span>
            </p>
          </div>
        </div>

        <!-- 2023 -->
        <div
          class="entry"
          :class="{ 'entry-left': index % 2 !== 0 }"
          ref="element6"
        >
          <div class="title">
            <span v-if="isYear5">{{ randomStringYear }}</span>
            <span v-if="textYear5">{{ entries[4].year }}</span>
            <div class="title-icon"></div>
          </div>
          <div class="timeline-body">
            <p>
              <span v-if="isYear5">{{ randomString }}</span>
              <span v-if="textYear5">--- {{ entries[4].tlTitle }} ---</span>
            </p>
            <br />
            <p class="paragraph">
              <span v-if="isTlbody5">{{ randomString30 }}</span>
              <span v-if="textTlbody5">{{ entries[4].paragraphs[0] }}</span>
              <br />
              <span v-if="isTlbody5">{{ randomString30 }}</span>
              <span v-if="textTlbody5">{{ entries[4].paragraphs[1] }}</span>
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
      randomString: "",
      randomString30: "",
      randomString40: "",
      randomString70: "",
      randomStringYear: "",
      textTitle: false,
      isTitle: false,

      textYear1: false,
      isYear1: false,
      textTlbody1: false,
      isTlbody1: false,

      textYear2: false,
      isYear2: false,
      textTlbody2: false,
      isTlbody2: false,

      textYear3: false,
      isYear3: false,
      textTlbody3: false,
      isTlbody3: false,

      textYear4: false,
      isYear4: false,
      textTlbody4: false,
      isTlbody4: false,

      textYear5: false,
      isYear5: false,
      textTlbody5: false,
      isTlbody5: false,

      entries: [
        {
          year: "2017-2020",
          tlTitle: "IT業界に興味を持つ",
          paragraphs: [
            `高校に入学。中学の頃から毎晩のように友人と通話しながらPCゲームをしてました。`,
            `父親がロボットを作ってくれたことや、ゲーム、スマホアプリなどからプログラミングに興味を持ちました。`,
          ],
        },
        {
          year: 2020,
          tlTitle: "ITの専門学校に入学",
          paragraphs: [
            `ITの専門学校に入学し、プログラミングを本格的に学ぶ。`,
            `HTML, CSS, Javascript, Python, PHPなどの基本的な学習をしました。`,
          ],
        },
        {
          year: 2021,
          tlTitle: "応用に挑戦",
          paragraphs: [
            `友人と授業の中でwebアプリを開発しました。`,
            `AIなどを使い1年間かけて開発し、いろいろなことを学びました。`,
          ],
        },
        {
          year: 2022,
          tlTitle: "ITアルバイトに挑戦",
          paragraphs: [
            `実務経験を積むためにITアルバイトに挑戦しました。`,
            `デザイン会社にてホームページの修正、更新、新規追加などをしました。`,
          ],
        },
        {
          year: 2023,
          tlTitle: "いろいろなことに挑戦",
          paragraphs: [
            "vue.jsやNuxt.jsを学習しました。",
            "Flutterなどのモバイルアプリなども学習し始めました。",
          ],
        },
      ],
    };
  },
  mounted() {
    const observer1 = new IntersectionObserver(
      this.handleIntersection1.bind(this),
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    observer1.observe(this.$refs.element1);

    const observer2 = new IntersectionObserver(
      this.handleIntersection2.bind(this),
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    observer2.observe(this.$refs.element2);

    const observer3 = new IntersectionObserver(
      this.handleIntersection3.bind(this),
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    observer3.observe(this.$refs.element3);

    const observer4 = new IntersectionObserver(
      this.handleIntersection4.bind(this),
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    observer4.observe(this.$refs.element4);

    const observer5 = new IntersectionObserver(
      this.handleIntersection5.bind(this),
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    observer5.observe(this.$refs.element5);

    const observer6 = new IntersectionObserver(
      this.handleIntersection6.bind(this),
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    observer6.observe(this.$refs.element6);

    setInterval(() => {
      this.randomString = this.generateRandomString();
      this.randomString30 = this.generateRandomString30();
      this.randomString40 = this.generateRandomString40();
      this.randomString70 = this.generateRandomString70();
      this.randomStringYear = this.generateRandomStringYear();
    }, 90);
  },
  methods: {
    generateRandomString() {
      let length = 15;
      let result = "";
      let characters = "-010101";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    generateRandomString30() {
      let length = 30;
      let result = "";
      let characters = "-010101";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    generateRandomString40() {
      let length = 40;
      let result = "";
      let characters = "-010101";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    generateRandomString70() {
      let length = 70;
      let result = "";
      let characters = "-010101";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    generateRandomStringYear() {
      let length = 5;
      let result = "";
      let characters = "-010101";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },

    handleIntersection1(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.generateRandomString();
          this.isTitle = true;
          this.textTitle = false;
          setTimeout(() => {
            this.isTitle = false;
            this.textTitle = true;
          }, 700);
        }
      });
    },
    handleIntersection2(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.generateRandomString();
          this.generateRandomString40();
          this.generateRandomString70();
          this.generateRandomStringYear();
          this.isYear1 = true;
          this.isTlbody1 = true;
          this.textYear1 = false;
          this.textTlbody1 = false;
          setTimeout(() => {
            this.isYear1 = false;
            this.isTlbody1 = false;
            this.textYear1 = true;
            this.textTlbody1 = true;
          }, 700);
        }
      });
    },
    handleIntersection3(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.generateRandomString();
          this.generateRandomString30();
          this.generateRandomString40();
          this.generateRandomStringYear();
          this.isYear2 = true;
          this.isTlbody2 = true;
          this.textYear2 = false;
          this.textTlbody2 = false;
          setTimeout(() => {
            this.isYear2 = false;
            this.isTlbody2 = false;
            this.textYear2 = true;
            this.textTlbody2 = true;
          }, 700);
        }
      });
    },
    handleIntersection4(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.generateRandomString();
          this.generateRandomString30();
          this.generateRandomString30();
          this.generateRandomStringYear();
          this.isYear3 = true;
          this.isTlbody3 = true;
          this.textYear3 = false;
          this.textTlbody3 = false;
          setTimeout(() => {
            this.isYear3 = false;
            this.isTlbody3 = false;
            this.textYear3 = true;
            this.textTlbody3 = true;
          }, 700);
        }
      });
    },
    handleIntersection5(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.generateRandomString();
          this.generateRandomString30();
          this.generateRandomString30();
          this.generateRandomStringYear();
          this.isYear4 = true;
          this.isTlbody4 = true;
          this.textYear4 = false;
          this.textTlbody4 = false;
          setTimeout(() => {
            this.isYear4 = false;
            this.isTlbody4 = false;
            this.textYear4 = true;
            this.textTlbody4 = true;
          }, 700);
        }
      });
    },
    handleIntersection6(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.generateRandomString();
          this.generateRandomString30();
          this.generateRandomString30();
          this.generateRandomStringYear();
          this.isYear5 = true;
          this.isTlbody5 = true;
          this.textYear5 = false;
          this.textTlbody5 = false;
          setTimeout(() => {
            this.isYear5 = false;
            this.isTlbody5 = false;
            this.textYear5 = true;
            this.textTlbody5 = true;
          }, 700);
        }
      });
    },
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
  text-align: center;
}

.timeline-container {
  text-align: left;
}

.entry {
  display: flex;
  margin-bottom: 50px;
  margin-right: 5%;
  margin-left: 5%;
}
.title {
  text-align: right;
  margin-right: 10%;
  /* width: 300px; */
  width: calc(50% - 100px);
}

.timeline-body {
  /* width: 80%; */
  width: calc(80% - 10px);
}
</style>
