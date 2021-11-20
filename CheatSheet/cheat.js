// file:///home/hayotbek/Documents/desktop-tutorial-master/vue-tutorial/vue-17-00/CheatSheet/index.html


const App = {
    data(){
        return{
            message:'Hello, World !!!',
            num: 10,
            num2:20,
            num3:30,
        }
    },
    methods:{
        showMessage(){
            alert(this.num + this.num2 + this.num3)
        }
    }
}

Vue.createApp(App).mount('#app')


//  Task 4
const Task4 = {
    data(){
        context = {
            result:0,
            num:10,
            num2:20,
            num3:30,
            value:true,
        }
        return context
    },
    methods:{
        sum: function(){
            this.result = this.num + this.num2 + this.num3
        },
        changeValue:function(value){
            this.value = value
        }
    }    
}
Vue.createApp(Task4).mount('#task4')


// Working with forms
const Form = {
    data(){
        return{
            message: ' ' ,
            chosenLang:null,
        }
    },
}
Vue.createApp(Form).mount('#form')





const Square = {
    data(){
        return{
            red:false,
            blue:false,
            yellow:false,
        }
    },
    methods:{
        changeColor(color){
            console.log(color)
            if(color == 'red'){
                this.red = true
                this.blue = false
                this.yellow = false
            }else if(color == 'blue'){
                this.red = false
                this.blue = true
                this.yellow = false
            }else if(color == 'yellow'){
                this.red = false
                this.blue = false
                this.yellow = true
            }
        }
    }
}

Vue.createApp(Square).mount('#square')



const Range = {
    data(){
        return{
            
        }
    }
}