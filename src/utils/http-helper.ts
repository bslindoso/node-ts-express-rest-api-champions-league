import { HttpResponse } from "../models/http-response-model"
import { StatusCode } from "./status-code"

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: StatusCode.OK,
    body: data
  }
}

export const created = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: StatusCode.CREATED,
    body: { message: `Created successfully`, data: { ...data } }
  }
}

export const noContent = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: StatusCode.NO_CONTENT,
    body: message ? { message: message } : null
  }
}

export const badRequest = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: StatusCode.BAD_REQUEST,
    body: message ? { message: message } : null
  }
}

export const notFound = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: StatusCode.NOT_FOUND,
    body: message ? { message: message } : null
  }
}