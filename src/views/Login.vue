<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark class="primary lighten-3">
                <v-toolbar-title>Login Account </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon=""
                    name="login"
                    label="Login"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon=""
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark class="primary lighten-3" @click="login()"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import router from "../router/index";
import store from "../store/index";
export default {
  name: "Login",
  props: {
    source: String,
  },
  data() {
    return {
       drawer: null,
      snackbar:false,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const payload = {
        username: this.username,
        password: this.password,
      };

      axios
        .post("http://localhost:8080/api/v1/users/login", payload)
        .then(function (response) {
          if (response.data) {
            localStorage.setItem("token", response.data.token);

            store.state.user=response.data;
            store.state.isLogin=true;
            store.state.layout='app-bar'
            store.state.token=response.data.token;
            store.commit
            router.push("/home");

          }
        })
        .catch(function (error) {
          localStorage.removeItem("token");
          console.log(error);
        });
    },
  },
    clearStore(state){
        Object.assign(state, defaultState())
    },

}
</script>

<style></style>
