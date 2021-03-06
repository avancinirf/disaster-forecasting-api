import { AxiosStatic } from 'axios';

export interface WeatherForecastDaily {
	hourly: 
}

export interface WeatherForecastResponse {

}

export class WeatherForecast {
	readonly apiKey = '9c4a4e1bbfba495ef1cb575b45243ba1';
	constructor(protected request: AxiosStatic) {}

	public async fetchPoint(lat: number, lng: number): Promise<{}> {
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=&${this.apiKey}`;
		return this.request.get(url);
	}
}