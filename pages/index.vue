<template>
  <div>
    <topbar />
    <v-form v-model="valid">
    <v-container>
    <v-card class="mx-auto" max-width="360" min-width="360" outlined>
      <v-list-item> 
        <v-btn
          v-for="(item, index) in menu"
          :key="index"
          tile
          dense
          color=item.color
        >
        <v-icon left>
          {{ item.icon }}
        </v-icon>
          {{ item.title }}
        </v-btn>
      </v-list-item>
      <v-list-item color="lightgrey"> test </v-list-item>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> Button </v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
    </v-form>
  </div>
</template>

<script>
import Topbar from "~/components/topbar.vue";

export default {
  data() {
    return {
      menu: [{ title: "save", icon: "mdi-floppy", color: "success" }, { title: "cancel" , icon: "mdi-delete", color: "success" }, { title: "close" , icon: "mdi-stop", color: "success"}],
    };
  },
  components: {
    topbar: Topbar,
  },
  methods: {
   reset () {
     this.$refs.form.resetValidation()
   }
  },
};

</script>

<style>
</style>