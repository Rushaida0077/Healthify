/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
<<<<<<< HEAD
import type * as User from "../User.js";
=======
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
<<<<<<< HEAD
declare const fullApi: ApiFromModules<{
  User: typeof User;
}>;
=======
declare const fullApi: ApiFromModules<{}>;
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
