<script setup lang="ts">
import { THEMES } from '@/static'
import { onMounted, ref } from 'vue'

const root = ref<HTMLElement>()
const selectedTheme = ref<keyof typeof THEMES>('Default')
function setTheme(e: any) {
  const themeName = e.target.value as keyof typeof THEMES
  if (THEMES[themeName] && root.value) {
    root.value.style.setProperty('--background-color', THEMES[themeName]['background-color'])
    root.value.style.setProperty('--light-square', THEMES[themeName]['light-square'])
    root.value.style.setProperty('--light-square-hover', THEMES[themeName]['light-square-hover'])
    root.value.style.setProperty(
      '--light-square-highlighted',
      THEMES[themeName]['light-square-highlighted']
    )
    root.value.style.setProperty('--dark-square', THEMES[themeName]['dark-square'])
    root.value.style.setProperty('--dark-square-hover', THEMES[themeName]['dark-square-hover'])
    root.value.style.setProperty(
      '--dark-square-highlighted',
      THEMES[themeName]['dark-square-highlighted']
    )
  }
}
onMounted(() => {
  root.value = document.documentElement
})
</script>
<template>
  <div class="theme-switcher">
    <div>Themes</div>
    <select v-model="selectedTheme" @change="setTheme($event)">
      <option
        @click="setTheme('index')"
        v-for="(theme, index) in THEMES"
        :key="index"
        :value="index"
      >
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
