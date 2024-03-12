import { CarPros } from "@/types";

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '00e8cfa41dmshbbbddfd5c103a2ap1b6ecajsn677c640ae1e9',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
        headers: headers,
    }
    );

    const result = await response.json();
    return result;
}

export const calculatedCarRent = (city_mpg: number, year: number) => {

    const basePricePerDay = 50;
    const mileagefactor = 0.1;
    const agefactor = 0.05;

    const mileagerate = city_mpg * mileagefactor;
    const ageRate = (new Date().getFullYear() - year) * agefactor;

    const rentalratePerDay = basePricePerDay + mileagerate + ageRate;

    return rentalratePerDay.toFixed(0)


}

export const generateCarImageUrl = (car: CarPros, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modalFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modalYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}



