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
        <th class="text-left">ชื่อสื่อ</th>
        <th class="text-left">เนื้อหา</th>
        <th class="text-left">ไฟล์</th>
        <th class="text-left">จัดการ</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableData" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.file }}</td>
        <td>
          <v-btn icon color="success" @click="editDialog = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="error" @click="deleteDialog = true">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>

  <v-dialog v-model="addDialog" width="600">
    <v-card>
      <v-container fluid>
        <div class="d-flex justify-space-between">
          <h2 class="mb-3">เพิ่มเอกสาร</h2>
          <v-btn icon size="x-small" variant="flat" @click="addDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-text-field label="ชื่อสื่อ" v-model="documentData.title"></v-text-field>
        <!-- <v-file-input
          label="รูปภาพ"
          density="compact"
          v-model="documentData.image"
          prepend-icon="mdi-image"
        ></v-file-input> -->
        <v-file-input
          label="ไฟล์"
          density="compact"
          v-model="documentData.file"
          prepend-icon="mdi-file"
        ></v-file-input>
        <v-textarea label="เนื้อหา" v-model="documentData.content"></v-textarea>
        <v-btn variant="flat" class="d-flex mx-auto" background="sucess" @click="saveDoc"
          >บันทึกข้อมูล</v-btn
        >
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { app } from "@/firebase";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import { useCollection } from "vuefire";
import { ref } from "vue";

export default {
  data() {
    return {
      addDialog: false,
      documentData: {
        title: "",
        content: "",
        file: ""
      }
    };
  },
  methods: {
    saveDoc() {
      const db = getFirestore(app);
      // insert to documents collection
      setDoc(doc(db, "documents", this.documentData.title), {
        title: this.documentData.title,
        content: this.documentData.content,
        file: this.documentData.file
      }).then(() => {
        this.addDialog = false;
      });
    }
  },
  setup() {
    const tableData = ref([]);
    const db = getFirestore(app);
    useCollection(collection(db, "documents"), { once: true }).promise.value.then((snapshot) => {
      snapshot.forEach((doc) => {
        tableData.value.push(doc);
      });
    });
    return {
      tableData
    };
  }
};
</script>
<style scoped></style>
