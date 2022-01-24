<template>
  <div class="wallpaper">
    <router-view />
  </div>
</template>

<style>
.wallpaper {
  position: fixed;
  top: 0;
  left: 0;
  /* background-image: url("./assets/plage2.jpg"); */
  /* background-repeat: round; */
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 160, 176, 0), rgb(122, 201, 202));
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*------------------ Responsive ----------------*/
@media screen and (min-width: 320px) {
  /*------------------ Main ------------------*/
  .mainResponsive {
    width: 315px;
    margin-left: auto;
    margin-right: auto;
  }
  .display {
    display: flex;
    flex-flow: column;
  }
  .size320 {
    /* width: auto; */
    width: 285px;
  }
  .containerCardList {
    display: flex;
    flex-flow: column;
  }
}
@media screen and (min-width: 768px) {
  /*------------------ Main ------------------*/
  .mainResponsive {
    width: 750px;
  }
  .display {
    display: flex;
    flex-flow: row wrap;
  }
  .size320 {
    width: 250px;
  }
  .containerCardList {
    display: flex;
    flex-flow: row;
  }
}
@media screen and (min-width: 1440px) {
  /*------------------ Main ------------------*/
  .mainResponsive {
    width: 1440px;
  }
}
</style>
