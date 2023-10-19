<template>
  <div> 
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <filter id="grayscale">
        <feColorMatrix type="saturate" values="0.10"/>
      </filter>
    </svg>
    <div class="hover:scale-125 transform transition duration-200 p-1 inline-block" v-for="(item,index) in list" :key="index" @click.stop="selectReaction(item)" v-tooltip="item" :class="{'scale-150': isSelected(item) }">
      <component :is="`feedback-icons-${item}`" :width="size" :height="size" :disabled="!isSelected(item)"/>
    </div> 
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue';

export default {
  emits: ['update:reaction'],
  props: {
     size: {
        type: Number,
        default: 24,
     },
     value: {
     }
  },
  data: () => ({
    list: ['very-poor', 'poor', 'average', 'good', 'excellent' ],
  }),
  setup() {
      const app = getCurrentInstance().appContext.app
      const context = require.context('./Icons/', true, /\.vue$/i);
      const components = {};
      context.keys().map(key => {
        const name = key.match(/\w+/)[0];
        app.component(name, context(key).default);
      })
  },
  computed() {
  },
  methods: {
    isSelected(item) {
      return item==this.value
    },
    selectReaction(reaction) {
       console.log(reaction);
       this.$emit('update:reaction', reaction);        
    }
  }
}

</script>
