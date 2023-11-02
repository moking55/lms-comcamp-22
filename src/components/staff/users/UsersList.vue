<template>
  <v-text-field
    name="search"
    label="ค้นหาตามชื่อผู้ใช้"
    v-model="search"
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
  <VDataTable :headers="headers" :items="tableData" :search="search"> </VDataTable>
  <!-- <v-table>
    <thead>
      <tr>
        <th>ชื่อผู้ใช้</th>
        <th>ชื่อ - นามสกุล</th>
        <th></th>
        <th>อีเมล</th>
        <th>เบอร์โทรศัพท์</th>
        <th>ตำแหน่ง</th>
        <th>แก้ไข</th>
        <th>ลบ</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in tableData" :key="user.id">
        <td>{{ user.username }}</td>
        <td>{{ user.fullname }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ is_admin(user.is_admin,user.is_teacher) }}</td>
        <td>
          <v-button type="primary" size="small" icon="el-icon-edit"></v-button>
        </td>
        <td>
          <v-button type="danger" size="small" icon="el-icon-delete"></v-button>
        </td>
      </tr>
    </tbody>
  </v-table> -->
</template>
<script>
import axios from "axios";
import { VDataTable } from "vuetify/labs/VDataTable";

export default {
  name: "UsersList",
  components: {
    VDataTable
  },
  data() {
    return {
      headers: [
        { key: "id", title: "id", align: "start", sortable: false },
        { key: "username", title: "ชื่อผู้ใช้" },
        { key: "fullname", title: "ชื่อ - นามสกุล" },
        { key: "nickname", title: "ชื่อเล่น" },
        { key: "is_admin", title: "ตำแหน่ง" }
      ],
      search: "",
      tableData: []
    };
  },
  mounted() {
    axios.get(import.meta.env.VITE_APP_API_URL + "/auth/getAllUsers").then((res) => {
      res.data.data.forEach((element) => {
        element.is_admin = this.is_admin(element.is_admin, element.is_teacher);
      });
      this.tableData = res.data.data;
      this.$emit("snackbar", "โหลดข้อมูลสำเร็จ")
    });
  },
  methods: {
    is_admin(is_admin, is_teacher) {
      if (is_admin == 1) {
        return "ผู้ดูแลระบบ";
      } else if (is_teacher == 1) {
        return "อาจารย์";
      } else {
        return "นักศึกษา";
      }
    }
  }
};
</script>
<style></style>
