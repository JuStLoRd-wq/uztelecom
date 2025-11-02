<template>
  <div>
    <nav>
      <ul
        class="flex gap-4 justify-between lg:justify-around md:justify-between sm:justify-between items-center p-4 border-b border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300"
      >
        <li>
          <img src="@/assets/img/logo.svg" alt="Logo" />
        </li>

        <li class="hidden md:hidden lg:flex sm:hidden xs:hidden">
          <router-link to="/services">Xizmat haqida</router-link>
        </li>
        <li class="hidden md:hidden lg:flex sm:hidden xs:hidden">
          <router-link to="/submit-application">Ariza yuborish</router-link>
        </li>
        <li class="hidden md:hidden lg:flex sm:hidden xs:hidden">
          <router-link to="/opportunities">Imkoniyatlar</router-link>
        </li>
        <li class="hidden md:hidden lg:flex sm:hidden xs:hidden">
          <router-link to="/advantages">Afzalliklar</router-link>
        </li>
        <li class="hidden md:hidden lg:flex sm:hidden xs:hidden">
          <router-link to="/to-start">Qanday boshlash kerak</router-link>
        </li>
        <li class="hidden md:hidden lg:flex sm:hidden xs:hidden">
          <router-link to="/tarrifs">Tariflar</router-link>
        </li>

        <li class="flex gap-4 items-center">
          <button
            class="hidden md:block lg:block border bg-main border-main text-white px-4 py-2 rounded-lg font-bold"
          >
            Kirish
          </button>

          <!-- Language dropdown -->
          <div class="relative inline-block text-left">
            <button
              @click="toggleDropdown"
              class="hidden md:block lg:block w-32 rounded-lg border-blue-custom px-4 py-2 text-blue-700 font-semibold transition-all duration-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
            >
              {{ selected }}
            </button>

            <div
              v-if="isOpen"
              class="absolute mt-2 w-32 rounded-lg bg-white dark:bg-gray-700 shadow-md z-10"
            >
              <button
                v-for="lang in languages"
                :key="lang"
                @click="selectLanguage(lang)"
                class="w-full px-4 py-2 text-left border-blue-custom text-blue-700 font-semibold hover:bg-blue-50 dark:text-white dark:hover:bg-gray-600"
              >
                {{ lang }}
              </button>
            </div>
          </div>

          <!-- 🌙 Dark mode toggle -->
          <img
            class="hidden md:hidden lg:block cursor-pointer w-6 h-6"
            src="@/assets/img/moon.svg"
            alt="Moon Icon"
            @click="$emit('toggle-dark')"
          />

          <img class="hidden md:block lg:hidden" src="@/assets/img/burger.svg" alt="Burger Icon" />
        </li>

        <li class="block md:hidden lg:hidden">
          <img src="@/assets/img/star.svg" alt="Star Icon" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const selected = ref('O’zbek')
const languages = ['O’zbek', 'Русский']

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (lang) => {
  selected.value = lang
  isOpen.value = false
}
</script>

<style scoped>
.border-blue-custom {
  border: 1px solid #a4bfe2 !important;
}
</style>
