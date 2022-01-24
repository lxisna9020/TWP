<template>
  <div class="card">
    <div class="titleCard" @dblclick="CallEditCard">
      {{ name }}
      <!-- name.replace('<p>', '') -->
    </div>
    <!-- <Comment 
      v-for="(comment, index) in listComments"
        :key="index"
        :id='comment.id'
        :comment='comment.listComments'
    /> -->
  </div>
</template>

<script>
// import Comment from '@/components/comment'

export default {
  name: 'Card',
  // components: {
  //     Comment,
  // },
  data: function () {
    return {
      drag: false,
    }
  },
  props: {
      id: Number,
      name: String,
      // listComments: Array,
  },
  methods: {
    CallEditCard(){
      this.$emit("CallEditCard", this.id, this.name);
    },
  }
}
</script>

<style>
.card {
    margin: 5px;
    height: 30px;
    
    border: 1px solid;
    border-radius: 5px;
    border-style: outset;
    border-width: 2px;
    border-color: rgba(204, 204, 255, 0.6);

    background-color:rgb(183, 239, 241);
}
.titleCard {
    padding: 5px;
    overflow: hidden;
    cursor: pointer;
}
</style>