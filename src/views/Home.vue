<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10">
          <ApiBackend />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ApiBackend from '@/components/ApiBackend'

export default {
  name: 'Home',
  components: {
    ApiBackend,
  },
  setup(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

</style>