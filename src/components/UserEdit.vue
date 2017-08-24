<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click='editAge'>Edit the age</button>
    </div>
</template>

<script>
    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.age = 30
                // déclaré dans user.v
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
