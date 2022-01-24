<template>
  <div id="id01" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <header class="container">
          <div class="closebtn" @mousedown="closeComment">×</div>
          <h2>You can edit the comment :</h2>
        </header>
        <div class="containerInput">
          <textarea class="text" type="text" v-model="editContent" />
          <!-- <input class="text" type="text" v-model="editContent"/> -->
        </div>
        <footer class="container">
          <p class="closebtn" @mousedown="closeComment">Cancel</p>
          <p class="closebtn" @mousedown="deleteComment">Delete</p>
          <p class="closebtn" @mousedown="validComment">Valid</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditComment",
  data() {
    return {
      editContent: this.content,
    };
  },
  props: {
    id: Number,
    content: String,
  },
  methods: {
    closeComment() {
      this.$emit("closeComment");
    },
    deleteComment() {
      this.$emit("deleteComment", this.id);
    },
    validComment() {
      this.$emit("validComment", this.id, this.editContent);
    },
  },
};
</script>

<style scoped>
/* Décrire l'animation */
@keyframes slideDownFadeIN {
  from {
    top: -100px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}
/* Foncer l'arrière-plan de la fenêtre modale */
.modal {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* background-color: rgb(0, 0, 0); */
  background-color: rgba(0, 0, 0, 0.4);
}
/* la fenêtre modale  */
.modal-dialog {
  position: absolute;
  width: 100%;
  top: 20%;
  /* display: table-cell;
  vertical-align: middle; */
}
/* Le contenu de la modale */
.modal-dialog .modal-content {
  margin: auto;
  background-color: #f3f3f3;
  position: relative;
  padding: 0;
  outline: 0;
  border: 1px #777 solid;
  text-align: justify;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  animation-name: slideDownFadeIN;
  animation-duration: 0.5s;
}
/* Bouton servant à fermer la fenêtre modale */
.closebtn:hover,
.closebtn:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.container {
  padding: 2px 16px;
}
.containerInput {
  padding: 2px 16px;
}
.text {
  padding: none;
  width: 100%;
  height: 200px;
  min-width: 100%;
  min-height: 40px;
  max-width: 100%;
  max-height: 200px;
  border: none;
  font-size: 30px;
  font-weight: bold;
  /* border: none; */
  background-color: transparent;
}
.closebtn {
  text-decoration: none;
  float: right;
  font-size: 35px;
  font-weight: bold;
  color: rgb(94, 104, 124);
}
header {
  background-color: rgb(183, 203, 241);
  font-size: 25px;
  color: rgb(94, 104, 124);
}
footer {
  display: flex;
  justify-content: space-around;
  background-color: rgb(183, 203, 241);
  font-size: 20px;
  color: rgb(94, 104, 124);
}
</style>