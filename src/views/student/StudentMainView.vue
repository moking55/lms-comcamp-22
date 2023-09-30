<template>
  <AppBarStudent />
  <v-row>
    <v-col cols="2" class="d-none d-lg-block"></v-col>
    <v-col cols="12" lg="">
      <div class="w-100" style="min-height: 100dvh">
        <v-parallax
          src="https://images3.alphacoders.com/129/1298880.png"
          cover
          class="w-100 bg-grey-lighten-3 position-relative overflow-hidden"
          style="height: 280px"
        >
          <!-- <h1 class="strokeme" style="font-weight: 300">หน้าแรก</h1> -->
        </v-parallax>
        <v-container class="mt-4" fluid>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur iste maxime cum, ad
          quas tempora enim, qui quo magnam voluptatum, velit sed sapiente suscipit. Ipsum possimus
          voluptas pariatur sapiente sequi?
        </v-container>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import AppBarStudent from "@/components/AppBarStudent.vue";
export default {
  components: {
    AppBarStudent
  }
};
</script>
<style scoped>
.strokeme {
  color: white;
  font-size: 60pt;
  position: absolute;
  bottom: -33px;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
