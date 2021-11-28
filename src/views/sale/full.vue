
<template  >
  <div class="dark-mode">
    <div class="app-header">
      <div class="app-logo">
        <i class="bi bi-apple" style="font-size: 1rem"></i> APP
      </div>

      <div class="app-logo-center">Casheir</div>
      <div class="app-logo-right">
        <i class="bi bi-person-bounding-box"></i> Admin
      </div>
    </div>
    <div class="them-sale">
      <div class="header-sale">
        <v-sheet class="mx-auto" height="45px">
          <v-slide-group show-arrows height="60px">
            <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class="green white--text "
                @click="toggle"
                color="white"
                outlined
                height="43px"
                depressed
              >
                Options {{ n }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <v-responsive style="margin-top: 10px">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </div>
      <div class="menu-list">
        <div v-for="n in 50" :key="n">
          <v-card class="items-list" elevation="2">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              height="90px"
            ></v-img>
            <v-card-text class="items-name">
              <div class="items-name">Griled oyster</div>
              <v-card-actions>
                <v-btn
                  class="items-btn-order"
                  elevation="2"
                  rounded
                  small
                  style="float: right"
                >
                  <i class="bi bi-plus-circle"></i> Order</v-btn
                >
              </v-card-actions>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
    <div class="container-order">
      <div class="list-sale">
        <div class="lis-sale-header">
          <div style="float: left; font-weight: 600">#BN:0000000000 / T=01</div>
          <div style="float: right; color: orange; font-weight: 600">
            TAKEOUT
          </div>
        </div>
        <div class="list-sale-body">
          <div v-for="n in 10" :key="n">
            <div class="order-list" v-if="n % 2 == 0">
              <div class="qty">{{ n }}</div>
              <div class="items-name">Griled oyster</div>
              <div class="items-amount">$15.00</div>
            </div>
            <div
              class="order-list"
              v-else
              style="background-color: #243137 !important"
            >
              <div class="qty">{{ n }}</div>
              <div class="items-name">Griled oyster</div>
              <div class="items-amount">$15.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="list-sale-footer">
        <div class="sub-footer">
          <div class="total-lable">Sub Total :</div>
          <div class="total-amount">00.000</div>
          <div class="total-lable">Total :</div>
          <div class="total-amount">00.000</div>
        </div>

        <div class="sub-footer-btn" margin-top="10px">
          <v-btn
            depressed
            elevation="2"
            width="50%"
            block
            color="#B3E5FC"
            class="footer-btn"
            @click="dialog = true"
            ><i class="bi bi-credit-card" style="font-size: 1.5rem"></i>
            Payment</v-btn
          >
          <v-btn
            color="#FFFFFF"
            depressed
            elevation="2"
            width="50%"
            block
            class="footer-btn"
          >
            <i class="bi bi-printer" style="font-size: 1.5rem"></i>
            Print
          </v-btn>
          <v-btn
            color="#81C784"
            block
            elevation="2"
            width="50%"
            class="footer-btn"
          >
            <i class="bi bi-arrow-left-square" style="font-size: 1.5rem"></i>
            Hold
          </v-btn>
          <v-btn
            color="#FFAB91"
            block
            elevation="2"
            width="50%"
            class="footer-btn"
          >
            <i class="bi bi-gear" style="font-size: 1.5rem"></i>
            Setting
          </v-btn>
        </div>
      </div>
    </div>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        fullscreen
        height="70vh"
        color="red"
        hide-overlay
        style="left: 0"
      >
        <v-card class="app-them-color">
          <v-toolbar class="app-them-color">
            <v-btn icon dark @click="dialog = false">
              <i class="bi bi-arrow-left-circle" style="font-size: 2.5rem"></i>
            </v-btn>
            <v-toolbar-title>Payment</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import router from "../router/index";
import store from "../store/index";
export default {
  name: "Sale",
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
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
  background-color: #fff;
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
  width: 40%;
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
.them-sale {
  width: 100%;
  height: 100vh;
}

.them-sale {
  width: 70% !important;
  padding: 10px;
  border-radius: 10px;
  height: 94vh;
  float: left;
  background-color: #fff;
}
.mx-auto {
  background-color: rgb(187, 209, 248) !important;
}
.them-sale .header-sale {
  width: 100%;
  background-color: rgb(187, 209, 248) !important;
  height: 100px;
  border-radius: 4px;
  padding: 5px;
}
.them-sale .menu-list {
  width: 100%;
  max-height: 75vh;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
}
.menu-list .items-list {
  background-color: rgb(245, 238, 238);
  margin: 5px;
  padding: 10px;
  height: 200px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 4px;
  justify-content: center;
  width: 178px;
}
.items-list .items-name {
  font-size: 0.8rem;
  padding: 2px !important;
  height: 55px;
  line-height: 18px;
}
.items-list .items-btn-order {
  font-size: 0.8rem;
  float: left !important;
  text-align: left;
  background-color: orange !important;
  margin-left: -10px;
}
.container-order {
  width: 30%;
  padding: 10px;

  height: 93vh;
  float: right;
  background-color: #303f47;
  padding-top: 0px;
}
.container-order .list-sale {
  width: 100% !important;
  background-color: #303f47 !important;
  height: 65vh;
  float: right;
  border-radius: 4px;
}
.container-order .list-sale-footer {
  background-color: #2a3740 !important;
  height: 230px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 8px;
  clear: both;
  bottom: 0;
  position: absolute;
  width: 29%;
  right: 4px;
  margin: 4px auto;
}
.list-sale .lis-sale-header {
  width: 100%;
  height: 45px;
  padding: 10px;
  background-color: #243137;
  border-radius: 6px;
  color: white;
}
.list-sale-footer .sub-footer {
  width: 100% !important;
  background-color: #243137 !important;
  padding: 8px;
  float: right;
  border-radius: 8px;
  height: 80px;
  color: orange;
  line-height: 30px;
}
.sub-footer .total-lable {
  float: left;
  width: 40%;
}
.sub-footer .total-amount {
  float: right;
  width: 60%;
  font-weight: bold;
  text-align: right;
}
.list-sale-footer .sub-footer-btn {
  width: 100%;
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;
}
.sub-footer-btn .footer-btn {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 50px !important;
}
.list-sale .list-sale-body {
  width: 100%;

  background-color: #303f47 !important;
  border-radius: 15px;
}
.list-sale-body .order-list {
  width: 100%;
  min-height: 100px;
  display: flex;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;
  border-radius: 15px;
  background-color: #2a3740 !important;
  margin-top: 5px;
  padding: 8px;
  color: white;
  text-align: left;
}
.order-list .qty {
  width: 30px;
  height: 30px;
  background-color: #243137 !important;
  padding: 4px;
  border-radius: 30%;
  border: 1px solid #80deea;
  text-align: center;
  font-size: 1rem;
}
.order-list .items-name {
  font-size: 1rem;
  padding: 4px;
  width: 75%;
  padding-top: 3px;
}
.order-list .items-amount {
  font-size: 1.1rem;
  padding: 4px;
  padding-top: 3px;
  color: orange;
  font-weight: bold;
  text-align: right;
  float: right;
  right: 0;
  width: 25%;
}
@media only screen and (min-width: 320px) {
  .them-sale {
    display: none;
  }
  .container-order {
    width: 100% !important;
  }
  .container-order .list-sale-footer {
    background-color: #2a3740 !important;
    height: 230px;
    border-radius: 4px;
    margin-top: 5px;
    padding: 8px;
    clear: both;
    bottom: 0;
    position: absolute;
    width: 100%;
    right: 4px;
    margin: 4px auto;
  }
  .list-sale-body .order-list {
    width: 100%;
    min-height: 80px;
  }
  .order-list .items-amount {
    font-size: 1rem;
  }

  .list-sale-footer .sub-footer-btn {
    width: 100%;
    display: grid;
    grid-column-gap: 8px;
    grid-template-columns: auto auto;
  }
  .sub-footer-btn .footer-btn {
    margin-top: 8px;
    padding: 10px;
    width: 100%;
    height: 40px !important;
  }
  .container-order .list-sale-footer {
    background-color: #2a3740 !important;
    height: 190px;
    border-radius: 4px;
    margin-top: 5px;
    padding: 8px;
    clear: both;
    bottom: 0;
    position: absolute;
    width: 100%;
    right: 4px;
    margin: 4px auto;
  }
  .list-sale-body {
    height: 55vh;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .list-sale-body::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
}

/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
  .them-sale {
    display: block;
  }
  .container-order {
    width: 30% !important;
  }
  .container-order .list-sale-footer {
    background-color: #2a3740 !important;
    height: 230px;
    border-radius: 4px;
    margin-top: 5px;
    padding: 8px;
    clear: both;
    bottom: 0;
    position: absolute;
    width: 29%;
    right: 4px;
    margin: 4px auto;
  }
   .list-sale-body {
    height: 58vh;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .list-sale-body::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
}

/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
}

/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
}

/* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
}
</style>
