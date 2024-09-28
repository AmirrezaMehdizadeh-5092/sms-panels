<template>
  <footer class="bg-purple-400 text-center text-neutral-600 lg:text-left">
    <div class="mx-6 py-16 text-center md:text-left">
      <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div id="quick" class="">
          <h6
            class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white"
          >
            دسته بندی های محبوب
          </h6>
          <p class="mb-4 text-white">
            <router-link to="/category/12">اسلش مردانه</router-link>
          </p>
          <p class="mb-4 text-white">
            <router-link to="/category/10">مانتو و شلوار زنانه </router-link>
          </p>
          <p class="mb-4 text-white">
            <router-link to="/category/13">لگ مشکی زنانه </router-link>
          </p>
        </div>
        <div id="quick" class="">
          <h6
            class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white"
          >
            دسترسی سریع
          </h6>
          <p class="mb-4 text-white">
            <router-link to="/">خانه</router-link>
          </p>
          <p class="mb-4 text-white">
            <router-link to="/shop">فروشگاه</router-link>
          </p>
          <p class="mb-4 text-white">
            <router-link to="/login">ورود</router-link>
          </p>
        </div>
        <div class="">
          <h6
            class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white"
          >
            عضویت در خبرنامه
          </h6>
          <div class="flex justify-center items-center h-28">
            <input
              style="border: 1px solid green"
              class="bg-white p-2"
              type="email"
              placeholder="ایمیل شما"
              v-model="email"
            />
            <button
              @click="Subscribe()"
              class="bg-green"
              style="padding: 9px 9px;"
            >
              تایید
            </button>
          </div>
        </div>
        <div class="">
          <h6
            class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white"
          >
            ما را در شبکه های اجتماعی دنبال کنید
          </h6>
          <div class="flex justify-center items-center h-28">
            <a href="https://www.instagram.com/sadrsport" target="_blank"><i id="ii" class="fa fa-instagram mx-4"></i></a>
            <a href="https://t.me/Sadr_Sportt" target="_blank"></a><i id="ii" class="fa fa-telegram mx-4"></i>
            <a href="info@sadrsportt.ir" target="_blank"></a><i id="ii" class="fa fa-envelope mx-4"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-neutral-200 p-2 text-center">
      <span id="copy_span">تمامی حقوق محفوظ است</span>
    </div>
    <div class="text-center">
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
  
        <template v-slot:actions>
          <v-btn color="blue" variant="text" @click="snackbar = false">
            بستن
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FooterComp",
  setup()
  {
    const snackbar = ref(false);
    const text = ref("");
    const email = ref("");
    const Subscribe= ()=>{
      if (email.value)
      {

      }
      else 
      {
        text.value = "برای عضویت ایمیل خود را وارد  کنید";
        snackbar.value = true;
      }
    }

    return{
      email,
      Subscribe,
      snackbar,
      text
    }

  }
};
</script>

<style src="../assets/css/footer.css"></style>
