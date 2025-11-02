<template>
  <!-- Jadval bo‘limi -->
  <section class="py-10 sm:py-12 px-3 sm:px-6 dark:bg-[#0f172a] transition-colors duration-500">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2 dark:text-white">
        Taqoslang va o‘z rejangizni tanlang
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
        Biznesingizning har bir bosqichi uchun maxsus ishlab chiqilgan.
      </p>

      <!-- Jadval scroll -->
      <div class="overflow-x-auto w-full">
        <div
          class="grid grid-cols-[1fr_repeat(3,minmax(180px,1fr))] min-w-[650px] sm:min-w-[900px] md:min-w-[1100px] border border-gray-200 rounded-2xl overflow-hidden"
        >
          <!-- Chap ustun -->
          <div class="bg-white dark:bg-slate-800 text-left p-3 sm:p-6">
            <h3 class="font-semibold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">Tariflar</h3>
            <ul
              class="space-y-2 sm:space-y-4 text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base"
            >
              <li>Ma’lumotlar bazalari soni</li>
              <li>Bir vaqtda ishlayotgan foydalanuvchilar soni</li>
              <li>Qo‘shimcha ishchilarni ulash*</li>
              <li>1C:VITC axborot tizimi</li>
              <li>1C-Kon­nekt</li>
              <li>1C:Nominalatura</li>
              <li>Elektron hisobot tizimi</li>
              <li>Elektron hujjat aylanish tizimi</li>
              <li>Kontragent ma’lumotlarini INN bo‘yicha yuklash</li>
              <li>Asosiy vositalar qayta baholash indekslarini yuklash</li>
              <li>Valyuta kurslarini yuklash</li>
              <li>Banklar klassifikatorini yuklash</li>
            </ul>
          </div>

          <!-- Tariflar ustunlari -->
          <div
            v-for="(plan, i) in plans"
            :key="i"
            class="group text-center p-3 sm:p-5 md:p-6 border-l border-gray-200 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300"
          >
            <h3
              class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-3"
            >
              {{ plan.name }}
            </h3>

            <button
              class="bg-[#002B6B] hover:bg-[#0044A5] text-white py-1.5 sm:py-2 px-3 sm:px-5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300"
            >
              Sotib olish
            </button>

            <ul
              class="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base"
            >
              <li v-for="(item, j) in plan.features" :key="j">
                <span
                  v-if="item === 'check'"
                  class="text-blue-900 dark:text-blue-300 text-base sm:text-lg"
                  >✦</span
                >
                <span v-else>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Reja tanlash (kartalar) -->
  <section class="px-3 sm:px-8 py-10">
    <!-- Toggle bo‘limi -->
    <div
      class="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-8 text-center"
    >
      <span :class="!isYearly ? 'text-black font-medium' : 'text-gray-400'">Oylik</span>

      <label class="flex items-center cursor-pointer">
        <input type="checkbox" v-model="isYearly" class="sr-only" />
        <div
          class="w-11 h-6 bg-gray-400 rounded-full relative transition duration-300"
          :class="{ 'bg-blue-600': isYearly }"
        >
          <div
            class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300"
            :class="{ 'translate-x-5': isYearly }"
          ></div>
        </div>
      </label>

      <span
        :class="isYearly ? 'text-black font-medium' : 'text-gray-400'"
        class="text-sm sm:text-base"
      >
        Yillik, iltimos ishbu raqamga tel qiling: 7777777
      </span>

      <span
        v-if="isYearly"
        class="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium"
      >
        20% tejab qolasiz
      </span>
    </div>

    <!-- Kartalar -->
    <div
      class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      :class="{ 'opacity-25': isYearly }"
    >
      <!-- 1 -->
      <div
        class="border border-gray-300 rounded-xl p-5 sm:p-6 shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
      >
        <div>
          <h1 class="text-xl sm:text-2xl font-bold">Bazaviy</h1>
          <h2 class="font-bold text-4xl sm:text-5xl md:text-6xl mt-4">{{ reverseIntervalRef }}</h2>
          <p class="text-gray-700 mt-1 sm:mt-2">so'm/oyiga</p>
          <p class="mt-6 sm:mt-8 text-sm sm:text-base">1С:ИТС axborot tizimi</p>
          <p class="mt-2 text-sm sm:text-base">Bir vaqtning oʻzida 1 nafar foydalanuvchi*</p>
          <p class="mt-2 text-sm sm:text-base">Elektron hisobot tizimi</p>
          <p class="mt-2 text-sm sm:text-base">Elektron hujjat aylanishi tizimi</p>
        </div>

        <div class="flex flex-col gap-3 mt-6">
          <button class="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium">
            30 kun bepul
          </button>
          <button class="px-6 py-3 text-black rounded-lg font-medium">Batafsil</button>
        </div>
      </div>

      <!-- 2 -->
      <div
        class="border border-gray-300 rounded-xl p-5 sm:p-6 shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
      >
        <div>
          <h1 class="text-xl sm:text-2xl font-bold">Standart</h1>
          <h2 class="font-bold text-4xl sm:text-5xl md:text-6xl mt-4">
            {{ reverseIntervalSecondRef }}
          </h2>
          <p class="text-gray-700 mt-1 sm:mt-2">so'm/oyiga</p>
          <p class="mt-6 sm:mt-8 text-sm sm:text-base">1С:ИТС axborot tizimi</p>
          <p class="mt-2 text-sm sm:text-base">Bir vaqtning oʻzida 1 nafar foydalanuvchi*</p>
          <p class="mt-2 text-sm sm:text-base">Elektron hisobot tizimi</p>
          <p class="mt-2 text-sm sm:text-base">Elektron hujjat aylanishi tizimi</p>
        </div>

        <div class="flex flex-col gap-3 mt-6">
          <button class="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium">
            30 kun bepul
          </button>
          <button class="px-6 py-3 bg-white text-blue-900 rounded-lg font-medium">Batafsil</button>
        </div>
      </div>

      <!-- 3 -->
      <div
        class="border border-gray-300 rounded-xl p-5 sm:p-6 shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
      >
        <div>
          <h1 class="text-xl sm:text-2xl font-bold">Profi</h1>
          <h2 class="font-bold text-4xl sm:text-5xl md:text-6xl mt-4">
            {{ reverseIntervalThirdRef }}
          </h2>
          <p class="text-gray-700 mt-1 sm:mt-2">so'm/oyiga</p>
          <p class="mt-6 sm:mt-8 text-sm sm:text-base">1С:ИТС axborot tizimi</p>
          <p class="mt-2 text-sm sm:text-base">Bir vaqtning oʻzida 1 nafar foydalanuvchi*</p>
          <p class="mt-2 text-sm sm:text-base">Elektron hisobot tizimi</p>
          <p class="mt-2 text-sm sm:text-base">Elektron hujjat aylanishi tizими</p>
        </div>

        <div class="flex flex-col gap-3 mt-6">
          <button class="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium">
            30 kun bepul
          </button>
          <button class="px-6 py-3 bg-white text-blue-900 rounded-lg font-medium">Batafsil</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const isYearly = ref(false)

