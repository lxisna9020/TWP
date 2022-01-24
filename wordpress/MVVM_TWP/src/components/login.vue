<template>
  <div id="id01" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <header class="container">
          <div class="closebtn" @mousedown="close">×</div>
          <h2>Please identify yourself :</h2>
        </header>
        <div class="containerUsername">
            <div>Xin</div>
            <div>Cédric</div>
        </div>
        <footer class="container">
          <p class="closebtn" @mousedown="close">Cancel</p>
          <p class="closebtn" @mousedown="valid">Valid</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddList",
  data() {
      return {
          nameList: "",
      }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    valid() {
      if(this.nameList.length > 0){
        this.$emit("valid", this.nameList);
      } else {
        console.log("name empty !")
      }
    },
  },
};
</script>

<style>
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
  top: 30%;
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
.containerInput{
  padding: 2px 16px;
}
.text{
  padding: none;
  width: 100%;
  border: none;
  font-size: 40px;
  font-weight: bold;
  /* border: none; */
  background-color: transparent;
}
.closebtn {
  text-decoration: none;
  float: right;
  font-size: 35px;
  font-weight: bold;
  color: rgb(129, 107, 81);
}
header {
  background-color: rgb(255, 215, 166);
  font-size: 25px;
  color: rgb(129, 107, 81);
}
footer {
  display: flex;
  justify-content: space-around;
  background-color: rgb(255, 215, 166);
  font-size: 20px;
  color: rgb(129, 107, 81);
}
</style>