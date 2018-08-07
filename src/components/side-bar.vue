<template>
    <div class="d-none d-md-block d-lg-block side-bar column">
        <nav class="container-fluid" >
           <img src="./../../static/img/suppliermalaysia.gif" height="25" >
        </nav>
        
	    <div class="col-12">
    	    <div id="custom-search-input">
                <div class="input-group">
                    <input type="text" class="search-query form-control" placeholder="Search" />
                    <span class="input-group-btn">
                        <button type="button" disabled>
                            <span class="fa fa-search"></span>
                        </button>
                    </span>
                </div>
    	    </div>

        <div class="side-nav">
            <router-link to="/">
                <button class="btn btn-change7 text-left" >Home</button>
            </router-link>
                    <router-link to="/category-a">
                        <button class="btn btn-change7 text-left">Accommodation</button>
                    </router-link>
                    <router-link to="/category-f">
                        <button class="btn btn-change7 text-left">Fashion</button>
                    </router-link>
                    <router-link to="/category-au">
                        <button class="btn btn-change7 text-left">Automotive</button>
                    </router-link>
                    <router-link to="/category-it">
                        <button class="btn btn-change7 text-left">Computers & IT</button>
                    </router-link>
                    <router-link to="/category-ed">
                        <button class="btn btn-change7 text-left">Education</button>
                    </router-link>
                    <router-link to="/category-el">
                        <button class="btn btn-change7 text-left">Electronics</button>
                    </router-link>
                    <router-link to="/category-fd">
                        <button class="btn btn-change7 text-left">Food</button>
                    </router-link>
                    <router-link to="/category-hb">
                        <button class="btn btn-change7 text-left">Health & Beauty</button>
                    </router-link>
                        <!-- <router-link to="./cart">
                            <button class="btn btn-change7 text-left">Cart</button>
                        </router-link> -->
                            <router-link to="./contact-us">
                                <button class="btn btn-change7 text-left">Join Us</button>
                            </router-link>
        </div>
    </div>
        <!-- <hr>
        <form action="">
            <div class="input-append span12">
                    <input type="text" class="search-query mac-style" placeholder="Search">
                    <button type="submit" class="btn"><i class="fa fa-search"></i></button>
                </div>
        </form> -->            
    </div>
</template>

<style scoped>
.side-bar {
  background-color: #ffffff;
  height: 100vh;
}

#custom-search-input {
  margin: 0;
  margin-top: 10px;
  padding: 0;
}

#custom-search-input .search-query {
  width: 100%;
  padding-right: 3px;
  padding-left: 15px;
  /* IE7-8 doesn't have border-radius, so don't indent the padding */
  margin-bottom: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 0;
}

#custom-search-input button {
  border: 0;
  background: none;
  /** belows styles are working good */
  padding: 2px 5px;
  margin-top: 2px;
  position: absolute;
  right: 0;
  /* IE7-8 doesn't have border-radius, so don't indent the padding */
  margin-bottom: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  color: #d9230f;
  cursor: unset;
  z-index: 2;
}

.search-query:focus {
  z-index: 0;
}

.btn-change7 {
  height: 40px;
  width: 90%;
  background: white;
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