export const API_CONFIG = {
  BASE_URL: 'https://dockgenerator-server-2.onrender.com',
  ENDPOINTS: {
    GENERATE: '/api/generation/generate',
    STATUS: '/api/generation/status',
    HISTORY: '/api/generation/history',
    PUSH_DOCKERFILE: '/api/generation/push-dockerfile',
    IMAGES: '/api/generation/images',
    HEALTH: '/health'
  }
} as const;
