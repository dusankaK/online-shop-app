<template>
<div class="container mt-5">
    <Search @search-term-changed="onSearchTermChanged"/>
        <h1 class="text-center mt-4 my-4">All Managers</h1>
            <div class="row">
                <div class="card col-md-4" v-for="(manager,index) in managers" :key="index">
                  <img :src="manager.image_url" class="card-img-top" alt="Manager picture">
                    <div class="card-body">
                      <a class="nav-link">{{manager.first_name + ' ' + manager.last_name}}</a>
                    </div>
                </div> 
            </div>
  </div>
</template>

<script>
import Search from './Search'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    Search
  },
  computed: {
    ...mapGetters({
        managers: 'managers'
    }),
  },
  methods: {
    ...mapActions({
      fetchManagers: 'fetchManagers',
    }),
    // navigateToSingleManager(id) {
    //   this.$router.push({
    //     name: 'manager',
    //     params: {id}
    //   })
    // },
    // navigateToSingleShop(id) {
    //   this.$router.push({
    //     name: 'shop',
    //     params: {id}
    //   })
    // },
    onSearchTermChanged(term) {
      this.fetchManagers(term)
    },
    // navigateToAddManager() {
    //   this.$router.push({
    //     name: 'addManager'
    //   })
    // }
  },
  beforeRouteEnter(to,from,next) {
    next(vm => vm.fetchManagers())
  }
}
</script>
<style>
</style>