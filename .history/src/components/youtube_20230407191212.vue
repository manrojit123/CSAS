<template>
    <div>
      <div @click="playFullScreen">
        <iframe 
        width="560" height="315" src="https://www.youtube.com/embed/jtta_5rGsHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div v-if="showFullScreen">
        <iframe
          ref="player"
          width="100%"
          height="100%"
          :src="'https://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=1'"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YouTubeEmbed',
    props: {
      videoId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showFullScreen: false
      }
    },
    methods: {
      playFullScreen() {
        this.showFullScreen = true;
        const player = this.$refs.player;
        player.requestFullscreen();
      }
    }
  }
  </script>
  