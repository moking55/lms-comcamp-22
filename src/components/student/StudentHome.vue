<template>
  <v-img
    src="https://i.imgur.com/D80o6pS.jpg"
    cover
    class="position-relative overflow-hidden"
    style="height: 280px"
  >
    <!-- <h1 class="strokeme" style="font-weight: 300">หน้าแรก</h1> -->
    <div class="h-100 w-100 text-white" style="background: rgba(0, 0, 0, 0.3)">
      <v-container class="h-100">
        <v-row class="my-auto h-100">
          <v-col cols="7" class="d-flex flex-column justify-center">
            <h1 class="display-1 font-weight-bold">หน้าแรก</h1>
            <h2 class="display-2 font-weight-bold">ยินดีต้อนรับ</h2>
            <h3 class="display-3 font-weight-bold">นาย สมชาย ใจดี</h3>
          </v-col>
          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-row>
              <v-col cols="12" md="6"> </v-col>
              <v-col cols="12" md="6">
                <v-card class="elevation-0 py-5" style="background: rgba(0, 0, 0, 0.3)">
                  <v-card-text class="text-center text-white">
                    <h3 class="font-weight-bold">พ้อยต์</h3>
                    <h1 class="display-1 font-weight-bold text-green mt-3">--</h1>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-img>
  <v-container class="mt-4" fluid>
    <v-row>
      <!-- <v-col cols="12" md="8">
        <h1 style="font-weight: 400">
          <v-icon size="x-small">mdi-bullhorn-variant</v-icon>
          มีอะไรอัพเดตบ้าง!
        </h1>
        <v-card class="annouce-card mt-3 rounded-lg" style="max-height: 600px">
          <v-card-item>
            <v-row>
              <v-col cols="6" md="4">
                <v-img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                ></v-img>
              </v-col>
              <v-col cols="6" md="4">
                <v-img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                ></v-img>
              </v-col>
              <v-col cols="6" md="4">
                <v-img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                ></v-img>
              </v-col>
              <v-col cols="6" md="4">
                <v-img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                ></v-img>
              </v-col>
              <v-col cols="6" md="4">
                <v-img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                ></v-img>
              </v-col>
              <v-col cols="6" md="4">
                <v-img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                ></v-img>
              </v-col>
              <v-col cols="6" md="4">
                <v-img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col> -->
      <v-col cols="12" md="8">
        <h1 style="font-weight: 400">
          <v-icon size="x-small">mdi-bullhorn-variant</v-icon>
          มีอะไรอัพเดตบ้าง!
        </h1>

        <v-card class="mt-3 rounded-lg d-flex" style="height: 300px">
          <h3 class="ma-auto">อะไรที่ตื่นเต้นอาจจะมาเร็วๆนี้</h3>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <h1 style="font-weight: 400">
          <v-icon size="x-small">mdi-bullhorn-variant</v-icon>
          ประกาศ
        </h1>

        <!-- design a chat ui -->
        <v-card class="elevation-0 annouce-card rounded-lg mt-3">
          <v-card-text v-for="(item, index) in items" :key="index">
            <v-row>
              <v-col cols="2">
                <v-img :src="item.prependAvatar" width="50px" class="rounded-circle"></v-img>
              </v-col>
              <v-col cols="10" class="md-content">
                <h3 class="font-weight-bold mb-1">นาย สมชาย ใจดี</h3>
                <MdPreview v-model="item.subtitle" class="md-content" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { MdPreview } from "md-editor-v3";
export default {
  components: {
    MdPreview
  },
  data() {
    return {
      items: [
        {
          title: "Maythawat Mahawan",
          subtitle: "![](https://cdn.vuetifyjs.com/images/lists/ali.png)",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/ali.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
.strokeme {
  color: white;
  font-size: 60pt;
  position: absolute;
  bottom: -33px;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.annouce-card {
  max-height: 300px;
  overflow-y: scroll;
}
/* light scrollbar */
.annouce-card::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}
.annouce-card::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
.annouce-card::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
.md-content {
  margin: 0;
}
.md-content:deep() > * > * > * > img {
  width: 100% !important;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}
</style>
