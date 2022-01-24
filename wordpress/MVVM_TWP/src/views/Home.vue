<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="hello" />
    <Button onClick="onClickNewCard" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store"; //引入store

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    onClickNewCard() {
      store.dispatch("addNewCard");
    },
  },
  created() {
    store.dispatch("loadCards");
  },
};
</script>
