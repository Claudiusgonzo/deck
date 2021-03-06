import {module} from 'angular';

export const CORE_WIDGETS_MODULE = 'spinnaker.core.widgets';
module(CORE_WIDGETS_MODULE, [
  require('./accountNamespaceClusterSelector.component'),
  require('./accountRegionClusterSelector.component'),
  require('./scopeClusterSelector.directive'),
  require('./notifier/notifier.component.js'),
  require('./spelText/spelText.decorator'),
  require('./spelText/numberInput.component'),
]);
