import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import app from 'flarum/forum/app';
import PhilosophyPage  from "./components/PhilosophyPage";

app.initializers.add('philosophy-page', function () {
  //add link to header
  extend(HeaderPrimary.prototype, 'items', function(items) {
    items.add('philosophy', <a href="/philosophy">Наша философия</a>);
  });

  //add route
  app.routes.philosophy = {path: '/philosophy', component: PhilosophyPage};
});
