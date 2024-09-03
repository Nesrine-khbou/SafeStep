import { useUser } from "@clerk/clerk-expo";
import * as Location from "expo-location";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import GoogleTextInput from "@/components/GoogleTextInput";
import Map from "@/components/Map";
import { useLocationStore } from "@/store";
import { useEffect, useState } from "react";
import { router } from "expo-router";

const recentLocations = [
  {
    ride_id: "1",
    origin_address: "MG Maxi",
    coords: "PPWF+M8M, P13, Sfax",
    origin_latitude: "34.7351",
    origin_longitude: "10.7605",
    created_at: "2024-08-12 05:19:20",
  },
  {
    ride_id: "2",
    origin_address: "Zoo Touta",
    coords: "PPPV+29F, Sfax",
    origin_latitude: "34.7273",
    origin_longitude: "10.7017",
    created_at: "2024-08-12 06:12:17",
  },
  {
    ride_id: "3",
    origin_address: "Fun lac",
    coords: "RP58+46C, Rte Bouzayyen, Sfax",
    origin_latitude: "34.80913293107133",
    origin_longitude: "10.715822180376756",
    created_at: "2024-08-12 18:43:548",
  },
  {
    ride_id: "4",
    origin_address:
      "Higher Institute of Computer Science and Multimedia of Sfax",
    coords: "RQQ4+MVX، pôle technologique de sfax, Sakiet Ezzit 3021",
    origin_latitude: "34.840768780396346",
    origin_longitude: "10.757106742330993",
    created_at: "2024-08-12 08:49:01",
  },
];

export default function Page() {
  const { setUserLocation, setDestinationLocation } = useLocationStore();
  const { user } = useUser();
  const loading = true;

  const [hasPermission, setHasPermission] = useState(false);

  const handleSignOut = () => {};

  const handleDestinationPress = () => {
    const location = {
      latitude: 34.7484,
      longitude: 10.7632,
      address: "RQQ4+MVX، pôle technologique de sfax, Sakiet Ezzit 3021",
    };
    setDestinationLocation(location);

    router.push("/(root)/find-ride");
  };

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setHasPermission(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync();

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,

        address: `${address[0].name}, ${address[0].region}`,
      });
    };

    requestLocation();
  }, []);

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentLocations?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text className="text-sm"> No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-xl capitalize font-bold">
                Welcome{", "}
                {user?.firstName ||
                  user?.emailAddresses[0].emailAddress.split("@")[0]}{" "}
                👋
              </Text>
              <TouchableOpacity
                onPress={handleSignOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white "
              >
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>

            <>
              <Text className="text-xl font-bold mt-5 mb-3">
                Your Current Location
              </Text>
              <View className="flex flex-row items-center bg-transparent h-[300px]">
                <Map />
              </View>
            </>
            <Text className="text-xl font-bold mt-5 mb-3">
              Recent Locations
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  );
}
