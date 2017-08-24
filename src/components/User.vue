<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName"> Change the name </button>
        <p>Name is : {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" @nameWasReset="name = $event" :resetFn = "resetName2" :userAge='age'></app-user-detail>
                <!-- user age est une prop dans UEdit.v
                je bind name d'ici à celui de userDetail, je le passe dans userdetails ensuite comme prop -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age"
                @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data : function() {
            return {
                name: "The name",
                age: 99,
            };
        },
        methods: {
            changeName() {
                this.name = "The other name"
            },
            resetName2() {
                this.name = "The reset name 2"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
