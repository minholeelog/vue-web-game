<template>
   <div>
       <h1>{{ result }}</h1>
       <form v-on:submit.prevent="onSubmitForm">
           <input ref="answer" v-model="value" type="text" maxlength="4" minlength="4">
           <button type="submit">입력</button>
       </form>
       <div>시도 : {{ tries.length }}</div>
       <ul>
           <li v-for="t in tries" v-bind:key="t">
               <div>{{ t.try }}</div>
               <div>{{ t.result }}</div>
            </li>
       </ul>
   </div>
</template>
<script>
const getNumbers = () => {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}


export default {
    data() {
        return {
            answer: getNumbers(), // 무작위 숫자 생성
            tries: [], // 시도 횟수
            value: "", // 입력 숫자
            result: "", // 결과 
        }
    },
    methods: {
        onSubmitForm(evt) {
            if(this.value === this.answer.join("")) {
                this.tries.push({
                try: this.value,
                result: "홈런"
            });
            this.result = "홈런";
            alert("게임을 다시 실행합니다.")
            this.value = "";
            this.answer = getNumbers();
            this.tries = [];
            this.$refs.answer.focus();

            } else {
                if(this.tries.length >= 9) {
                    this.result = `10번 넘게 틀려서 실패! 정답은 ${this.answer.join(",")}입니다.`;
                    alert("게임을 다시 실행합니다.")
                    this.value = "";
                    this.answer = getNumbers();
                    this.tries = [];
                    this.$refs.answer.focus();
                }
                let strike = 0;
                let ball = 0;
                const answerArray = this.value.split("").map(v => parseInt(v));
                for(let i = 0; i < 4; i++) {
                    if(answerArray[i] === this.answer[i]) { // 숫자 자릿수 모두 정답
                        strike++;
                    } else if(this.answer.includes(answerArray[i])) { // 숫자만 일치
                        ball++;
                    }
                }
                this.tries.push({
                    try: this.value,
                    result: `${strike} 스트라이크, ${ball} 볼입니다.`
                });
            this.value = "";
            this.$refs.answer.focus();
            }      
        }
    },
}
</script>
<style>
    
</style>