<template>
  <aside class="slider">
    <ul>
      <li
        class="slider-item"
        :class="{ 'is-active': isActive(sliderItem) }"
        v-for="sliderItem in slider"
        :key="sliderItem.name"
        @click="toSliderPage(sliderItem)"
      >
        {{ sliderItem.name }}
      </li>
    </ul>
  </aside>
  <article class="content">
    <router-view></router-view>
  </article>
</template>

<script setup lang="ts">
import { RouterView, useRouter, useRoute } from 'vue-router';
import routes from './router';

interface Slider {
  name: string,
  path: string
}

const slider: Array<Slider> = routes.filter(route => route.isSlider && route.name).map(elem => {
  return {
    name: elem.name || '',
    path: elem.path
  }
})

// 路由方法
const router = useRouter();
// 当前路由的参数
const route = useRoute();

type name = { name: string }
// 路由跳转
const toSliderPage = ({ name }:name) => {
  console.log(">>>>", name);
  router.push({ name });
};
// 判断路由是否是当前页面
const isActive = ({ name }:name) => {
  return route.name === name;
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  width: 150px;
  min-height: 100vh;
  padding: 1rem 0;
  text-align: center;
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: #e4e7ed;
    z-index: 1;
  }
  &-item {
    position: relative;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    // padding: 0 20px;
    transition: border-color 0.3s, background 0.3s, padding 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 3px solid var(--ant-primary-color);
      transform: scaleY(0.0001);
      opacity: 0;
      transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1),
        opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
      content: "";
      z-index: 2;
    }
    &:hover {
      color: var(--ant-primary-color-hover);
      cursor: pointer;
    }
    &.is-active {
      color: var(--ant-primary-color);
      background-color: var(--ant-primary-1);
      &:after {
        transform: scaleY(1);
        opacity: 1;
      }
    }
  }
}
.content {
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
