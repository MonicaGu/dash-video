<template>
  <div class = "content">
    <section class="content-header">
      <h1>
        视频列表
        <small>Check</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
      </ol>
    </section>
    <section class="content">
  <div class="video-player">
    <div class="video-list">
      <div  v-for="video in videos" :key="video.id" class="thumbnail">
        <div class="row">
          <a href="http://www.w3school.com.cn/">
        <button type="button" class="btn btn-light btn-block pull-left" style="margin-right: 5px;">
            <div class="pull-left">
              <!-- User Image -->
              <img :src= "imgUrl" class="img-circle" alt="video.title">
            </div>
          <div class="thumbnail-info">
            <h4>{{ video.title }}</h4>
            <div class="thumbnail-views">
              <span>{{ video.speaker }}</span>
              <span>{{video.views}} Views</span>
            </div>
            <div class="thumbnail-describe">{{ video.describe }}</div>
          </div>
        </button>
          </a>
      </div>
      </div>
    </div>
  </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'watchVideo.vue',
    data () {
      return {
        videos: [{id: 1, title: 'Behind the Illusions: Impossibly high-performance layout animations',
          thumbnail: '...', speaker: 'David Khourshid', likes: 2, views: 0, describe: "This is a video description."},
          {id: 8, title: 'Journeys: What makes a developer, really?', thumbnail: '../static/logo.png',
            speaker: 'Ivana McConnell', likes: 0, views: 2, describe: "This is a video description."}],
        imgUrl:require("@/assets/bigbrother.png")
      }
    }
  }
</script>

<style scoped>

</style>
