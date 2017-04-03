import * as RealAPI from "./API";
import * as MockAPI from "./MockAPI";

export const API = process.env.NODE_ENV === "development" ? MockAPI : RealAPI;