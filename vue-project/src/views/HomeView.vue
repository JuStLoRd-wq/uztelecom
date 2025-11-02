<template>
  <div class="home">
    <!-- Hero section -->
    <section>
      <div
        class="flex flex-col lg:flex-row items-start lg:items-center justify-around px-6 lg:px-8 mt-0 md:mt-10 lg:mt-0"
      >
        <!-- Text qismi -->
        <div class="order-2 md:order-1">
          <h1 class="text-3xl md:text-5xl font-bold">UZTELECOMdan <br />1C bulutli xizmati</h1>

          <p class="text-gray-500 mt-4 w-3/4 lg:w-2/4">
            Buxgalteriya hisobini yuring, savdo va xizmatlaringizni dunyoning istalgan nuqtasidan
            boshqaring.
          </p>

          <div class="flex flex-col md:flex-row gap-4 mt-6">
            <button class="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium">
              30 kun bepul
            </button>
            <button class="px-6 py-3 border border-gray-300 rounded-lg font-medium">
              Batafsil
            </button>
          </div>
        </div>

        <!-- Rasm qismi -->
        <div class="mt-8 md:mt-12 order-1 md:order-2">
          <img src="../assets/img/uztell/Hero banner/Frame 2147223825.png" alt="Hero banner" />
        </div>
      </div>
    </section>

    <!-- Form section -->
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
    <section class="px-8">
      <div
        class="bg-blue-900 flex flex-col lg:flex-row items-start lg:items-center justify-around p-4 rounded-3xl lg:px-8 mt-0 md:mt-10 lg:mt-10 gap-10"
      >
        <div>
          <h1 class="text-3xl text-white md:text-5xl font-bold">
            1C UZTELECOM bilan qanday <br />
            ishlashni boshlash mumkin
          </h1>
          <div class="flex items-start mt-10">
            <img src="../assets/img/blue-stars.svg" alt="" />

            <p class="text-white w-3/4 lg:w-2/4">Tizimda ro‘yxatdan o‘tish</p>
          </div>
          <div class="flex items-start">
            <img src="../assets/img/blue-stars.svg" alt="" />

            <p class="text-white w-3/4 lg:w-2/4">Profil va integratsiyani sozlash</p>
          </div>
          <div class="flex items-start">
            <img src="../assets/img/blue-stars.svg" alt="" />

            <p class="text-white w-3/4 lg:w-2/4">Xizmatdan foydalanishni boshlash</p>
          </div>
          <div class="flex flex-col md:flex-row gap-4 mt-6">
            <button class="px-6 py-3 bg-white text-blue-900 rounded-lg font-medium">
              30 kun bepul
            </button>
          </div>
        </div>
        <div class="rounded-2xl">
          <img class="custom-style" src="../assets/img/1c-image.jpg" alt="Hero banner" />
        </div>
      </div>
    </section>
    <section class="px-8">
      <div>
        <div>
          <h1 class="text-2xl text-center md:text-5xl font-bold mt-20">
            UZTELECOMdan 1C xizmatining <br />afzalliklari
          </h1>
        </div>
        <div class="flex flex-col lg:flex-row gap-4 justify-between items-center mt-10">
          <div>
            <!-- items start  -->
            <div class="hover:border-2 rounded-2xl p-4 border-blue-900 cursor-pointer">
              <h1 class="font-bold text-2xl">Infratuzilma xarajatlaridan tejash</h1>
              <p class="text-gray-600">
                Serverlar xarid qilish yoki IT-mutaxassislarni yollash shart emas.
              </p>
            </div>
            <div class="hover:border-2 rounded-2xl p-4 border-blue-900 cursor-pointer">
              <h1 class="font-bold text-2xl">Avtomatik yangilanishlar</h1>
              <p class="text-gray-600">
                Murakkab yangilanishlar, versiyalar mosligi yoki vaqtincha to‘xtab <br />
                qolishlar haqida unuting.
              </p>
            </div>
            <div class="hover:border-2 rounded-2xl p-4 border-blue-900 cursor-pointer">
              <h1 class="font-bold text-2xl">24/7 foydalanish imkoniyati</h1>
              <p class="text-gray-600">
                1C tizimingizdan istalgan vaqt va istalgan joyda foydalanishingiz <br />
                mumkin.
              </p>
            </div>
            <div class="hover:border-2 rounded-2xl p-4 border-blue-900 cursor-pointer">
              <h1 class="font-bold text-2xl">Foydalanuvchilarni o‘qitish</h1>
              <p class="text-gray-600">
                Avval 1C bilan ishlamagan bo‘lsangiz ham, UZTELECOM bilan <br />
                boshlash oson.
              </p>
            </div>
          </div>
          <div>
            <img class="custom-style" src="../assets/img/Business.jpg" alt="Hero banner" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="px-8">
        <div class="flex items-center gap-3 mt-20">
          <!-- Oylik -->
          <span :class="!isYearly ? 'text-black font-medium' : 'text-gray-400'">Oylik</span>

          <!-- Toggle -->
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

          <!-- Yillik -->
          <span :class="isYearly ? 'text-black font-medium' : 'text-gray-400'"
            >Yillik, iltimos ishbu raqamga tel qiling: 7777777</span
          >

          <!-- Discount badge -->
          <span
            v-if="isYearly"
            class="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg text-sm font-medium"
          >
            20% tejab qolasiz
          </span>
        </div>
        <div
          class="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-8"
          :class="{ 'opacity-25': isYearly }"
        >
          <!-- 1 -->
          <div
            class="border border-gray-300 rounded-xl p-6 mt-6 w-full md:w-[45%] lg:w-[30%] shadow-lg"
          >
            <h1 class="text-2xl font-bold">Bazaviy</h1>
            <h2 class="font-bold text-6xl mt-5">{{ reverseIntervalRef }}</h2>
            <p class="text-gray-700 mt-2">so'm/oyiga</p>
            <p class="mt-8">1С:ИТС axborot tizimi</p>
            <img src="../assets/img/blue-stars-op.svg" alt="" />
            <p class="mt-2">
              Bir vaqtning oʻzida 1 nafar <br />
              foydalanuvchi ishlashi mumkin*
            </p>
            <p class="mt-2">Elektron hisobot tizimi</p>
            <p class="mt-2">Elektron hujjat aylanishi tizimi</p>

            <div class="flex flex-col gap-4 mt-6">
              <button class="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium">
                30 kun bepul
              </button>
            </div>
            <div class="flex flex-col gap-4 mt-2">
              <button class="px-6 py-3 text-black rounded-lg font-medium">Batafsil</button>
            </div>
          </div>

          <!-- 2 -->
          <div
            class="border border-gray-300 rounded-xl p-6 mt-6 w-full md:w-[45%] lg:w-[30%] shadow-lg"
          >
            <h1 class="text-2xl font-bold">Standart</h1>
            <h2 class="font-bold text-6xl mt-4">{{ reverseIntervalSecondRef }}</h2>
            <p class="text-gray-700 mt-2">so'm/oyiga</p>
            <p class="mt-8">1С:ИТС axborot tizimi</p>
            <p class="mt-2">
              Bir vaqtning oʻzida 1 nafar <br />
              foydalanuvchi ishlashi mumkin*
            </p>
            <p class="mt-2">Elektron hisobot tizimi</p>
            <p class="mt-2">Elektron hujjat aylanishi tizimi</p>

            <div class="flex flex-col gap-4 mt-6">
              <button class="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium">
                30 kun bepul
              </button>
            </div>
            <div class="flex flex-col gap-4 mt-2">
              <button class="px-6 py-3 bg-white text-blue-900 rounded-lg font-medium">
                Batafsil
              </button>
            </div>
          </div>

          <!-- 3 -->
          <div
            class="border border-gray-300 rounded-xl p-6 mt-6 w-full md:w-[45%] lg:w-[30%] shadow-lg"
          >
            <h1 class="text-2xl font-bold">Profi</h1>
            <h2 class="font-bold text-6xl mt-4">{{ reverseIntervalThirdRef }}</h2>
            <p class="text-gray-700 mt-2">so'm/oyiga</p>
            <p class="mt-8">1С:ИТС axborot tizimi</p>
            <p class="mt-2">
              Bir vaqtning oʻzida 1 nafar <br />
              foydalanuvchi ishlashi mumkin*
            </p>
            <p class="mt-2">Elektron hisobot tizimi</p>
            <p class="mt-2">Elektron hujjat aylanishi tizimi</p>

            <div class="flex flex-col gap-4 mt-6">
              <button class="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium">
                30 kun bepul
              </button>
            </div>
            <div class="flex flex-col gap-4 mt-2">
              <button class="px-6 py-3 bg-white text-blue-900 rounded-lg font-medium">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="flex justify-around gap-10 mt-10 mb-20 flex-col lg:flex-row px-8">
        <div>
          <h1 class="font-bold text-5xl mt-10">
            Ko‘p so‘raladigan <br />
            savollar
          </h1>
          <p class="text-gray-600 mt-4 w-3/4 lg:w-2/4 gap-10">
            1C UZTELECOM xizmati sizning buxgalteriya <br />
            hisobotlaringizni qanday soddalashtirishi va <br />
            biznesingizni qanday samaraliroq qilishini bilib oling.
          </p>
        </div>
        <div>
          <div class="w-full max-w-md mx-auto mt-10 space-y-4">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="border border-gray-300 rounded-2xl shadow-sm overflow-hidden"
            >
              <!-- Header -->
              <button
                class="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
                @click="toggle(index)"
              >
                <span class="border-l-4 border-l-blue-900 border-gray-300 px-4">
                  {{ item.title }}</span
                >
                <svg
                  :class="[
                    'w-5 h-5 transform transition-transform duration-300',
                    openIndex === index ? 'rotate-180' : 'rotate-0',
                  ]"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Body -->
              <transition name="accordion">
                <div v-if="openIndex === index" class="p-4 border-t text-gray-600 bg-gray-50">
                  {{ item.content }}
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const selectedType = ref('yuridik')
const selectedTypeForm = ref('')

