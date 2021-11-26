    <template >
  <v-app>
    <div id="inspire" v-if="$route.meta.auth">
      <v-navigation-drawer v-model="drawer" app dark class="primary lighten-3">
        <v-list-item>
          <v-list-item-content dark color="primary">
            <v-list-item-title class="text-h6" dark color="primary">
              IG GROUP
            </v-list-item-title>
            <v-list-item-subtitle> Business Solution </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
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
        <router-view></router-view>
      </v-main>
    </div>
    <div v-if="!$route.meta.auth">
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  
  </v-app>
</template>

<script>
import store from "./store/index";
import route from "./router";
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/home" },
      { title: "Sale", icon: "mdi-view-dashboard", to: "/sale" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
      { title: "Logout", icon: "mdi-arrow", to: "/login" },
    ],
  }),
  computed: {
    getStatusLogin: function () {
      return store.state.isLogin;
    },
  },
};
</script>




<style></style>
