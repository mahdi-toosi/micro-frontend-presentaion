<script setup lang="ts">
import { ref } from "vue";

const counter = ref(1);
</script>

<template>
    <section>
        <h1>vue app counter</h1>
        <div>Name: remote-vue</div>
        <div>Framework: vue3 mahdi</div>
        <div>Language: TypeScript</div>
        <div>CSS: Empty CSS</div>

        <button @click="counter++">Counter btn in vue 👉🏻{{ counter }}</button>
    </section>
</template>