<template>
    <div class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-b">06</span>
            <span class="mx-1 fs-5">mayo</span>
            <span class="mx-2 fw-light">2022, viernes</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem itaque unde, consequuntur, illo assumenda doloremque, nulla quas optio ea accusamus eligendi laborum odit rerum iure perspiciatis facilis dolorum voluptatum?
        </div>
    </div>
</template>

<script>
export default {
    name: 'DaybookEntry'
}
</script>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }

        .entry-description {
            font-size: 12px;
        }
    }
</style>