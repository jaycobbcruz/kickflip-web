<template>
  <div class="container">
    <b-form @submit.prevent="submit">
      <b-row align-h="end">
        <b-col class="text-right">
          <b-link :to="'/admin/products'">
            Back
          </b-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6">
          <b-form-group label="Name">
            <b-form-input type="text" v-model="entity.name" required />
          </b-form-group>
          <b-form-group label="Description">
            <b-form-textarea v-model="entity.description" />
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group label="Price">
            <b-form-input type="number" v-model="entity.price" step="any" required />
          </b-form-group>
          <b-form-group label="Quantity">
            <b-form-input type="number" v-model="entity.quantity" required />
          </b-form-group>
          <b-form-group label="Status">
            <b-form-select v-model="entity.status" :options="statuses" required />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="product.id">
        <b-col lg="6">
          <b-form-group label="Image">
            <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose file" />
            <b-btn type="button" @click="handleFileUpload" class="btn-upload">Upload</b-btn>
          </b-form-group>
        </b-col>
        <b-col v-if="imageUrl" lg="6">
          <b-img thumbnail fluid :src="imageUrl" alt="Product Image"></b-img>
        </b-col>
      </b-row>
      <b-btn type="submit">Save</b-btn>
    </b-form>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: "ProductForm",
  computed: {
    ...mapState('products', ['product']),
    ...mapState('options', ['statuses'])
  },
  data () {
    return {
      entity: {
        id: null,
        name: null,
        description: null,
        quantity: 0,
        price: 0,
        status: null
      },
      file: null,
      imageUrl: null
    }
  },
  watch: {
    entity: {
      handler: function (val) {
        this.merge(val)
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations('products', ['merge']),
    isUpdate () {
      return this.product.hasOwnProperty('id') && this.product.id
    },
    submit () {
      let action = 'products/' + (this.isUpdate() ? 'update' : 'create');
      this.$store.dispatch(action, this.product)
        .then(({data}) => {
          this.product.id = data.id
          this.$notify({text: 'Saving successful', type: 'success', group: 'alerts'})
          this.$router.push('/admin/products')
        })
        .catch((resp) => {
          this.$notify({title: 'Error', text: 'Saving failed', type: 'danger', group: 'alerts'})
        })
    },
    handleFileUpload () {
      const formData = new FormData()
      formData.append("file", this.file)
      this.$axios
        .post(`/api/files/product/${this.product.id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(() => {
          this.$bvToast.toast('File upload successful!', {
            title: 'File Upload',
            variant: 'success',
            solid: true
          })
          this.imageUrl = `${process.env.apiUrl}/files/product/${this.product.id}`
        })
        .catch(console.log)
    }
  },
  mounted () {
    this.entity = {...this.product}
    if (this.entity.id) {
      this.imageUrl = `${process.env.apiUrl}/files/product/${this.product.id}`
    }
  }
}
</script>
<style scoped>
  .btn-upload {
    margin-top: 5px;
  }
</style>