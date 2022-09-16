<template lang="">
    <form class="border-4 border-black rounded-lg p-4">
        <div class="">
            <textarea ref="textarea" class="w-full h-40 p-2  border-black rounded-lg border-4" v-model="value" placeholder="Write Something"></textarea>
        </div>
        <div class="flex justify-between mt-2">
            <div class="point">
                <p>{{value.length}}/{{maxLength}}</p>
            </div>
            <div class="button">
                <button class="rounded-lg bg-green-800 p-2 disabled:bg-red-100 disabled:text-white" :disabled="isDisabled">Submit</button>
            </div>
        </div>
    </form>
</template>
<script>
    import { computed } from '@vue/reactivity';

export default {
    data(){
        return{
            maxLength: 10,
            value:'',
        }
    },

    computed:{
        isDisabled(){ 
            return this.value.length > this.maxLength ? true : false;
        }
    },

    mounted(){
        this.$refs.textarea.focus();
    },

    methods:{
        
    }

}
</script>
<style lang="">

</style>