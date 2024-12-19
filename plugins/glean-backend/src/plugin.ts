import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { catalogServiceRef } from '@backstage/plugin-catalog-node/alpha';

import { GleanIndexClient } from './client/GleanIndexClient';
import { readScheduleConfigOptions } from './config';
import { TechDocsClient } from './client/TechDocsClient';

/**
 * glean-backend plugin
 *
 * @public
 */
export const gleanPlugin = createBackendPlugin({
  pluginId: 'glean',
  register(env) {
    env.registerInit({
      deps: {
        auth: coreServices.auth,
        catalogApi: catalogServiceRef,
        config: coreServices.rootConfig,
        discoveryApi: coreServices.discovery,
        logger: coreServices.logger,
        scheduler: coreServices.scheduler,
      },
      async init({
        auth,
        catalogApi,
        config,
        discoveryApi,
        logger,
        scheduler,
      }) {
        await scheduler.scheduleTask({
          ...readScheduleConfigOptions(config),
          id: 'glean-backend-batch-index',
          fn: async () => {
            await GleanIndexClient.create({
              auth,
              catalogApi,
              config,
              discoveryApi,
              logger,
            }).batchIndex(
              await TechDocsClient.create({
                auth,
                catalogApi,
                config,
                discoveryApi,
                logger,
              }).getTechDocsEntities(),
            );
          },
        });
      },
    });
  },
});
