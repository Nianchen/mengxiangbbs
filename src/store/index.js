import {defineStore} from 'pinia';
export  const userTextStore = defineStore({//需要注意的是，defineStore返回的是一个回调方法
    id:'user',//test是该状态管理的唯一标志也可以使用defineStore(id,{});的形式
    state(){
     return {
         username:'hello pinia',
         age:20,
         token:"",
     }       
    },
    getters:{
        testGetters(){
            return this.name+'...';//直接利用this便能够获取到里面的内容不需要使用state中间对象
        } 
    },
    actions:()=>{
       
    }
})
