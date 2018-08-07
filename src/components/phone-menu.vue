<template>
  <div>
    <div class="sidebar bar-block border-right" id="mySidebar" v-if="sidenav">
      <button @click="sidenav =! sidenav" class="closebtn">&times;</button>
      
      <div id="imaginary_container"> 
                <div class="input-group stylish-input-group">
                    <input type="text" class="form-control"  placeholder="Search" >
                    <span class="input-group-addon">
                        <button type="submit">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>  
                    </span>
                    </div>
                </div>
      
      <main class=" text-left" >
        <router-link to="/">
                <a>Home</a>
            </router-link>
          <router-link to="./contact-us">
                                <a>Join Us</a>
                            </router-link>
          <router-link to="">
                    <a @click="categoryShow =! categoryShow">Catergory &nbsp<i class="fa fa-chevron-down"></i> </a>
          </router-link>

            <div v-if="categoryShow">
                <router-link to="./category-a">
                        <a class="text-left">Accommodation</a>
                    </router-link>
                <router-link to="./category-f">
                        <a class="text-left">Fashion</a>
                    </router-link>
                <router-link to="./category-au">
                        <a class="text-left">Automotive</a>
                    </router-link>
                <router-link to="./category-it">
                        <a class="text-left">Computers & IT</a>
                    </router-link>
                <router-link to="./category-ed">
                        <a class="text-left">Education</a>
                    </router-link>
                <router-link to="./category-el">
                        <a class="text-left">Electronics</a>
                    </router-link>
                <router-link to="./category-fd">
                        <a class="text-left">Food</a>
                    </router-link>
                <router-link to="./category-hb">
                        <a class=" text-left">Health & Beauty</a>
                    </router-link>
            </div>
      </main>
    </div>
  
<!-- Page Content -->
    <div class="teal">
      <nav class="container">
        <img src="./../../static/img/suppliermalaysia.gif" height="45" >
        <b-btn class="button teal xlarge" style="background-color:#ffae19 ; position:fixed; top:0px; right:0px;" @click="sidenav =! sidenav">☰</b-btn>
      </nav>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sidenav:false,
      categoryShow:false
    }
  },
  methods:{
      selectCategory(e){
          this.selectedCategory = e.target.value
          var x = this.products.filter(function(product){
              return product.category == e.target.value
          })
            for (var i = 0; i <x.length ;i++){
            x[i].show=true
            }
      }
  }
}
</script>


<style scoped>
.sidebar {
    height: 100%; /* 100% Full-height */
    width : 250px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #ffae19; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    color: #ffffff;
    display: block;
    transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
    color: #000000;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
    position: absolute;
    background-color: #f1f1f1 ;
    color: #ffae19;
    top: 0;
    right:0px;
    font-size: 25px;
}

button#category-bar__BV_toggle_.btn.btn-secondary.dropdown-toggle{
    background-color: #ff8000 !important;
}

#category-bar a{
    color:black;
}

#category-bar a:hover{
    color:#ffae19;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
/* @media screen and (max-height: 450px) {
    .sidebar {padding-top: 15px;}
    .sidebar a {font-size: 18px;}
} */

/* #imaginary_container{
    margin-top:20%;
} */
.stylish-input-group .input-group-addon{
    background: white !important; 
}
.stylish-input-group .form-control{
	border-right:0; 
	box-shadow:0 0 0; 
	border-color:#ccc;
}
.stylish-input-group button{
    border:0;
    background:transparent;
}
</style>
