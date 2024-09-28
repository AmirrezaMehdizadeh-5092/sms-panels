<template>
  <HeaderComp></HeaderComp>
  <div class="register">
    <div class="register_form flex min-h-screen items-center justify-center">
      <div
        class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none"
      >
        <h4
          class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
        >
          ثبت نام
        </h4>
        <form class="mt-8 mb-2 w-80">
          <div class="mb-4 flex flex-col gap-6">
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                type="email"
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
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                v-model="confirm_pass"
              />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                تایید پسورد
              </label>
            </div>
          </div>

          <button
            @click="Register()"
            class="mt-6 block w-full select-none rounded-lg bg-purple-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <span class="text-md">ثبت نام</span>
          </button>
          <p
            class="mt-10 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
          >
            حسابی دارید؟
            <router-link
              to="/login"
              class="font-semibold text-pink-500 transition-colors hover:text-blue-700"
            >
              ورود
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
        <v-btn color="blue" variant="text" @click="finishRegister()">
          بستن
        </v-btn>
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
  name: "RegisterComp",
  created() {
    document.title = "ثبت نام";
  },
  components: { HeaderComp },
  setup() {
    const email = ref("");
    const password = ref("");
    const confirm_pass = ref("");
    const snackbar = ref(false);
    const text = ref("");
    const snackbar2 = ref(false);
    const text2 = ref("");
    const store = useStore();
    const timeout1 = ref(2000);
    const timeout2 = ref(2000);

    const Register = () => {
      if (email.value && password.value && confirm_pass.value) {
        if (password.value.length >= 6) {
          if (
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
              password.value
            )
          ) {
            if (confirm_pass.value == password.value) {
              if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  email.value
                )
              ) {
                let obj = {
                  email: email.value,
                  password: password.value,
                };
                axios.post(`${store.api}/register`, obj).then((response) => {
                  if (response.data == "چنین ایمیلی قبلا ثبت شده است") {
                    text.value = response.data;
                    snackbar.value = true;
                  } else if (response.data.res == "ok") {
                    text.value = "ثبت نام انجام شد";
                    snackbar.value = true;
                    localStorage.setItem("token", response.data.token);
                    setTimeout(() => {
                      router.push("/");
                    }, 2000);
                  }
                });
              } else {
                text.value = "لطفا یک ایمیل معتبر وارد کنید";
                snackbar.value = true;
              }
            } else {
              text.value = "پسورد ها یکسان نیستند";
              snackbar.value = true;
            }
          } else {
            text.value = "پسورد باید شامل یک حرف بزرگ و عدد باشد";
            snackbar.value = true;
          }
        } else {
          text.value = "طول پسورد بیشتر از 6 کاراکتر باشد";
          snackbar.value = true;
        }
      } else {
        text.value = "لطفا تمام فیلدها را پر کنید";
        snackbar.value = true;
      }
    };

    const finishRegister = () => {
      router.push("/");
    };

    return {
      email,
      password,
      confirm_pass,
      Register,
      snackbar,
      text,
      snackbar2,
      text2,
      finishRegister,
      timeout1,
      timeout2,
    };
  },
};
</script>

<style>
.register_form {
  margin-top: -100px;
  width: 100%;
}
form {
  width: 100%;
  margin: 0 auto;
}
@media (min-width: 320px) and (max-width: 480px) {
  .register_form {
    margin-top: -100px;
  }
}
@media (min-width: 480px) and (max-width: 1200px) {
  .register_form {
    margin-top: 50px;
  }
}
</style>
