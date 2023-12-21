import RenderHtml from 'react-native-render-html';

import { wp } from '@utils/_dimensions';

import type { FC } from 'react';
import type ParagraphProps from './paragraph-props';

const renderHTML: FC<ParagraphProps> = ({ html }: ParagraphProps) => (
  <RenderHtml
    source={{ html }}
    contentWidth={wp(100)}
  />
);
export default renderHTML;