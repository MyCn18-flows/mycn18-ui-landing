import type { IconName } from "./icon-name";

export type FeaturesConfig = {
  title: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
    icon: IconName;
  }[]
};