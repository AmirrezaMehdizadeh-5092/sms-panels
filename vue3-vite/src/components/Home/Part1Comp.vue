<template>
  <div class="mainp1">
    <div class="submainp1">
      <div class="w-full flex justify-center items-center">
        <h1 class="">پنل پیامک</h1>
      </div>
      <div class="w-full flex justify-center items-center">
        <p>
          سامانه پیام کوتاه قاصدک، سرویسی قدرتمند برای ارسال و دریافت و پردازش
          پیام کوتاه برای کاربران ایرانی است. استفاده از این سامانه نیازمندی
          زیرساختی توسط مشتریان نیست و همه ی افراد و سازمان‌هایی که نیاز به
          ارسال پیام کوتاه و خدمات مرتبط با آن دارند می‌توانند با خیال آسوده
          پیامک‌های خود را از طریق سامانه‌ی قاصدک انجام دهند. امکانات و
          ماژول‌های متنوع این سرویس امکان انجام امور مختلف در زمینه اطلاع رسانی
          های پیامکی و سامانه‌های ثبت مشتریان را به همراه خود برای کاربران قاصدک
          فرآهم نموده است.
        </p>
      </div>
      <div class="w-full flex justify-center items-center">
        <router-link to="/register"><button
          class=" block  select-none rounded-md bg-purple-500 py-4 px-14 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          <span class="text-md">شروع / ثبت نام</span>
        </button></router-link>
      </div>
    </div>
    <div class="submainp12">
        <img width="400" height="400" src="../../assets/img/a90f7b04f317d17d187f19526ca37804.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Part1Comp",
  setup() {
    return {};
  },
};
</script>

<style src="../../assets/css/Home/Part1.css"></style>
