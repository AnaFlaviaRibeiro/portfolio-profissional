<template>
  <div class="layout-modern">
    <nav v-if="showNav" class="layout-modern__nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/sobre-mim">Sobre mim</RouterLink>
      <RouterLink to="/sobre-mim">Projetos</RouterLink>
      <RouterLink to="/sobre-mim">Experiências</RouterLink>
      <RouterLink to="/sobre-mim">Contatos</RouterLink>
    </nav>
    <main class="layout-modern__main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import "../assets/modern.css";
withDefaults(
  defineProps<{
    showNav?: boolean;
  }>(),
  { showNav: true }
);
</script>
