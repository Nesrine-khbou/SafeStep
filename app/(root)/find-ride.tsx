import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useLocationStore } from "@/store";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { useRoute } from "@react-navigation/native";

const FindRide = () => {
  const route = useRoute();
  const {
    origin_longitude,
    origin_latitude,
    origin_address,
    coords,
    created_at,
  } = route.params;
  return (
    <RideLayout title="Ride">
      <Text className="text-lg font-bold mb-3">
        {" "}
        Adress name : {origin_address}{" "}
      </Text>
      <Text className="text-lg font-bold mb-3"> Coords : {coords} </Text>
      <Text className="text-lg font-bold mb-3">
        {" "}
        Longitude : {origin_longitude}{" "}
      </Text>
      <Text className="text-lg font-bold mb-3">
        {" "}
        Latitude : {origin_latitude}{" "}
      </Text>

      <Text className="text-lg font-bold mb-3"> Time : {created_at} </Text>
    </RideLayout>
  );
};

export default FindRide;
