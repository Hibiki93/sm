<template>
    <div class="container-fluid row">
       <table class="table table-hover col-12">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                    <tr>
                        <td class="col-12">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style="width: 50px; height: 50px;"> </a>
                            <div class="media-body">
                                <strong class="media-heading"><a href="#">&nbsp;Product name</a></strong>
                                <tr></tr>
                                <p class="media-heading">&nbsp; by <a href="#">Brand name</a></p>
                            </div>
                        </div></td>
                        <td class="col-sm-1 col-md-1" style="text-align: center">
                            <input type="number" style="width: 45px; padding: 1px" value="0"> 
                        </td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                        <td class="col-sm-1 col-md-1">
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove"></span> x
                        </button></td>
                    </tr>
                    <tr>
                        <td class="col-md-6">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style="width: 50px; height: 50px;"> </a>
                            <div class="media-body">
                                <strong class="media-heading"><a href="#">&nbsp; Product name</a></strong>
                                <tr></tr>
                                <p class="media-heading">&nbsp; by <a href="#">Brand name</a></p>
                            </div>
                        </div></td>
                        <td class="col-md-1" style="text-align: center">
                            <input type="number" style="width: 45px; padding: 1px" value="0">
                        </td>
                        <td class="col-md-1 text-center"><strong>$4.99</strong></td>
                        <td class="col-md-1 text-center"><strong>$9.98</strong></td>
                        <td class="col-md-1">
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove"></span> x
                        </button></td>
                    </tr>
                
            </table>
            <tr></tr>
            <div class="total-sub container-fluid col-12">
                <h4>Total Sub</h4>
                <div class="d-flex">
                    <div class="mr-auto p-2">Sub Total:</div>
                    <div class="p-2">$123</div>
                </div>
                <div class="d-flex">
                    <div class="mr-auto p-2">Delivery:</div>
                    <div class="p-2">Free</div>
                </div>
                <div class="d-flex">
                    <div class="mr-auto p-2">Total:</div>
                    <div class="p-2">$123</div>
                </div>
                    <button class="btn btn-success col-12 text-center" >Place Order</button>
            </div>
    </div>
</template>

<style scoped>

</style>

