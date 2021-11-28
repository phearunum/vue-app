
<template  >
  <v-sheet class="overflow-hidden app-them-color" style="position: relative">
    <div class="dark-mode">
      <v-app-bar
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        class="app-them-color app-header"
        height="45px"
      >
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          color="white"
        ></v-app-bar-nav-icon>
        APP

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <div v-if="table == null">
         <v-divider></v-divider>
        <Tables />
      </div>
      <div v-else>
        <div class="screen_menu">
          <Menu />
        </div>
        <div class="screen_order">
          <Order />
        </div>
      </div>
    </div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>App User </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>


<script>
import Order from "../views/sale/Order.vue";
import Menu from "../views/sale/Menu.vue";
import Table from "../views/sale/Table.vue";
import Navbar from "./sale/Navbar.vue";
export default {
  name: "Sale",
  components: {
    Order: Order,
    Menu: Menu,
    Tables: Table,
    Navbar: Navbar,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      drawer: false,
      table: null,
    };
  },

  clearStore(state) {},
};
</script>

<style>
.app-them-color {
  background-color: #303f47 !important;
  color: white !important;
}
.v-main__wrap {
  background-color: #303f47;
}
.v-slide-group__next,
.v-slide-group__prev {
  background-color: #d6d6d6;
  color: white !important;
  border-radius: 5px;
}
.app-header {
  width: 100%;
  padding: 4px;
  height: 50px;
  background-color: #303f47;
}
.app-header .app-logo {
  color: white;
  font-weight: bold;
  padding: 10px;
  float: left;
  width: 35%;
}
.app-header .app-logo-center {
  color: white;
  font-weight: bold;
  padding: 8px;
  float: left;
  font-size: 1rem;
  width: 30%;
  text-align: center;
}
.app-header .app-logo-right {
  color: white;
  font-weight: bold;
  padding: 8px;
  float: right;
  font-size: 1rem;
  width: 30%;
  text-align: right;
}

.app-logo-right .bi-person-bounding-box {
  font-size: 1.3rem;
}

.mx-auto {
  background-color: rgb(255, 255, 255) !important;
}

@media (min-width: 320px) {
  .screen_menu {
    width: 100%;
  }
  .screen_order {
    display: none;
  }
}

@media (min-width: 641px) {
  .screen_menu {
    width: 100%;
  }
  .screen_order {
    display: block;
  }
}
@media (min-width: 961px) {
  .screen_menu {
    width: 70%;
    float: left;
  }
  .screen_order {
    width: 30%;
    float: right;
  }
}
@media (min-width: 1025px) {
  .screen_menu {
    width: 70%;
    float: left;
  }
  .screen_order {
    width: 30%;
    float: right;
  }
}
@media (min-width: 1281px) {
  .screen_menu {
    width: 70%;
    float: left;
  }
  .screen_order {
    width: 30%;
    float: right;
  }
}
</style>
