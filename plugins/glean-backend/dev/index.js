// This package should be installed as a `dev` dependency
import { createBackend } from '@backstage/backend-defaults';

const backend = createBackend();
// Path to the file where the plugin is export as default
backend.add(import('../src'));
backend.start();
