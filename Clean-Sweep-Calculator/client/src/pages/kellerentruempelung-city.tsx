import ServiceCityPage from "@/components/service-city-page";
import { kellerCities } from "@/data/keller-cities";
import NotFound from "@/pages/not-found";

interface Props {
  city?: string;
  params?: { city?: string };
}

export default function KellerentruempelungCityPage({ city, params }: Props) {
  const resolvedCity = city ?? params?.city ?? "";
  const data = kellerCities[resolvedCity];
  if (!data) return <NotFound />;
  return <ServiceCityPage serviceType="kellerentruempelung" data={data} />;
}
