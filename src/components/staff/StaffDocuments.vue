<template>
  <v-img
    class="animate__animated animate__slideInDown staff-header-animation-speed-500ms"
    height="200px"
    cover
    src="https://in.ivao.aero/admin/core/uploads/Web/heading8.jpg"
  >
    <div
      style="background: rgba(0, 0, 0, 0.2); align-items: center"
      class="text-white w-100 h-100 d-flex"
    >
      <v-container fluid class="d-flex justify-space-between align-center">
        <h2>แผงควบคุมเว็บไซต์</h2>
        <v-btn class="bg-success" size="x-large" prepend-icon="mdi-plus" @click="addDialog = true"
          >เพิ่มเอกสาร</v-btn
        >
      </v-container>
    </div>
  </v-img>
  <v-table>
    <thead>
      <tr>
        <th>ชื่อเอกสาร</th>
        <th>เนื้อหา</th>
      </tr>
    </thead>
  </v-table>

  <v-dialog v-model="addDialog" width="600">
    <v-card>
      <v-card-item>
        <h3 class="mb-3">เพิ่มเอกสาร</h3>
        <v-text-field label="ชื่อสื่อ"></v-text-field>
        <v-file-input label="รูปภาพ" density="compact" prepend-icon="mdi-image"></v-file-input>
        <v-file-input label="ไฟล์" density="compact" prepend-icon="mdi-file"></v-file-input>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      addDialog: false
    };
  }
};
</script>
<style scoped></style>
