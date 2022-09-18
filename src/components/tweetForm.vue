<template lang="">
    <form class="border-4 border-black rounded-lg p-4" ref="form">
        <div class="">
            <textarea ref="textarea" class="w-full h-40 p-2  border-black rounded-lg border-4" v-model="value" placeholder="Write Something"></textarea>
        </div>
        <div class="flex justify-between mt-2">
            <div class="point">
                <p>{{value.length }}/{{maxLength}}</p>
            </div>
            <div class="button flex">
                <button class="rounded-lg bg-red-800 p-2" v-if="buttonCancel">Cencel</button>
                <button class="rounded-lg bg-green-800 p-2 disabled:bg-red-100 disabled:text-white" :disabled="isDisabled" @click.prevent="pushNewData">Submit</button>
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
            buttonCancel: false
        }
    },

    computed:{
        isDisabled(){ 
            return this.value.length > this.maxLength || this.value.length == "" ? true : false;
        }
    },

    mounted(){
        this.$refs.textarea.focus();
    },

    methods:{
        pushNewData(){
            this.$emit("addNewTweet", this.value)
            this.$refs.form.reset()
            this.value = ""
        },
        newCancel(){
            this.$emit("showCancelButton", this.buttonCancel)
        }
    }
}
</script>
<style lang="">

</style>