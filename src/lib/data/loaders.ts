import qs from 'qs';
import { fetchAPI } from "../fetch-api";
import { Locale, STRAPI_BASE_URL } from "@/config";

const homePageBlocks = {
    blocks: {
        on: {
            "blocks.hero-section": {
                populate: {
                    image: {
                        fields: ["url", "alternativeText"],
                    },
                    cta: true,
                },
            },
            "blocks.info-block": {
                populate: {
                    image: {
                        fields: ["url", "alternativeText"],
                    },
                    cta: true,
                },
            },
        },
    },
};

export async function getHomePage(locale: Locale) {
    const path = `/api/home-page`;
    const url = new URL(path, STRAPI_BASE_URL);
    url.search = qs.stringify({
        populate: homePageBlocks,
        locale
    })
    return fetchAPI(url.href, { method: "GET" });
}