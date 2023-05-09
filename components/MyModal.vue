<template>
  <draggable-resizable
    v-model:active.sync="isActive"
    :w="width"
    :h="height"
    :x="x"
    :y="y"
    :z-index="zIndex"
    :min-w="minWidth"
    :min-h="minHeight"
    :max-w="maxWidth"
    :max-h="maxHeight"
    :parent="parentSelector"
    :drag-handle="dragHandleSelector"
    :grid="[1, 1]"
  >
    <div
      class="modal-header"
      :class="{ 'cursor-grab': !isActive, 'cursor-grabbing': isActive }"
    >
      <div class="modal-title">{{ title }}</div>
      <button class="modal-close" @click="close">X</button>
    </div>
    <div class="modal-content" :class="{ 'cursor-move': !isActive }">
      <slot></slot>
    </div>
  </draggable-resizable>
</template>

<script>
import DraggableResizable from "vue-draggable-resizable";

export default {
  components: {
    DraggableResizable,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 300,
    },
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 9999,
    },
    minWidth: {
      type: Number,
      default: 100,
    },
    minHeight: {
      type: Number,
      default: 100,
    },
    maxWidth: {
      type: Number,
      default: 1000,
    },
    maxHeight: {
      type: Number,
      default: 1000,
    },
    parentSelector: {
      type: String,
      default: "body",
    },
    dragHandleSelector: {
      type: String,
      default: ".modal-header",
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #ccc;
}

.modal-title {
  font-size: 16px;
  font-weight: bold;
}

.modal-close {
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}

.modal-content {
  padding: 16px;
  background-color: #fff;
}
</style>
