import 'uikit/css/uikit.almost-flat.min.css';
import 'uikit/css/components/placeholder.almost-flat.min.css';
import 'uikit/css/components/form-file.almost-flat.min.css';
import '../styles/app.styl';

import 'angular';
import 'angular-ui-router';
import 'angularUtils-pagination/dirPagination';

import {config} from './config.jsx';
import {addGoods} from './directives/add-goods-directive';
import {imageDrop} from './directives/image-drop-directive';
import {totalGoods} from './directives/total-goods-directive';
import {listGoods} from './directives/list-goods-directive';
import {searchGoods} from './directives/search-goods-directive/index.jsx';
import {goodsPerPage} from './directives/goods-per-page-directive';
import {goodsPerPageService} from './services/goodsPerPageService.jsx';

import {goodsFactory} from './factories/goods.jsx';

import {saleFilter} from './filters/sale.jsx';

angular.module('showcaseApp', ['ui.router','angularUtils.directives.dirPagination'])
  .config(config)
  .directive('addGoods', addGoods)
  .directive('imageDrop', imageDrop)
  .directive('totalGoods', totalGoods)
  .directive('listGoods', listGoods)
  .directive('searchGoods', searchGoods)
  .directive('goodsPerPage', goodsPerPage)
  .service('goodsPerPageService', goodsPerPageService)
  .filter('sale', saleFilter)
  .factory('goodsFactory', goodsFactory);


angular.bootstrap(document.body, ['showcaseApp']);