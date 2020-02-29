<template>
    <div class="Shopappraise">
       <div class="score">
           <div class="praiseleft">
               <p>3.9</p>
               <p>综合评分</p>
               <span>高于周边商家69.3%</span>
           </div>
           <div class="praiseright">
               <Row>
                    <i-col span="24">
                        <span>服务态度</span><Rate show-text :value.sync="valueCustomText">
                           <span style="color: #f5a623"></span>
                        </Rate>
                    </i-col>
               </Row>
               <Row>    
                    <i-col span="24">
                        <span>服务态度</span><Rate show-text :value.sync="valueCustomText">
                            <span style="color: #f5a623"></span>
                        </Rate>
                    </i-col>
               </Row> 
              <div class="time">
                  <span>送达时间</span><p>44分钟</p>
              </div>   
               
           </div>
       </div>
       <div class="separate"></div>
       <div class="praiserate">
          <button >全部57</button>
          <button >满意47</button>
          <button >不满意10</button>
       </div>
       <div class="chose">
          <p>只看有内容的评价</p>
       </div>
       <div class="view" v-for="v in data" :key="v.id">
           <div>
               <img :src="v.avatar" >
           </div>
           <div class="viewpanel">
               <span class="name">{{v.username}}</span><span class="viewTime">{{v.rateTime}}</span>
               <div>
                    <Row>
                        <i-col span="24">
                            <Rate show-text :value.sync="v.score">
                                <span style="color: #f5a623"></span> <span>{{v.deliveryTime}}分钟送达</span>
                            </Rate>
                        </i-col>
                    </Row>
               </div>
               <p>{{v.text}}</p>
               <div class="foods">
                   <div v-for="(v) in v.recommend" :key="v.id">{{v}}</div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    import { getRatings } from '../api/apis'
    export default {
        data(){
            return{
                data:'',
                valueText: 4,
                valueCustomText: 4
              }
            
        },
        created(){
             getRatings().then(res=>{
                 this.data=res.data.data
                 console.log(this.data);
             });
             
        }
    }
</script>

<style lang="less">
     .Shopappraise{
          overflow: hidden;
               position: absolute;
               overflow:auto;
               width: 100%;
               bottom:60px;
               top:170px;
               height:100%;
                overflow: scroll;
        .score{
           display: flex;
           width: 100%;
           height: 120px;
           justify-content: space-between;
           align-items: center;
           border-top: 1px solid rgb(183, 191, 204);
           .praiseleft{
               border-right: 1px solid rgb(183, 191, 204);
               width: 35%;
               p:nth-child(1){
                   color: orange;
                   font-size: 24px;
               }
               p:nth-child(2){
                   font-size: 14px;
                   font-weight:400;
               }
               span{
                   font-size: 12px;
                   color: rgb(102, 108, 114);
               }
           }
           .praiseright{
               span{
                   font-size: 14px;
                   font-weight: 400;
                   margin-right: 10px;
               }
               .time{
                  display: flex;
                  p{
                      color: rgb(185, 164, 164);
                  }
               }
           }
        } 
        .separate{
            height: 30px;
            width: 100%;
            background: rgb(233, 234, 238);
            border-top: 1px solid #F4F4F4;
            border-bottom: 1px solid #F4F4F4;
        }
        .praiserate{
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 80px;
            border-bottom: 1px solid #EBEBEB;
            button{
                width: 80px;
                height:40px;
                background: none;
                border: 0;
                margin-left:14px;
            }
            button:nth-child(1){
                background: #00A0DC;
                color: #fff;
            }
            button:nth-child(2){
                background: #CCECF7;
            }
            button:nth-child(3){
                background: #EAEBED;
            }
        }  
        .chose{
            height: 50px;
            display: flex;
            align-items: center;
            color: #000;
            border-bottom: 1px solid #EBEBEB;
        }  
        .view{
            height: 140px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid #000;
            div{
                img{
                    margin-top: 20px;
                    margin-left: 20px;
                    width: 40px;
                    height: 40px;
                }
            }
            .viewpanel{
                margin-top: 20px;
                margin-left: 20px;
                width: 100%;
                height: 100%;
                text-align: left;
                .name{
                    font-size: 12px;
                    font-weight: 300;
                    padding-right: 100px;
                }
                .foods{
                    margin-top: 5px;
                    display: flex;
                    div{
                        margin-right: 5px;
                        font-size: 10px;
                        border: 1px solid rgb(212, 182, 182);
                        border-radius: 20%;
                    }
                }
            }
        }  
     }
</style>