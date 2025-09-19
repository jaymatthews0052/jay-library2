<template>
    <div class="container mt-5">
        <div class="col-md-4 offset-4 text=center">
        <h1>Login to the Library</h1>
        </div>
        <form>
            <div class="col-md-6 offset-3">
                <label for="uemail" class="form-label">Username</label>
                <input id="uemail" type="email" class="form-control"></input>
            </div>
                
            <div class="col-md-6 offset-3">
                <label for="upassword" class="form-label">Password</label>
                <input id="upassword" type="password" class="form-control"></input>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const userDetails = ref({
        username: null,
        password: null,
    })

    

</script>

<style>

</style>