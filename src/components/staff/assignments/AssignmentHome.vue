<template>
  <v-table>
    <thead>
      <tr>
        <th>งานที่มอบหมาย</th>
        <th>วันที่สร้าง</th>
        <th>กำหนดส่ง</th>
        <th>ส่งแล้ว</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(work, index) in assignments" :key="index">
        <td>{{ work.name }}</td>
        <td>{{ work.created_at }}</td>
        <td>{{ work.due }}</td>
        <td>{{ work.submitted }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
export default {
  data() {
    return {
      assignments: [
        { name: "งานที่ 1", created_at: "2021-01-01", due: "2021-01-31", submitted: "0/60" },
        { name: "งานที่ 2", created_at: "2021-01-01", due: "2021-01-31", submitted: "0/60" },
        { name: "งานที่ 3", created_at: "2021-01-01", due: "2021-01-31", submitted: "0/60" },
        { name: "งานที่ 4", created_at: "2021-01-01", due: "2021-01-31", submitted: "0/60" },
        { name: "งานที่ 5", created_at: "2021-01-01", due: "2021-01-31", submitted: "0/60" },
        { name: "งานที่ 6", created_at: "2021-01-01", due: "2021-01-31", submitted: "0/60" },
        { name: "งานที่ 7", created_at: "2021-01-01", due: "2021-01-31", submitted: "0/60" },
        { name: "งานที่ 8", created_at: "2021-01-01", due: "2021-01-31", submitted: "0/60" }
      ]
    };
  }
};
</script>
<style></style>
