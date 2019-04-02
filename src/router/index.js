import Vue from 'vue'
import Router from 'vue-router'
import WorldMap3D from '@/components/WorldMap3D'
import WorldMap2D from '@/components/WorldMap2D'

Vue.use(Router)

export default new Router({
	routes: [
    {
      path: '/',
      name: 'WorldMap2D',
      component: WorldMap2D
    },
    {
    	path: '/3dmap',
      name: 'WorldMap3D',
      component: WorldMap3D
    }
  ]
})
