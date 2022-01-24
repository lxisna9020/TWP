<!--
 - détails deroulé avec un clique souris
 - text tronqué ou à la ligne si déroulé
-->
<template>
  <div class="comment">
      <div>{{ comment }}</div>
      <!-- <div>{{ obj.details }}</div> -->
  </div>
</template>

<script>
export default {
    name: 'Comment',
    props: {
        id: String,
        comment: String,
    },
}
</script>

<style>
.comment {
    /* outside */
    margin: 5px;
    /* box */
    width: auto;
    height: 30px;
    border: 1px solid;
    background-color: chocolate;
}
</style>