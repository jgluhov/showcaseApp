import 'uikit/css/uikit.gradient.min.css';
import '../styles/app.styl';

import 'angular';
import 'angular-ui-router';

import {Config} from './config.jsx';

angular.module('showcaseApp', ['ui.router'])
  .config(Config);

angular.bootstrap(document.body, ['showcaseApp']);