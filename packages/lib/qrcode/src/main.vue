<template>
  <canvas ref="qrcode"></canvas>
</template>

<script>
import Qrious from 'qrious';

export default {
  name: 'els-qrcode',
  data() {
    return { qrious: null };
  },
  props: {
    background: {
      type: String,
      default: 'white',
    },
    backgroundAlpha: {
      type: Number,
      default: 1.0,
    },
    foreground: {
      type: String,
      default: 'black',
    },
    foregroundAlpha: {
      type: Number,
      default: 1.0,
    },
    level: {
      type: String,
      default: 'L',
    },
    mime: {
      type: String,
      default: 'image/png',
    },
    padding: {
      type: Number,
      default: null,
    },
    size: {
      type: Number,
      default: 100,
    },
    value: {
      type: String,
      required: true,
    },
  },
  watch: {
    background() {
      this.qrious.background = this.background;
    },
    backgroundAlpha() {
      this.qrious.backgroundAlpha = this.backgroundAlpha;
    },
    foreground() {
      this.qrious.foreground = this.foreground;
    },
    foregroundAlpha() {
      this.qrious.foregroundAlpha = this.foregroundAlpha;
    },
    level() {
      this.qrious.level = this.level;
    },
    mime() {
      this.qrious.mime = this.mime;
    },
    padding() {
      this.qrious.padding = this.padding;
    },
    size() {
      this.qrious.size = this.size;
    },
    value() {
      this.qrious.value = this.value;
    },
  },
  mounted() {
    this.getQrious();
  },
  methods: {
    getQrious() {
      console.log(12);
      const element = this.$refs.qrcode;
      const {
        background,
        backgroundAlpha,
        foreground,
        foregroundAlpha,
        level,
        mime,
        padding,
        size,
        value,
      } = this;
      this.qrious = new Qrious({
        element,
        background,
        backgroundAlpha,
        foreground,
        foregroundAlpha,
        level,
        mime,
        padding,
        size,
        value,
      });
    },
  },
};
</script>