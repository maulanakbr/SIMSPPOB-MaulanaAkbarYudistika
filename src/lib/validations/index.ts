import * as z from 'zod';

export const LoginPayload = z.object({
  email: z.string(),
  password: z.string(),
});

export const RegisterPayload = z.object({
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

export const ProfileUpdatePayload = z.object({
  first_name: z.string(),
  last_name: z.string(),
});

export const ProfileUpdateImagePayload = z.object({
  image: z.string(),
});
