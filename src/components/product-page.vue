<template> 
    <div class="container row">
        <div class="col-12">
            <b-btn class="chip">{{mainCategory}} \ {{subCategory}}</b-btn>
        </div>
        <div class="product-image col-md-6 col-xs-12">
            
            <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption=""
                        text=""
                        :img-src="product_photo"
      ></b-carousel-slide>
      <b-carousel-slide :img-src="product_photo" >
      </b-carousel-slide>

    </b-carousel>
        </div>
        <div class="col-md-5 col-xs-12 text-left">
            <h3><strong>{{product_name}}</strong> </h3>
            <p>Company : {{company_name}} </p>
            <p> Product Created Date : 2018-8-03</p>
            <p> Official Website : <a :href="company_website">{{company_website}}</a></p>
            <tr></tr>
        </div>
            <b-card class="box col-12 row ">
              <div>{{product_detail}}</div>
            </b-card>

            <div class="col-12 row">
            <div class="map-image col-md-5 col-xs-12">
                <img src="./../../static/img/map.jpg" width="100%">                          
          </div>
            <div class="col-lg-6">
              <div>
                <p>{{company_name}}</p>
                <P>Address:</P>
                <p>{{company_address}}</p>
              </div>
                <br>
                <b-btn class="chip">Contact Supplier</b-btn>
            </div>

        </div>
      </div>
</template>

<script>
import db from '@/database/firebaseInit'

export default {
  beforeCreate () {
    db.collection('category').where('id', '==', this.$route.params.id).get()
    .then(querySnapshot =>{
            querySnapshot.forEach(doc =>{
              this.id = doc.data().id,
              this.category = doc.data().category,
              this.product_name = doc.data().product_name,
              this.product_photo= doc.data().product_photo,
              this.product_detail = doc.data().product_detail,
              this.company_name = doc.data().company_name,
              this.company_website = doc.data().company_website,
              this.company_number = doc.data().company_number,
              this.company_address = doc.data().company_address,
              this.mainCategory = doc.data().mainCategory,
              this.subCategory = doc.data().subCategory
            })
              .catch(err =>{
                console.log('Error getting document',err);
              })
    })
  },
  created(){
    console.log( this.$route.params.id)
  },
  data() {
    return {
      product:[],
      slide: 0,
      sliding: null
    };
  },
  methods: {
    // fetchData (){
    //   db.collection('category').where
    //   ('id','==',
    //   this.$route.params.id).get()
    //   .then(querySnapshot=>{
    //     querySnapshot.forEach(doc =>{
    //       this.id = doc.data().id,
    //       this.product_name = doc.data().name
    //       console.log( this.$route.params.id)
    //     })
    //   })
    // },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
};
</script>

<style scoped>
.product-image {
  margin: 10px;
}

.map-image {
  margin: 10px;
}

.chip {
  margin: 10px;
  background-color:#ffae19 ;
}
</style>


