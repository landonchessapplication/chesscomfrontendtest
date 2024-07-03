<script setup lang="ts">
import { THEMES } from '@/static'
import { onMounted, ref } from 'vue'

const root = ref<HTMLElement>()
const selectedTheme = ref<keyof typeof THEMES>('Default')
function setTheme(e: Event) {
  const value = (e.target as HTMLInputElement).value as keyof typeof THEMES
  if (!value) {
    // Would log some sort of error here in a normal application
    return
  }
  if (THEMES[value] && root.value) {
    root.value.style.setProperty('--background-color', THEMES[value]['background-color'])
    root.value.style.setProperty('--light-square', THEMES[value]['light-square'])
    root.value.style.setProperty('--light-square-hover', THEMES[value]['light-square-hover'])
    root.value.style.setProperty(
      '--light-square-highlighted',
      THEMES[value]['light-square-highlighted']
    )
    root.value.style.setProperty('--dark-square', THEMES[value]['dark-square'])
    root.value.style.setProperty('--dark-square-hover', THEMES[value]['dark-square-hover'])
    root.value.style.setProperty(
      '--dark-square-highlighted',
      THEMES[value]['dark-square-highlighted']
    )
  }
}
onMounted(() => {
  root.value = document.documentElement
})
</script>
<template>
  <div class="theme-switcher">
    <h2>Themes</h2>
    <select v-model="selectedTheme" @change="setTheme($event)">
      <option v-for="(_, index) in THEMES" :key="index" :value="index">
        {{ index }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.theme-switcher {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: fit-content;
}
</style>
