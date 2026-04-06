import ServiceCityPage from "@/components/service-city-page";
import { haushaltsaufloesungCities } from "@/data/haushaltsaufloesung-cities";
import NotFound from "@/pages/not-found";

interface Props {
  city?: string;
  params?: { city?: string };
}

export default function HaushaltsaufloesungCityPage({ city, params }: Props) {
  const resolvedCity = city ?? params?.city ?? "";
  const data = haushaltsaufloesungCities[resolvedCity];
  if (!data) return <NotFound />;
  return <ServiceCityPage serviceType="haushaltsaufloesung" data={data} />;
}
