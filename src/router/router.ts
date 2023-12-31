import { createRouter, createWebHistory } from 'vue-router';
import routesData from '@/router/routes-data';
import maintenanceView from '@/views/maintenance-view/maintenance-view.vue';
import TestView from '@/views/TestView.vue';
import maintenanceChild from '@/views/maintenance-view/children/maintenance-child-view.vue';
import maintenanceGoodsView from '@/views/maintenance-view/children/maintenance-goods-view/maintenance-goods-view.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: routesData.maintenance.path,
      name: routesData.maintenance.name,
      component: maintenanceView,
      redirect: routesData.maintenance.children.goods.path,
      children: [
        {
          ...routesData.maintenance.children.general,
          component: maintenanceChild,
        },
        {
          ...routesData.maintenance.children.goods,
          component: maintenanceGoodsView,
        },
        {
          ...routesData.maintenance.children.expenses,
          component: maintenanceChild,
        },
      ],
    },
    {
      path: routesData.test.path,
      name: routesData.test.name,
      component: TestView,
    },
  ],
});

export default router;
