<template>
  <HeaderComp></HeaderComp>
  <div class="login">
    <div class="login_form flex min-h-screen items-center justify-center">
      <div class="relative flex flex-col rounded-xl shadow-none">
        <h4
          class="block title font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
        >
          ورود
        </h4>
        <form class="mt-8 mb-2 w-80">
          <div class="mb-4 flex flex-col gap-6">
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                v-model="email"
              />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                ایمیل
              </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                v-model="password"
              />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                پسورد
              </label>
            </div>
          </div>

          <button
            @click="Login()"
            class="mt-6 block w-full select-none rounded-lg bg-purple-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <span class="text-md">ورود</span>
          </button>
          <p
            class="mt-10 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
          >
            حسابی ندارید؟
            <router-link
              to="/register"
              class="font-semibold text-pink-500 transition-colors hover:text-blue-700"
            >
              کلیک کنید
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :timeout="timeout1">
      {{ text }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false">
          بستن
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <div class="text-center">
    <v-snackbar v-model="snackbar2" :timeout="timeout2">
      {{ text2 }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="finishLogin()"> بستن </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderComp from "./HeaderComp.vue";
import axios from "axios";
import { useStore } from "../plugin/pinia";
import router from "../plugin/router";

export default {
  components: { HeaderComp },
  name: "LoginComp",
  created() {
    document.title = "ورود به حساب";
  },
  setup() {
    const snackbar = ref(false);
    const text = ref("");
    const snackbar2 = ref(false);
    const text2 = ref("");
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const timeout1 = ref(2000);
    const timeout2 = ref(2000);

    const Login = () => {
      if (email.value && password.value) {
        let obj = 
        {
          email : email.value,
          password : password.value
        }
        axios.post(`${store.api}/login`, obj).then((response) => {
          if (response.data == "چنین حسابی وجود ندارد") {
            text.value = response.data;
            snackbar.value = true;
          } else if (
            response.data == "پسورد اشتباه است. لطفا دوباره امتحان کنید"
          ) {
            text.value = response.data;
            snackbar.value = true;
          } else if (response.data.res == "ok") {
            localStorage.setItem("token", response.data.token);
            router.push("/");
          }
        });
      } else {
        text.value = "برای ورود اطلاعات خود را کامل وارد کنید";
        snackbar.value = true;
      }
    };

    const finishLogin = () => {
      router.push("/");
    };

    return {
      email,
      password,
      Login,
      snackbar,
      text,
      snackbar2,
      text2,
      finishLogin,
      timeout1,
      timeout2,
    };
  },
};
</script>

<style>
.login_form {
  margin-top: -130px;
  width: 100%;
}
form {
  width: 100%;
  margin: 0 auto;
}
@media (min-width: 320px) and (max-width: 480px) {
  .login_form {
    margin-top: -130px;
  }
}
@media (min-width: 480px) and (max-width: 1200px) {
  .login_form {
    margin-top: 0;
  }
}
</style>
