<template>
  <div>
    <!-- ======= HERO SECTION ======= -->
    <section class="px-4 md:px-10 lg:px-20">
      <div
        class="flex flex-col-reverse md:flex-row justify-around items-center gap-10 mt-10 text-center md:text-left"
      >
        <div class="max-w-lg">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 md:mt-20 leading-snug">
            Xizmatda qanday <br />
            ishlashni boshlash <br />
            mumkin?
          </h1>
          <p class="text-base md:text-lg mt-5 text-gray-700">
            Ushbu maqolada 1C UZTELECOM servisida muvaffaqiyatli <br class="hidden md:block" />
            ishlash uchun foydali tavsiyalar berilgan.
          </p>
        </div>

        <div class="flex justify-center">
          <img
            src="../assets/img/discussion.png"
            alt=""
            class="w-3/4 md:w-1/2 lg:w-[400px]"
          />
        </div>
      </div>
    </section>

    <!-- ======= MAIN CONTENT ======= -->
    <section class="max-w-3xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
      <h1 class="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
        Xizmatda qanday ishlashni boshlash mumkin?
      </h1>

      <!-- STEP 1 -->
      <div class="space-y-4 mb-12">
        <h2 class="text-lg md:text-xl font-semibold">1. Ro‘yxatdan o‘ting</h2>
        <p>
          Sinov bosqichini olish uchun arizangizni
          <a href="#" class="text-blue-600 underline">to‘ldiring</a>.
        </p>
        <p>Kerakli ma’lumotlarni kiriting: FIO, email, aloqa telefoni.</p>
        <p>
          So‘rovingiz yuborilgandan so‘ng, operatorimiz siz bilan bog‘lanib, tafsilotlarni
          aniqlashtiradi va servisga kirish imkonini taqdim etadi.
        </p>
        <p>
          Ro‘yxatdan o‘tish juda oson! Bir necha daqiqangizni sarflaysiz xolos. Bu bosqich sizning
          shaxsiy kabinetingiz uchun zarur.
        </p>
        <img
          src="../assets/img/comand.png"
          alt="Ro‘yxatdan o‘tish"
          class="rounded-2xl shadow-md w-full md:w-3/4 mx-auto"
        />
      </div>

      <!-- STEP 2 -->
      <div class="space-y-4 mb-12">
        <h2 class="text-lg md:text-xl font-semibold">
          2. Kirish huquqini oling va ishlashni boshlang
        </h2>
        <p>
          So‘rov tasdiqlangach, sizga <strong>1C UZTELECOM</strong> servisining demo-kirish taklifi
          keladi.
        </p>
        <p>
          Demo-muddat bir oy davom etadi va shu davrda quyidagi imkoniyatlarni bepul sinab
          ko‘rishingiz mumkin:
        </p>

        <ul class="list-disc pl-6 space-y-1">
          <li>Buxgalteriya va soliq hisobini yuritish</li>
          <li>Hisobotlarni tayyorlash va topshirish</li>
          <li>Standart hujjatlar va hisobotlar bilan ishlash</li>
        </ul>

        <p>
          Demo-muddat davomida biz sizga texnik yordam ko‘rsatamiz va savollaringizga javob
          beramiz.
        </p>

        <img
          src="../assets/img/coll.png"
          alt="Ishlash jarayoni"
          class="rounded-2xl shadow-md w-full md:w-3/4 mx-auto"
        />
      </div>

      <!-- STEP 3 -->
      <div class="space-y-4">
        <h2 class="text-lg md:text-xl font-semibold">3. Asosiy tarifga o‘ting</h2>
        <p>
          Demo-muddat tugagach, to‘liq qulayliklar va imkoniyatlar uchun to‘lov asosida xizmatdan
          foydalanishni davom ettirishingiz mumkin.
        </p>
        <p>
          Agar servis sizga yoqsa, biz siz bilan hamkorlikni davom ettirishdan xursand bo‘lamiz.
        </p>
        <p>
          Bizning mutaxassislar <strong>1C UZTELECOM</strong> bilan ishlashni eng qulay amalga
          oshirishda yordam beradi.
        </p>
      </div>
    </section>

    <!-- ======= CTA (Call To Action) ======= -->
    <section class="mt-20 mb-20 px-4">
      <div class="flex flex-col items-center text-center">
        <img src="../assets/img/bigstar.png" alt="" class="w-20 md:w-28" />
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 leading-snug">
          Ro‘yxatdan o‘tish bir necha daqiqa davom etadi va darhol servisga <br class="hidden md:block" />
          kirish huquqini olasiz.
        </h1>
        <p class="text-gray-500 text-base md:text-lg mt-5 px-2">
          Sinab ko‘rmoqchimisiz? Sizga 30 kun bepul foydalanish imkoniyati beriladi.
        </p>
        <button
          class="bg-blue-900 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-700 transition"
        >
          30 kun bepul
        </button>
      </div>
    </section>

    <!-- ======= FORM ======= -->
    <section class="mb-20 mt-20 px-4 md:px-10">
      <div>
        <div>
          <h1 class="text-3xl md:text-4xl font-bold text-center mt-20">
            Bizga xabar yuboring
          </h1>
          <p class="text-gray-500 text-center text-base md:text-lg mt-5 px-2">
            Savolingiz, taklifingiz yoki 1C UZTELECOM asosidagi yechimlarimiz haqida ko‘proq
            bilmoqchimisiz? <br class="hidden md:block" />
            Biz bilan bog‘laning — doim aloqadamiz va yordam berishga tayyormiz!
          </p>
        </div>

        <div class="max-w-md mx-auto mt-10 p-6">
          <form
            class="flex flex-col gap-4 bg-white rounded-2xl shadow-md p-6"
          >
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

