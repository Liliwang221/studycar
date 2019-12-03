<template>
  <div class="bigimg">
    <div class="swiper">
     <img :src="detailList.CoverPhoto&&detailList.CoverPhoto"/>
     <p class="p">{{detailList.pic_group_count&&detailList.pic_group_count}}张照片</p>
   </div>
{{detailList}}
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
    computed: {
        ...mapState({
            detailList:state=>state.detail.detailList.data
        })
    },
    methods:{
        ...mapActions({
            getdetailList:"detail/getdetailList"
        })
    },
    created(){
    //获取详情数据
    console.log(this.$store)
    this.getdetailList()
  }
}
</script>

<style>

</style>