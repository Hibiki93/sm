<template>
  <div id="app">
    <header>
    </header>
    <main>
          <phone-menu class="col12 d-sm-block d-md-none d-lg-none"/>
      <div class="container-fluid">
        <div class="row content">
          <side-bar class="col-md-3 sidenav" />
          <router-view class="col-md-9 h-100"/>
        </div>
      </div>
    </main>
    <footer class="footer container-fluid ">
        <div class="col-12 col-lg-12 text-center">
          <div class="footer-logo mr-25">
            <!-- <img src="./../static/img/suppliermalaysia.gif"> -->
            <p>Copyright &copy; 2012 - 2018 Newpages Network Sdn Bhd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import sideBar from '@/components/side-bar.vue'
import phoneMenu from '@/components/phone-menu.vue'

export default {
  name: 'app',
  components:{
    sideBar,
    phoneMenu
  }
}
</script>

<style>
.footer{
    height: 3vh;
    font-size: 1.rem;
    position: fixed;
    color:white;
    bottom: 0;
    width: 100%;
    background-color: #333333;
    z-index: 0;
}
</style>
