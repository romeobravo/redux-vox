import App from '../components/App.react';
import About from '../components/About.react'
import E404 from '../components/E404.react';

const routes = {
  component: App,
  children: {
    about: {
      component: About
    },
    title: {
      component: About,
      type: 'slug'
    },
    item: {
      component: About,
      type: 'id'
    }
  },
  '404': E404
};

export default routes;
