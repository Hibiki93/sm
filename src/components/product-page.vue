<template> 
    <div class="container row">
        <div class="col-12">
            <b-btn class="chip">Automotive</b-btn>
            <b-btn class="chip">Car Accessories</b-btn>
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
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="./../../static/img/car-1.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="./../../static/img/car-2.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="./../../static/img/car-1.jpg" alt="image slot">
      </b-carousel-slide>

    </b-carousel>
        </div>
        <div class="col-md-5 col-xs-12 text-left">
            <h3>{{product.name}}</h3>
            <p>Company : ACM Motorsport </p>
            <p> Product Created Date : 2018-8-03</p>
            <p> Official Website : <a href="http://www.acm-motorsport.com.my">http://www.acm-motorsport.com.my</a></p>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt accusamus animi perspiciatis velit et obcaecati neque, aut sequi eveniet, ipsum, amet magni distinctio tempora ratione ullam soluta earum dolores itaque.
            </div>
            <tr></tr>
        </div>
        <div class="col-12 row">
            <div class="map-image col-md-5 col-xs-12">
                <img src="./../../static/img/map.jpg" width="100%">                          
          </div>
          <div class="col-lg-6">
              <div>
                <p>ACM Motorsport</p>
                <P>Address:</P>
                <p>D-3-5-G, Jalan Dutamas 3, Taman Dutamas Cheras, 43200 Balakong, Selangor, Malaysia.</p>
              </div>
                <br>
                <b-btn>Contact Supplier</b-btn>
            </div>
        </div>
      </div>
</template>

<script>


export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
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
  background-color: #b1b1b1;
}
</style>


