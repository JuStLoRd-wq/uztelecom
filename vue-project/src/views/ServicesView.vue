<template>
  <div class="px-4">
    <section
      class="mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900 dark:text-gray-100"
    >
      <!-- Chap taraf (matn) -->
      <div>
        <h1 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          1C UZTELECOM
        </h1>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          “1C:Предприятие 8” internet orqali ishlash xizmati (1C UZTELECOM) — “1C” kompaniyasi
          tomonidan ishlab chiqilgan va qo‘llab-quvvatlanadigan xizmat bo‘lib, bu kompaniya
          Rossiyada biznesni avtomatlashtirish bo‘yicha yetakchi hisoblanadi.
        </p>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Ushbu xizmat “1C:Предприятие” platformasidagi amaliy yechimlarga internet orqali masofadan
          kirish imkonini beradi va SaaS (xizmat sifatida dastur) modeli asosida ishlaydi. Bunday
          model ko‘pincha “bulutda ishlash” deb ataladi.
        </p>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          1C UZTELECOM orqali buxgalteriya va soliq hisobotlaringizni yuriting, hisobotlarni
          topshiring, biznesingizni nazorat qiling va boshqaring — bularning barchasi internet
          orqali!
        </p>
      </div>

      <!-- O‘ng taraf (rasmlar) -->
      <div class="hidden grid-cols-3 md:grid gap-4 gap-x-0 justify-items-center">
        <img src="@/assets/img/worked.jpg" class="rounded-2xl h-36 w-36 object-cover shadow" />
        <img src="@/assets/img/worked2.jpg" class="rounded-2xl h-36 w-36 object-cover shadow" />
        <img src="@/assets/img/worked3.jpg" class="rounded-2xl h-36 w-36 object-cover shadow" />
        <img src="@/assets/img/worked4.jpg" class="rounded-2xl h-36 w-36 object-cover shadow" />
        <img src="@/assets/img/worked5.jpg" class="rounded-2xl h-36 w-36 object-cover shadow" />
        <img src="@/assets/img/worked5.jpg" class="rounded-2xl h-36 w-36 object-cover shadow" />
      </div>

      <div class="grid grid-cols-1 md:hidden gap-4 gap-x-0 justify-items-center">
        <img src="@/assets/img/worked.jpg" class="rounded-2xl w-56 object-cover shadow" />
      </div>
    </section>

    <section class="dark:bg-gray-900 dark:text-gray-100">
      <div class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 items-center">
        <div>
          <h1 class="text-3xl md:text-5xl font-bold mb-6 text-center mt-10">
            1C UZTELECOM - bu nima?
          </h1>
        </div>
        <div>
          <img class="image-center" src="../assets/img/image wrapper.png" alt="" />
        </div>
      </div>
    </section>

    <section class="dark:bg-gray-900 dark:text-gray-100">
      <div>
        <div>
          <h1 class="text-3xl md:text-5xl font-bold mb-6 mt-10">
            1C UZTELECOM imkoniyatlari haqida <br />
            qisqa videoni tomosha qiling
          </h1>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-10">
            Bulutli tizimda ish boshlash qanchalik oson ekanligini, xizmat qanday masalalarni hal
            qilishini va <br />
            nega minglab buxgalterlar aynan 1C UZTELECOM’ni tanlaganini bilib oling.
          </p>
        </div>
        <div class="hidden md:flex justify-center bg-gray-50 dark:bg-gray-800 h-96">
          <video
            src="@/assets/img/videos.mp4"
            controls
            autoplay
            muted
            loop
            class="w-full h-[600px] shadow-lg object-cover"
          ></video>
        </div>
      </div>
    </section>

    <section class="dark:bg-gray-900 dark:text-gray-100 mt-0 md:mt-72">
      <div class="max-w-2xl mx-auto mt-10">
        <h1>1C UZTELECOM</h1>
        <h1 class="text-3xl font-bold mb-6 mt-5">Xizmat afzalliklari</h1>
        <h2 class="text-xl font-semibold mb-4 mt-10">-24/7 onlayn kirish imkoniyati</h2>
        <p class="text-gray-700 dark:text-gray-300 mb-4 mt-10">
          1C UZTELECOMda istalgan vaqtda, istalgan joydan ishlashingiz mumkin — ofisda bo‘ling, uyda
          yoki safarda. <br />
          Sizga faqat barqaror internet kerak, xolos.
        </p>

        <div
          v-for="(item, index) in items"
          :key="index"
          class="border-b border-gray-300 dark:border-gray-700 mt-10"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center gap-3 py-4 text-left focus:outline-none"
          >
            <span class="text-2xl w-6 text-blue-800 dark:text-blue-400 font-bold">
              {{ activeIndex === index ? '−' : '+' }}
            </span>
            <span class="font-semibold text-gray-800 dark:text-gray-200">
              {{ item.title }}
            </span>
          </button>

          <transition name="accordion">
            <div v-if="activeIndex === index" class="pb-4 pl-9 text-gray-600 dark:text-gray-300">
              {{ item.content }}
            </div>
          </transition>
        </div>

        <div class="flex justify-center mt-20">
          <img src="../assets/img/bigstar.png" alt="" />
        </div>

        <div>
          <h1 class="text-2xl font-bold mb-6 text-center mt-5">
            1C UZTELECOM bilan biznes tahlilning kelajagini his eting
          </h1>
          <p class="text-gray-700 dark:text-gray-300 text-center">
            1C UZTELECOM imkoniyatlarini amalda sinab ko‘ring va farqni o‘zingiz his eting.
          </p>
        </div>

        <div class="flex justify-center mt-10">
          <button
            class="flex items-center gap-2 bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            <span>Bepul ulanish</span>
            <img src="../assets/img/ministar.png" alt="star" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>

    <section class="dark:bg-gray-900 dark:text-gray-100">
      <div>
        <div>
          <h1 class="text-3xl md:text-5xl font-bold mb-6 mt-20">Fresh bulutli subsistemasi</h1>
          <p class="text-gray-700 dark:text-gray-300">
            «1С:Предприятие 8 через Интернет» xizmati "1C" kompaniyasining Fresh bulutli kichik
            tizimi asosida yaratilgan.
          </p>
          <p class="mt-4 text-gray-700 dark:text-gray-300">
            Amaliy yechimlar xizmat ko‘rsatuvchi provayder uskunalarida yagona tizim sifatida
            joylashadi.
          </p>
          <p class="mt-4 text-gray-700 dark:text-gray-300">
            Fresh kichik tizimi apparat resurslarini tejash imkonini beradi.
          </p>
        </div>

        <div class="hidden md:grid grid-cols-2 md:grid-cols-4 justify-items-center mt-10 mb-20">
          <img src="../assets/img/working1.jpg" alt="" />
          <img src="../assets/img/working2.jpg" alt="" />
          <img src="../assets/img/working3.jpg" alt="" />
          <img src="../assets/img/working4.jpg" alt="" />
        </div>

        <div
          class="grid md:hidden grid-cols-2 md:grid-cols-4 gap-2 justify-items-center mt-10 mb-20"
        >
          <img src="../assets/img/working1.jpg" alt="" />
          <img src="../assets/img/working2.jpg" alt="" />
        </div>

        <div class="mt-20">
          <h1 class="text-4xl font-bold text-center">Nega aynan 1C UZTELECOMni tanlash kerak?</h1>
          <p class="text-gray-700 dark:text-gray-300 text-center mt-6">
            Bu qulay, moslashuvchan va xavfsiz vosita bo‘lib, sizga texnik tafsilotlarga emas, balki
            biznesingizga e’tibor qaratish imkonini beradi.
          </p>
        </div>
      </div>
    </section>

    <section class="dark:bg-gray-900 dark:text-gray-100">
      <div>
        <div class="mt-20">
          <h1 class="text-5xl font-bold mb-6 text-center">Bizga xabar yuboring</h1>
          <p class="text-gray-700 dark:text-gray-300 text-center mt-6">
            Savolingiz, taklifingiz yoki yechimlar haqida ko‘proq bilmoqchimisiz?
          </p>
        </div>

        <div class="max-w-md mx-auto mt-10 p-6">
          <form class="flex flex-col gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">Email:</label>
              <input
                type="email"
                placeholder="example@email.com"
                class="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Ism va familiya:</label>
              <input
                type="text"
                placeholder="Zuxriddin Akbarov"
                class="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Xabar:</label>
              <textarea
                rows="3"
                placeholder="Xabaringiz..."
                class="w-full border rounded-xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              class="bg-[#174880] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-blue-900 transition dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)
const toggle = (index) => (activeIndex.value = activeIndex.value === index ? null : index)

const items = [
  { title: '24/7 onlayn kirish imkoniyati', content: '1C UZTELECOMda istalgan joydan ishlang.' },
  { title: 'Qo‘lda yangilashlarga ehtiyoj yo‘q', content: 'Barcha yangilanishlar avtomatik.' },
  { title: 'Ma’lumotlarning ishonchli himoyasi', content: 'Xavfsiz serverlarda saqlanadi.' },
  { title: 'Istalgan ehtiyoj uchun mos tariflar', content: 'Siz uchun qulay tariflarni tanlang.' },
  {
    title: 'Bitta bazada birgalikda ishlash',
    content: 'Bir nechta foydalanuvchilar birgalikda ishlay oladi.',
  },
  { title: '24/7 texnik qo‘llab-quvvatlash', content: 'Mutaxassislarimiz doimo tayyor.' },
]
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
