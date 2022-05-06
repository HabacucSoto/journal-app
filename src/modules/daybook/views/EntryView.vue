import { defineAsyncComponent } from 'vue';
<template>
    <div class="entry-title d-flex justify-content-between p-2">

        <div>
            <span class="text-success fs-3 fw-bold">06</span>
            <span class="mx-1 fs-3">mayo</span>
            <span class="mx-2 fs-4 fw-light">2022, viernes</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?"></textarea>
    </div>

    <Fab icon="fa-save" />

    <img src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg?w=636&h=477" 
        alt="entry-image" class="img-thumbnail">

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'EntryView',
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    }
}
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }
    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>