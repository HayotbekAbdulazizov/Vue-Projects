// const App = {
//     data(){
//         return {
//             status:200,
//         }
//     },
//     methods:{
//       sayHi(){
//           return true
//       }  
//     }
// }

// const app = Vue.createApp(App)

// // components 
// app.component('first-component', {
//     data(){
//         return {
//             name:"First Component | Counter !" ,
//             count:0,
//         }
//     },
//     template:'<button v-on:click="count++"> {{name}} - {{count}} </button> '
// })

// app.components('second-component', {
//     data(){
        
//     }
// })



// app.mount('#app')




const App = {
    data(){
        return { a:true, b:true }
    }
}


Vue.createApp(App).mount('#app')