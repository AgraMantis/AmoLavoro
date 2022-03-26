<template>
  <main>
       
      
    <h1>Storia</h1>
    <NuxtLink to="/about">
      
    </NuxtLink>
        <v-card
    class="mx-auto"
    height="50"
    width="256"
  >
          <v-btn block >
            <NuxtLink to="/inspire">Home page</NuxtLink>
            
          </v-btn>
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
<v-avatar size="64">
            
      <img
        
        src="https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/Square-Profile-Pic-1-2.jpg"
        
      >
    </v-avatar>
      <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
    
  </main>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },

        ],
      }
    },
  }
</script>