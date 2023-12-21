/**
 * Represents a Common Card.
 * @constructor
 * @param {string} children - Display text.
 * @param {StyleProp} style - Visual styles.
 * @return {JSX.Element} Card
 */


import CardCommon from './card-common';
import CardWithImageBackground from './card-image-background';

import type { CardProps } from './card-props';

const Card = ({ variant, ...props }: CardProps): JSX.Element => {

  switch (variant) {
    case 'withImageBackground':
      return (<CardWithImageBackground {...props} />);
    default:
      return (<CardCommon {...props} />)
  }

}

export default Card