export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}