import axios from "axios";

// Create axios instance with default config
export const api = axios.create({
  baseURL: "http://localhost:8080/cybershield/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// API endpoints
export const endpoints = {
  quiz: {
    getQuiz: (payload) => api.post("quiz/v1.0/getQuiz", payload),
    submitQuiz: (payload) => api.post("quiz/v1.0/submitQuiz", payload),
    viewQuiz:(payload) => api.post("/quiz/v1.0/viewQuiz",payload),
  },
};

// Request interceptor for API calls
//The interceptor is particularly useful when you need to add something to every request automatically, rather than adding it manually each time you make an API call.
api.interceptors.request.use(
  (config) => {
    // You can add auth headers here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Unauthorized - usually means user needs to login
          console.error("Unauthorized access - redirecting to login");
          window.location.href = "/login";
          return Promise.reject("Please login to continue.");

        case 403:
          // Forbidden - user doesn't have necessary permissions
          console.error("Access forbidden");
          return Promise.reject(
            "You do not have permission to access this resource."
          );

        case 404:
          // Not Found - requested resource doesn't exist
          console.error("Resource not found");
          return Promise.reject("The requested resource was not found.");

        case 500:
          // Server Error
          console.error("Server error occurred:", error.response.data);
          return Promise.reject(
            "An internal server error occurred. Please try again later."
          );

        default:
          // Other error status codes
          console.error(
            "Request failed:",
            error.response.status,
            error.response.data
          );
          return Promise.reject(
            "An unexpected error occurred. Please try again."
          );
      }
    } else if (error.request) {
      // Network error - no response received
      console.error("Network error - no response received:", error.request);
      return Promise.reject(
        "Unable to connect to the server. Please check your internet connection."
      );
    } else {
      // Request setup error
      console.error("Error setting up request:", error.message);
      return Promise.reject("Failed to send request. Please try again.");
    }
  }
);

// Error messages
export const errorMessages = {
  NETWORK_ERROR:
    "Unable to connect to the server. Please check your internet connection.",
  SERVER_ERROR: "An error occurred on the server. Please try again later.",
  TIMEOUT_ERROR: "The request timed out. Please try again.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NOT_FOUND: "The requested resource was not found.",
};

// Helper function to handle API errors
export const handleApiError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        return "Invalid request. Please check your input.";
      case 401:
        return errorMessages.UNAUTHORIZED;
      case 404:
        return errorMessages.NOT_FOUND;
      case 500:
        return errorMessages.SERVER_ERROR;
      default:
        return `An error occurred: ${
          error.response.data.message || "Unknown error"
        }`;
    }
  } else if (error.request) {
    // The request was made but no response was received
    if (error.code === "ECONNABORTED") {
      return errorMessages.TIMEOUT_ERROR;
    }
    return errorMessages.NETWORK_ERROR;
  } else {
    // Something happened in setting up the request that triggered an Error
    return "An error occurred while setting up the request.";
  }
};

export default api;
