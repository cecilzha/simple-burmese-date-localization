"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLocalize = void 0;
var monthsOfTheYear = new Map([
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
var numbers = new Map([
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
var regexForNumbers = /[0-9]/g;
var regexForMonths = /January|February|March|April|May|June|July|August|September|October|November|December/g;
var SimpleLocalize = function (date) {
    date = date
        .replace(regexForNumbers, function (matched) {
        if (numbers.has(matched)) {
            return numbers.get(matched);
        }
        return '';
    })
        .replace(regexForMonths, function (matched) {
        if (monthsOfTheYear.has(matched)) {
            return monthsOfTheYear.get(matched);
        }
        return '';
    });
    return date;
};
exports.SimpleLocalize = SimpleLocalize;
