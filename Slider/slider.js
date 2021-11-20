const Slider = {
    data(){
        return{
            status:200        
        }
    },
    methods:{
        autoSlide(){
            let slides = ['img/img1.png', 'img/img2.webp']
            let frame = 0
            let section = document.getElementById('app')
            if(!frame){
                section.backgroundImage = `${slides[frame]}`
            }
        }
    }
}

Vue.createApp(Slider).mount('#section')
