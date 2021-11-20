const CheckList = {
    data(){
        return {
            tasks: [
                {name:'Wake Up Early !',  status:false},
                {name:'Go To School !',  status:false},
                {name:'Take A Shower !',  status:false},
            ],
            done:[
                {name:'Take A Shower !',  status:true}
            ],
        }
    },
    methods:{
        taskDone(){
                
        }
    }
}

Vue.createApp(CheckList).mount('#app')