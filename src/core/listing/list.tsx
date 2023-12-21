/**
 * Virtualized List Component
 *
 * @component
 */

import { VirtualizedList } from 'react-native';

import type { FC } from 'react';
import type ListProps from './list-props';

const Virtualized: FC<ListProps<unknown>> = (
  { data, renderItem, verticalIndicator = false,
    horizontal = false, horizontalIndicator = false,
    onScroll }: ListProps<unknown>): JSX.Element => (
  <VirtualizedList
    bounces={false}
    onScroll={onScroll}
    initialNumToRender={data?.length || 0}
    getItem={(_, i: number) => {
      const item = data[i];
      return item ? item : {}
    }}
    getItemCount={() => data?.length || 0}
    keyExtractor={
      (item: Partial<{ id: string }>,
        index: number) => item.id?.toString() || index.toString()}
    renderItem={renderItem}
    horizontal={horizontal}
    showsHorizontalScrollIndicator={horizontalIndicator}
    showsVerticalScrollIndicator={verticalIndicator}
  />
)

export default Virtualized