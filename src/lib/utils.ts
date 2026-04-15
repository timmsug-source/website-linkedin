import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL = "https://wa.me/4915123456789";
export const CALENDLY_URL = "https://calendly.com/timmschurig";
export const EMAIL = "kontakt@timmschurig.de";
export const SITE_URL = "https://timmschurig.de";
export const LINKEDIN_URL = "https://linkedin.com/in/timmschurig";
