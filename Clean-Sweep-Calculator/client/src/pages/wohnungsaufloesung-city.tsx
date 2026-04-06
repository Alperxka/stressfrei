import ServiceCityPage from "@/components/service-city-page";
import { wohnungsaufloesungCities } from "@/data/wohnungsaufloesung-cities";
import NotFound from "@/pages/not-found";

interface Props {
  city?: string;
  params?: { city?: string };
}

export default function WohnungsaufloesungCityPage({ city, params }: Props) {
  const resolvedCity = city ?? params?.city ?? "";
  const data = wohnungsaufloesungCities[resolvedCity];
  if (!data) return <NotFound />;
  return <ServiceCityPage serviceType="wohnungsaufloesung" data={data} />;
}
