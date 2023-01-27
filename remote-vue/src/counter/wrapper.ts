import { createApp } from "vue";
import Counter from "./Counter.vue";

export default (el: HTMLDivElement) => {
    const app = createApp(Counter);
    app.mount(el);
};
