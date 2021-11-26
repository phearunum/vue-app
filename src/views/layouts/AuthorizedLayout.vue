<template>
  <v-app id="inspire">
   <v-navigation-drawer 
   v-model="drawer"
   app
   >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            IG GROUP
          </v-list-item-title>
          <v-list-item-subtitle>
            Business Solution
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
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
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
      <appfooter v-if="!['login', 'register'].includes($route.name)"/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' ,to:'/'},
          { title: 'Sale', icon: 'mdi-image' ,to:'/sale'},
          { title: 'About', icon: 'mdi-help-box', to:'/about'},
          { title: 'Logout', icon: 'mdi-arrow', to:'/login'},
        ],
    }),
  }
</script>