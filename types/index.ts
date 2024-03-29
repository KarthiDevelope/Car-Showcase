import { MouseEventHandler } from "react";


export interface customButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?:string;
  isDisabled?:boolean
}

export interface SearchManufacturorProps {
  manufacturor: string;
  setManufacturor: (manufacturor: string) => void;
}

export interface CarPros {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

