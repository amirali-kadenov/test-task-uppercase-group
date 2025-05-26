import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios"
import axios from "axios"

export class Api {
  private _instance: AxiosInstance

  constructor(baseURL: string) {
    this._instance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  public addRequestInterceptor(
    interceptor: (
      value: InternalAxiosRequestConfig,
    ) => InternalAxiosRequestConfig,
  ) {
    this._instance.interceptors.request.use(interceptor)
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T | null> {
    try {
      const response = await this._instance.get<T>(url, config)
      return response.data
    } catch (e: unknown) {
      console.error(e)
      return null
    }
  }
}
