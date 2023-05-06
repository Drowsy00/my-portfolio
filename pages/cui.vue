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
        <span class="prompt">{{ prompt }}</span>
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
      prompt: "drowsy@portforio ~ %",
      currentDirectory: "/",
    };
  },
  methods: {
    processCommand() {
      this.terminalOutput.push(`${this.prompt} ${this.command}`);
      if (this.command === "help") {
        this.terminalOutput.push(`${this.prompt} --hello`);
      }
      if (this.command.startsWith("cd ")) {
        const destination = this.command.split(" ")[1];
        if (destination === "about") {
          this.currentDirectory = "/about";
        } else if (destination === "skills") {
          this.currentDirectory = "/skills";
        } else if (destination === "contact") {
          this.currentDirectory = "/contact";
        } else {
          this.terminalOutput.push(
            `${this.prompt} cd: ${destination}: No such directory`
          );
        }
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
  width: 80%;
  height: 80%;
  max-width: 800px;
  max-height: 600px;
  background-color: black;
  color: white;
  font-family: monospace;
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
</style>
