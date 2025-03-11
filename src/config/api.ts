import { getEnvString } from "@/lib/utils";

const api = {
    STRAPI_BASE_URL: getEnvString("STRAPI_BASE_URL", "http://localhost:1337"),
}

export default api;