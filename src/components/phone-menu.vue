<template>
    <nav class="navbar">
      <img src="./../../static/img/suppliermalaysia.gif" height="25" >
      <b-btn v-b-toggle.collapse1 >
        <span class="navbar-toggler-icon"></span>
      </b-btn>

      <b-collapse id="collapse1" class="col-12 navbar-brand">
          <li>
            <a class="nav-link" href="./">Home <span class="sr-only">(current)</span></a>
          </li>
          <li>
            <a class="nav-link" href="#/category">Product</a>
          </li>
          <li>
            <a class="nav-link" href="#/cart">Cart</a>
          </li>
          <li>
            <a class="nav-link" href="#/contact-us">Join Us</a>
          </li>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" placeholder="Search" aria-label="Search" type="text">
        </form>
      </b-collapse>
    </nav>
</template>

<style scoped>

.navbar{
    
    background-color: white;
    color: black;

}
li {
  list-style-type: none;
}
</style>
