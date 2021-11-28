
<template  >
  <div class="dark-mode app-them-color app-body" height="100vh">
    <div class="app-table-list">
      <v-row
        class="mb-12"
     
        v-for="j in justify"
        :key="j"
        :justify="j"
      >
        <v-col v-for="n in 20" :key="n">
          <v-card class="pa-4" elevation="2">
            <v-responsive>
              <v-img
                src="https://cdn-icons-png.flaticon.com/512/333/333521.png"
                height="90px"
                width="150px"
                class="ing-reponsive"
              ></v-img>
            </v-responsive>
            <v-card-text class="items-name">
              <div class="items-name">Table {{n}}</div>
           
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>


<script>
export default {
  name: "Table",
  data() {
    return {
        justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
    };
  },

  clearStore(state) {},
};
</script>
<style scoped>
.app-body {
  background-color: #303f47 !important;
  color: white !important;
  height: 90vh;
  width: 100%;
  padding: 8px;
}
.app-body .app-table-list {
  background-color: #243137;
  height: 89vh;
  width: 100%;
  border-radius: 15px;
  margin-top: -15px;
  padding: 8px;
    overflow: scroll;
}
</style>