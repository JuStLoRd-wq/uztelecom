<template>
  <div :class="{ dark: isDarkMode }">
    <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-all duration-300">
      <Navbar @toggle-dark="toggleDarkMode" />

      <section class="flex-grow">
        <div class="px-2 md:px-11">
          <router-view />
        </div>
      </section>

      <FooterCustom />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/NavbarComponent.vue'
import FooterCustom from '@/components/FooterComponent.vue'

const isDarkMode = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
