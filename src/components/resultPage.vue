    <template>
        <div>
            <div class="col12 text-center">
                <h3>{{this.$route.params.keyword}} Search Result </h3>
            </div>
            <b-card class="col12 result_nodata text-center" v-if="showNoData">
                <h3><strong>No Data</strong></h3>
            </b-card>
            <div class="col-9 row ">
                <div class="col-lg-6 col-md-6"
                    v-for="(product, index) in products"
                    v-bind:key="index"
                    >
                    <productItem
                    v-bind:name="product.name"
                    v-bind:id="product.id"
                    v-bind:photo="product.photo"
                    @click="handleClick"></productItem>
                </div>
                </div>
        </div>
    </template>

    <script>
    import productItem from '@/components/product-item';
    import db from '@/database/firebaseInit'

    export default {
       created(){
            if( this.keyword == 'hotel'){
                this.showNoData = false;
                this.show=true;
                db.collection('category').where('subCategory', '==', 'Hotel').get().then
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
            }else{
                this.showNoData = true;
                this.show=false;
            }
        },
        data (){
            return{
                products:[],
                keyword : this.$route.params.keyword,
                showNoData : true
            }
        },
        methods:{
            checkKeyword(){
                
            }
        },
        components:{
            productItem
        }
    }
    </script>

    <style scoped>
    .result_nodata{
        margin-top:20px; 
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        background-color: #efefef;
        color: darkgrey
    }
    </style>
    
