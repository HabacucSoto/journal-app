<template>
    <button  class="btn btn-primary">
        <i @click="$emit('on:click')" class="fa fa-2x" :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: false,
            default: 'fa-plus'
        }
    },
    name: 'DaybookFab'
}
</script>

<style lang="scss" scoped>
    button {
        border-radius: 100%;
        bottom: 20px;
        height: 70px;
        position: fixed;
        right: 20px;
        width: 70px;
    }
</style>