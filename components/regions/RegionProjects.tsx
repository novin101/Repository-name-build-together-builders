import { FourImageFeature, FourImageItem } from "@/components/four-image-feature";

export type RegionProjectItem = FourImageItem & { href?: string };

export function RegionProjects({ title, description, items }: { title: string; description?: string; items: [RegionProjectItem, RegionProjectItem, RegionProjectItem, RegionProjectItem] }) {
  return (
    <FourImageFeature title={title} description={description} items={items} />
  );
}
