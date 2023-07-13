<script>
  //this one
</script>

<svelte:head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="+page.js"></script>

  <title>H O M E</title>
</svelte:head>

<section>
  <a href="#header" id="back-to-top" class="top"><i class="fa fa-chevron-up"></i></a>
  <!-- HHHHHHHHHHHHHHHHHH        Preloader          HHHHHHHHHHHHHHHH -->
  <!-- <div id="preloader"></div> -->
  <!-- HHHHHHHHHHHHHHHHHH        Header          HHHHHHHHHHHHHHHH -->
  <section id="header" class="header">
      <div class="top-bar">
          <div class="container">
              <div class="navigation">
                      <div class="row">
                          <div>
                              <a href="/"><span id="logo"><strong class="strong">W</strong>elcome</span></a>
                          </div>
                      </div><!-- /.row -->
                  </div><!-- /.navigation -->
              </div><!--/.container-->
          </div><!--/.top-bar-->

      <div class="container">
          <div class="starting">
              <div class="row">
                  <div>
                      <img src="/src/routes/img/bird_2.png" alt="Icon" style="width:200px; height:200px;">
                  </div>
                  <div>
                      <div class="banner-text">
                           <h2>Even</h2>
                           <li>Event 1</li>
                          <p>
                               Simple Text
                          </p>
                          <li>Event 1</li>
                          <p>
                               Simple Text
                          </p><li>Event 1</li>
                          <p>
                               Simple Text
                          </p>
                      </div> <!-- /.banner-text -->
                  </div>
              </div>
          </div>
          <!-- /.starting -->
      </div>
      <!-- /.container -->
  </section>
</section>


<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

.header{
	height: 100vh;
    width: 100%;
	background: linear-gradient(50deg, #f57c73, #ffd0a5);
    
}
#logo {
	font-size: 80px;
	letter-spacing: 10px;
	font-weight: 100;
	color: white;
	display: inline-block;
	padding: 0px;
}

.strong{
	font-weight: 400;
}
.header img{
	width: 100%;
}

.banner-text{
    margin-top: 100px;
}
 h2{
	font-weight: 100;
	font-size: 40px;
	text-transform: uppercase;
	color: #fff;
}
</style>
