<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name : {{ myName }}</p>
        <p>User age : {{ userAge }}</p>
        <p>User Name switched : {{ switchName() }}</p>
        <button @click="resetName"> Reset the name</button>
        <button @click="resetFn()"> Reset the name from the parent</button>
    </div>
</template>

<script>
    export default {
        // props: ['myName'],
        props: {
            myName: [String, Array],  // je définis les types autorisés
            // required : true, <-- possible d'ajouter  // default : 'somedefault'
            resetFn: Function, // type déf - voir le bouton ds user.v
            userAge: Number
        },
        // user.vue est un parent parce que ce n'est pas une question d'arborescence mais du fait que detail est appelé dans le user.vue
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                return this.myName = "ResetName";
                // juste ça ne communique pas avec le parent, donc on doit emit pour màj partout
                this.$emit('nameWasReset',  this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
