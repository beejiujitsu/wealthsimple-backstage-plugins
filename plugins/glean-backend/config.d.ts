import { SchedulerServiceTaskScheduleDefinitionConfig } from '@backstage/backend-plugin-api';

export interface Config {
  /**
   * Glean plugin configuration.
   */
  glean?: {
    /**
     * The index url of the Glean API
     */
    apiIndexUrl: string;

    /**
     * The data source of the Glean API to use
     * See: https://support.glean.com/hc/en-us/articles/30038992119451-Data-Sources
     */
    datasource: string;

    /**
     * The api token
     * @visibility secret
     */
    token: string;

    /**
     * The Scheduler for how often to run Glean indexing
     */
    schedule?: SchedulerServiceTaskScheduleDefinitionConfig;
  };
}
