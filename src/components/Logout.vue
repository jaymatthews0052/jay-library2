<script setup>
    import { getAuth } from 'firebase/auth';
    import { useRouter } from 'vue-router';

    const auth = getAuth();
    const router = useRouter();

    const logout = async () => {
        try {
            await auth.signOut()
            console.log("User signed out")
            router.push('/login')
        } catch (e) {
            console.log("Error signing out: ", e)
        }
    }
</script>

<template>
    <button @click="logout" class="m-2">Logout</button>
</template>