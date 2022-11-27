const monthsOfTheYear = new Map<string, string>([
  ['January', 'ဇန်နဝါရီ'],
  ['February', 'ဖေဖော်ဝါရီ'],
  ['March', 'မတ်လ'],
  ['April', 'ဧပြီ'],
  ['May', 'မေ'],
  ['June', 'ဇွန်'],
  ['July', 'ဇူလိုင်'],
  ['August', 'သြဂုတ်'],
  ['September', 'စက်တင်ဘာ'],
  ['October', 'အောက်တိုဘာ'],
  ['November', 'နိုဝင်ဘာ'],
  ['December', 'ဒီဇင်ဘာ'],
]);

const numbers = new Map<string, string>([
  ['1', '၁'],
  ['2', '၂'],
  ['3', '၃'],
  ['4', '၄'],
  ['5', '၅'],
  ['6', '၆'],
  ['7', '၇'],
  ['8', '၈'],
  ['9', '၉'],
  ['0', '၀'],
]);

const regexForNumbers = /[0-9]/g;
const regexForMonths = /January|February|March|April|May|June|July|August|September|October|November|December/g;
export const SimpleLocalize = (date: string) => {
  date = date
    .replace(regexForNumbers, (matched: string): string => {
      if (numbers.has(matched)) {
        return numbers.get(matched) as string;
      }
      return '';
    })
    .replace(regexForMonths, (matched: string): string => {
      if (monthsOfTheYear.has(matched)) {
        return monthsOfTheYear.get(matched) as string;
      }
      return '';
    });

  return date;
};
