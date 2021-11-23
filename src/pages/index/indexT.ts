import {defineComponent} from "vue";

export default defineComponent({
    data() {
        return {
            pageName: "主页",
            modules:[{
                name: "媒体",
                path: "/pages/media/index"
            }]
        }
    },
    created() {
        console.log(this);
    },
    watch: {

    },
    methods: {

    }
})
