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
        <th class="text-left">QR</th>
        <th class="text-left">สร้างโดย</th>
        <th class="text-left">สร้างเมื่อ</th>
        <th class="text-left">หมดอายุ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><qrcode-vue value="A-323"></qrcode-vue></td>
        <td>ฟหกฟ</td>
        <td>ฟหกฟก</td>
        <td>ฟหกฟ</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
};
</script>
<style></style>
