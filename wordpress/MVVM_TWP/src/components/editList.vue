<template>
  <div id="id01" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <header class="container">
          <div class="closebtn" @mousedown="close">×</div>
          <h2>Please enter the new name of the list :</h2>
        </header>
        <div class="containerInput">
          <input class="text" type="text" v-model="nameList"/>
        </div>
        <footer class="container">
          <p class="closebtn" @mousedown="close">Cancel</p>
          <p class="closebtn" @mousedown="del">Delete</p>
          <p class="closebtn" @mousedown="valid">Valid</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditList",
  data() {
      return {
          nameList: this.name,
      }
  },
  props: {
    id: Number,
    name: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
    del() {
      this.$emit("delete", this.id);
    },
    valid() {
      this.$emit("valid", this.id, this.nameList);
    },
  },
};
</script>
