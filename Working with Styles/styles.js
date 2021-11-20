const App1 = {
    data(){
        return {
            name:'John',
            surname:'Doe',
            message:'Hello, World !!!',
            value:true,
            status:200,
            color:'red',
            style:{
                fontSize:"30px",
                borderRadius:"5px",
                backgroundColor:"orange",
                padding:'30px'
            }
        }
    },
    methods:{
        change(){
            this.color = 'blue'
        },
        changeValue(){
            this.value = !this.value
            console.log(this.value)
        },
        reverseMessage(){
            // this.message = this.message.split('').reverse().join('')
            return this.message = this.message.split('').reverse().join('')
        }
    },
    computed:{
        getFullName(){
            return `${this.name}-${this.surname}`
        }
    }
}
Vue.createApp(App1).mount("#app")