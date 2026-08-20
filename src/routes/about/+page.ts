import { dev } from '$app/environment';

// Static content with no interactivity — skip hydration in production,
// keep it in dev for HMR.
export const csr = dev;
export const prerender = true;
