import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({ // doit être avant
    methods: {
        changeAge(paramAge) {
            this.$emit('ageWasEdited', paramAge);
            // On définit change age ici pour y avoir accès depuis partout.
        }
    }
});


new Vue({
    el: '#app',
    render: h => h(App)
})