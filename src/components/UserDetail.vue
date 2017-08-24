<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name : {{ myName }}</p>
        <p>User Name switched : {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        // props: ['myName'],
        props: {
            myName: [String, Array],
            // je définis les types autorisés
            // required : true, <-- possible d'ajouter
            // default : 'somedefault'
        },
        // on indique ici que l'on veut accéder à name dans le parent User.vue - est-ce un parent?
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                return this.myName = "ResetName";
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
