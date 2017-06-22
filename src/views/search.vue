<template>
    <div class="searching">
      <header id="main-header" class="top top-inverted searching">
        <div class="container">
          <div class="logo">
            <router-link class="link" to="/">
              <img src="/static/image/logo.png" width="121" height="30" class="visual" alt="Sketchfab">
            </router-link>
          </div>

          <form class="search" data-action="search" action="." style="margin-left: 40px">
            <div class="box">
              <button class="search-icon fa fa-search" type="submit"></button>
              <input class="value header-search-form" type="text" name="query" placeholder="Search" autocapitalize="none" autocomplete="off" autocorrect="off" maxlength="128">
              <a href="#" class="clear hidden"></a>
            </div>

            <button class="header-search-cancel" data-action="exit-search">Cancel</button>
          </form>
        </div>
      </header>
      <header id="responsive-header" class="responsive-top searchmode">
        <a class="opensearch" data-action="open-search">
          <i class="fa fa-search"></i>
        </a>

        <form class="search" action="/models" method="get" data-action="search">
          <div class="inner">
            <input class="search-field" type="search" name="query" placeholder="Search">
            <a href="#" class="clear hidden"></a>
            <button type="button" class="closesearch" data-action="close-search">
              Cancel
            </button>
          </div>
        </form>
      </header>

      <div class="search-overlay visible">
        <!--搜索结果类别-->
        <div class="search-tools-container">
          <div class="search-contentTypes">
            <div class="container">
              <div>
                <ul>
                  <router-link tag="li" active-class="active" to="/search/everything/1">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.85 12.85"><title>search</title><path d="M13.85,13.15l-4-4A5,5,0,0,0,11,6a5,5,0,1,0-5,5A5,5,0,0,0,9.15,9.85l4,4ZM2,6a4,4,0,1,1,4,4A4,4,0,0,1,2,6Z" transform="translate(-1 -1)" fill="#999"></path></svg>
                    Everything
                    </a>
                  </router-link>
                  <router-link tag="li" active-class="active" to="/search/models/1">
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.04 14.54"><title>models</title><path d="M7,14.5a0.5,0.5,0,0,1-.27-0.08h0l-6-4A0.5,0.5,0,0,1,.46,10l0-6A0.5,0.5,0,0,1,.74,3.57L6.75,0a0.5,0.5,0,0,1,.51,0l6,3.51a0.5,0.5,0,0,1,.25.39h0V10a0.5,0.5,0,0,1-.36.48L7.29,14.41l-0.14.07-0.08,0H7ZM1.46,9.77l5,3.3V8.19l-5-3.27Zm6-1.59v4.88l5-3.32V4.9ZM1.94,4L7,7.32,12.05,4,7,1Z" transform="translate(-0.46 0.04)" fill="#999"></path></svg>
                      Models
                    </a>
                  </router-link>
                  <router-link tag="li" active-class="active" to="/search/users/1">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.38 13.25"><title>users</title><path d="M7,1.75a2.46,2.46,0,0,1,2,.78A2.06,2.06,0,0,1,9.59,4L9.48,5a1.44,1.44,0,0,0,.07.29,0.8,0.8,0,0,1,0,.5,2.39,2.39,0,0,1-.24.71,1.31,1.31,0,0,0-.18.47,2.8,2.8,0,0,1-.41,1.19,1.12,1.12,0,0,0-.27.69,1.52,1.52,0,0,0,.18,1,14,14,0,0,0,1.44.56l0.15,0.06c1.51,0.57,2.31,1,2.39,1.41L12.66,13H1.34a10.75,10.75,0,0,1,.06-1.14c0.08-.39.87-0.86,2.39-1.43l0.86-.29a2.38,2.38,0,0,0,.78-0.36A1.52,1.52,0,0,0,5.53,9V8.83a1.1,1.1,0,0,0-.25-0.69,2.8,2.8,0,0,1-.41-1.19A1.34,1.34,0,0,0,4.7,6.47a2.37,2.37,0,0,1-.23-0.71,0.8,0.8,0,0,1,0-.5A1.5,1.5,0,0,0,4.52,5Q4.46,4.49,4.4,4A2.06,2.06,0,0,1,5,2.53a2.46,2.46,0,0,1,2-.78m0-1A3.41,3.41,0,0,0,4.23,1.89a3,3,0,0,0-.82,2.19c0,0.3.07,0.57,0.1,0.84l0,0A1.79,1.79,0,0,0,3.5,6a3,3,0,0,0,.37,1h0s0,0,0,.12a3.52,3.52,0,0,0,.6,1.61,0.13,0.13,0,0,1,0,.08V9s0,0.08,0,.12L4.31,9.2l-0.63.21-0.21.07c-2.08.78-2.89,1.37-3.05,2.18v0.05A11.73,11.73,0,0,0,.34,13v1H13.71l-0.05-1.05L13.6,11.81V11.66c-0.18-.92-1.2-1.46-3-2.15l-0.06,0-0.05,0,0,0-1-.35c0-.07,0-0.16,0-0.27h0L9.5,8.75a3.62,3.62,0,0,0,.61-1.64,0.44,0.44,0,0,1,0-.1,3,3,0,0,0,.36-1,1.8,1.8,0,0,0,0-1.06l0,0,0.1-.81a3,3,0,0,0-.81-2.22A3.42,3.42,0,0,0,7,.75H7Z" transform="translate(-0.34 -0.75)" fill="#999"></path></svg>
                    Users
                    </a>
                  </router-link>
                  <router-link tag="li" active-class="active" to="/search/collections/1">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12"><title>collections</title><path d="M5.6,3a4.79,4.79,0,0,1,.46.4A13.18,13.18,0,0,1,7,5h5a1,1,0,0,1,1,1c0,0.39,0,5.86,0,5.86S12.67,13,12,13H2a1,1,0,0,1-1-1.14V4A0.94,0.94,0,0,1,2,3H5.6M5.93,2H2a2,2,0,0,0-1.45.57A2.07,2.07,0,0,0,0,4v7.87A2,2,0,0,0,2,14H12a2.3,2.3,0,0,0,2-1.86L14,12V11.86S14,6.39,14,6a2,2,0,0,0-2-2H7.61a2.52,2.52,0,0,0-.83-1.31A5.58,5.58,0,0,0,6.2,2.19L5.93,2h0Z" transform="translate(0 -2)" fill="#999"></path></svg>
                    Collections
                    </a>
                  </router-link>
                </ul>
              </div>
              <!--<div>-->
              <!--&lt;!&ndash;filters 存在时 display: block&ndash;&gt;-->
              <!--<button data-action="toggle-filters" style="display: none" >Filters <i class="fa fa-caret-down"></i></button>-->
              <!--</div>-->
            </div>
          </div>
        </div>

        <!--all-->
        <!--类别的filter-->
        <!--<div class="filters-container hidden">

        </div>-->
      <!--内容-->
      <router-view></router-view>


      <!--all end-->
      </div>
    </div>
    </div>
</template>

<script>
	export default {
		name: 'search',
		data () {
			return {}
		}
	}
</script>

<style scoped>
  .search-overlay{
    position: relative;
    top: 0;
  }
</style>
