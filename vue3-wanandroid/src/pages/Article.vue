<template>
  <div class="container">
    <div class="header">
      <img class="logo" src="@/assets/images/logo.png" />
      <div>
        <p class="title">WanAndroid</p>
        <p class="subtitle">https://www.wanandroid.com</p>
      </div>
    </div>

    <div class="main">
      <div class="list_container">
        <div class="item" v-for="(item, index) in articleData.data" :key="index">
          <p class="title">{{ index + 1 + '.' + item.title }}</p>
          <div class="sub_container">
            <p :class="getCname(item.superChapterName)">{{ item.superChapterName }}</p>
            <p class="sub_title">{{ 'Author:' + item.author }}</p>
            <p class="sub_title">{{ 'ChapterName:' + item.chapterName }}</p>
            <p class="sub_title">{{ 'Date:' + item.niceDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import fakeData from '../assets/json/fakedata.json'

// import { getArtData } from '../network/api.js'

const articleData = reactive({ data: [] })

const getCname = function (v) {
  if (v === '公众号') {
    return reactive({
      sub_title0: true
    })
  } else {
    return reactive({
      sub_title1: true
    })
  }
}

onMounted(() => {
  // getArtData().then((res) => {
  //   console.log(res)
  // })
  console.log(document.documentElement.style.fontSize)
  articleData.data = fakeData.data.datas
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  display: flex;
  flex-direction: row;
  place-items: center;
  place-content: center;
  background-color: var(--color-background-soft);
  padding: 2rem;
}

.logo {
  width: 8rem;
  border-radius: 1rem;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  margin-right: 1rem;

  /* animation-name: scaleAnimation;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  transition-timing-function: ease-in-out; */
}

.title {
  font-size: 2rem;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.subtitle {
  font-size: 1rem;
  font-weight: 500;
}

.main {
  overflow: auto;
  background-color: var(--color-background-mute);
}

@media (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: 100vh;
  }

  .header {
    display: flex;
    flex-direction: row;
    place-items: center;
    place-content: center;
    background-color: var(--color-background-soft);
  }

  .list_container {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }
}

.list_container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.item {
  width: 100%;
  background-color: var(--color-background-soft);
  margin-bottom: 2rem;
  border-radius: 1rem;
  align-content: center;
  padding: 2rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}

.item:hover {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}

.item .title {
  font-size: 1.2rem;
}

.sub_container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
}

.sub_title0 {
  font-size: 1rem;
  color: white;
  border-radius: 0.4rem;
  padding: 0 0.5rem 0 0.5rem;
  background-color: #32a14a;
}

.sub_title1 {
  font-size: 1rem;
  color: white;
  border-radius: 0.4rem;
  padding: 0 0.5rem 0 0.5rem;
  background-color: #2790f2;
}

@media (min-width: 600px) {
  .sub_container {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .sub_title0 {
    font-size: 1rem;
    color: white;
    margin-right: 1rem;
    border-radius: 0.4rem;
    padding: 0 0.5rem 0 0.5rem;
    background-color: #32a14a;
  }

  .sub_title1 {
    font-size: 1rem;
    color: white;
    margin-right: 1rem;
    border-radius: 0.4rem;
    padding: 0 0.5rem 0 0.5rem;
    background-color: #2790f2;
  }
}

.item .sub_title {
  font-size: 1rem;
  margin-right: 1rem;
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
}
</style>
