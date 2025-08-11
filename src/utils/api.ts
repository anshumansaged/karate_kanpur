// API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002';

// API utility functions
export const api = {
  // Base fetch function with error handling
  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  // Auth methods
  auth: {
    async login(credentials: { email: string; password: string }) {
      return api.request('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
    },

    async register(data: { name: string; email: string; password: string; secretKey: string }) {
      return api.request('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },

    async verify(token: string) {
      return api.request('/api/auth/verify', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    },
  },

  // Dojo methods
  dojos: {
    async register(dojoData: any) {
      return api.request('/api/dojos/register', {
        method: 'POST',
        body: JSON.stringify(dojoData),
      });
    },

    async getAll(params?: any) {
      const queryString = params ? `?${new URLSearchParams(params)}` : '';
      return api.request(`/api/dojos${queryString}`);
    },

    async getById(id: string) {
      return api.request(`/api/dojos/${id}`);
    },

    async approve(id: string, token: string) {
      return api.request(`/api/dojos/${id}/approve`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    },

    async reject(id: string, token: string) {
      return api.request(`/api/dojos/${id}/reject`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    },
  },

  // Student methods
  students: {
    async register(studentData: any) {
      return api.request('/api/students/register', {
        method: 'POST',
        body: JSON.stringify(studentData),
      });
    },

    async getAll(token: string, params?: any) {
      const queryString = params ? `?${new URLSearchParams(params)}` : '';
      return api.request(`/api/students${queryString}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    },

    async getById(id: string, token: string) {
      return api.request(`/api/students/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    },

    async approve(id: string, assignedDojoId: string, token: string) {
      return api.request(`/api/students/${id}/approve`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ assignedDojoId }),
      });
    },
  },

  // Event methods
  events: {
    async getAll(params?: any) {
      const queryString = params ? `?${new URLSearchParams(params)}` : '';
      return api.request(`/api/events${queryString}`);
    },

    async getUpcoming(limit = 10) {
      return api.request(`/api/events/upcoming?limit=${limit}`);
    },

    async getById(id: string) {
      return api.request(`/api/events/${id}`);
    },

    async register(id: string, registrationData: any) {
      return api.request(`/api/events/${id}/register`, {
        method: 'POST',
        body: JSON.stringify(registrationData),
      });
    },

    async create(eventData: any, token: string) {
      return api.request('/api/events', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });
    },
  },

  // Admin methods
  admin: {
    async getDashboard(token: string) {
      return api.request('/api/admin/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    },

    async getPendingApprovals(token: string) {
      return api.request('/api/admin/pending-approvals', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    },

    async getProfile(token: string) {
      return api.request('/api/admin/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    },

    async changePassword(data: { currentPassword: string; newPassword: string }, token: string) {
      return api.request('/api/admin/change-password', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
    },
  },

  // Contact form
  contact: {
    async submit(data: { name: string; email: string; phone: string; subject: string; message: string }) {
      return api.request('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
  },

  // Health check
  async health() {
    return api.request('/api/health');
  },
};

export default api;
