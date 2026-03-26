declare module 'lunar-javascript' {
  export class Solar {
    static fromYmdHms(year: number, month: number, day: number, hour: number, minute: number, second: number): Solar;
    getLunar(): Lunar;
    toFullString(): string;
  }

  export class Lunar {
    toString(): string;
    getEightChar(): EightChar;
    getShenShi(): any[];
  }

  export class EightChar {
    getYear(): string;
    getMonth(): string;
    getDay(): string;
    getTime(): string;
    getYearWuXing(): string;
    getMonthWuXing(): string;
    getDayWuXing(): string;
    getTimeWuXing(): string;
    getYearNaYin(): string;
    getMonthNaYin(): string;
    getDayNaYin(): string;
    getTimeNaYin(): string;
    getYearShiShen(): string;
    getMonthShiShen(): string;
    getDayShiShen(): string;
    getTimeShiShen(): string;
    getWuXing(): string[];
    getDaYun(): DaYun[];
  }

  export class DaYun {
    getGanZhi(): string;
    getStartYear(): number;
    getEndYear(): number;
  }
}
