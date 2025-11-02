<template>
  <section class="px-4 md:px-10 lg:px-20">
    <div class="flex flex-col items-center text-center">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mt-16">
        1C UZTELECOMdan <br class="hidden md:block" />
        foydalanishning afzalliklari
      </h1>
      <img
        class="mt-8 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5"
        src="../assets/img/couple.png"
        alt=""
      />
    </div>

    <div class="flex flex-col lg:flex-row justify-around items-center gap-10 mt-10 mb-20">
      <div class="max-w-lg">
        <h1 class="text-2xl md:text-3xl font-bold mt-10 text-center lg:text-left">
          Nega bizneslar 1C <br class="hidden md:block" />
          UZTELECOMni tanlaydi?
        </h1>
        <p class="text-gray-500 text-base md:text-lg mt-4 text-center lg:text-left">
          Zamonaviy biznes olamida tezlik, moslashuvchanlik va <br class="hidden md:block" />
          ishonchlilik — muvaffaqiyat kalitlari hisoblanadi. Texnik <br class="hidden md:block" />
          muammolarga vaqt va resurs sarflash o‘rniga, kompaniyalar <br class="hidden md:block" />
          tobora ko‘proq bulutli yechimlarga o‘tmoqda.
        </p>
        <div class="flex justify-center lg:justify-start mt-8 gap-4">
          <img src="../assets/img/worked6.png" class="w-20 md:w-24" alt="" />
          <img src="../assets/img/worked7.png" class="w-20 md:w-24" alt="" />
        </div>
      </div>

      <div class="max-w-lg">
        <h1 class="text-2xl md:text-3xl font-bold mt-10 text-center lg:text-left">
          1C UZTELECOM — IT <br class="hidden md:block" />
          tashvishlaridan ozodlik
        </h1>
        <p class="text-gray-500 text-base md:text-lg mt-4 text-center lg:text-left">
          1C UZTELECOM — bu bulutli platforma bo‘lib, server sotib <br class="hidden md:block" />
          olish, dastur o‘rnatish va tizim administratorlarini yollash
          <br class="hidden md:block" />
          zaruratidan qutqaradi. Hammasi “tayyor holatda” ishlaydi — <br class="hidden md:block" />
          siz faqat biznesingizni rivojlantirishga e’tibor qaratasiz.
        </p>
        <div class="flex justify-center lg:justify-start mt-8 gap-4">
          <img src="../assets/img/worked8.png" class="w-20 md:w-24" alt="" />
          <img src="../assets/img/worked9.png" class="w-20 md:w-24" alt="" />
        </div>
      </div>
    </div>

    <section class="px-4 md:px-10">
      <h1 class="text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
        UZTELECOMdan 1C xizmatining <br class="hidden md:block" />
        afzalliklari
      </h1>

      <div class="flex flex-col lg:flex-row gap-8 justify-between items-center mt-10">
        <div class="flex flex-col gap-6 w-full lg:w-1/2">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="hover:border-2 border-blue-900 rounded-2xl p-4 cursor-pointer transition"
          >
            <h1 class="font-bold text-xl md:text-2xl">{{ item.title }}</h1>
            <p class="text-gray-600 text-base">{{ item.text }}</p>
          </div>
        </div>

        <!-- Изображение -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <img
            class="rounded-2xl w-3/4 md:w-2/3 lg:w-full"
            src="../assets/img/Business.jpg"
            alt="Hero banner"
          />
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="mt-20 mb-20 text-center">
      <img src="../assets/img/bigstar.png" class="mx-auto w-24 md:w-32" alt="" />
      <h1 class="text-2xl md:text-4xl font-bold mt-5 px-4">
        O‘zingiz sinab ko‘ring — 30 kunlik bepul foydalanish imkoniyatini
        <br class="hidden md:block" />
        hoziroq oling!
      </h1>
      <p class="text-gray-500 text-lg mt-5">Ro‘yxatdan o‘ting va 30 kun bepul foydalaning</p>
      <button class="bg-blue-900 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-700 transition">
        Bepul sinab ko'rish
      </button>
    </section>

    <!-- Форма -->
    <section class="mb-20 mt-20 px-4 md:px-10">
      <h1 class="text-3xl md:text-4xl font-bold text-center mt-20">Bizga xabar yuboring</h1>
      <p class="text-gray-500 text-center text-base md:text-lg mt-5">
        Savolingiz, taklifingiz yoki 1C UZTELECOM asosidagi yechimlarimiz haqida ko‘proq
        bilmoqchimisiz? <br class="hidden md:block" />
        Biz bilan bog‘laning — doim aloqadamiz va yordam berishga tayyormiz!
      </p>

      <form class="max-w-md mx-auto mt-10 p-6 flex flex-col gap-4 bg-white rounded-2xl shadow-lg">
        <div>
          <label class="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            placeholder="example@email.com"
            class="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Ism va familiya:</label>
          <input
            type="text"
            placeholder="Zuxriddin Akbarov"
            class="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Xabar:</label>
          <textarea
            rows="3"
            placeholder="Xabaringiz..."
            class="w-full border rounded-xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-800"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-[#174880] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-900 transition"
        >
          Yuborish
        </button>
      </form>
    </section>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Infratuzilma xarajatlaridan tejash',
    text: 'Serverlar xarid qilish yoki IT-mutaxassislarni yollash shart emas.',
  },
  {
    title: 'Avtomatik yangilanishlar',
    text: 'Murakkab yangilanishlar, versiyalar mosligi yoki vaqtincha to‘xtab qolishlar haqida unuting.',
  },
  {
    title: '24/7 foydalanish imkoniyati',
    text: '1C tizimingizdan istalgan vaqt va joyda foydalanishingiz mumkin.',
  },
  {
    title: 'Foydalanuvchilarni o‘qitish',
    text: 'Avval 1C bilan ishlamagan bo‘lsangiz ham, UZTELECOM bilan boshlash oson.',
  },
]
</script>
