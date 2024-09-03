/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/welcome` | `/(root)` | `/(root)/(tabs)` | `/(root)/(tabs)/BatteryStatus` | `/(root)/(tabs)/home` | `/(root)/(tabs)/profile` | `/(root)/(tabs)/rides` | `/(root)/BatteryStatus` | `/(root)/find-ride` | `/(root)/home` | `/(root)/profile` | `/(root)/rides` | `/(root)\(tabs)\infos` | `/(tabs)` | `/(tabs)/BatteryStatus` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/rides` | `/..\components\MyBezierLineChart` | `/..\components\MyProgressChart` | `/BatteryStatus` | `/_sitemap` | `/find-ride` | `/home` | `/profile` | `/rides` | `/sign-in` | `/sign-up` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
