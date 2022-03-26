<template>
  <main>
    
      <v-container>
    <v-row justify="space-around">
      <div>
        <v-btn
          class="mx-1"
          color="primary"
          @click="messages++"
        >
          Send Message
        </v-btn>

        <v-btn
          class="mx-1"
          color="error"
          @click="messages = 0"
        >
          Clear Notifications
        </v-btn>
      </div>

      <v-badge
        :content="messages"
        :value="messages"
        color="red"
        overlap
      >
        <v-icon large>
          mdi-vuetify
        </v-icon>
      </v-badge>
    </v-row>
  </v-container>
    <h1>Home page</h1>
    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        messages: 0,
      }
    },
  }
</script>