export interface AppListProps {
  title: string;
  app: {
    name: string;
    image: string;
    price: string;
    platforms: string;
  }[];
}
