<template>
    <div class="container col-12">
        <div class="row justify-content-start">
            <div class="word-wrap d-none d-md-block sidebar col-3 align-items-start">
                <b-dropdown-header>Popular Categories</b-dropdown-header>
                <b-dropdown-item-button class="btn-change7">Learning Centre</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Education</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Course</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Trainig Centre</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Kindergarten</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Language Schools</b-dropdown-item-button>
                
                <b-dropdown-item-button class="btn-change7">Music Centre</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Tuition</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Mental Arithmetic</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Art Schools</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Beauty Culture Schools</b-dropdown-item-button>
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
                id:'01',
                name:'item 1',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/edu-1.jpg'
            },
            {
                id:'02',
                name:'item 2',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/edu-2.jpg'
                
            },
            {   
                id:'03',
                name:'item 3',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/edu-1.jpg',
            },
            {   
                id:'04',
                name:'item 4',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/edu-2.jpg',
            },
            {   
                id:'05',
                name:'item 5',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/edu-1.jpg',
            },
            {   
                id:'06',
                name:'item 6',
                text:'Lorem ipsum dolor sit amet.',
                photo:'./../../static/img/edu-2.jpg',
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
  height:auto;
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

