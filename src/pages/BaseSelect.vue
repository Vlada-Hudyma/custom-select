<template>
  <div>
    <span class="selected-text">{{ currentText }}</span>
    <custom-select
        v-if="Users.length"
        :options="Users"
        :valueInput="defaultValue"
        v-on:change-select="getCurrentText"
    />
  </div>
</template>

<script>
import CustomSelect from "../components/CustomSelect";
import {mapGetters} from 'vuex';

export default {
  name: "BaseSelect",
  components: {CustomSelect},
  data() {
    return {
      text: 'Select Name',
      defaultValue: 'choose select',
      currentText: '',
    }
  },
  computed: {
    ...mapGetters({
      Users: 'getUsers',
    }),
  },
  methods: {
    getCurrentText(data) {
      this.currentText = data.option.name;
    }
  },
}
</script>

<style lang="scss">
.selected-text {
  margin-bottom: 6px;
  display: inline-block;
}
</style>
