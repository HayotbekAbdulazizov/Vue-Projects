// // file:///home/hayotbek/Documents/GitHub/JavaScript_dom/Vue/Vue_basic/index.html

// const Counter = {
//     data(){
//         return{
//             counter:0
//         }
//     },

//     methods:{
//         plus(){
//             this.counter++
//         },
//         minus(){
//             this.counter--
//         }
//     }
// }
// Vue.createApp(Counter).mount('#counter')




// LESSON 2

const app2 = {
    data(){
        return {
            seen:1,
            name:'',
            people: [
                {name:'Hayotbek'},
                {name:'John'},
                {name:'Doe'}
            ]

        }
    }
}
Vue.createApp(app2).mount('#app')


// const app3 = Vue.createApp()
// app3.component('list-item',{
//     template:"<li> Some item in list </li>"
// })
// app3.mount('#app')