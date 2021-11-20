const App = {
    data(){
            questions=[
                {
                    question: 'Вопрос 1',
                    answers: [
                        'Ответ 1',
                        'Ответ 2',
                        'Ответ 3',
                    ],
                    right: 2, // номер правильного ответа
                },
                {
                    question: 'Вопрос 2',
                    answers: [
                        'Ответ 1',
                        'Ответ 2',
                        'Ответ 3',

                    ],
                    right: 1, // номер правильного ответа
                },
                {
                    question: 'Вопрос 3',
                    answers: [
                        'Ответ 1',
                        'Ответ 2',
                        'Ответ 3',

                    ],
                    right: 1, // номер правильного ответа
                },
            ]
        return{
            questionIndex:0,
            points:0,
            question:questions[questionIndex].question,
            answers:questions[questionIndex].answers,
        } 
    },
    methods:{
        nextQuestion(){
            if(this.questionIndex >= this.questions.length){
                this.questionIndex = 0;
            }else{
                this.questionIndex++
            }

        }
    }
}
Vue.createApp(App).mount("#app")