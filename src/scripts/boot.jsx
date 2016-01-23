import 'uikit/css/uikit.almost-flat.min.css';
import 'uikit/css/components/placeholder.almost-flat.min.css';
import 'uikit/css/components/form-file.almost-flat.min.css';
import '../styles/app.styl';

import 'angular';
import 'angular-ui-router';

import {config} from './config.jsx';
import {addGood} from './directives/addGood.jsx';
import {imageDrop} from './directives/imageDrop.jsx';
import {totalGoods} from './directives/totalGoods.jsx';
import {listGoods} from './directives/listGoods.jsx';

angular.module('showcaseApp', ['ui.router'])
  .config(config)
  .directive('addGood', addGood)
  .directive('imageDrop', imageDrop)
  .directive('totalGoods', totalGoods)
  .directive('listGoods', listGoods);

angular.bootstrap(document.body, ['showcaseApp']);