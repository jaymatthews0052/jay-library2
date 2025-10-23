<template>
    <div class="text-center">
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Save to Firebase</button></p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();
const db = getFirestore();

async function addUser({ uid, email, role = "user" }) {
  const userRef = doc(db, "users", uid);
  await setDoc(
    userRef,
    {
      email,
      role,
    },
    { merge: true }
  );
}

async function register() {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log("Firebase Register Successful!", cred.user.uid);

    await addUser({ uid: cred.user.uid, email: email.value, role: "user" });

    router.push("/FireLogin");
  } catch (err) {
    console.log(err.code, err.message);
  }
}
</script>
