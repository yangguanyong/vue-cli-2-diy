<template>
  <div class="aaa">
    aaa
    <div class="text">{{ keyword }}</div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: [5, 3, 4, 7, 6, 8, 9]
    }
  },
  mounted () {
    // this.set1()
  },
  methods: {
    set1 () {
      setInterval(() => {
        console.log('1')
        setTimeout(() => {
          console.log('2')
        }, 500)
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.aaa {
  .text {
    color: red;
  }
}
</style>
