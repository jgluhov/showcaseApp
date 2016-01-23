import 'uikit/css/uikit.almost-flat.min.css';
import 'uikit/css/components/placeholder.almost-flat.min.css';
import 'uikit/css/components/form-file.almost-flat.min.css';
import '../styles/app.styl';

import 'angular';
import 'angular-ui-router';
import 'angularUtils-pagination/dirPagination';

import {config} from './config.jsx';
import {addGoods} from './directives/addGoods.jsx';
import {imageDrop} from './directives/imageDrop.jsx';
import {totalGoods} from './directives/totalGoods.jsx';
import {listGoods} from './directives/listGoods.jsx';
import {searchGoods} from './directives/searchGoods.jsx';

import {goodsFactory} from './factories/goods.jsx';

import {saleFilter} from './filters/sale.jsx';

angular.module('showcaseApp', ['ui.router','angularUtils.directives.dirPagination'])
  .config(config)
  .directive('addGoods', addGoods)
  .directive('imageDrop', imageDrop)
  .directive('totalGoods', totalGoods)
  .directive('listGoods', listGoods)
  .directive('searchGoods', searchGoods)
  .filter('sale', saleFilter)
  .factory('goodsFactory', goodsFactory);


angular.bootstrap(document.body, ['showcaseApp']);