<template>
  <!-- Adding Assignment -->
  <v-container>
    <v-text-field label="ชื่อ" v-model="content.title"></v-text-field>
    <MdEditor v-model="content.instruction" :theme="currentTheme" language="en-US" />

    <v-card class="mt-3">
      <v-card-item>
        <h3 class="my-3">ตั้งค่า</h3>
        <v-row>
          <v-col lg="4">
            <v-text-field label="คะแนน" type="number" v-model="content.score"></v-text-field>
          </v-col>
          <v-col lg="4">
            <v-text-field label="ครบกำหนด" type="datetime-local" v-model="content.due"></v-text-field>
          </v-col>
          <v-col lg="4">
            <v-btn size="x-large" color="primary" class="w-100">บันทึกข้อมูล</v-btn>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </v-container>
</template>
<script>
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { useTheme } from "vuetify";
export default {
  components: {
    MdEditor
  },
  data() {
    return {
      content: {
        title: "",
        instruction: "",
        score: 0,
        due: ""
      }
    };
  },
  setup() {
    const currentTheme = useTheme().global.name.value;
    return {
      currentTheme
    };
  }
};
</script>
<style></style>
