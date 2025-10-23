<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                count: null,
                error: null,
            };
        },
        methods: {
            async getBookCount() {
                try {
                    const response = await axios.get('https://countbooks-cdmdjez3sa-uc.a.run.app');
                    this.count = response.data.count;
                    this.error = null;
                } catch (error) {
                    console.error('Error fetching book count:', error);
                    this.error = error;
                    this.count = null;
                }
            },
        },
    };
</script>

<template>
<div>
    <h1>Book Counter</h1>
</div>

<div>
    <button @click="getBookCount">Get Book Count</button>
</div>

<div v-if="count !== null">
    <p>Total number of books: {{ count }}</p>
</div>
<div v-if="error">
    <p>{{ error }}</p>
</div>

</template>