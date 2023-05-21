import PropTypes from 'prop-types';
import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <div>
      <LeaderBoard>
        <BoardHeader>
          <BoardTitle>
            <TitleTop>Forbes</TitleTop>
            <TitleBottom>Leader board</TitleBottom>
          </BoardTitle>
        </BoardHeader>

        <LeaderBoardProfiles>
          {list.map(({ id, name, capital, avatar, isIncrease }) => (
            <ForbesListItem
              key={id}
              avatar={avatar}
              name={name}
              capital={capital}
              isIncrease={isIncrease}
            />
          ))}
        </LeaderBoardProfiles>
      </LeaderBoard>
    </div>
  );
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
