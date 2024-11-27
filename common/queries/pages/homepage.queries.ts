

import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`*[_type == "home"][0] {
    _id,
    title,
    entry,
    image {
        "url": asset -> url,
        alt,
    },
    text {
        "" : _type == "block" => @,
        "h1": _type == "heading" && level == 1 => @,
        "h2": _type == "heading" && level == 2 => @,
        "h3": _type == "heading" && level == 3 => @,
        "h4": _type == "heading" && level == 4 => @,}
}`