export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  ENDPOINTS: {
    GENERATE: '/api/generation/generate',
    STATUS: '/api/generation/status',
    HISTORY: '/api/generation/history',
    PUSH_DOCKERFILE: '/api/generation/push-dockerfile',
    IMAGES: '/api/generation/images',
    HEALTH: '/health'
  }
} as const;
