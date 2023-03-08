// eslint-disable-next-line import/no-extraneous-dependencies
import { mount, VueWrapper } from '@vue/test-utils';
import ListOfTeasers from '@/components/ListOfTeasers.vue';
import { LotteryTeasers } from '@/types/LotteryTeasers';

describe('ListOfTeasers', () => {
  let wrapper: VueWrapper<any>;
  beforeAll(() => {
    const lotteryTeasers = {
      __typename: 'LotteryTeaserPayload',
      id: 'MegaMillions',
      drawDate: '2023-03-08T04:00:00.000Z',
      closingDate: '2023-03-08T03:00:00.000Z',
      comingSoon: false,
      jackpotSize: {
        __typename: 'Money',
        currency: 'USD',
        value: 18800000000,
      },
      jackpotType: 'DYNAMIC',
      lotteryType: 'NUMBER_LOTTERY',
      quickPick: {
        __typename: 'QuickPickConfiguration',
        addOns: [
          {
            __typename: 'AddOnOutput',
            name: 'megaplier',
          },
        ],
        plays: 5,
      },
    };
    const search = 'MegaMillions';

    wrapper = mount(ListOfTeasers, {
      props: {
        lotteryTeasers: [lotteryTeasers],
        search,
      },
    });
  });
  it('JackpotPrice Format in USD', () => {
    expect(wrapper.find('v-card-subtitle').text()).toBe('MegaMillions');
  });
});
