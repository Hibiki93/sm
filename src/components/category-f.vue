<template>
    <div class="container col-12">
        <div class="row justify-content-start">
            <div class="d-none d-md-block sidebar col-3 align-items-start">
                <b-dropdown-header>Popular Categories</b-dropdown-header>
                <b-dropdown-item-button class="btn-change7">Apparel</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Uniforms</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Bags</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Fashions</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Tee - Shirts Printing</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Embroidery</b-dropdown-item-button>
                
                <b-dropdown-item-button class="btn-change7">Textile</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Boqutique</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Cloth</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Sewing Machine</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Hotel Amenities</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Optical Centre</b-dropdown-item-button>
            </div>
            <div class="col-9 row ">
                <div class="col-lg-6 col-md-6"
                    v-for="(product, index) in products"
                    v-bind:key="index"
                    >
                    <product-item
                    v-bind:name="product.name"
                    v-bind:text="product.text"
                    v-bind:photo="product.photo"></product-item>
                </div>
                <div class="col-12 row text-center">
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
import productItem from "@/components/product-item";

export default {
    data(){
        return{
            products:[{
                name:'item 1',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/fashion-1.jpg',
            },
            {
                name:'item 2',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/fashion-2.jpg',
            },
            {
                name:'item 3',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/fashion-1.jpg',
            },
            {
                name:'item 4',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/fashion-2.jpg',
            },
            {
                name:'item 5',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/fashion-1.jpg',
            },
            {
                name:'item 6',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/fashion-2.jpg',
            },
            ]
        }
    },
  components: {
    productItem
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

