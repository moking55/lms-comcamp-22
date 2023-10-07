<template>
  <v-img class="animate__animated animate__slideInDown staff-header-animation-speed-500ms" height="200px" cover src="https://in.ivao.aero/admin/core/uploads/Web/heading8.jpg">
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
      <v-container fluid>
        <div class="d-flex justify-space-between">
          <h2>ประกาศ</h2>
          <v-btn color="primary" @click="addAnnouncement = true">สร้างประกาศใหม่</v-btn>
        </div>
      </v-container>
      <v-card-item v-if="addAnnouncement">
        <MdEditor
          v-model="mdContent"
          no-upload-img="true"
          no-mermaid="true"
          language="en-US"
          style="height: 300px"
          :theme="currentTheme"
        />
        <v-btn color="primary">บันทึก</v-btn>
        <v-btn color="primary" @click="addAnnouncement = false">ยกเลิก</v-btn>
      </v-card-item>
      <v-card-item v-else>
        <v-card variant="tonal" class="my-1" v-for="(item, index) in 5" :key="index">
          <v-card-item>
            <h3>ประกาศที่ 1</h3>
            <MdPreview />
          </v-card-item>
        </v-card>
      </v-card-item>
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
import { MdEditor, MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { useTheme } from "vuetify";

export default {
  components: {
    MdEditor,
    MdPreview
  },
  data() {
    return {
      addAnnouncement: false
    };
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
