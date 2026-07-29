import testimonialsData from "./testimonials.json";

export interface Testimonial {
  id: number;
  index: number;
  name: string;
  position: string;
  content: string;
}

export const testimonials: Testimonial[] = testimonialsData as Testimonial[];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
