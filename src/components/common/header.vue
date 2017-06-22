<template>
    <div>
      <!--顶部 大屏-->
      <header id="main-header" class="top" :class="index?'top-inverted':''">
        <div class="container">
          <div class="logo">
            <router-link class="link" to="/">
              <img src="/static/image/logo.png" width="121" height="30" class="visual" alt="Sketchfab">
            </router-link>
          </div>
          <ul class="navigation">
            <li class="section">
              <a href="" class="link show-hover-menu">探索</a>
              <ul class="hover-menu large-menu" style="">
                <li class="title right">类别</li>
                <li class="left-column">
                  <a href="categories.html">
                    <i class="fa fa-gamepad"></i>
                    <span>游戏</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="categories.html">
                    <i class="fa fa-university"></i>
                    <span>文化遗产</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-female"></i>
                    <span>人物</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-car"></i>
                    <span>汽车</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-sun-o"></i>
                    <span>场景</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-bug"></i>
                    <span>动物</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-headphones"></i>
                    <span>技术</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-bomb"></i>
                    <span>武器</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-building-o"></i>
                    <span>建筑</span>
                  </a>
                </li>
                <li class="left-column">
                  <a href="">
                    <i class="fa fa-compass"></i>
                    <span>科学</span>
                  </a>
                </li>
                <li class="separator-vertical"></li>
                <li class="title right">热点</li>
                <li class="right-column"><a href="">流行</a></li>
                <li class="right-column"><a href="">精选</a></li>
                <li class="right-column"><a href="">动画</a></li>
                <li class="right-column"><a href="">虚拟世界</a></li>
                <li class="right-column"><a href="">下载</a></li>
                <li class="title right">收藏</li>
                <li class="right-column"><a href="">所有收藏</a></li>
                <li class="white-space"></li>
              </ul>
            </li>
            <li class="section">
              <a href="" class="link show-hover-menu">社区</a>
              <ul class="hover-menu" style="">
                <li><a href="members.html">所有用户</a></li>
                <li><a href="members.html">Pro</a></li>
                <li><a href="">Forum</a></li>
              </ul>
            </li>
          </ul>

          <form class="search" data-action="search" action=".">
            <div class="box">
              <button class="search-icon fa fa-search" type="submit"></button>
              <input class="value header-search-form" type="text" name="query" placeholder="Search"  maxlength="128">
              <a href="#" class="clear hidden"></a>
            </div>
            <button class="header-search-cancel" data-action="exit-search">Cancel</button>
          </form>

          <div class="actions">
            <div class="anonymous">
              <span class="button btn-medium btn-primary signup-upload" @click="showLogin">登陆</span>
              <span class="button btn-medium btn-secondary signup" @click="showRegister">注册</span>
            </div>
          </div>
        </div>
      </header>
      <!--顶部 中小屏-->
      <header id="responsive-header" class="responsive-top">
        <a class="togglenavigation" data-action="toggle-navigation">
          <i class="fa fa-bars"></i>
        </a>
        <div class="logo">
          <a href="/">
            <img src="/static/image/logo.png" width="100" height="25" alt="Sketchfab" style="margin-top: 7px;">
          </a>
        </div>
        <a class="opensearch" data-action="open-search">
          <i class="fa fa-search"></i>
        </a>
        <form class="search" action="" method="get" data-action="search">
          <div class="inner">
            <input class="search-field" type="search" name="query" placeholder="Search">
            <a href="#" class="clear hidden"></a>
            <button type="button" class="closesearch" data-action="close-search">
              Cancel
            </button>
          </div>
        </form>
      </header>
      <!--菜单列表  中小屏-->
      <div class="responsive-navigation">

        <!--未登录-->
        <!--<div class="inner">
            <div class="responsive-navigation-auth">
                <a href="/login" class="button btn-medium btn-primary login">Login</a>
                <a href="/signup" class="signup">No account? Sign up</a>
            </div>

            <ul class="section navigation">
                <li>
                    <a class="link title" href="/">Home</a>
                </li>
                <li>
                    <a class="link title" >Explore</a>
                    <ul class="section">
                        <li><a class="link" >Popular</a></li>
                        <li><a class="link" >Staff picks</a></li>
                        <li><a class="link">Animations</a></li>
                        <li><a class="link" >Virtual Reality</a></li>
                        <li><a class="link" >Collections</a></li>
                    </ul>
                </li>
                <li>
                    <a class="link title">Community</a>
                    <ul class="section">
                        <li><a class="link" >All users</a></li>
                        <li><a class="link" >Pros</a></li>
                        <li><a class="link" >Forum</a></li>
                        <li><a class="link">Help &amp; FAQ</a></li>
                    </ul>
                </li>
                <li>
                    <a class="link title" >Blog</a>
                    <ul class="section">
                        <li><a class="linkavigation">New on Sketchfab</a></li>
                        <li><a class="link">Community stories</a></li>
                        <li><a class="link">Contests</a></li>
                        <li><a class="link">Events</a></li>
                        <li><a class="link">Tutorials</a></li>
                        <li><a class="link">Inside Sketchfab</a></li>
                    </ul>
                </li>
            </ul>
        </div>-->

        <!--用户登录-->
        <div class="inner">
          <ul class="section navigation">
            <li>
              <a class="user-name">
                <div class="wrapper ">
                  <div class="avatar " >
                    <div class="image-container" style="width:20px; ;  background-image: url('../image/avatar.jpeg');">
                      <div style="padding-top:100.0%;"></div>
                    </div>
                  </div>
                  <div class="text">
                    <div class="username-wrapper" title="yjt">cry</div>
                  </div>
                </div>
              </a>
              <ul class="section">
                <li><a class="link" href="/">Newsfeed</a></li>
                <li><a class="link" href="https://sketchfab.com/yjt/models">Models</a></li>
                <li><a class="link" href="https://sketchfab.com/yjt/collections">Collections</a></li>
                <li><a class="link" href="https://sketchfab.com/yjt/likes">Likes</a></li>
              </ul>
            </li>
            <li>
              <a class="link title" href="/models/popular">Explore</a>
              <ul class="section">
                <li><a class="link" href="/models/popular">Popular</a></li>
                <li><a class="link" href="/models/staffpicks">Staff picks</a></li>
                <li><a class="link" href="/models?date=week&amp;features=animated&amp;sort_by=-likeCount">Animations</a></li>
                <li><a class="link" href="/virtual-reality">Virtual Reality</a></li>
                <li><a class="link" href="/collections/popular">Collections</a></li>
              </ul>
            </li>
            <li>
              <a class="link title" href="/members">Community</a>
              <ul class="section">
                <li><a class="link" href="/members">All users</a></li>
                <li><a class="link" href="/members/pros">Pros</a></li>
                <li><a class="link" href="https://forum.sketchfab.com?utm_source=website&amp;utm_campaign=responsive_navigation">Forum</a></li>
                <li><a class="link" href="https://help.sketchfab.com/hc/en-us?utm_source=website&amp;utm_campaign=responsive_navigation">Help &amp; FAQ</a></li>
              </ul>
            </li>
            <li>
              <a class="link title" href="https://blog.sketchfab.com?utm_source=website&amp;utm_campaign=responsive_navigation" target="_blank">Blog</a>
              <ul class="section">
                <li><a class="link" href="https://blog.sketchfab.com/category/new-on-sketchfab/?utm_source=website&amp;utm_campaign=responsive_navigation">New on Sketchfab</a></li>
                <li><a class="link" href="https://blog.sketchfab.com/category/community-story/?utm_source=website&amp;utm_campaign=responsive_navigation">Community stories</a></li>
                <li><a class="link" href="https://blog.sketchfab.com/category/contest/?utm_source=website&amp;utm_campaign=responsive_navigation">Contests</a></li>
                <li><a class="link" href="https://blog.sketchfab.com/category/event/?utm_source=website&amp;utm_campaign=responsive_navigation">Events</a></li>
                <li><a class="link" href="https://blog.sketchfab.com/category/tutorial/?utm_source=website&amp;utm_campaign=responsive_navigation">Tutorials</a></li>
                <li><a class="link" href="https://blog.sketchfab.com/category/inside-sketchfab/?utm_source=website&amp;utm_campaign=responsive_navigation">Inside Sketchfab</a></li>
              </ul>
            </li>
            <li>
              <a class="link title" href="https://sketchfab.com/yjt">My profile</a>
              <ul class="section">
                <li><a class="link" href="/settings/profile">Settings</a></li>
                <li class="link"><a href="/plans">Go Pro</a></li>
                <li>
                  <form action="/logout" method="post">
                    <input type="hidden" name="csrfmiddlewaretoken" value="wH9OXqw5VPUP2i7cBide5KibVfRLM1VrQqWtlN12sL0tR2ttOM5UzaUAAeylwYLS">
                    <button type="submit" class="btn-textified">Logout</button>
                  </form>
                </li>
              </ul>
            </li>
          </ul>
        </div>


      </div>
      <div class="responsive-navigation-bind-out"></div>

      <login v-show="loginF"></login>
      <register v-show="registerF"></register>
    </div>
</template>

<script>
  import login from '../user/login'
  import register from '../user/register'

	export default {
		name: 'header-part',
    props : ['index'],
    components: {
      login,register
    },
		data () {
			return {
				loginF: false,
        registerF : false
      }
		},
    methods :{
      showLogin(){
      	this.loginF = true;
      },
      showRegister(){
        this.registerF = true;
      }
    }
	}
</script>

<style scoped>
  .top-inverted .logo .link{
    background-position: center center!important;
  }
</style>
