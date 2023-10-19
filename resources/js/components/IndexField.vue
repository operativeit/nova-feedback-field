<template>
  <Reaction :value="value" @update:reaction="handleUpdate"/>
</template>

<script>
import Reaction from './Reaction';

export default {
  components: { Reaction },
  props: ['resourceName', 'field'],
  data: () => ({
    value : 'good',
  }),  
  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  },
  methods: {
    handleUpdate(value) {
        this.value = value;
    }
  }
}
</script>
