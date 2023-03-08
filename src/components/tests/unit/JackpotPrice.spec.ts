// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils';
import JackpotPrice from '@/components/JackpotPrice.vue';
import { JackpotSize } from '@/types/JackpotSize';

describe('JackpotPrice', () => {
  it('JackpotPrice Format in USD', () => {
    const jackpotSize: JackpotSize = {
      currency: 'USD',
      value: 18800000000,
      __typename: 'string',
    };
    const wrapper = mount(JackpotPrice, {
      props: { jackpotSize },
    });
    expect(wrapper.find('.JackpotPrice').text()).toBe('$18,800,000,000.00');
  });
  it('JackpotPrice Format in CHF', () => {
    const jackpotSize: JackpotSize = {
      currency: 'GBP',
      value: 18800000000,
      __typename: 'string',
    };
    const wrapper = mount(JackpotPrice, {
      props: { jackpotSize },
    });
    expect(wrapper.find('.JackpotPrice').text()).toBe('£18,800,000,000.00');
  });
});
