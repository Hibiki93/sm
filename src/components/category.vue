<template>
    <div class="container col-12">
        <div class="row justify-content-start">
            <div class="d-none d-md-block sidebar col-3 align-items-start">
                <b-dropdown-header>Popular Categories</b-dropdown-header>
                <b-dropdown-item-button class="btn-change7">Car Accessories</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Automotive Components</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Automotive Equipment</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Car Spare Parts</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Motorcar accessories</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Car Tinted Film</b-dropdown-item-button>
                
                <b-dropdown-item-button class="btn-change7">Lorry Servicing</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Racing Kit</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Wheel Balancer Tyre Changer</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Motorcycle Store</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Motorcycle Accessories</b-dropdown-item-button>
                <b-dropdown-item-button class="btn-change7">Heavy Vehicles</b-dropdown-item-button>
            </div>
            <div class="col-9 row flex-sm-column ">
                <div class="col-lg-6 col-md-6">
                    <product-item/>
                </div>
                <div class="col-lg-6 col-md-6">
                    <product-item/>
                </div>
                <div class="col-lg-6 col-md-6">
                    <product-item/>
                </div>
                <div class="col-lg-6 col-md-6">
                    <product-item/>
                </div>
                <div class="col-lg-6 col-md-6">
                    <product-item/>
                </div>
                <div class="col-lg-6 col-md-6">
                    <product-item/>
                </div>
                <div class="col-lg-6 col-md-6">
                    <product-item/>
                </div>
                <div class="col-lg-6 col-md-6">
                    <product-item/>
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
import productItem from '@/components/product-item';

export default {
    components:{
        productItem
    }
    
}


</script>

<style scoped>

#ddown-header{
    width: 100%;
    background-color:white;
}

.sidebar{
    background-color: #efefef;
}

.sidebar b-dropdown-item-button{
   background-color: #000000 !important;
}



.button {
    height: 100px;
    width: 100px;
}


.btn-change7{
    height: 40px;
    width: 90%;
    background: #efefef;
    margin: 5px;
    float: left;
    border:0px;
    color:black;
    box-shadow: 0 0 1px #ccc;
    box-shadow:0px 0 0 #ffae19  inset;
}
.btn-change7:hover{
    box-shadow:300px 0 0 #ffae19 inset;
}
</style>

