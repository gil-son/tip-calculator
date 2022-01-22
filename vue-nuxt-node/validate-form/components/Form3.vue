<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    

     <v-text-field
      v-model="cnpj"
      :counter="15"   
      label="CNPJ"
      :rules="cnpjRules"
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="checkboxRules"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="buttonValidate"
    >
      Validate
    </v-btn>

  </v-form>
</template>

<script>
export default {
  name: 'Form3',
  data: () => ({
      valid: true,
      
      cnpjRules:[],
      cnpjRulesValid:[v => !!v || 'CNPJ is required'],
      checkboxRules:[],
      checkboxRulesValid:[v => !!v || 'You must agree to continue!'],
      select: null,
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate();
      },
        buttonValidate (){
            this.cnpjRules = this.cnpjRulesValid;
            
            
            this.checkboxRules = this.checkboxRulesValid;
            
            this.$refs.form.validate();
      }
    },
  }
</script>