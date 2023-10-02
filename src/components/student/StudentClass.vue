<template>
  <v-row class="pa-4 mt-8">
    <v-col cols="12" sm="6" lg="4" v-for="(item, index) in 4" :key="index">
      <v-card
        class="rounded-lg animate__animated animate__fadeInLeft"
        :style="{ 'animation-delay': `${index / 2.5}s` }"
      >
        <v-img height="34px" cover src="https://i.pinimg.com/1200x/c8/14/07/c81407cc71a17890febfec5964555078.jpg">
          <!-- if src is not empty -->
          <template v-slot:placeholder>
            <div class="h-100" style="background: #ff6ac2"></div>
          </template>
        </v-img>
        <v-card-title>
          <h3>Introduce to Thunkable</h3>
        </v-card-title>
        <v-card-text>
          <p>รู้จักกับ Thunkable เบื้องต้น</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" prepend-icon="mdi-eye" variant="tonal">ดูเนื้อหา</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {};
</script>
<style></style>
