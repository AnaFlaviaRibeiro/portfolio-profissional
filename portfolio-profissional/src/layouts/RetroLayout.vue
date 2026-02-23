<template>
  <div class="layout-retro crt" :class="{ 'layout-retro--amber': useAmber }">
    <main class="layout-retro__main">
      <RouterView />
    </main>

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
import XmodemDownload from "../components/XmodemDownload.vue";
import { useXmodemDownload } from "../util/xmodemDownload";

withDefaults(
  defineProps<{
    useAmber?: boolean;
  }>(),
  { useAmber: false }
);

const {
  sentinelRef,
  inputRef,
  command,
  showPrompt,
  showXmodem,
  focusInput,
  navigate,
  onXmodemComplete,
} = useXmodemDownload();
</script>

<style scoped>
.layout-retro__main {
  padding: 0 1rem 2rem;
  min-height: 60vh;
}

.layout-retro__sentinel {
  height: 1px;
  width: 100%;
  pointer-events: none;
  visibility: hidden;
}

.layout-retro__prompt {
  margin: 1rem;
  padding: 1rem 1.5rem;
}

.layout-retro__command-line {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.layout-retro__prefix {
  flex-shrink: 0;
}

.layout-retro__input {
  flex: 1;
  min-width: 120px;
  background: transparent;
  border: none;
  color: inherit;
  font-family: var(--font-terminal, "IBM Plex Mono", monospace);
  font-size: inherit;
  outline: none;
}

.layout-retro__input::placeholder {
  opacity: 0.5;
}

.layout-retro__command-line .cursor {
  flex-shrink: 0;
}
</style>
