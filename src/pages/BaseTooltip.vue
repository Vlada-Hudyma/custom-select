<template>
  <div class="tooltipList">
    <div v-for="(item,index) in data" :key="index" class="tooltipList__item" :class="item.name">
      <div class="tooltipList__item-name"
           @mouseover="mouseOver(index)"
           @mouseout="mouseOver(index)"
      >
        {{ item.name }}
      </div>
      <span class="tooltipList__item-description" v-show="item.active">{{ item.description }}</span>
    </div>
  </div>
</template>

<script>
import {TOOLTIP_DATA} from "../data/tooltipData";

export default {
  name: "BaseTooltip",
  data() {
    return {
      data: TOOLTIP_DATA,
      isTooltip: false,
    }
  },
  methods: {
    mouseOver(index) {
      this.data[index].active = !this.data[index].active;
    },
  }
}
</script>

<style lang="scss">
@import "../assets/styles/common/variables";

.tooltipList {
  display: flex;
  flex-wrap: wrap;

  &__item {
    margin-right: 12px;
    margin-bottom: 12px;
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    &-name {
      color: $base-color;
      cursor: pointer;
      border: 1px solid $base-color;
      border-radius: 2px;
      min-width: 88px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      text-transform: capitalize;
    }

    &-description {
      position: absolute;
      max-width: 138px;
      background: #FFFFFF;
      border: 1px solid #F2F3F6;
      box-sizing: border-box;
      box-shadow: 0 6px 15px rgba(0, 44, 92, 0.1);
      padding: 6px;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      z-index: 1;
    }
  }
}
</style>
