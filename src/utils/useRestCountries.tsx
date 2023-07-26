import { useEffect, useState } from 'react'

const REST_COUNTRIES_URL = 'https://restcountries.com/v3.1/all?fields=name';
const REST_CAPITALS_URL = 'https://restcountries.com/v3.1/all?fields=capital';

enum FetchRegionType {
  Countries = "countryName",
  Capitals = "capital",
}

const useRestCountries = (regionType: FetchRegionType) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    let url = '';
    if (regionType === FetchRegionType.Countries) url = REST_COUNTRIES_URL;
    if (regionType === FetchRegionType.Capitals) url = REST_CAPITALS_URL;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data from REST Countries API');
        }
        const responseData = await response.json();
        const extractedNames = regionType === FetchRegionType.Countries
          ? responseData.map((country: { name: { common: string } }) => country.name.common)
          : responseData.map((country: { capital: string }) => country.capital[0]);
        setData(extractedNames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      null;
    };
  }, []);

  return {data}
}

export { FetchRegionType }
export default useRestCountries
