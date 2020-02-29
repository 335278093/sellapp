<template>
    <div>
         
    </div>
</template>

<script>
  import { getSeller } from '../api/apis'
    export default {
        data(){
            return{
                info:'',
            }

        },
        created(){
            getSeller().then(res=>{
                this.info=res.data.data;
                console.log(this.info);
            })
        }
    }
</script>

<style lang="less" scoped>

</style>