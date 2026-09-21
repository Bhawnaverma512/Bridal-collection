import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const consultationSchema = z.object({
  name: z.string().min(2), email: z.string().email(), phone: z.string().min(7),
  weddingDate: z.string().optional(), weddingCity: z.string().min(2), weddingFunction: z.string().min(2),
  preferredStyle: z.string().min(2), budgetRange: z.string().min(2), colorPreference: z.string().min(2),
  tailoringPreference: z.string().min(2), preferredConsultationDate: z.string().optional(), message: z.string().optional(),
});

export const requestConsultation = createServerFn({ method: "POST" })
  .inputValidator((data) => consultationSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env['SUPABASE_URL'];
    const key = process.env['SUPABASE_ANON_KEY'] ?? process.env['SUPABASE_PUBLISHABLE_KEY'];
    if (!url || !key) throw new Error("Consultation service is unavailable.");
    const client = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await client.from("bridal_consultations").insert({
      name: data.name, email: data.email, phone: data.phone,
      wedding_date: data.weddingDate || null, wedding_city: data.weddingCity,
      wedding_function: data.weddingFunction, preferred_style: data.preferredStyle,
      budget_range: data.budgetRange, color_preference: data.colorPreference,
      tailoring_preference: data.tailoringPreference,
      preferred_consultation_date: data.preferredConsultationDate || null,
      message: data.message || null,
    });
    if (error) throw new Error(error.message);
    return { success: true };
  });