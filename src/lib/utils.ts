import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL = "https://wa.me/4915229515030";
export const CALENDLY_URL = "https://calendly.com/timmschurig";
export const EMAIL = "mail@timmschurig.com";
export const SITE_URL = "https://timmschurig.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/timm-schurig/";
export const PHONE = "015154033900 8";
export const PHONE_URL = "tel:+49151540339008";
