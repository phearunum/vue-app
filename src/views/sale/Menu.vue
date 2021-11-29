
<template  >
  <div class="dark-mode">
    <div class="them-sale">
      <div class="header-sale">
        <v-sheet class="mx-auto" height="45px">
          <v-slide-group show-arrows height="60px">
            <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
              <v-btn
                class="mx-2"
                :input-value="active"
                active-class="orange white--text "
                @click="toggle"
                color="primary"
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
          <div style="width: 100%; display: flex">
            <v-text-field
              dense
              filled
              hide-details
              rounded
              single-line
              label=" Search"
              append-icon="mdi-magnify"
              class="shrink mx-4 search-input"
            ></v-text-field>
            <div style="padding: 6px">
              <i class="bi bi-funnel" style="font-size: 1.5rem"></i>
            </div>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
              style="padding: 5px; float: right"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked
               @click="isGridView = true"
              />
              <label
                class="btn btn-outline-secondary"
                style="height: 30px"
                for="btnradio1"
                ><i class="bi bi-ui-checks-grid" style="font-size: 1rem"></i
              ></label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
                @click="isGridView = true"
              />
              <label
                class="btn btn-outline-secondary btn-sm"
                style="height: 30px"
                for="btnradio2"
                 @click="isGridView = false"
                ><i class="bi bi-ui-checks" style="font-size: 1rem"></i
              ></label>
            </div>
          </div>
        </v-responsive>
      </div>
      <div class="menu-list">
        <v-container class="grey lighten-5">
          <v-row class="mb-12" no-gutters v-if="isGridView">
            <v-col v-for="n in 20" :key="n">
              <v-card class="pa-3" elevation="2">
                <v-responsive>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    height="90px" width="150px"
                    class="ing-reponsive"
                  ></v-img>
                </v-responsive>
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
            </v-col>
          </v-row>
           <v-row class="mb-12" no-gutters  v-else>
            <v-col v-for="n in 20" :key="n">
              <v-card class="pa-4" elevation="2">
                <v-responsive>
               
                
                </v-responsive>
                <v-card-text class="items-name">
                  <div class="items-name">Griled oyster</div>
                  <v-card-actions>
                    <v-btn
                      class="items-btn-order"
                      elevation="2"
                      rounded
                      small
                      style="float: right"
                      @click="addToCart()"
                    >
                      <i class="bi bi-plus-circle"></i> Order</v-btn
                    >
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Menu",
  prop:["items"],
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      isGridView: true,
    };
  },
   methods:{
      addToCart(){
         this.$store.dispatch('addItemsToCart',{
             items:this.items,
             qty:1
         })
         console.log(1)
      }
  },

  clearStore(state) {},
};
</script>

<style>
.search-input {
  width: 70%;
}
.them-sale {
  width: 100%;
  height: 100vh;
}

.them-sale {
  width: 100% !important;
  padding: 10px;
  border-radius: 10px;
  height: 94vh;
  float: left;
  background-color: #ffffff42;
}
.mx-auto {
  background-color: rgb(255, 255, 255) !important;
}
.them-sale .header-sale {
  width: 100%;
  background-color: rgb(255, 255, 255) !important;
  height: 110px;
  border-radius: 4px;
  padding: 5px;
}
.them-sale .menu-list {
  width: 100%;
  max-height: 75vh;
  border-radius: 4px;
  margin-top: 10px;

  overflow: scroll;
}
.menu-list .items-list {
  background-color: rgb(245, 238, 238);
  margin: 5px;
  padding: 10px;
  height: 190px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 4px;
  justify-content: center;
  width: 160px;
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
  background-color: white !important;
  margin-left: -10px;
}
</style>
