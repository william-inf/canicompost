// To support async/await
import 'regenerator-runtime/runtime';

export function configure(aurelia) {
  aurelia.use.feature('resources');
  aurelia.use.standardConfiguration();
  aurelia.use.plugin('aurelia-animator-css');
  if (process.env.NODE_ENV === 'production') {
    aurelia.use.developmentLogging('warn');
  } else {
    aurelia.use.developmentLogging('info');
    aurelia.use.plugin('aurelia-testing');
  }
  aurelia.start().then(() => aurelia.setRoot());
}
