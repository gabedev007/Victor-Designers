// Import and initialize Vercel Analytics
import { inject } from './analytics/vercel-analytics.js';

// Initialize Vercel Analytics
inject({
    mode: 'auto', // Automatically detect environment (production/development)
    debug: true   // Enable debug logging in development
});
