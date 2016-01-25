import 'semantic/dist/semantic.min.css';
//import 'uikit/css/components/placeholder.almost-flat.min.css';
//import 'uikit/css/components/form-file.almost-flat.min.css';
import '../styles/app.styl';

import 'angular';
import 'angular-ui-router';
import 'ngstorage';
import 'angularUtils-pagination/dirPagination';

import {config} from './config.jsx';
import {run} from './run.jsx';
import {addGoods} from './directives/add-goods-directive';
import {imageDrop} from './directives/image-drop-directive';
import {totalGoods} from './directives/total-goods-directive';
import {listGoods} from './directives/list-goods-directive';
import {fileModel} from './directives/file-model-directive';
import {fileInput} from './directives/file-input-directive';
import {searchGoods} from './directives/search-goods-directive/index.jsx';
import {goodsPerPage} from './directives/goods-per-page-directive';
import {goodsPerPageService} from './services/goodsPerPageService.jsx';

import {goodsFactory} from './factories/goods-factory/index.jsx';

import {saleFilter} from './filters/sale.jsx';

angular.module('showcaseApp', ['ui.router','ngStorage','angularUtils.directives.dirPagination'])
  .config(config)
  .run(run)
  .directive('addGoods', addGoods)
  .directive('imageDrop', imageDrop)
  .directive('totalGoods', totalGoods)
  .directive('listGoods', listGoods)
  .directive('searchGoods', searchGoods)
  .directive('goodsPerPage', goodsPerPage)
  .directive('fileInput', fileInput)
  .directive('fileModel', fileModel)
  .service('goodsPerPageService', goodsPerPageService)
  .filter('sale', saleFilter)
  .factory('goodsFactory', goodsFactory);


angular.bootstrap(document.body, ['showcaseApp']);