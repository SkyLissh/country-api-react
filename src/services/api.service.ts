import Axios from 'axios';
import { Country } from '../models/country.model';

export class ApiService {
	static async getAllCountries(): Promise<Country[] | null> {
		try {
			const res = await Axios.get<Country[]>('https://restcountries.eu/rest/v2/all');
			return res.data;
		} catch (error) {
			console.error('Error Get All countries: ', error);
			return null;
		}
	}

	static async getCountriesByRegion(region: string): Promise<Country[] | null> {
		try {
			const res = await Axios.get<Country[]>(
				`https://restcountries.eu/rest/v2/region/${region}`
			);
			return res.data;
		} catch (error) {
			console.error('Error Get Countries By Region: ', error);
			return null;
		}
	}

	static async getCountryByName(name: string): Promise<Country | null> {
		try {
			const res = await Axios.get<Country>(`https://restcountries.eu/rest/v2/name/${name}`);
			return res.data;
		} catch (error) {
			console.error('Error Get Country By Name: ', error);
			return null;
		}
	}
}
