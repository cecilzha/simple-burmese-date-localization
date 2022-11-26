import { Converter } from '../Converter';

test('Years', () => {
    expect(Converter('2022')).toBe('၂၀၂၂');
    expect(Converter('1000')).toBe('၁၀၀၀');
});

test('Months', () => {
    expect(Converter('January')).toBe('ဇန်နဝါရီ');
    expect(Converter('February')).toBe('ဖေဖော်ဝါရီ');
    expect(Converter('March')).toBe('မတ်လ');
    expect(Converter('April')).toBe('ဧပြီ');
    expect(Converter('May')).toBe('မေ');
    expect(Converter('June')).toBe('ဇွန်');
    expect(Converter('July')).toBe('ဇူလိုင်');
    expect(Converter('August')).toBe('သြဂုတ်');
    expect(Converter('September')).toBe('စက်တင်ဘာ');
    expect(Converter('October')).toBe('အောက်တိုဘာ');
    expect(Converter('November')).toBe('နိုဝင်ဘာ');
    expect(Converter('December')).toBe('ဒီဇင်ဘာ');
});

test('Date', () => {
    expect(Converter('2022 January 1')).toBe('၂၀၂၂ ဇန်နဝါရီ ၁');
    expect(Converter('2022 November 26')).toBe('၂၀၂၂ နိုဝင်ဘာ ၂၆');

    const randomDate = new Date(2021, 1,28)
        .toISOString()
        .substring(0, 10)
        .replace(/-/g, ' ')
    expect(Converter(randomDate)).toBe('၂၀၂၁ ၀၂ ၂၈');
});

