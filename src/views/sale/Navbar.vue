<template  >
 <div>
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
 </div>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
    };
  },

  clearStore(state) {},
};
</script>