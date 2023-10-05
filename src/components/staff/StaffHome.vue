<template>
  <v-img height="200px" cover src="https://in.ivao.aero/admin/core/uploads/Web/heading8.jpg">
    <div
      style="background: rgba(0, 0, 0, 0.2); align-items: center"
      class="text-white w-100 h-100 d-flex"
    >
      <v-container fluid>
        <h2>แผงควบคุมเว็บไซต์</h2>
      </v-container>
    </div>
  </v-img>
  <v-row>
    <v-col cols="12" lg="8">
      <v-container>
        <div class="d-flex justify-space-between">
          <h2>ประกาศ</h2>
          <v-btn color="primary">สร้างประกาศใหม่</v-btn>
        </div>
        <v-card-item>
          <MdEditor
            v-model="mdContent"
            no-upload-img="true"
            no-mermaid="true"
            language="en-US"
            :theme="currentTheme"
          />
        </v-card-item>
        <v-card-item>
          <v-btn color="primary">บันทึก</v-btn>
        </v-card-item>
      </v-container>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card>
        <v-card-item class="d-flex">
          <v-switch label="ปิดระบบเว็บ"></v-switch>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { useTheme } from "vuetify";

export default {
  components: {
    MdEditor
  },
  setup() {
    const theme = useTheme();
    const mdContent = ref("# Hello World");
    return {
      mdContent,
      currentTheme: theme.global.name.value
    };
  }
};
</script>
<style></style>
