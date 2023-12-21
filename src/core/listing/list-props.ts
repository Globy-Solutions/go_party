import { ListRenderItem } from "react-native";

type ListProps<DataProps> = {
  data: DataProps[];
  verticalIndicator?: boolean;
  horizontalIndicator?: boolean;
  horizontal?: boolean;
  renderItem: ListRenderItem<any>;
  onScroll?: (event: any) => void;
}

export default ListProps