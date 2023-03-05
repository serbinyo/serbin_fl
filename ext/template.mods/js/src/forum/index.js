import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';

extend(HeaderPrimary.prototype, 'items', function(items) {
  console.log(items)
  items.add('philosophy', <a href="/philosophy">Наша философия</a>);
});