const checked = ref(false)

const plans = [
  {
    name: 'Bazaviy',
    features: ['1', '1', '-', 'check', '-', '-', 'check', '-', '-', '-', '-', '-'],
  },
  {
    name: 'Standart',
    features: [
      '2',
      '2',
      'Cheklovsiz (qo‘shimcha to‘lov asosida)',
      'check',
      '-',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
    ],
  },
  {
    name: 'PROFI',
    features: [
      '10',
      '5',
      'Cheklovsiz (qo‘shimcha to‘lov asosida)',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
      'check',
    ],
  },
]

const featureRows = [
  { key: 'users', label: 'Ma’lumotlar bazasini soni', type: 'text' },
  { key: 'support', label: 'Bir yillik texnik yordam', type: 'bool' },
  { key: 'ic_contract', label: '1C/IC integratsiya', type: 'bool' },
  { key: 'accounting', label: 'Elektron hisob-kitob', type: 'bool' },
  { key: 'analytics', label: 'Analitik hisobotlar', type: 'bool' },
]

function formattedPrice(base) {
  // При годовой оплате делаем -10% скидку и умножаем на 12 (пример)
  if (isYearly.value) {
    const yearly = Math.round(base * 12 * 0.9)
    return yearly.toLocaleString()
  } else {
    return base.toLocaleString()
  }
}
</script>

<style scoped>
/* Мелкие улучшения, можно убрать если не нужно */
</style>
