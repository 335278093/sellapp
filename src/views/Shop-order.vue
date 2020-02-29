<template>
    <div class="Shoporder">
        <div class="shopleft">
            <ul class="content">
                <div v-for="(v,i) in data" :key="v.id" @click="fn(i)" :class="{'active':index==i?true:false}">
                    <p>{{v.name}}</p>
                </div>
            </ul>    
        </div>
        <div class="shopright">
            <ul class="content">
                <div  v-for="(v,i) in data" :key="v.id" :id="i">
                    <p class="title">{{v.name}}</p>
                    <div v-for="v in v.foods" :key="v.id" class="foods">
                        <img :src="v.image" >
                        <div>
                            <h3>{{v.name}}</h3>
                            <p>{{v.description}}</p>
                            <p>月售{{v.sellCount}}份  好评率{{v.rating}}%</p>
                            <div>￥{{v.price}}<del v-if="v.oldprice==''">￥{{v.oldprice}}</del><p></p></div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import { getGoods } from '../api/apis'
import BScroll from 'better-scroll'
    export default {
        data(){
            return {
                 data:{},
                 index:''
            }
        },
        created(){
             getGoods().then(res=>{
              this.data=res.data.data;
              console.log(this.data)
             })
        },
        mounted(){
            new BScroll( document.querySelector('.shopleft'),{click: true});
            this.rightshop=new BScroll( document.querySelector('.shopright'),{click: true});
        },
        methods:{
            fn:function(a){
               this.index=a;
               this.rightshop.scrollToElement(document.getElementById(a), 400)
            }
        }

    }
</script>

<style lang="less">
     
      .Shoporder{
               overflow: hidden;
               position: absolute;
               overflow:auto;
               width: 100%;
               top:170px;
               height:100%;
               display: flex;
          .shopleft{
              overflow: scroll;
              width: 100px;
              height: 100%;
               .active{
                        background: #fff;
                        color: rgb(125, 125, 247);
                    }

              div{
                  height: 50px;
                  border-bottom: 1px solid rgb(138, 113, 113);
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  background: #F4F5F7;
              } 

          }
          .shopright{
              flex: 1;
              overflow: scroll;
              img{
                  width: 60px;
                  height: 60px;
                
              }
              .title{
                  background: #F4F5F7;
              }
              .foods{
                  text-align: start;
                  width: 90%;
                  margin: 0 auto;
                  display: flex;
                  border-bottom: 3px solid #F4F5F7;
                  align-items: center;
                  div{
                      margin-left: 10px;
                  }
              }
          }
         
      }
</style>



