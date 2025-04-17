
import React, { useEffect, useState } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import { Cloud, CloudRain, Sun, Thermometer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface WeatherData {
  temperature: number;
  time: Date;
  weatherCode: number;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Ooty coordinates
        const params = {
          latitude: 11.4102,
          longitude: 76.6950,
          hourly: ['temperature_2m', 'weather_code'],
          timezone: 'auto'
        };

        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        
        const hourly = response.hourly()!;
        const current = {
          temperature: Math.round(hourly.variables(0)!.valuesArray()![0]),
          weatherCode: hourly.variables(1)!.valuesArray()![0],
          time: new Date((Number(hourly.time()) + response.utcOffsetSeconds()) * 1000)
        };

        setWeather(current);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (code: number) => {
    // WMO Weather interpretation codes (https://open-meteo.com/en/docs)
    if (code <= 1) return <Sun className="w-12 h-12 text-yellow-500 animate-pulse" />;
    if (code <= 3) return <Cloud className="w-12 h-12 text-gray-400 animate-pulse" />;
    return <CloudRain className="w-12 h-12 text-blue-500 animate-pulse" />;
  };

  if (loading) {
    return (
      <Card className="w-full max-w-sm mx-auto bg-white/80 backdrop-blur-sm animate-pulse">
        <CardContent className="p-6">
          <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  if (!weather) return null;

  return (
    <Card className={cn(
      "w-full max-w-sm mx-auto transform transition-all duration-500",
      "hover:scale-105 bg-white/80 backdrop-blur-sm",
      "border border-gray-100 shadow-lg"
    )}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-xl font-serif text-forest-800">
            Ooty, Tamil Nadu
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            {getWeatherIcon(weather.weatherCode)}
            <div className="flex items-center">
              <Thermometer className="w-6 h-6 text-red-500 mr-2" />
              <span className="text-4xl font-bold text-forest-900">
                {weather.temperature}°C
              </span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            {weather.time.toLocaleDateString('en-IN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
