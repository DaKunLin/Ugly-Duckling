<template>
  <div class="dash">
    <div class="dashRow"></div>
    <div class="dashYuchen">雨辰</div>
    <!-- 空白占位，方便后续内容拓展，同时防止页面下方被hidden -->
    <div class="dashBlock"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// import SwiperImg from './components/SwiperImg.vue'

@Component({
  components: { }
})
export default class DashBoard extends Vue {
  
}
</script>

<style lang="less" scoped>
.dash {
  width: 100%;
  // border: 2px solid blue;
  // height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  font-size: 1.5rem;
  &Yuchen{
    color:red;
  }
  &Row {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    // border: 2px solid red;

    &Swiper {
      width: 35%;
      margin: 20px 0;
    }

    @media screen and (max-width:1000px) {
      &Item {
        width: 100%;
        margin: 10px 0;
      }

      &Swiper {
        width: 100%;
      }

      &Clock {
        width: 100%;
      }
    }
  }

  &Block {
    flex: 0 0 50px;
  }
}
</style>