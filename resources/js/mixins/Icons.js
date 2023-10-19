export default {
   props: [ 'disabled' ],
   computed: {
      filter() {
        return this.disabled?'url(#grayscale)':'';
      }
   }
}
