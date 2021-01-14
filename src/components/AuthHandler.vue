<template>
    <div>
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalyzeLogin']),
    created() {
        this.finalyzeLogin(window.location.hash);
    }
}
</script>