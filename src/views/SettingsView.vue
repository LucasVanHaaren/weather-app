<template>
  <v-row class="mx-auto">
    <v-col :md="6" :sm="12" offset-md="3">
      <v-card class="mx-auto" outlined>
        <v-card-title>Unit</v-card-title>
        <v-card-actions>
           <v-radio-group row v-model="unit">
            <v-radio  label="Metric" value="metric"></v-radio>
            <v-radio label="Imperial" value="imperial"></v-radio>
          </v-radio-group>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'SettingsView',
  methods: {
  },
  computed: {
    unit: {
      get() {
        return this.$store.getters["unit"];
      },
      set(value) {
        this.$store.dispatch("setUnit", value);
      }
    },
    default_city: {
      get() {
        return this.$store.getters["default_city"];
      },
      set(value) {
        this.$store.dispatch("setDefaultCity", value);
      }
    },
  }
}
</script>
