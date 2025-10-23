<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logout from "./Logout.vue";

const currentUser = ref(null);
const auth = getAuth();

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    currentUser.value = user; // null when signed out
  });
});
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">Home (Week 5)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addBook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li>
          <router-link to="/GetBookCount" class="nav-link" active-class="active">Get Book Count</router-link>
        </li>
        <li>
          <router-link to="/GetWeather" class="nav-link" active-class="active">Weather</router-link>
        </li>
        <li>
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
        </li>
        <li v-if="!currentUser">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Register</router-link>
        </li>
        <li v-if="!currentUser">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>

        <!-- Shows only when signed in -->
        <li v-if="currentUser">
          <Logout />
        </li>
      </ul>
    </header>
  </div>
</template>
