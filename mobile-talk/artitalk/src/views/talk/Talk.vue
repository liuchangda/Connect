<template>
    <div>
        <div class="talk-bar">
            <ul>
                <li v-for="(item,index) in talkList" :key="index">
                    <div class="right">
                        <span>{{item.question}}</span>
                    </div>
                    <div class="left">
                        <span>{{item.answer}}</span>
                    </div>
                </li>
            </ul>
        </div>
       <div class="talk-form">
            <input type="text" v-model="msg">
            <button @click="send">发送</button>
        </div> 
    </div>
    
</template>

<style>
.talk-form{
    background: #ddd;
    padding-top: .3rem;
    position: fixed;
    bottom: 1rem;
    width: 100%;
    text-align: center;
}
input{
    width: 75%;
}
.talk-bar span{
    padding: 5px 10px;
    background-color: rgb(195, 240, 195);
}
.left{
    text-align: left;
}
.right{
    text-align: right;
}
</style>

<script>
import md5 from 'js-md5'
export default {
    data(){
        return{
            msg:'',
            talkList:[],
        }
    },
    created(){
        let obj = {
            title:'聊天',
            className:'talk'
        };
        this.$emit("changNav",obj);
    },
    methods:{
        getTimeStamp(){
            let dataStr = Date.parse(new Date());
            dataStr = dataStr.toString().substr(0,10);
            return dataStr;
            
        },
        getNonceStr(){
            let str = Math.random().toString(36).substr(2);
            return str;
        },
        getRepSign(params,appkey){
            let arr = [];
            let obj = {};
            let str = '';
            //1、对象排序
            arr = Object.keys(params).sort();
            arr.forEach((item,index,arr) => {
                obj[item]= params[item];
            });

            //2、参数对按URL键值对的格式拼接成字符串
            for(let item in obj){
                if(obj[item] != ''){
                    str +=item+"="+encodeURI(obj[item])+"&";
                }
            }
            //3将应用密钥以app_key为键名，组成URL键值拼接到字符串末尾
            str += 'app_key='+appkey;

            // 4对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写
            str = md5(str).toUpperCase();
            return str;
        },
        
        send(){
            let API_PROXY = 'https://bird.ioliu.cn/v2?url=';
            let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat';
            let appkey = '1c9jyvJi8JlP8Q0v';
            let params={
                app_id:'2111982998',
                nonce_str:this.getNonceStr(),
                time_stamp:this.getTimeStamp(),
                session:'10000',
                question:this.msg,
                sign:''
            };
            params.sign = this.getRepSign(params,appkey);
            axios({
                url:API_PROXY+url,
                method:'post',
                data:{...params}
            }).then(res => {
                let obj = {
                    question:this.msg,
                    answer:res.data.data.answer,
                }
                this.talkList.push(obj);
                console.log(this.msg);
                console.log(res);
                
                
                
            })
        }
    },

}

</script>