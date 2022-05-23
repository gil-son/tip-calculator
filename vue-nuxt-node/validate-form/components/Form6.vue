<template> <!-- https://programandosolucoes.dev.br/2020/07/18/quill-editor-vuejs/ -->
  <div class="theClass">
      <input type="checkbox" id="checkbox" v-model="checked" />
	<label for="checkbox">{{ checked }}</label>
  </div>
</template>



<script>
export default {
  name: 'theClass',
  data() {
    return {
      checked: "aaa"
    }
  },
 
  methods: {
    saveText(){
      localStorage.setItem('content', this.contentHtml)
    }
  },
}
 
</script>
<style scoped>
.buttonSave{
  background-color: blue;
  width: 60px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid blue;
  color: white;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
 
.quillEditor {
  width: 60%;
  display: flex;
  flex-direction: column;
}
 
.quillEditorContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}
 
</style>