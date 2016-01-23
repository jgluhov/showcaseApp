import 'uikit/css/uikit.almost-flat.min.css';
import 'uikit/css/components/placeholder.almost-flat.min.css';
import 'uikit/css/components/form-file.almost-flat.min.css';
import '../styles/app.styl';

import 'angular';
import 'angular-ui-router';

import {Config} from './config.jsx';
import {addGood} from './directives/addGood.jsx';
import {imageDrop} from './directives/imageDrop.jsx';

angular.module('showcaseApp', ['ui.router'])
  .config(Config)
  .directive('addGood', addGood)
  .directive('imageDrop', imageDrop);

angular.bootstrap(document.body, ['showcaseApp']);