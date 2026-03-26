/**
 * 类型定义
 */

export interface BirthInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  gender: 'male' | 'female';
}

export interface Pillar {
  gan: string;
  zhi: string;
  ganWuXing: string;
  zhiWuXing: string;
  shiShen?: string;
  cangGan?: string[];
  naYin?: string;
}

export interface DaYunItem {
  index: number;
  startAge: number;
  endAge: number;
  gan: string;
  zhi: string;
  ganWuXing: string;
  zhiWuXing: string;
  shiShen?: string;
}

export interface ShenShaItem {
  name: string;
  pillar: 'year' | 'month' | 'day' | 'hour';
  description: string;
  type: 'ji' | 'xiong';
}

export interface WuXingAnalysis {
  jin: number;
  mu: number;
  shui: number;
  huo: number;
  tu: number;
  strong: string;
  weak: string;
}

export interface BaZiResult {
  solarDate: string;
  lunarDate: string;
  gender: 'male' | 'female';
  yearPillar: Pillar;
  monthPillar: Pillar;
  dayPillar: Pillar;
  hourPillar: Pillar;
  daYun: DaYunItem[];
  shenSha: ShenShaItem[];
  wuXing: WuXingAnalysis;
}
