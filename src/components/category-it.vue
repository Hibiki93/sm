<template>
    <div class="container col-12">
        <div class="row justify-content-start">
            <div class="word-wrap d-none d-md-block sidebar col-3 align-items-start">
                <b-dropdown-header>Popular Categories</b-dropdown-header>
                <b-dropdown-item-button class="btn-change7">Software Development</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Cable</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">IT Services</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Point Of Sale System</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7" style="margin-bottom:10px;white-space: normal;">Telecommunication Equipment & Supplies</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7" style="margin-bottom:10px;white-space: normal;">Computer Accessories Distributor</b-dropdown-item-button>
                
                <b-dropdown-item-button class="btn-change7">Ink Cartridge</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Electronics Cash Register</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7" style="margin-bottom:10px;white-space: normal;">Mobile Telephone Equipment & Systems</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Laptop Repairing</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Internet Services Providers</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7" style="margin-bottom:10px;white-space: normal;">Internet Services Consultants</b-dropdown-item-button>
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
                photo:'./../../static/img/it-1.jpg',
            },
            {
                name:'item 2',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/it-2.jpg',
            },
            {
                name:'item 3',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/it-1.jpg',
            },
            {
                name:'item 4',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/it-2.jpg',
            },
            {
                name:'item 5',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/it-1.jpg',
            },
            {
                name:'item 6',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/it-2.jpg',
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
.word-wrap {
    word-wrap: break-word;
    white-space: normal;
}

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
  height: auto;
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

