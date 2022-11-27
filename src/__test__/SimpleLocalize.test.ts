import { SimpleLocalize } from '../SimpleLocalize';

test('Years', () => {
  expect(SimpleLocalize('2022')).toBe('၂၀၂၂');
  expect(SimpleLocalize('1000')).toBe('၁၀၀၀');
});

test('Months', () => {
  expect(SimpleLocalize('January')).toBe('ဇန်နဝါရီ');
  expect(SimpleLocalize('February')).toBe('ဖေဖော်ဝါရီ');
  expect(SimpleLocalize('March')).toBe('မတ်လ');
  expect(SimpleLocalize('April')).toBe('ဧပြီ');
  expect(SimpleLocalize('May')).toBe('မေ');
  expect(SimpleLocalize('June')).toBe('ဇွန်');
  expect(SimpleLocalize('July')).toBe('ဇူလိုင်');
  expect(SimpleLocalize('August')).toBe('သြဂုတ်');
  expect(SimpleLocalize('September')).toBe('စက်တင်ဘာ');
  expect(SimpleLocalize('October')).toBe('အောက်တိုဘာ');
  expect(SimpleLocalize('November')).toBe('နိုဝင်ဘာ');
  expect(SimpleLocalize('December')).toBe('ဒီဇင်ဘာ');
});

test('Date', () => {
  expect(SimpleLocalize('2022 January 1')).toBe('၂၀၂၂ ဇန်နဝါရီ ၁');
  expect(SimpleLocalize('2022 November 26')).toBe('၂၀၂၂ နိုဝင်ဘာ ၂၆');

  const randomDate = new Date(2021, 1, 28).toISOString().substring(0, 10).replace(/-/g, ' ');
  expect(SimpleLocalize(randomDate)).toBe('၂၀၂၁ ၀၂ ၂၈');
});
