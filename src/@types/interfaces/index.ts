export interface ApiProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface SvgIconProps extends SVGAElement {
  iconName?: string;
}

export interface productCart extends ApiProduct {
  quantity: number
}
