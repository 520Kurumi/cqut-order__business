<template>
    <div class="logo">
        <img :src="MenuLogo" alt="logo" />
       <span class="logo-title" v-if="show">{{ title }}</span>
</div>
</template>

<script setup lang="ts">
    import MenuLogo from '@/assets/MenuLogo.png'
    const title='校园点餐系统'
  import {collapseStore} from '@/store/collapse/index' //获取store
import { watch } from 'vue'
  // import {computed} from 'vue'
  const store=collapseStore()
  // const collapse=computed(()=>{
  //   return !store.getCollapse
  // })

  let show=true;

  watch(
 ()=>store.getCollapse,
 ()=>{
   setTimeout(() => {
       show=!show
   }, 300);
 }
);

</script>

<style lang="scss" scoped>
    .logo {
        display: flex;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: #000000;
        text-align: center;
        cursor: pointer;
        align-items: center;
    
    img {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    margin-left: 18px;
    }
   
    .logo-title {
    color: #fff;
    // font-weight: 800;
    // line-height: 60px;
    // font-size: 22px;
    font-family: FangSong;
    }
}
</style>