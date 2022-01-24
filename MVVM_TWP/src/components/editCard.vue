<template>
  <div id="id01" class="modal">
    <EditComment
      v-if="modeEditComment"
      :id="this.idUpdate"
      :content="this.contentOld"
      @closeComment="EmitCloseEditComment"
      @deleteComment="EmitDeleteEditComment"
      @validComment="EmitValidEditComment"
    />
    <div class="modal-dialog">
      <div class="modal-content">
        <header class="container">
          <div class="closebtn quit" @mousedown="closeCard">×</div>
          <div class="containerCardList">
            <div class="containerNameCard">
              <div class="labelNameCard">Card :</div>
              <input class="inputCardList" type="text" v-model="nameCard" />
            </div>
            <div class="containerNameList">
              <div class="labelNameCard">List :</div>
              <select class="inputCardList" name="lists" v-model="selectOption">
                <option 
                  v-for="list in lists"
                  :key="list.id"
                  :value="list.id"
                >
                  {{ list.name }}
                </option>
              </select>
            </div>
          </div>
        </header>
        <div class="containerComments">
          <div class="containerCommentsDB"
            v-for="(comment, index) in comments"
            :key="index"
            @mousedown="callEditComment(comment.id, comment.content.rendered.replace('<p>', '').replace('</p>', ''))"
          >
            <div class="commentsAuthorTime">
              {{ "ajouté par " + comment.author_name + " le " + comment.date.replace('T', ' ') }}
            </div>
            <div class="commentsBlock">
              {{ comment.content.rendered.replace('<p>', '').replace('</p>', '') }}
            </div>
          </div>
          <div>
            <input
              class="inputNewComment"
              type="text"
              v-on:keyup.enter="addComment()"
              v-model="content"
              placeholder="new comment..."
            />
          </div>
        </div>
        <footer class="container">
          <p class="closebtn" @mousedown="closeCard">Cancel</p>
          <p class="closebtn" @mousedown="deleteCard">Delete</p>
          <p class="closebtn" @mousedown="EmitValidCard">Valid</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import EditComment from "@/components/editComment";
export default {
  name: "EditCard",
  components: {
    EditComment,
  },
  data() {
    return {
      nameCard: this.name,
      content: "",
      modeEditComment: false,
      idUpdate: Number,
      contentOld: String,
      selectOption: this.idParent,
    };
  },
  props: {
    idParent: Number,
    idCard: Number,
    name: String,
  },
  mounted() {
    this.$store.dispatch("getComments");
  },
  computed: {
    comments() {
      return this.$store.state.comments.filter((comment) => comment.post == this.idCard);
    },
    lists() {
      return this.$store.state.lists.filter((list) => list.id != "1");
    },
  },
  methods: {
    /*
        COMMENT UPDATE
    */
    callEditComment(id, content) {
      this.modeEditComment = true;
      this.idUpdate = id;
      this.contentOld = content;
    },
    EmitCloseEditComment() {
      this.modeEditComment = false;
    },
    EmitValidEditComment(id, content) {
      this.EmitCloseEditComment();
      this.$store.dispatch("updateComment", { id: id, content: content });
    },
    /*
        COMMENT DELETE
    */
    EmitDeleteEditComment(id) {
      this.EmitCloseEditComment();
      this.$store.dispatch("deleteComment", id);
    },
    /*
        COMMENT ADD
    */
    addComment() {
      if (this.content.length > 0) {
        this.$store.dispatch("addComment", {
          idParent: this.idCard,
          content: this.content,
        });
        this.content = "";
      } else {
        console.log("Erreur : comment empty !");
      }
    },
    /*
        ACTION WINDOW CARD
    */
    closeCard() {
      this.$emit("closeCard");
    },
    deleteCard() {
      this.$emit("deleteCard", this.idCard);
    },
    EmitValidCard() {
      // console.log("EditCard...Valid...idParent:"+this.selectOption+" idCard:"+this.idCard+" nameCard:"+this.nameCard)
      this.$emit("validCard", this.selectOption, this.idCard, this.nameCard);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 2px 16px;
}
.modal-dialog {
  position: absolute;
  width: 100%;
  top: 30%;
}
.containerNameCard{
  flex: 2;
}
.containerNameList{
  flex: 1;
}
.inputCardList{
  height: 50px;
  padding: none;
  padding-left: 10px;
  width: 94%;
  border: none;
  font-size: 30px;
  margin-bottom: 15px;
  background-color: white;
}
.inputNameCard {
  height: 50px;
  padding: none;
  padding-left: 10px;
  width: 100%;
  border: none;
  font-size: 35px;
  background-color: white;
}
.selectList{
  font-size: 35px;
  height: 50px;
  width: 100%;
  padding: none;
  padding-left: 10px;
  border: none;
  background-color: white;
}
.inputNewComment {
  margin: 10px;
  font-size: 20px;
  padding: 10px;
  width: 93%;
  border: none;
}
.containerComments {
  display: flex;
  flex-flow: column;
  margin: 5px;
}
.commentsBlock{
  margin: 3px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 5px;
  border-style: outset;
  border-width: 2px;
  padding: 5px;
  background-color: rgb(183, 203, 241);
}
.commentsAuthorTime{
  margin: 5px;
  /* min-width: 90px;
  max-width: 90px; */
}
.containerCommentsDB {
  display: column;
  flex-flow: row;
}
.labelNameCard {
  width: 230px;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}
.closebtn:hover,
.closebtn:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.closebtn {
  text-decoration: none;
  float: right;
  font-size: 30px;
  font-weight: bold;
  color: rgb(85, 131, 133);
}
.quit {
  margin-left: 20px;
}
header {
  background-color: rgb(144, 219, 221);
  font-size: 20px;
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