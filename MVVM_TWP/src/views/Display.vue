<template>
  <div id="nav">
    <div class="addListHover" @mousedown="CallAddList()">Add list</div>
  </div>
  <div class="register">
    <div v-if="username.length > 0">
      Bienvenu {{ username }}
    </div>
    <div v-else>
      LOGIN
    </div>
  </div>
  <AddList
    v-if="modeAddList"
    @close="EmitCloseAddList"
    @valid="EmitValidAddList"
  />
  <AddCard
    v-if="modeAddCard"
    :id="this.idParent"
    @close="EmitCloseAddCard"
    @valid="EmitValidAddCard"
  />
  <EditList
    v-if="modeEditList"
    :id="this.idParent"
    :name="this.nameOld"
    @close="EmitCloseEditList"
    @delete="EmitDeleteEditList"
    @valid="EmitValidEditList"
  />
  <EditCard
    v-if="modeEditCard"
    :idParent="this.idParent"
    :idCard="this.idCard"
    :name="this.nameOld"
    @closeCard="EmitCloseEditCard"
    @deleteCard="EmitDeleteEditCard"
    @validCard="EmitValidEditCard"
  />
  <div class="mainResponsive backgroundLists"> <!-------- Content : Responsive ON (1440px, 768px, 320px) ---------->
    <draggable
      class="display"
      ghost-class="ghost"
      :list="lists"
      :disabled="!enabled"
      item-key="name"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
        <List
          v-if="element.id != '1'"
          :id="element.id"
          :name="element.name"
          :cards="listCards(element.id)"
          @CallEditList="CallEditList"
          @CallAddCard="CallAddCard"
          @CallEditCard="CallEditCard"
        />
      </template>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import AddList from "@/components/addList";
import EditList from "@/components/editList";
import AddCard from "@/components/addCard";
import EditCard from "@/components/editCard";
import List from "@/components/list";
// import store from "@/store"; //引入store

export default {
  name: "Display",
  components: {
    List,
    draggable,
    AddList,
    AddCard,
    EditList,
    EditCard,
  },
  data: function () {
    return {
      enabled: true,
      dragging: false,
      modeAddList: false,
      modeAddCard: false,
      modeEditCard: false,
      idParent: Number,
      idCard: Number,
      nameOld: String,
      modeEditList: false,
    };
  },
  mounted() {
    this.identificate();
    this.$store.dispatch("getLists");
    this.$store.dispatch("getCards");
    // this.$store.dispatch('getComments')
    // this.$store.dispatch('getCategory', "2")
    // this.$store.dispatch('getPost', "1")
    // this.$store.dispatch('getComment', "1")
    // this.$store.dispatch('updateCategory', {id:"2", newName:"new name cat"})
    // this.$store.dispatch('createCategory', "create cat")
  },
  computed: {
    lists() {
      // return this.$store.getters.getLists;
      return this.$store.state.lists;
    },
    username() {
      return this.$store.state.username;
    }
    // cards() {
    //   return this.$store.state.cards;
    // },
  },
  beforeMount() {
    // store.dispatch("loadList");
    // store.dispatch("loadCards");
    // this.console();
  },
  methods: {
    //#region LISTS
    /*
        LIST ADD
    */
    CallAddList() {
      this.modeAddList = true;
    },
    EmitCloseAddList() {
      this.modeAddList = false;
    },
    EmitValidAddList(nameList) {
      this.EmitCloseAddList();
      this.$store.dispatch("addList", nameList);
      this.$router.push('/');
    },
    /*
        LIST UPDATE
    */
    CallEditList(id, name){
      this.idParent = id;
      this.nameOld = name;
      this.modeEditList = true;
    },
    EmitCloseEditList(){
      this.modeEditList = false;
    },
    EmitValidEditList(id, name){
      this.EmitCloseEditList();
      this.$store.dispatch("updateList", {'id':id, 'name':name});
    },
    /*
        LIST DELETE
    */
    EmitDeleteEditList(id){
      this.EmitCloseEditList();
      this.$store.dispatch("deleteList", id);
    },
    /*
        CARDS ADD
    */
    CallAddCard(id){
      this.idParent = id;
      this.modeAddCard = true;
    },
    EmitCloseAddCard() {
      this.modeAddCard = false;
    },
    EmitValidAddCard(nameCard) {
      this.EmitCloseAddCard();
      // console.log("id:" + this.idParent + " name:" + nameCard);
      this.$store.dispatch("addCard", {'idParent':this.idParent, 'name':nameCard});
      // this.$store.dispatch("addCard", nameCard);
    },
    /*
        CARD UPDATE
    */
    CallEditCard(idParent, idCard, name){
      this.idParent = idParent;
      this.idCard = idCard;
      this.nameOld = name;
      this.modeEditCard = true;
    },
    EmitCloseEditCard(){
      this.modeEditCard = false;
    },
    EmitValidEditCard(idParent, idCard, name){
      this.EmitCloseEditCard();
      // console.log("id:"+id+" name:"+name)
      this.$store.dispatch("updateCard", {'idParent':idParent, 'idCard':idCard, 'name':name});
    },
    /*
        CARD DELETE
    */
    EmitDeleteEditCard(id){
      this.EmitCloseEditCard();
      this.$store.dispatch("deleteCard", id);
    },
    //#endregion
    /*
        GET CARDS FROM A LIST
    */
    listCards(categoryId) {
      var cards = this.$store.state.cards || [];
      return cards.filter((card) => card.categories[0] == categoryId);
    },
    /*
        TOKEN
    */
    identificate() {
      fetch("http://wordpress.localhost/wp-json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          username: "cedric",
          password: "sZr0X47Do5F#OpjL(s",
        }),
      })
        .then(function (response) {
          // console.log(response);
          return response.json();
        })
        .then(function (user) {
          localStorage.setItem("jwt", user.token);
        });
    },
    /*
        DEBUG
    */
    console() {
      console.log("Display list:");
      console.log(this.listElements);
    },
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  flex-flow: row;
  justify-content: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  /* padding: 30px; */
  background-color: rgba(69, 66, 255, 0.5);
  margin-bottom: 10px;
}
.register{
  position: absolute;
  top: 20px;
  right: 60px;
  margin-bottom: 5px;
  padding: 5px;
  font-size: 1.3em;
  text-align: center;
  cursor: pointer;
}
.register:hover{
  border-radius: 5px;
  border-color: rgba(204, 204, 255, 0.6);
  background-color: rgb(255, 215, 166);
}
.ghost {
  box-shadow: 0px 0px 15px rgb(255, 255, 255);
}
.addListHover{
  margin-bottom: 5px;
  padding: 5px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
}
.addListHover:hover{
  /* border: 1px solid; */
  border-radius: 5px;

  /* border-style: outset;
  border-width: 2px; */
  border-color: rgba(204, 204, 255, 0.6);

  background-color: rgb(255, 215, 166);
}
.backgroundLists {
  height: 100%;
  background: linear-gradient(rgba(69, 66, 255, 0.5), rgba(154, 194, 255, 0.5));
}
</style>