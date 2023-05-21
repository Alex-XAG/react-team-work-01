import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";

export const StatisticItem = ({total, title, icon}) => {
  return (
    <div>
      <StatisticBox >
      <IconContext.Provider value={{ size: '1.5em' }}>
  <div>
   {icon}
  </div>
</IconContext.Provider>
        <StatisticCounter>{total}</StatisticCounter>
        <StatisticText>{title}</StatisticText>
      </StatisticBox>
    </div>
  );
};

StatisticItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
