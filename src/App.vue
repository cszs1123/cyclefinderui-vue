<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Astro Calendar</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/astroCalendars" class="nav-link">Astro Calendars</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

