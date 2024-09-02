import { Text, View } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useDriverStore, useLocationStore } from "@/store";
import { calculateRegion, generateMarkersFromData } from "@/lib/map";
import { useEffect, useState } from "react";

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const [region, setRegion] = useState(null);

  useEffect(() => {
    // Calculate and set the region whenever user location or destination changes
    if (userLatitude && userLongitude) {
      const calculatedRegion = calculateRegion({
        userLongitude,
        userLatitude,
        destinationLatitude,
        destinationLongitude,
      });
      setRegion(calculatedRegion);
    }
  }, [userLatitude, userLongitude, destinationLatitude, destinationLongitude]);

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    ></MapView>
  );
};

export default Map;
