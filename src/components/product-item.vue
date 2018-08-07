<template>
    <div class="grid">
					<figure class="thumbnail effect-sadie">
						<img :src="photo" alt="img23"/>
						<figcaption>
							<span><strong>{{name}}</strong></span>
								<p>{{text}}</p>
						</figcaption>			
					</figure>
                </div>
</template>

<script>
export default {
	props:['name','text','photo'],
	methods:{
		handleClick(){
			console.log('clicked')
			this.name = event.target.value;
			this.$emit('handleClick', this.name)
		}
	}
}
</script>


<style scoped>

.thumbnail{        
    width: auto; 
    height: 180px;
	background-size: cover;
    /* overflow: auto; */
}

.thumbnail img {
	display: block;
	margin-left: auto;
	margin-right: auto;
    max-height: 100%;
    max-width: 100%;
}


figure.effect-sadie figcaption::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);
	background: linear-gradient(to bottom, #e29d097e 0%, #e29d09d5 75%);
	content: '';
	opacity: 0;
	-webkit-transform: translate3d(0,50%,0);
	transform: translate3d(0,50%,0);
}


figure.effect-sadie figcaption::before,
figure.effect-sadie p {
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
}

figure.effect-sadie p {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 2em;
	width: 100%;
	opacity: 0;
	-webkit-transform: translate3d(0,10px,0);
	transform: translate3d(0,10px,0);
}

figure.effect-sadie:hover h2 {
	color: #fff;
	-webkit-transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
	transform: translate3d(0,-50%,0) translate3d(0,-40px,0);
}

figure.effect-sadie:hover figcaption::before ,
figure.effect-sadie:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
</style>

