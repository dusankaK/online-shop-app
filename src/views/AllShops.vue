<template>
  <div class="container mt-5">
    <Search @search-term-changed="onSearchTermChanged"/>
        <h1 class="text-center mt-4 my-4">All Shops</h1>
            <div class="row">
                <div class="card col-md-4" v-for="shop in shops" :key="shop.id">
                  <img :src="shop.image_url" class="card-img-top" alt="shop picture">
                    <div class="card-body">
                        <h5 class="card-title"><strong>Shop name:</strong> {{ shop.name }}</h5>
                        <div v-if="shop.manager_id">
                          <p><strong>Manager of this shop:</strong>
                            {{shop.manager.first_name + ' ' + shop.manager.last_name}}</p>
                        </div>
                        <div v-else>This shop has no manager</div>
                    </div>
                </div> 
            </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import Search from './Search'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'shops',
  components: {
    Search
  },
  computed: {
    ...mapGetters({
      shops: 'shops',
    }),
  },
  methods: {
    ...mapActions({
      fetchShops: 'fetchShops',
    }),
    onSearchTermChanged(term) {
      this.fetchShops(term)
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchShops())
  }
}
</script>

<style>
.mt-5 {
  margin-top:6rem !important;
}
.card-img-top {
  width:60%;
  margin: 0 auto;
}
</style>