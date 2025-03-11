import api from "@/config/api";
import { fetchAPI } from "../fetch-api";

export async function getHomePage() {
    const path = "/api/home-page";
    const url = new URL(path, api.STRAPI_BASE_URL);
    return fetchAPI(url.href, { method: "GET" });
}