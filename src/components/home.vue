<template>
    <div class="home container-fulid justify-content-center" >
                <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="3000"
                    img-width="100%"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >

                <!-- Text slides with image -->
                <b-carousel-slide caption="First slide"
                                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                    img-src="./../../static/img/menu.jpg"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide img-src="./../../static/img/menu.jpg">
                    <h1>Hello world!</h1>
                </b-carousel-slide>
                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                </b-carousel>
    </div>
</template>

<style scoped>
.home {
  height: 100%;
  margin: 0;
  padding: 0;
}

.home div {
  position: relative;
  height: 100%;
  width: 100%;
}

.home div #carousel1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
