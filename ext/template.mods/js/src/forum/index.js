import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import app from 'flarum/forum/app';
import AboutPage  from "./components/AboutPage";

app.initializers.add('about-page', function () {
  //add link to header
  extend(HeaderPrimary.prototype, 'items', function(items) {
    items.add('about', <a href="/about"><strong>О нас</strong></a>);
  });

  //add route
  app.routes.about = {path: '/about', component: AboutPage};
});
