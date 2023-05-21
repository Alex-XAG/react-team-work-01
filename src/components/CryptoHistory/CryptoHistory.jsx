import PropTypes from 'prop-types';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { getFormatDate } from 'helpers/dateToNow';

export const CryptoHistory = ({ transactions }) => {
  return (
    <div>
      <BaseTable>
        <THead>
          <tr>
            <Th>№</Th>
            <Th>PRICE</Th>
            <Th>AMOUNT</Th>
            <Th>DATE</Th>
          </tr>
        </THead>

        <tbody>
          {transactions.map(({ id, price, amount, date }, index) => {
            return (
              <Tr key={id}>
                <Td>{index + 1}</Td>
                <Td>{price}</Td>
                <Td>{amount}</Td>
                <Td>{getFormatDate(date)}</Td>
              </Tr>
            );
          })}
        </tbody>
      </BaseTable>
    </div>
  );
};

CryptoHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
