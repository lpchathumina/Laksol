export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    [key: string]: unknown;
  };
  error?: {
    code?: string;
    details?: unknown;
  };
  timestamp: string;
}

export class ResponseBuilder {
  public static success<T>(data: T, message?: string, meta?: ApiResponse['meta']): ApiResponse<T> {
    return {
      success: true,
      message,
      data,
      meta,
      timestamp: new Date().toISOString(),
    };
  }

  public static error(message: string, code?: string, details?: unknown): ApiResponse<null> {
    return {
      success: false,
      message,
      error: {
        code,
        details,
      },
      timestamp: new Date().toISOString(),
    };
  }
}
