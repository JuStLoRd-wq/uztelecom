<template>
  <div>
    <section class="w-full lg:w-2/3 mx-auto px-8">
      <div class="flex flex-col gap-10">
        <h1 class="text-2xl md:text-3xl font-bold mt-20">Ariza yuborish</h1>

        <!-- Radio buttons -->
        <div class="flex justify-center gap-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="yuridik"
              v-model="selectedType"
              class="appearance-none w-5 h-5 rounded-full border-2 border-blue-900 checked:bg-blue-900 checked:border-blue-900 cursor-pointer"
            />
            <span class="text-gray-800 font-medium">Yuridik shaxs</span>
          </label>

          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="jismoniy"
              v-model="selectedType"
              class="appearance-none w-5 h-5 rounded-full border-2 border-blue-900 checked:bg-blue-900 checked:border-blue-900 cursor-pointer"
            />
            <span class="text-gray-800 font-medium">Jismoniy shaxs</span>
          </label>
        </div>

        <!-- Form inputs -->
        <div class="flex flex-col gap-4">
          <div class="flex justify-between gap-10">
            <div class="flex flex-col w-full">
              <label for="orgName">Tashkilot nomi</label>
              <input
                id="orgName"
                type="text"
                placeholder='MChJ "Namuna"'
                class="border border-gray-300 rounded-lg px-4 py-2 mt-1 w-full"
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="inn">STIR</label>
              <input
                id="inn"
                type="text"
                placeholder="123456789"
                class="border border-gray-300 rounded-lg px-4 py-2 mt-1 w-full"
              />
            </div>
          </div>

          <div class="flex flex-col w-full">
            <label for="fish">F.I.SH</label>
            <input
              id="fish"
              type="text"
              placeholder="Zuxriddin Akbarov Xusanovich"
              class="border border-gray-300 rounded-lg px-4 py-2 mt-1 w-full"
            />
          </div>

          <div class="flex flex-col w-full">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email manzilingiz"
              class="border border-gray-300 rounded-lg px-4 py-2 mt-1 w-full"
            />
          </div>

          <div class="flex flex-col w-full">
            <label for="phone">Telefon</label>
            <input
              id="phone"
              type="text"
              placeholder="Telefon raqamingiz"
              class="border border-gray-300 rounded-lg px-4 py-2 mt-1 w-full"
            />
          </div>

          <div class="flex justify-start gap-4">
            <label class="flex items-start gap-2 cursor-pointer">
              <input
                type="radio"
                value="yuridik"
                v-model="selectedTypeForm"
                class="appearance-none w-5 h-5 rounded-full border-2 border-gray-200 checked:bg-gray-300 checked:border-gray-300 cursor-pointer"
              />
              <span class="text-gray-800 text-sm"
                >Qabul qilaman” tugmasini bosish orqali Men Ommaviy oferta shartlariga va Shaxsiy
                ma’lumotlarni qayta ishlash siyosatiga rozilik bildiraman.</span
              >
            </label>
          </div>
          <div class="flex justify-start w-full mb-10">
            <button class="px-6 w-full py-3 bg-blue-900 text-white rounded-lg font-medium">
              Ariza yuborish
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup></script>
