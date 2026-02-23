<template>
  <div class="home-view">
    <br />
    <div class="monitor-frame crt">
      <div class="crt terminal home-section">
        <h1>Home</h1>
        <p>Bem-vindo ao meu portfólio.</p>
      </div>
      <Sobremim />
      <Projetos />
      <Experiencias />
      <Contatos />
    </div>

    <div class="layout-retro__sentinel" ref="sentinelRef" aria-hidden="true"></div>

    <div
      v-show="showPrompt"
      class="terminal layout-retro__prompt"
      @click="focusInput"
    >
      <div class="layout-retro__command-line">
        <span class="layout-retro__prefix">&gt; </span>
        <input
          ref="inputRef"
          v-model="command"
          type="text"
          class="layout-retro__input"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          @keydown.enter="navigate"
        />
        <span class="cursor"></span>
      </div>
    </div>

    <XmodemDownload v-if="showXmodem" @complete="onXmodemComplete" />
  </div>
</template>

<script setup lang="ts">
import "../assets/crt.css";
import Sobremim from "../app/module/sobremim/SobreMimViewOld.vue";
import Projetos from "../app/module/projetos/ProjetosViewOld.vue";
import Experiencias from "../app/module/experiencias/ExperienciasViewOld.vue";
import Contatos from "../app/module/contatos/ContatosViewOld.vue";
</script>

<style scoped>
.home-view {
  display: block;
}
.home-section.terminal {
  min-height: auto;
}
</style>
