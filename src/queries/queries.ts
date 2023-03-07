import gql from 'graphql-tag';

const getLottoDraws = gql`query DrawsResultList($filter: DrawResultsFilterInput, $licensedTerritory: String!, $limit: Int!, $offset: Int!) {
    drawHistory(
      licensedTerritory: $licensedTerritory
      limit: $limit
      offset: $offset
      filter: $filter
      ) {
        draws {
          addOns
          drawDate
          drawnNumbers {
            numbers {
              name
              values
            }
          }
          id
          lotteryId
        }
      }
    }`;

const getLottoTeasers = gql`
query LotteryTeasers($licensedTerritory: String!) {
  lotteryTeasers(licensedTerritory: $licensedTerritory) {
    id
    drawDate
    closingDate
    comingSoon
    jackpotSize {
      currency
      value
    }
    jackpotType
    lotteryType
    quickPick {
      addOns {
        name
      }
      plays
    }
  }
}
`;

export { getLottoTeasers, getLottoDraws };
