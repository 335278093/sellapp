<template>
    <div class="Shop">
        <div id="head" :style="{backgroundImage:'url('+data.avatar+')',backgroundRepeat:'no-repeat',backgroundPosition:'center', backgroundSize: 'cover'}">
             <div class="bg">
                 <div class="composing">
                    <div class="left">
                        <img :src="this.data.avatar">
                    </div>
                    <div class="right">
                        <div><span>品牌</span><h3>{{data.name}}</h3></div>
                        <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
                        <div><span id="discount">满</span><p>{{data.supports[0].description}}</p><span class="amount">5个</span></div>
                    </div>
                 </div>
                 <div> <p class="title">{{data.bulletin}}</p></div>
             </div>
        </div>
        <div class="router-link-div">
            <router-link to='/Shop-order'>订单</router-link>
            <router-link to='/Shop-appraise'>评价</router-link>
            <router-link to='/Shop-seller'>商家</router-link>
        </div>
             <router-view/>
        <div class="foot">
                <div class="left">
                    <div>
                        <img src="../assets/imgs/1.png" alt="">
                    </div>
                </div>
                <div class="middle"><div>￥0</div><p>另需配送费￥4元</p></div>
                <div class="right">￥20起送</div>
            </div>
        </div> 
    
</template>

<script>
import { getSeller } from '../api/apis'

export default {
    data(){
       return {
          data:''
       }
    },
    created(){
         getSeller().then(res=>{
            this.data=res.data.data;
            console.log(this.data);
         })
     },
}
</script>

<style lang="less">
        .Shop{
            width: 100%;
            height: 100%;
               #head{
                    width: 100%;
                    height: 140px;
                    position: absolute;
                    z-index: 10000;
                    top: 0;
                    left: 0;
                    .bg{
                        background: rgba(71, 71,71, 0.8); 
                        height: 100%;
                        position: relative;
                         .composing{
                             display: flex;
                             justify-content: space-around;
                             align-items:center;
                             height: 100%;
                         }
                        .left>img{
                            width:80px;
                            height:80px;
                        }
                        .right{
                            text-align: left;
                            width: 65%;
                            color: #fff;
                            span{
                                background: red;
                                padding: 2px 5px;
                            }
                            p{
                                line-height: 24.8px;
                                font-size: 12px;
                                color: rgb(241, 234, 234);

                            }
                            div{
                              display: flex;
                              h3{
                                  margin-left: 10px;
                                  line-height: 24.8px;
                              }
                             #discount{
                                  padding: 2px 3px;
                                  background: rgb(235, 228, 227);
                                  color: rgb(194, 116, 63);
                              }
                              p{
                                 margin-left: 5px;
                                 margin-right: 50px;
                              }
                              .amount{
                                  padding: 0 12px;
                                  line-height: 24.8px;
                                  border-radius: 35%;
                                  background: rgb(68, 60, 60);
                              }
                            }
                        }
                      
                          .title{
                               overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                height: 22px;
                                width: 100%;
                                position: absolute;
                                bottom: 0;
                                color: #fff;
                                font-size: 10px;
                                background: rgb(63, 51, 51);
                                line-height: 22px;
                              }
                    }
                }
                
            }
            .router-link-div{
                    display: flex;
                    position: absolute;
                    justify-content: space-around;
                    height: 30px;
                    width: 100%;
                    line-height: 30px;
                    background: #fff;
                    top: 140px;
                    left: 0;
                    z-index: 10000;
            }
            .foot{
                    position: fixed;
                    bottom: 0;
                    height: 60px;
                    background: #131D26;
                    width: 100%;
                    color: #fff;
                    z-index: 10000;
                    display: flex;
                    .left{
                       width: 80px;
                       background: #141C27;
                       position: relative;
                       div{
                           width: 60px;
                           height:60px;
                           border-radius: 50%;
                           background: #141C27;
                           position: absolute;
                           top: -14px;
                           left: 16px;
                           img{
                               width: 50px;
                               height:50px;
                               margin-top: 4px;
                           }
                       }
                    }
                    .middle{
                        flex: 1;
                         background: #141C27;
                         display: flex;
                         justify-content: space-around;
                         color: rgb(148, 157, 165);
                         line-height: 60px;
                         div{
                             font-size: 16px;
                             font-weight: bold;
                         }
                         p{
                             font-size: 12px;
                         }
                    }
                    .right{
                      width: 130px;
                      background: #2B343B;
                      color: rgb(148, 157, 165);
                      line-height: 60px;
                      font-size: 16px;
                      font-weight: bold;
                    }
            
            }
</style>