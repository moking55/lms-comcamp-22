<template>
  <v-card
    class="ma-6 animate__animated animate__fadeIn"
    :style="{ 'animation-delay': `${index / 3}s` }"
    rounded="lg"
    variant="flat"
    v-for="(item, index) in 2"
    :key="index"
  >
    <v-card-item>
      <v-card-title class="text-body-2 d-flex align-center">
        <v-icon icon="mdi-calendar" start></v-icon>

        <span class="text-medium-emphasis font-weight-bold">1 Fri Dec 16th - 9:00 PM</span>

        <v-spacer></v-spacer>

        <v-chip
          class="ms-2"
          prepend-icon="mdi-account-multiple"
          size="small"
          text="81"
          variant="flat"
          color="teal"
        ></v-chip>
      </v-card-title>

      <div class="py-2">
        <div class="text-h6">Live Q&A</div>

        <div class="font-weight-light text-medium-emphasis">
          Join the Vuetify team for a live Question and Answer session.
        </div>
      </div>
    </v-card-item>

    <v-divider></v-divider>

    <div class="pa-4 d-flex align-center">
      <v-tooltip text="งานกลุ่ม" location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" icon="mdi-account-group" start></v-icon>
        </template>
      </v-tooltip>
      <v-icon icon="mdi-broadcast" start></v-icon>
      <v-spacer></v-spacer>

      <v-btn icon="mdi-dots-horizontal" variant="text"></v-btn>

      <v-btn class="me-2 text-none" prepend-icon="mdi-export-variant" variant="flat"> Share </v-btn>

      <v-btn
        border
        class="text-none"
        prepend-icon="mdi-eye"
        :to="{ name: 'student-assignment-detail', params: { id: 1 } }"
        variant="text"
      >
        อ่าน
      </v-btn>
    </div>
  </v-card>
</template>
<script>
export default {};
</script>
<style></style>
