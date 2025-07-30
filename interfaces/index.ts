
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}


export interface PropertyProps {
  name: string;
  address: Address;
  rating: string;
  category: string[]
  price: number;
  offers: Offers;
  image: string;
  discount: string
}


interface Address{
  state: string;
  city: string;
  country: string
}

interface Offers{
  bed: number;
  shower: number;
  occupants: number
}