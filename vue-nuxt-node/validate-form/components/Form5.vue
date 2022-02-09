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
        id="idDoElemento"
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
    <v-dialog
      v-model="dialog"
      absolute
      max-width="400"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-3">
          Legal
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            text
            @click="agreement = false, dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="deep-purple accent-4"
            @click="agreement = true, dialog = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      agreement: false,
      
    }),
    methods: {
      format () {
        let el = document.getElementById("idDoElemento");
        console.log("Test: ",el.innerHTML.bold);

      }
    }
  }
</script>