<template>
  <div class="container">
    <div class="col-12">

      <br />
      <div class="row">
        <center>
        <div class="col-3">
          <img
            src="https://bahmansport.com/media/com_store/images/empty.png"
            class="rounded float-start"
            width="200px"
            height="200px"
          />
        </div>
        </center>
      </div>
       <br />
      <div class="row">

        <div class="col-11 d-flex justify-content-center">
          <button type="button" class="btn btn-light">เพิ่มรูป +</button>
        </div>

      </div>
      <br>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Title"
          v-model="title"
        />
        <label for="floatingInput">Product Name</label>
      </div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          style="height: 160px;"
          v-model="description"
        ></textarea>
        <label for="floatingTextarea">Description</label>
      </div>
      <br />
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Title"
          v-model="price"
        />
        <label for="floatingInput">Price</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="Title"
          v-model="quantity"
        />
        <label for="floatingInput">Quantity</label>
      </div>
      <br />
      <div class="row">
        <div class="col-6 d-flex justify-content-end" >
          <button type="button" class="btn btn-info" @click="create()">
            CreateProduct
          </button>
        </div>
        <div class="col-6 d-flex justify-content-start">
          <button type="button" class="btn btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '',
      description: '',
      pic:'',
      price:0,
      quantity:0
    }
  },
  methods: {
    create() {
      axios
        .post('http://localhost:3000/product', {
          title: this.title,
          price: this.price,
          description: this.description,
          quantity: this.quantity,
        })
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped></style>
