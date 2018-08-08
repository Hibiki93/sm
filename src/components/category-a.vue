<template>
    <div class="container col-12">
        <div class="row justify-content-start">
            <div class="d-none d-md-block sidebar col-3 align-items-start">
                <b-dropdown-header>Popular Categories</b-dropdown-header>
                <b-dropdown-item-button class="btn-change7" @click="selectCategory" value='Tourism & Recreation' >Tourism & Recreation</b-dropdown-item-button>
                <router-link to="">
                <b-dropdown-item-button class="btn-change7" @click="selectCategory" value='Hotel'>Hotel</b-dropdown-item-button>
                </router-link>
                <b-dropdown-item-button class="btn-change7" @click="selectCategory" value='pp'>Popular Places</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7" @click="selectCategory" value='tb'>Travel Bureaus</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7" @click="selectCategory" value='cs'>Chauffeur Services</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7" @click="selectCategory" value='tbus'>Travel Bus</b-dropdown-item-button>
                
                <b-dropdown-item-button class="btn-change7">Luggage</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Boat Rental</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Apartment</b-dropdown-item-button>
            </div>
            <div class="col-9 row ">
                <div class="col-lg-6 col-md-6"
                    v-for="(product, index) in products"
                    v-bind:key="index"
                    >
                    <product-item
                    v-bind:name="product.name"
                    v-bind:id="product.id"
                    v-bind:photo="product.photo"
                    @click="handleClick"></product-item>
                </div>
                <div class="col-12 row text-center" style="margin-top:30px;" >
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/database/firebaseInit'
import productItem from "@/components/product-item";

export default {
    created(){
        db.collection('category').get().then
        (querySnapshot =>{
            querySnapshot.forEach(doc =>{
                    const data = {
                    'id':doc.id,
                    'name':doc.data().product_name,
                    'photo':doc.data().product_photo,
                    'category':doc.data().category,
                    'created':doc.data().created                
                }
                this.products.push(data)
            })
        })
    },
    data(){
        return{
            selectedCategory:'',
            products : []
        }
    },
  components: {
    productItem
  },
  methods:{
      selectCategory(e){
          console.log(e.target.value)
          this.products=[]
          db.collection('category').where('subCategory', '==', e.target.value).get().then
        (querySnapshot =>{
            querySnapshot.forEach(doc =>{
                    const data = {
                    'id':doc.id,
                    'name':doc.data().product_name,
                    'photo':doc.data().product_photo,
                    'category':doc.data().category,
                    'created':doc.data().created                
                }
                this.products.push(data)
            })
        })
        //   this.products=[],
        //     db.collection('category').where('subcategory', '==', 'Hotel').get()
        //     .then(querySnapshot =>{
        //     querySnapshot.forEach(doc =>{
        //          console.log(doc)
        //             this.id = doc.id,
        //             this.category = doc.category,
        //             this.name = doc.product_name,
        //             this.photo = doc.product_photo    
        //             })
        //         this.products.push(data)
        //     })
        }
  }
};
</script>

<style scoped>
#ddown-header {
  width: 100%;
  background-color: white;
}

.sidebar {
  background-color: #efefef;
}

.sidebar b-dropdown-item-button {
  background-color: #000000 !important;
}

.button {
  height: 100px;
  width: 100px;
}

.btn-change7 {
  height: 40px;
  width: 90%;
  background: #efefef;
  margin: 5px;
  float: left;
  border: 0px;
  color: black;
  box-shadow: 0 0 1px #ccc;
  box-shadow: 0px 0 0 #ffae19 inset;
}
.btn-change7:hover {
  box-shadow: 300px 0 0 #ffae19 inset;
}
</style>

