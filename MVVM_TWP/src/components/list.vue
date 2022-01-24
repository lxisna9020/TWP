<template>
  <div class="list size320">
    <div class="titleList" @dblclick="CallEditList">
      {{ name }}
    </div>
    <draggable
      ghost-class="ghost"
      :list="cards"
      group="people"
      itemKey="name"
      item-key="name"
    >
      <template #item="{ element }">
        <Card
          :id="element.id"
          :name="element.title.rendered"
          @CallEditCard="CallEditCard"
        />
      </template>
    </draggable>
    <!-- <draggable v-model="items" @end="updateItemOrder" class="draggable">
      @end="updateItemParent(item)"
      ghost-class="ghost"
      :list="cards"
      group="people"
      itemKey="name"
      item-key="name" -->
    <div class="addCard">
      <div class="titleAddCard" @mousedown="CallAddCard">Add card</div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Card from "@/components/card";
// import AddCard from "@/components/addCard";

export default {
  name: "List",
  components: {
    Card,
    // AddCard,
    draggable,
  },
  data: function () {
    return {
      drag: false,
      // '--colorList': this.$store.state.colorList,
    };
  },
  props: {
    id: Number,
    name: String,
    cards: Array,
  },
  mounted() {
    // this.identificate()
    // this.$store.dispatch('getLists')
    // this.$store.dispatch('getCards')
    // this.$store.dispatch('getComments')
    // this.$store.dispatch('getCategory', "2")
    // this.$store.dispatch('getPost', "1")
    // this.$store.dispatch('getComment', "1")
    // this.$store.dispatch('updateCategory', {id:"2", newName:"new name cat"})
    // this.$store.dispatch('createCategory', "create cat")
  },
  computed: {
    // lists() {
    //   return this.$store.state.lists;
    // },
    // cards() {
    //   return this.$store.state.cards;
    // },
  },
  methods: {
    // updateItemParent(element){
    //   console.log(element)
    // },
    CallAddCard(){
      this.$emit("CallAddCard", this.id);
    },
    CallEditCard(idCard, name){
      this.$emit("CallEditCard", this.id, idCard, name);
    },
    CallEditList(){
      this.$emit("CallEditList", this.id, this.name);
    },
    log: function(evt) {
      console.log(evt);
    }
  }
};
// data: {
//     debounce: false,
// },
// methods: {
//     updateItemOrder: function() {
//         // get your info then
//         // this exists outside the debounce so the ui is updated for the user
//         var items = this.items.map(function(item, index) {
//             return { item: item, order: index }
//         })

//         // check if we are within the debounce time limit, do nothing
//         if(this.debounce) return
        
//         // debounce!
//         this.debounce = setTimeout(function(items) {
//             this.debounce = false 

//             // send it to your db
//             fetch(url, { ... })
//             .then(...)
//             .catch(err)
//         }.bind(this, items), 2000)
//         // because setTimeout has it's own function scope for this 
//         // we inject the components scope and our data with bind
//         // finally we set our debounce time in milliseconds
//     }
// }
</script>

<style>
.titleList {
  margin-bottom: 5px;
  padding: 5px 5px 5px 10px;
  font-size: 1.5em;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  /* border-bottom: 1px solid;
  border-color: rgba(141, 165, 165, 0.6); */
  /* background: linear-gradient(90deg, rgba(219, 254, 255, 0.6), rgba(255, 160, 176, 0)); */
}
.addCard {
  margin: 5px;
  height: auto;
  cursor: pointer;
  /* justify-self: flex-end; */
  /* border: 1px solid;
    border-radius: 5px;

    border-style: outset;
    border-width: 2px;
    border-color: rgba(204, 204, 255, 0.6);

    background-color:rgba(219, 254, 255, 0.6); */
}
.titleAddCard {
  padding: 5px;
  color: rgb(141, 115, 86);
}
</style>

<style scoped>
.list {
  display: flex;
  flex-flow: column;
  margin: 10px;
  /* width: 200px; */
  /* height: auto; */
  /* max-height: auto; */
  align-self: flex-start;

  box-shadow: 3px 3px 3px rgb(92, 92, 92);

  border: 1px solid;
  border-radius: 5px;

  border-style: outset;
  border-width: 2px;
  border-color: rgba(204, 204, 255, 0.6);

  background-color: rgb(255, 215, 166);
  /* background: linear-gradient(to left, transparent, mistyrose),
    url("../assets/plante2.jpg"),
    linear-gradient(rgba(204, 204, 255, 0.2), rgba(255, 160, 176, 0.2));
  background-position: right 0px bottom 0px; */
}
.ghost {
  box-shadow: 0px 0px 10px rgb(25, 0, 255);
}
</style>