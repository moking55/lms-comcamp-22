<template>
  <v-container class="animate__animated animate__fadeIn">
    <div class="d-flex justify-space-between align-center mt-5">
      <h1>อยากกินบะหมีเกี๊ยว</h1>
      <div>
        <small class="me-2">
          <v-icon>mdi-calendar-blank-outline</v-icon>
          กำหนดส่ง: 2021-01-31
        </small>
        <v-btn
          :disabled="isFetching"
          :class="isSubmitted ? 'bg-success' : 'bg-primary'"
          @click="submit"
        >
          {{ isSubmitted ? "ส่งแล้ว" : "ส่งงาน" }}
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>

    <v-row class="mt-3">
      <v-col cols="12" lg="8">
        <MdPreview v-model="instruction" />
      </v-col>
      <v-col cols="12" lg="4">
        <h3>สิ่งที่แนบ</h3>
        <v-textarea label="ใส่คำอธิบาย (ใส่หรือไม่ก็ได้)"></v-textarea>
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
      instruction: "# $E = mc^2$ \n พี่อยากเป็นสปายเด้อแมน",
      isSubmitted: false,
      isFetching: false
    };
  },
  methods: {
    submit() {
      // disable button
      this.isFetching = true;
      this.$emit("fetching", this.isFetching);
      // delay 5 seconds
      setTimeout(() => {
        this.$confetti.start({
          defaultDropRate: 6,
        });
        this.isSubmitted = true;
        this.isFetching = false;
        this.$emit("fetching", this.isFetching);
        setTimeout(() => {
          this.$confetti.stop();
        }, 2000);
      }, 3000);
    }
  }
};
</script>
<style></style>
