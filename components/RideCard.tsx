import { Ride } from "@/types/type";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "@/constants";
import { formatDate } from "@/lib/utils";
import { router } from "expo-router";

const handleSignOut = (ride) => {
  router.push({
    pathname: "/(root)/find-ride",
    params: {
      origin_longitude: ride.origin_longitude,
      origin_latitude: ride.origin_latitude,
      origin_address: ride.origin_address,
      coords: ride.coords,
      created_at: ride.created_at,
    },
  });
};

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <TouchableOpacity onPress={() => handleSignOut(ride)}>
      <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
        <View className="flex flex-col items-center justify-center p-3">
          <View className="flex flex-row items-center justify-between">
            <Image
              source={{
                uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.origin_longitude},${ride.origin_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
              }}
              className="w-[80px] h-[90px] rounded-lg "
            />

            <View className="flex flex-col mx-5 gap-y-5 flex-1">
              <View className="flex flex-row items-center gap-x-2 ">
                <Image source={icons.point} className="w-5 h-5" />
                <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                  {ride.origin_address}
                </Text>
              </View>

              <View className="flex flex-row items-center gap-x-2 ">
                <Image source={icons.to} className="w-5 h-5" />
                <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                  {ride.coords}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center">
            <View className="flex flex-row items-center w-full justify-between mb-5">
              <Text className="text-md font-JakartaMedium text-gray-500">
                Date & Time
              </Text>
              <Text className="text-md font-JakartaMedium text-gray-500">
                {formatDate(ride.created_at)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RideCard;
