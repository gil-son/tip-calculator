<template> <!-- https://programandosolucoes.dev.br/2020/07/18/quill-editor-vuejs/ -->
  <div class="theClass">
      ->
      <select v-model="optionsData"
      :options="optionsData"
      @change="hideshowdiv"
      >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="Outros">Outros</option>
      </select>
      <div v-show="opcao.value == 'Outros' "  value="C"  class="theInput">
      Outros:
      <input type="text"/>
    </div>
  </div>
  
</template>



<script>
export default {
  name: 'theClass',
  data: () => ({
    opcao: 
      { value: '' }
  }),
 
  methods: {
    hideshowdiv(value) {
    this.opcao.value = value.target.value;
    console.log("valor:",value.target.value)
    
    }
  },
}
 
</script>
<style scoped>


.theInput, input{
  background: rgb(218, 213, 213);
  border: solid blue;
}


.theClass{
  background: gray;
}

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
