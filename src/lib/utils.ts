import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Type definition
export type ValueElseUndefined<T> =
  T extends (string | number | boolean | symbol | object) ? T : undefined;

export function getEnvString<T>(key: string, defaultValue?: T): string | ValueElseUndefined<T> {
  return process.env[key] || (defaultValue as any);
}

export function getEnvBool(key: string, defaultValue: boolean = false): boolean {
  const value = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }
  return value.toLowerCase() === 'true';
}

export function getEnvNumber(key: string, defaultValue: number = 0): number {
  const value = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
}