import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index'
import modelList from '../views/modelList'
import search from '../views/search'
import userCenter from '../views/userCenter'
import searchEverything from '../components/search/everything'
import searchModels from '../components/search/models'
import searchUsers from '../components/search/users'
import searchCollections from '../components/search/collections'
import tags from '../views/tags'
import model from '../views/model'
//import login from '../components/user/login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/list',
      name: 'modelList',
      component: modelList
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      children: [
        {
          path: '/search/everything/:keyword',
          component: searchEverything
        },
        {
          path: '/search/models/:keyword',
          component: searchModels
        },
        {
          path: '/search/users/:keyword',
          component: searchUsers
        },
        {
          path: '/search/collections/:keyword',
          component: searchCollections
        }
      ]
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags
    },
    {
      path: '/model',
      name: 'model',
      component: model
    }
  ]
})
