<template>
    <div class="container" >
        <div class="col-11 text-center">
            <h4>
                Welcome to Supplier Malaysia, 
                Join Us and list your product here!
            </h4>          
          </div>
          <hr>
        <form>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">Name</label>
            <input type="email" class="form-control" placeholder="Your Name">
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Company Name</label>
            <input type="email" class="form-control" placeholder="Company Name">
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Contact Number</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Contact Number">
        </div>
        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="eg: Floor...">
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="eg: Steert...">
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">City</label>
            <input type="text" class="form-control" placeholder="City">
            </div>
            <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip">
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
                Check me out
            </label>
            <div class="text-right">
                <button type="submit" class="btn" style="background-color:#ffae19; color:white;">Submmit</button>
            </div>
            </div>
        </div>
        </form>
        <div class="btm-text text-right">
            We already have Total Suppliers
              <strong>2,586</strong>
              , Total Products 
              <strong>717,721</strong>
            </div></p>
    </div>
</template>

<style scoped>
.btm-text{
    position: fixed;
    right: 10px;
    bottom: 80px;
    z-index: -1;
}
</style>
