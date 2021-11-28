
<template  >
  <div class="dark-mode">
    <div class="container-order">
      <div class="list-sale">
        <div class="lis-sale-header">
          <div style="float: left; font-weight: 600">#BN:0000000000 / T=01</div>
          <div style="float: right; color: orange; font-weight: 600">
            TAKEOUT
          </div>
        </div>
        <div class="list-sale-body" style="margin-top: 10px">
          <div v-for="n in 10" :key="n">
            <div class="order-list" v-if="n % 2 == 1">
              <div class="qty">{{ n }}</div>
              <div class="items-name">Griled oyster</div>
              <div class="items-amount" >
                ${{ 15.0 }}
              </div>
            </div>
            <div
              class="order-list"
              v-else
              style="background-color: #243137 !important"
            >
              <div class="qty">{{ n }}</div>
              <div class="items-name">Griled oyster</div>
              <div class="items-amount">${{ 15.0 }}</div>
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
export default {
  name: "Order",

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

<style >
.container-order {
  width: 100%;
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
  border-radius: 4px;
}
.list-sale-body {
  height: 50vh;
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
.container-order .list-sale-footer {
  background-color: #2a3740 !important;
  height: 230px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 8px;
  clear: both;
  bottom: 0;

  width: 100%;
  right: 4px;
  margin: 4px auto;
}
.list-sale .lis-sale-header {
  width: 100%;
  height: 85px;
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

  background-color: #2a3740 !important;
  border-radius: 15px;
}
.list-sale-body .order-list {
  width: 100%;
  min-height: 60px;
  display: flex;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;

  background-color: #2a3740 !important;

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
</style>
