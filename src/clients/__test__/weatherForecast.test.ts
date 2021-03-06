import { WeatherForecast } from '@src/clients/weatherForecast';
import axios from 'axios';
import weatherForecastAPIResponseData from '@test/fixtures/weatherForecast_by_hour_for_7days.json';
import weatherForecastAPIResponseDataNormalized from '@test/fixtures/weatherForecast_by_hour_for_7days_normalized.json';

jest.mock('axios');

describe('WeatherForecast client', () => {
	it('Should return the normalized forecast from Weather Forecast Service', async () => {
		const lat = -22.9325413;
		const lng = -43.4928949;

		axios.get = jest.fn().mockResolvedValue(weatherForecastAPIResponseData);

		const weatherForecast = new WeatherForecast(axios);
		const response = await weatherForecast.fetchPoint(lat, lng);
		expect(response).toEqual(weatherForecastAPIResponseDataNormalized);

	});
});