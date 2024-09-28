<template>
  <div id="home" dir="ltr">
    <HeaderComp></HeaderComp>
    <Part1Comp></Part1Comp>
    <Part2Comp></Part2Comp>
    <Part3Comp></Part3Comp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import Part1Comp from "./Home/Part1Comp.vue";
import Part2Comp from "./Home/Part2Comp.vue";
import FooterComp from "./FooterComp.vue";
import Part3Comp from "./Home/Part3Comp.vue";
export default 
{
    name: "HomeComp",
    components: { HeaderComp, Part1Comp, Part2Comp, FooterComp, Part3Comp },
    created() {
        document.title = "صفحه اصلی ";
    },
    setup() 
    { 

    },
};
</script>
