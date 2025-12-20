import type { DropMenuItem } from "@/types/drop-menu-item";

export const RESOURCES_MENU: DropMenuItem[] = [
    {
        title: "blog",
        descriptionTranslationKey: "blog_description",
        categoryTranslationKey: "news",
        href: "blog",
    },
    {
        title: "changelog",
        descriptionTranslationKey: "changelog_description",
        categoryTranslationKey: "news",
        href: "changelog",
    },
    {
        title: "collaborate",
        descriptionTranslationKey: "collaborate_description",
        categoryTranslationKey: "community",
        href: "collaborate",
    },
    {
        title: "forum",
        descriptionTranslationKey: "forum_description",
        categoryTranslationKey: "community",
        href: "forum",
    },
    {
        title: "docs",
        descriptionTranslationKey: "docs_description",
        categoryTranslationKey: "learn",
        href: "docs",
    },
    {
        title: "first_steps",
        descriptionTranslationKey: "first_steps_description",
        categoryTranslationKey: "learn",
        href: "first_steps",
    },
    {
        title: "get_product",
        descriptionTranslationKey: "get_product_description",
        categoryTranslationKey: "community",
        href: "get_product",
    }
];