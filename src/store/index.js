import {defineStore} from 'pinia';
export  const userTestStore = defineStore({//需要注意的是，defineStore返回的是一个回调方法
    id:'test',//test是该状态管理的唯一标志也可以使用defineStore(id,{});的形式
    state(){
     return {
         name:'hello pinia',
         age:20
     }       
    },
    getters:{
        testGetters(){
            return this.name+'...';//直接利用this便能够获取到里面的内容不需要使用state中间对象
        } 
    },
    actions:()=>{
        //pinia 同步异步都放在actions里
        addAge:function(){
                setInterval(()=>{
                this.age++;
            },1000)
        }
    }
})
