<template>
  <div class="text-center">
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const db = getFirestore()

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, 'users', user.uid)
    const snap = await getDoc(userRef)

    if (snap.exists()) {
      const data = snap.data()
      console.log('User role:', data.role)
    } else {
      console.log('Not signed in')
    }
  }
})

const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Firebase Register Successful!')
      router.push('/')
      console.log(auth.currentUser)
    })
    .catch((error) => {
      console.log(error.code)
    })
}


</script>
