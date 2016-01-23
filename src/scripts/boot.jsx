import 'uikit/css/uikit.almost-flat.min.css';
import 'uikit/css/components/placeholder.almost-flat.min.css';
import 'uikit/css/components/form-file.almost-flat.min.css';
import '../styles/app.styl';

import 'angular';
import 'angular-ui-router';

import {config} from './config.jsx';
import {addGoods} from './directives/addGoods.jsx';
import {imageDrop} from './directives/imageDrop.jsx';
import {totalGoods} from './directives/totalGoods.jsx';
import {listGoods} from './directives/listGoods.jsx';

import {goodsFactory} from './factories/goods.jsx';

angular.module('showcaseApp', ['ui.router'])
  .config(config)
  .directive('addGoods', addGoods)
  .directive('imageDrop', imageDrop)
  .directive('totalGoods', totalGoods)
  .directive('listGoods', listGoods)
  .factory('goodsFactory', goodsFactory);

angular.bootstrap(document.body, ['showcaseApp']);