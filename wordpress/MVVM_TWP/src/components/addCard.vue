<template>
  <div id="id01" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <header class="container">
          <div class="closebtn" @mousedown="close">×</div>
          <h2>Please enter the name of the new card :</h2>
        </header>
        <div class="containerInput">
          <input class="text" type="text" v-model="nameCard"/>
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
  name: "AddCard",
  data() {
      return {
          nameCard: this.name,
      }
  },
  props: {
    id: Number,
  },
  // mounted (){
  //   this.identificate()
  // },
  methods: {
    // identificate() {
    //   fetch("http://wordpress.localhost/wp-json/jwt-auth/v1/token", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //       accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       username: "cedric",
    //       password: "sZr0X47Do5F#OpjL(s",
    //     }),
    //   })
    //     .then(function (response) {
    //       // console.log(response);
    //       return response.json();
    //     })
    //     .then(function (user) {
    //       localStorage.setItem("jwt", user.token);
    //     });
    // },
    close() {
      this.$emit("close");
    },
    valid() {
      this.$emit("valid", this.nameCard);
    },
  },
};
</script>

<style scoped>
.closebtn:hover,
.closebtn:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.closebtn {
  text-decoration: none;
  float: right;
  font-size: 35px;
  font-weight: bold;
  color: rgb(85, 131, 133);
}
header {
  background-color: rgb(144, 219, 221);
  font-size: 25px;
  color: rgb(85, 131, 133);
}
footer {
  display: flex;
  justify-content: space-around;
  background-color: rgb(144, 219, 221);
  font-size: 20px;
  color: rgb(85, 131, 133);
}
</style>
