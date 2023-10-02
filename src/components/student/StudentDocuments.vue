<template>
  <v-img :src="current_wallpaper" cover height="200">
    <div style="background: rgba(0, 0, 0, 0.3)" class="w-100 h-100 text-white">
      <v-container class="h-100 d-flex" style="align-items: center">
        <h1>เอกสารประกอบ</h1>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-reload" @click="rand_wallpaper"></v-btn>
      </v-container>
    </div>
  </v-img>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    item-value="name"
    class="elevation-1"
  >
    <template v-slot:item.carbs="{ item }">
      <v-btn v-model="item.carbs" icon="mdi-download" variant="flat"></v-btn>
    </template>
  </v-data-table>
</template>
<script>
import { VDataTable, VDataTableServer, VDataTableVirtual } from "vuetify/labs/VDataTable";

export default {
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual
  },
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        {
          title: "ชื่อไฟล์",
          align: "start",
          key: "name"
        },
        // { title: "ขนาด", align: "end", key: "calories" },
        // { title: "วันที่", align: "end", key: "fat" },
        { title: "ดาวน์โหลด", align: "end", key: "carbs" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22"
        }
      ],
      wallpaper: [
        "https://i.pinimg.com/originals/b8/2f/28/b82f28a7e9c8fcb3868d3d94652c107c.gif",
        "https://cdn.wallpapersafari.com/56/63/9nlGN0.gif",
        "https://i.pinimg.com/originals/19/6a/d9/196ad9d3122098b297d7b99ce9ff209f.gif",
        "https://i.redd.it/bpxxqqvps4h91.gif",
        "https://i.pinimg.com/originals/12/b2/3a/12b23a7752e8a7a4464c1ff5e596237f.gif"
      ],
      current_wallpaper: ""
    };
  },
  methods: {
    rand_wallpaper() {
      // random wallpaper from array with no repeat
      let rand = Math.floor(Math.random() * this.wallpaper.length);
      this.current_wallpaper = this.wallpaper[rand];
    }
  },
  created() {
    this.rand_wallpaper();
  }
};
</script>
<style scoped></style>
