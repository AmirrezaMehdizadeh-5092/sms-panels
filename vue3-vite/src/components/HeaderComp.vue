<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <div class="top">
    <div class="sec4">
      <div>
        <i
          style="margin-left: -100px"
          @click.stop="drawer = !drawer"
          class="fa fa-bars"
        ></i>
      </div>
    </div>
    <div class="l">
      <router-link to="/"
        ><div class="l1">
          <i style="color: green" class="	fa fa-home"></i>
          <span>خانه</span>
        </div></router-link
      >
      <router-link to="/contact"
        ><div class="l1">
          <i style="color: green;  rotate: 270deg;" class="fa fa-phone"></i>
          <span>تماس با ما</span>
        </div></router-link
      >
      <router-link to="/help"><div class="l1">
        <span>راهنما</span>
      </div></router-link>
    </div>
    <div class="r">
      <router-link to="/login"><span style="color: black; font-size: 17px; cursor: pointer">ورود</span></router-link>
      <router-link to="/register"><button
        class="mx-8 block select-none bg-purple-500 py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        <span class="text-md">ثبت نام</span>
      </button></router-link>
      <button
        id="phone"
        @click="Phone()"
        class="block select-none bg-gray-400 py-2 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        <span class="text-md">051-55555</span>
      </button>
    </div>
  </div>
  <div id="header">
    <v-card style="position: absolute; z-index: 5">
      <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list-item
            class="text-center my-3 text-red-400"
            @click="drawer = null"
            title="بستن منو"
          ></v-list-item>
          <v-divider></v-divider>

          <v-list density="compact" nav>
            <router-link to="/"
              ><v-list-item
                class="text-center"
                title="خانه"
                value="خانه"
              ></v-list-item
            ></router-link>
            <br />
            <router-link to="/help"
              ><v-list-item
                class="text-center"
                title="راهنما"
                value="راهنما"
              ></v-list-item
            ></router-link>
            <br />
            <router-link to="/conatct"
              ><v-list-item
                class="text-center"
                title="تماس با ما"
                value="تماس با ما"
              ></v-list-item
            ></router-link>
            <br />
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "../plugin/pinia";
import router from "../plugin/router";

export default {
  name: "HeaderComp",
  setup() {
    const drawer = ref(null);

    const GoTo = (rout) => {
      router.push(rout);
    };

    const Phone = () => {
      navigator.clipboard.writeText("info@sadrsportt.ir");
      alert("شماره تماس کپی شد");
    };

    onMounted(() => {});

    return {
      drawer,
      GoTo,
      Phone,
    };
  },
};
</script>

<style src="../assets/css/Header.css"></style>
