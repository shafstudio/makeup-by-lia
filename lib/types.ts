export interface ServiceCardProps {
  image: string;
  title: string;
  price: string;
  priceUnit?: string;
  description: string;
  features: string[];
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  date: string;
  avatar: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface StatCardProps {
  number: string;
  label: string;
}

export interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "link";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  date: string;
  venue: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioImageProps {
  image: string;
  alt: string;
}
