<template>
   <div>
       <h1>{{ result }}</h1>
       <form v-on:submit="onSubmitForm">
           <input ref="answer" v-model="value" type="text" maxlength="4">
           <button>입력</button>
       </form>
       <div>시도 : {{  }}</div>
   </div>
</template>
<script>
export default {
    data() {
        return {
            value: "",
            result: "",
        }
    },
    methods: {
        onSubmitForm(evt) {
            e.preventDefault();
        }
    },
}
</script>
<style>
    
</style>