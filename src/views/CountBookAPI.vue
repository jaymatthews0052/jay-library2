<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                jsondata: null,
                error: null,
            };
        },
        methods: {
            async getBookCount() {
                try {
                    const response = await axios.get('https://countbooks-cdmdjez3sa-uc.a.run.app');
                    this.jsondata = response.data;
                    this.error = null;
                } catch (error) {
                    console.error('Error fetching book count:', error);
                    this.error = error;
                    this.count = null;
                }
            },
        },
        mounted() {
            this.getBookCount();
        },
    };
</script>

<template>
    <pre>{{ jsondata }}</pre>
</template>