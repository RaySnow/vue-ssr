<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="less">
  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: darkgrey;
  }
</style>
