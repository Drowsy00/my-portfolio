<template>
  <div class="terminal-window">
    <div class="terminal-header">
      <span class="red-dot"></span>
      <span class="yellow-dot"></span>
      <span class="green-dot"></span>
    </div>
    <div class="terminal-body" ref="terminalBody">
      <p v-for="(line, index) in terminalOutput" :key="index">{{ line }}</p>
      <form class="terminal-form" @submit.prevent="processCommand">
        <span class="prompt">{{ prompt }} {{ directory }} {{ parsent }}</span>
        <input type="text" v-model="command" ref="commandInput" autofocus />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TerminalWindow",
  data() {
    return {
      terminalOutput: [],
      command: "",
      // prompt: "$drowsy@portforio",
      prompt: "drowsy@portforio",
      directory: "~",
      parsent: "%",
      currentDirectory: "/",
      space: "　　　",
    };
  },
  methods: {
    processCommand() {
      this.terminalOutput.push(
        `${this.prompt} ${this.directory} ${this.parsent} ${this.command} `
      );
      if (this.command === "help") {
        this.terminalOutput.push(
          `portforio to Programmer CUI MODE`,
          `${this.space}`,
          `commands `,
          `${this.space}`,
          `cat [file]:open txt or md files.`,
          `cd [dir]:change directory.`,
          `ls :list segments.`
        );
      } else if (this.command.startsWith("ls")) {
        const destination = this.command.split(" ")[1];
        if (this.directory === "about" || "skills" || "contact" || "~") {
          if (this.command === "ls" || "ls ") {
            if (this.directory === "about") {
              this.terminalOutput.push(` about.txt `);
            } else if (this.directory === "skills") {
              this.terminalOutput.push(` skills.txt `);
            } else if (this.directory === "contact") {
            } else if (this.directory === "~") {
              this.terminalOutput.push(
                `about${this.space}skills${this.space}contact`
              );
            }
          }
        }
      } else if (this.command.startsWith("cd")) {
        const destination = this.command.split(" ")[1];
        if (destination === "about" || "skills" || "contact") {
          if (destination === "about") {
            this.directory = "about";
          } else if (destination === "skills") {
            this.directory = "skills";
          } else if (destination === "contact") {
            this.directory = "contact";
          } else if (this.command === "cd" || "cd ") {
            this.directory = "~";
          } else {
            this.terminalOutput.push(
              `${this.prompt} cd: ${destination}: No such directory`
            );
          }
        }
      } else if (this.command.startsWith("cat")) {
        if (this.directory === "about" || "skills" || "contact" || "~") {
          if (this.command === `cat ${this.directory}`) {
            if (this.directory === "about") {
              this.terminalOutput.push(
                `${this.space}`,
                `2017-2020`,
                `IT業界に興味を持つ`,
                `目的もなく高校に入学`,
                `中学の頃から毎晩のように友人と通話しながらPCゲームをしてました。`,
                `ゲームやPCのソフト、スマホアプリなどからプログラミングに興味を持ちました`,
                `${this.space}`,
                `2020`,
                `ITの専門学校に入学`,
                `ITの専門学校に入学し、プログラミングを本格的に学ぶ。`,
                `HTML, CSS, Javascript, Python, PHPなどの基本的な学習をしました。`,
                `${this.space}`,
                `2021`,
                `応用に挑戦`,
                `友人と授業の中でwebアプリを開発しました。`,
                `AIなどを使い1年間かけて開発し、いろいろなことを学びました。`,
                `${this.space}`,
                `2022`,
                `IT業界に興味を持つ`,
                `実務経験を積むためにITアルバイトに挑戦しました。`,
                `デザイン会社にてホームページの修正、更新、新規追加などをしました。`,
                `${this.space}`,
                `2023`,
                `いろいろなことに挑戦`,
                "vue.jsやNuxt.jsを学習しました。",
                "Flutterなどのモバイルアプリなども学習し始めました。",
                "案件などを獲得するためにより実践的なものを学習しています。",
                `${this.space}`
              );
            } else if (this.directory === "skills") {
              this.terminalOutput.push(
                `${this.space}`,
                `HTML`,
                `経験年数 : 2年 実務年数 : 1年`,
                `${this.space}`,
                `CSS`,
                `経験年数 : 2年 実務年数 : 1年`,
                `Javascript`,
                `${this.space}`,
                `経験年数 : 2年 実務年数 : 1年`,
                `${this.space}`,
                `python`,
                `経験年数 : 1年`,
                `${this.space}`,
                `Java`,
                `経験年数 : 1年`,
                `${this.space}`,
                `php`,
                `経験年数 : 1年`,
                `${this.space}`,
                `Node.js`,
                `経験年数 : 1年`,
                `${this.space}`,
                `vue.js`,
                `経験年数 : 2年 実務年数 : 1年`,
                `${this.space}`,
                `Nuxt.js`,
                `経験年数 : 1年`,
                `${this.space}`,
                `jquery`,
                `経験年数 : 1年`,
                `${this.space}`
              );
            } else if (this.directory === "contact") {
            } else if (this.directory === "~") {
              this.terminalOutput.push(
                `about${this.space}skills${this.space}contact`
              );
            }
          }
        }
      } else {
        this.terminalOutput.push(`command not found: ${this.command}`);
      }

      this.command = "";
      this.$refs.terminalBody.scrollTop = this.$refs.terminalBody.scrollHeight;
    },
  },
};
</script>

<style scoped>
.terminal-window {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* max-width: 800px;
  max-height: 600px; */
  background-color: black;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.terminal-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  padding-left: 10px;
}

.terminal-header span {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.red-dot {
  background-color: #ff5f56;
}

.yellow-dot {
  background-color: #ffbd2e;
}

.green-dot {
  background-color: #27c93f;
}

.terminal-body {
  flex-grow: 1;
  padding: 10px;
  overflow: auto;
}

.terminal-form {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.prompt {
  color: #9eff6e;
  margin-right: 5px;
}

@media (max-width: 500px) {
  .terminal-body {
    font-size: 12px;
  }
}
</style>
