import Raven from 'raven-js';

function init() {
  Raven.config('https://0094169570de4d7dae196760e919bdb4@o411205.ingest.sentry.io/5286114',{
    release: '1-0-0',
    environment: 'development-test',
  }).install()
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
}