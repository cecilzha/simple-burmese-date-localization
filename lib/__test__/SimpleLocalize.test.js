"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleLocalize_1 = require("../SimpleLocalize");
test('Years', function () {
    expect((0, SimpleLocalize_1.SimpleLocalize)('2022')).toBe('၂၀၂၂');
    expect((0, SimpleLocalize_1.SimpleLocalize)('1000')).toBe('၁၀၀၀');
});
test('Months', function () {
    expect((0, SimpleLocalize_1.SimpleLocalize)('January')).toBe('ဇန်နဝါရီ');
    expect((0, SimpleLocalize_1.SimpleLocalize)('February')).toBe('ဖေဖော်ဝါရီ');
    expect((0, SimpleLocalize_1.SimpleLocalize)('March')).toBe('မတ်လ');
    expect((0, SimpleLocalize_1.SimpleLocalize)('April')).toBe('ဧပြီ');
    expect((0, SimpleLocalize_1.SimpleLocalize)('May')).toBe('မေ');
    expect((0, SimpleLocalize_1.SimpleLocalize)('June')).toBe('ဇွန်');
    expect((0, SimpleLocalize_1.SimpleLocalize)('July')).toBe('ဇူလိုင်');
    expect((0, SimpleLocalize_1.SimpleLocalize)('August')).toBe('သြဂုတ်');
    expect((0, SimpleLocalize_1.SimpleLocalize)('September')).toBe('စက်တင်ဘာ');
    expect((0, SimpleLocalize_1.SimpleLocalize)('October')).toBe('အောက်တိုဘာ');
    expect((0, SimpleLocalize_1.SimpleLocalize)('November')).toBe('နိုဝင်ဘာ');
    expect((0, SimpleLocalize_1.SimpleLocalize)('December')).toBe('ဒီဇင်ဘာ');
});
test('Date', function () {
    expect((0, SimpleLocalize_1.SimpleLocalize)('2022 January 1')).toBe('၂၀၂၂ ဇန်နဝါရီ ၁');
    expect((0, SimpleLocalize_1.SimpleLocalize)('2022 November 26')).toBe('၂၀၂၂ နိုဝင်ဘာ ၂၆');
    var randomDate = new Date(2021, 1, 28).toISOString().substring(0, 10).replace(/-/g, ' ');
    expect((0, SimpleLocalize_1.SimpleLocalize)(randomDate)).toBe('၂၀၂၁ ၀၂ ၂၈');
});
