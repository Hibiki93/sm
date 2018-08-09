<template>
    <div class="join-us container" >
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
                <label for="inputName">Name</label>
                <input type="name" class="form-control" placeholder="Your Name" v-model="name" >
                </div>
            <div class="form-group col-md-6">
                <label for="inputCompanyName">Company Name</label>
                <input type="name" class="form-control" placeholder="Company Name" v-model="company_name">
                </div>
            </div>
            <div class="form-group">
                <label for="inputContactNumber">Contact Number</label>
                <input type="text" class="form-control" placeholder="Contact Number" v-model="contact_number">
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="eg: Floor..." v-model="address"> 
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="eg: Steert..." v-model="city">
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <input type="text" class="form-control" placeholder="State" v-model="state">
                </div>
                <div class="form-group col-md-2">
                <label for="inputZip">Postcode</label>
                <input type="text" class="form-control" id="inputZip" v-model="postcode">
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    I'm not a robot
                </label>
                <div class="text-right">
                    <button type="submit" class="btn" style="background-color:#ffae19; color:white;" @click="submitForm" >Submmit</button>
                </div>
                </div>
            </div>
        </form>
        <div class="btm-text text-right">
            We already have Total Suppliers
              <strong>2,586</strong>
              , Total Products 
              <strong>717,721</strong>
            </div>
    </div>
</template>

<script>
import db from '@/database/firebaseInit'
export default {
    data(){
        return{
            name:null,
            company_name:null,
            contact_number:null,
            address:null,
            city:null,
            state:null,
            postcode:null,
            checkbox:false,
            errors:[]
        }
    },
    methods:{
        submitForm(){
            if( this.name != null &&
                this.company_name != null &&
                this.contact_number != null &&
                this.address != null &&
                this.city != null &&
                this.state != null &&
                this.postcode != null &&
                this.checkbox != null ){
                    db.collection('submitForm').add({
                        name:this.name,
                        company_name:this.company_name,
                        contact_number:this.contact_number,
                        address:this.address,
                        city:this.city,
                        state:this.state,
                        postcode:this.postcode
                    }).then(docRef =>{this.$router.push('/')})
                    .catch(error => console.log(err))
                    alert('Successful Submit!')   
                }else{
                    if (!this.name) {
                            this.errors.push('Name');
                        }
                        if (!this.company_name){
                                this.errors.push('Company Name');
                            }
                            if (!this.contact_number){
                                this.errors.push('Contact Number');
                            }
                                if (!this.address){
                                    this.errors.push('Address');
                                }
                                    if (!this.city){
                                    this.errors.push('city');
                                }
                                    if (!this.state){
                                    this.errors.push('state');
                                }
                                if (!this.postcode){
                                    this.errors.push('postcode');
                                }
                        alert(this.errors+ ' required to fill up you form')
                }
        }
    }
    
}
</script>


<style scoped>
.btm-text {
  position: fixed;
  right: 10px;
  bottom: 80px;
  z-index: -1;
}

.join-us {
  background-color: white;
}
</style>
