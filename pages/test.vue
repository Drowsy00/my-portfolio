<template>
  <div
    class="terminal-window"
    :style="{ left: windowX + 'px', top: windowY + 'px' }"
    @mousedown="startDrag"
  >
    <div class="terminal-header" @mouseup="stopDrag">
      <span class="red-dot"></span>
      <span class="yellow-dot"></span>
      <span class="green-dot"></span>
    </div>
    <div class="terminal-body" ref="terminalBody" @click="onClickFocus()">
      <p>Drowsy's Port Forio CUI MODE</p>
      <p>LOADED</p>
      <p>[ |||||||||||||||||||||||||||||||||||||||||||||||||||||||| ]</p>
      <p v-for="(line, index) in terminalOutput" :key="index">{{ line }}</p>
      <form class="terminal-form" @submit.prevent="processCommand">
        <span class="prompt">{{ prompt }} {{ directory }} {{ parsent }}</span>
        <input
          type="text"
          class="command-input"
          v-model="command"
          ref="commandInput"
          autofocus
        />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isDragging: false,
      windowX: 200,
      windowY: 200,
      mouseX: 0,
      mouseY: 0,
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
    onClickFocus() {
      this.$refs.commandInput.focus();
    },
    startDrag(event) {
      this.isDragging = true;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      event.preventDefault();
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.stopDrag);
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.stopDrag);
    },
    handleMouseMove(event) {
      if (this.isDragging) {
        const deltaX = event.clientX - this.mouseX;
        const deltaY = event.clientY - this.mouseY;
        this.windowX += deltaX;
        this.windowY += deltaY;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    },
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
      } else if (
        this.command.startsWith("ls ") ||
        this.command.startsWith("ls")
      ) {
        const destination = this.command.split(" ")[1];
        if (this.directory === "about" || "skills" || "contact" || "~") {
          if (this.command === "ls" || "ls ") {
            if (this.directory === "about") {
              if (this.command === "ls" || this.command === "ls ") {
                this.terminalOutput.push(` about.txt `);
              } else if (this.command.startsWith("ls ")) {
                this.terminalOutput.push(
                  `ls: ${this.command}: No such file or directory`
                );
              } else {
                this.terminalOutput.push(`command not found: ${this.command}`);
              }
            } else if (this.directory === "skills") {
              if (this.command === "ls" || this.command === "ls ") {
                this.terminalOutput.push(` skills.txt `);
              } else if (this.command.startsWith("ls ")) {
                this.terminalOutput.push(
                  `ls: ${this.command}: No such file or directory`
                );
              } else {
                this.terminalOutput.push(`command not found: ${this.command}`);
              }
            } else if (this.directory === "contact") {
              if (this.command === "ls" || this.command === "ls ") {
                this.terminalOutput.push(` contact.txt `);
              } else if (this.command.startsWith("ls ")) {
                this.terminalOutput.push(
                  `ls: ${this.command}: No such file or directory`
                );
              } else {
                this.terminalOutput.push(`command not found: ${this.command}`);
              }
            } else {
              if (this.command === "ls" || this.command === "ls ") {
                this.terminalOutput.push(
                  `about${this.space}skills${this.space}contact`
                );
              } else if (this.command.startsWith("ls ")) {
                this.terminalOutput.push(
                  `ls: ${destination}: No such file or directory`
                );
              } else {
                this.terminalOutput.push(`command not found: ${this.command}`);
              }
            }
          }
        }
      } else if (
        this.command.startsWith("cd") ||
        this.command.startsWith("cd ")
      ) {
        const destination = this.command.split(" ")[1];
        if (this.directory === "about" || "skills" || "contact" || "~") {
          if (destination === "about") {
            if (this.directory === "~") {
              this.directory = "about";
            } else {
              this.terminalOutput.push(
                `cd: no such directory : ${destination};`
              );
            }
          } else if (destination === "skills") {
            if (this.directory === "~") {
              this.directory = "skills";
            } else {
              this.terminalOutput.push(
                `cd: no such directory : ${destination};`
              );
            }
          } else if (destination === "contact") {
            if (this.directory === "~") {
              this.directory = "contact";
            } else {
              this.terminalOutput.push(
                `cd: no such directory : ${destination};`
              );
            }
          } else {
            if (this.command.startsWith("cd ")) {
              if (this.command === "cd ") {
                this.directory = "~";
              } else {
                this.terminalOutput.push(
                  `cd: no such directory : ${destination};`
                );
              }
            } else if (this.command.startsWith("cd")) {
              if (this.command === "cd") {
                this.directory = "~";
              } else {
                this.terminalOutput.push(`command not found: ${this.command}`);
              }
            }
          }
        }
      } else if (
        this.command.startsWith("cat") ||
        this.command.startsWith("cat ")
      ) {
        const destination = this.command.split(" ")[1];
        if (this.directory === "about") {
          if (destination === "about.txt") {
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
          } else {
            if (this.command.startsWith("cat ")) {
              if (this.command === "cat ") {
              } else {
                this.terminalOutput.push(
                  `cat: no such directory : ${destination};`
                );
              }
            } else if (this.command.startsWith("cat")) {
              if (this.command === "cat") {
              } else {
                this.terminalOutput.push(`command not found: ${this.command}`);
              }
            }
          }
        } else if (this.directory === "skills") {
          if (destination === "skills.txt") {
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
          } else {
            if (this.command.startsWith("cat ")) {
              if (this.command === "cat ") {
              } else {
                this.terminalOutput.push(
                  `cat: no such directory : ${destination};`
                );
              }
            } else if (this.command.startsWith("cat")) {
              if (this.command === "cat") {
              } else {
                this.terminalOutput.push(`command not found: ${this.command}`);
              }
            }
          }
        } else if (this.directory === "contact") {
          if (destination === "contact.txt") {
            this.terminalOutput.push(
              `${this.space}`,
              `https://github.com/Drowsy00`,
              `${this.space}`
            );
          } else {
            if (this.command.startsWith("cat ")) {
              if (this.command === "cat ") {
              } else {
                this.terminalOutput.push(
                  `cat: no such directory : ${destination};`
                );
              }
            } else if (this.command.startsWith("cat")) {
              if (this.command === "cat") {
              } else {
                this.terminalOutput.push(`command not found: ${this.command}`);
              }
            }
          }
        } else if (this.directory === "~") {
          if (this.command.startsWith("cat ")) {
            if (this.command === "cat ") {
            } else {
              this.terminalOutput.push(
                `cat: no such directory : ${destination};`
              );
            }
          } else if (this.command.startsWith("cat")) {
            if (this.command === "cat") {
            } else {
              this.terminalOutput.push(`command not found: ${this.command}`);
            }
          }
        }
      } else if (this.command !== "") {
        this.terminalOutput.push(
          `command not found: ${this.command}`,
          `Use 'help' to see the command list.`
        );
      }

      this.command = "";
      this.$refs.terminalBody.scrollTop = this.$refs.terminalBody.scrollHeight;
    },
  },
};
</script>
<style scoped>
.text {
  background: black;
}

.content {
  padding: 10px;
}

* {
  font-family: Rubik;
}
.terminal-window {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  max-width: 700px;
  max-height: 500px;
  background-color: black;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-color: black;
  border: 2px solid rgb(242, 240, 240);
  border-radius: 10px;
  bottom: 0px;
  right: 0px;
}

.terminal-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  padding-left: 20px;
  cursor: move;
  background: #1d1d1d;
  border-radius: 10px 10px 0px 0px;
}

.terminal-header span {
  height: 15px;
  width: 15px;
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
.terminal-body::-webkit-scrollbar {
  display: none;
}

.terminal-form {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.prompt {
  color: #00ff00;
  margin-right: 5px;
  /* padding-bottom: 12px; */
}

.command-input {
  border: none;
}

input[type="text"]:focus {
  border: none;
  outline: 0;
}

@media (max-width: 500px) {
  .terminal-body {
    font-size: 12px;
  }
}
</style>