const reverseIntervalRef = ref(200000)
const reverseIntervalSecondRef = ref(360000)
const reverseIntervalThirdRef = ref(460000)
const isSetStyle = ref(false)
const isYearly = ref(false)

const openIndex = ref(null)
const items = [
  { title: 'Brauzerda ishlash', content: 'Brauzerda ishlash.' },
  {
    title: 'Internet sekin bo‘lsa ham ishlash mumkinmi?',
    content: 'Internet sekin bo‘lsa ham ishlash mumkinmi?',
  },
  {
    title: 'Uyda yoki ta’tilda',
    content: 'Uyda yoki ta’tilda ishlash mumkinmi?',
  },
  {
    title: 'Ma’lumotlarim yo‘qolmasligiga ishonchim ',
    content: 'Ma’lumotlarim yo‘qolmasligiga ishonchim komil bo‘lishi mumkinmi?',
  },
  {
    title: 'Xizmatdagi ilovalarni kim yangilaydi?',
    content: 'Xizmatdagi ilovalarni kim yangilaydi?',
  },
]

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

onMounted(() => {
  setInterval(() => {
    if (
      reverseIntervalRef.value &&
      reverseIntervalSecondRef.value > 0 &&
      reverseIntervalThirdRef.value > 0
    ) {
      if (reverseIntervalRef.value === 199995) {
        isSetStyle.value = true
      }

      reverseIntervalRef.value--
      reverseIntervalSecondRef.value--
      reverseIntervalThirdRef.value--
    } else {
      reverseIntervalRef.value = 200000
      reverseIntervalSecondRef.value = 360000
      reverseIntervalThirdRef.value = 460000
    }
  }, 2000)
})


</script>

<style>
.custom-style {
  border-radius: 40px;
}

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
  max-height: 200px;
  opacity: 1;
}
</style>
