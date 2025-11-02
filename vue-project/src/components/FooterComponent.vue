<template>
  <footer
    class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10 transition-all duration-300"
  >
    <!-- Верхняя часть -->
    <div
      class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300"
    >
      <div>
        <img
          src="@/assets/img/logo.svg"
          alt="Uztelecom"
          class="mb-4 w-36 brightness-0 dark:invert"
        />
        <p class="text-sm">+998 55 500 09 90</p>
        <a
          href="mailto:1c@uztelecom.uz"
          class="text-blue-600 dark:text-blue-400 text-sm hover:underline"
        >
          1c@uztelecom.uz
        </a>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Xizmat haqida</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">1C UZTELECOM nima va qanday ishlaydi?</a></li>
          <li><a href="#" class="hover:underline">Foydali funksiyalar</a></li>
          <li><a href="#" class="hover:underline">Foydalanish afzalliklari</a></li>
          <li><a href="#" class="hover:underline">Ishni qanday boshlash kerak</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Resurslar</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Tariflar</a></li>
          <li><a href="#" class="hover:underline">FAQ</a></li>
        </ul>
      </div>
    </div>

    <!-- Нижняя часть -->
    <div
      class="border-t border-gray-200 dark:border-gray-700 text-center md:flex md:justify-between md:text-left text-gray-500 dark:text-gray-400 text-xs px-6 py-4 max-w-6xl mx-auto transition-all duration-300"
    >
      <p>©2025 AJ “O‘zbektelekom“. Barcha huquqlar himoyalangan.</p>
      <div class="space-x-4 mt-2 md:mt-0">
        <a href="#" class="hover:underline">Foydalanish shartlari</a>
        <a href="#" class="hover:underline">Maxfiylik siyosati</a>
        <a href="#" class="hover:underline">Xavfsizlik</a>
      </div>
    </div>
  </footer>
</template>
