/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/__tests__/sign-up.test` | `/(auth)/__tests__/welcome.test` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/welcome` | `/(root)` | `/(root)/(tabs)` | `/(root)/(tabs)/BatteryStatus` | `/(root)/(tabs)/home` | `/(root)/(tabs)/infos` | `/(root)/(tabs)/profile` | `/(root)/BatteryStatus` | `/(root)/find-ride` | `/(root)/home` | `/(root)/infos` | `/(root)/profile` | `/(tabs)` | `/(tabs)/BatteryStatus` | `/(tabs)/home` | `/(tabs)/infos` | `/(tabs)/profile` | `/BatteryStatus` | `/__tests__/sign-up.test` | `/__tests__/welcome.test` | `/_sitemap` | `/find-ride` | `/home` | `/infos` | `/profile` | `/sign-in` | `/sign-up` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
