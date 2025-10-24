import { API_CONFIG } from './config';

export interface GenerationRequest {
  githubUrl: string;
  githubToken: string;
}

export interface GenerationResponse {
  success: boolean;
  generationId: string;
  message: string;
  error?: string;
}

export interface GenerationStatus {
  success: boolean;
  generation: {
    id: string;
    githubUrl: string;
    techStack?: string[];
    dockerfile?: string;
    buildStatus: 'pending' | 'building' | 'success' | 'error';
    imageId?: string;
    error?: string;
    createdAt: string;
    updatedAt: string;
  };
  error?: string;
}

export interface DockerImage {
  name: string;
  id: string;
  tag: string;
}

export interface ImagesResponse {
  success: boolean;
  images: DockerImage[];
  error?: string;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async generateDockerfile(data: GenerationRequest): Promise<GenerationResponse> {
    return this.request<GenerationResponse>(API_CONFIG.ENDPOINTS.GENERATE, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getGenerationStatus(generationId: string): Promise<GenerationStatus> {
    return this.request<GenerationStatus>(
      `${API_CONFIG.ENDPOINTS.STATUS}/${generationId}`
    );
  }

  async getGenerationHistory(page = 1, limit = 10) {
    return this.request(
      `${API_CONFIG.ENDPOINTS.HISTORY}?page=${page}&limit=${limit}`
    );
  }

  async pushDockerfile(generationId: string, commitMessage?: string) {
    return this.request(API_CONFIG.ENDPOINTS.PUSH_DOCKERFILE, {
      method: 'POST',
      body: JSON.stringify({ generationId, commitMessage }),
    });
  }

  async getDockerImages(): Promise<ImagesResponse> {
    return this.request<ImagesResponse>(API_CONFIG.ENDPOINTS.IMAGES);
  }

  async deleteDockerImage(imageId: string) {
    return this.request(`${API_CONFIG.ENDPOINTS.IMAGES}/${imageId}`, {
      method: 'DELETE',
    });
  }

  async healthCheck() {
    return this.request(API_CONFIG.ENDPOINTS.HEALTH);
  }
}

export const apiService = new ApiService();
