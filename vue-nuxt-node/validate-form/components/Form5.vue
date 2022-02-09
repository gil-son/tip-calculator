<template>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
    
    
    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
      
      <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
      ></v-text-field>

      <v-textarea
        v-model="message"
        :rules="messageRules"
        auto-grow
        filled
        color="deep-purple"
        label="Message"
        rows="1"
        counter="250"
        id="idDoElemento"
      ></v-textarea>
      
      
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        text
        @click="$refs.form.reset()"
      >
        
        Clear
      </v-btn>
      <v-btn
        text
        @click="format()"
      >
        Format
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        
        depressed
      >
        Submit
      </v-btn>
    </v-card-actions>
    <div>
      <p><b>{{message}}</b></p>
    </div>
  </v-card>
  
</template>

<script>
  export default {
    data: () => ({
      message:'',
      agreement: false,
      
    }),
    methods: {
      format () {
        
      }
    }
  }
</script>
