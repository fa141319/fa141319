/**
 * 八字排盘核心逻辑
 * 基于 lunar-javascript 库
 */

import { Solar, Lunar, EightChar } from 'lunar-javascript';
import type { BaZiResult, Pillar, DaYunItem, ShenShaItem, WuXingAnalysis } from '../types';

/**
 * 排盘主函数
 */
export function calculateBaZi(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  gender: 'male' | 'female'
): BaZiResult {
  // 创建阳历对象
  const solar = Solar.fromYmdHms(year, month, day, hour, minute, 0);
  
  // 转换为阴历
  const lunar = solar.getLunar();
  
  // 获取八字
  const eightChar = lunar.getEightChar();
  
  // 四柱
  const yearPillar = parsePillar(eightChar.getYear(), eightChar.getYearWuXing(), eightChar.getYearNaYin());
  const monthPillar = parsePillar(eightChar.getMonth(), eightChar.getMonthWuXing(), eightChar.getMonthNaYin());
  const dayPillar = parsePillar(eightChar.getDay(), eightChar.getDayWuXing(), eightChar.getDayNaYin());
  const hourPillar = parsePillar(eightChar.getTime(), eightChar.getTimeWuXing(), eightChar.getTimeNaYin());
  
  // 十神
  yearPillar.shiShen = eightChar.getYearShiShen();
  monthPillar.shiShen = eightChar.getMonthShiShen();
  dayPillar.shiShen = eightChar.getDayShiShen();
  hourPillar.shiShen = eightChar.getTimeShiShen();
  
  // 藏干
  yearPillar.cangGan = getCangGan(yearPillar.zhi);
  monthPillar.cangGan = getCangGan(monthPillar.zhi);
  dayPillar.cangGan = getCangGan(dayPillar.zhi);
  hourPillar.cangGan = getCangGan(hourPillar.zhi);
  
  // 大运
  const daYun = calculateDaYun(eightChar, gender);
  
  // 神煞
  const shenSha = calculateShenSha(lunar, eightChar);
  
  // 五行分析
  const wuXing = analyzeWuXing(eightChar);
  
  return {
    solarDate: solar.toFullString(),
    lunarDate: lunar.toString(),
    gender,
    yearPillar,
    monthPillar,
    dayPillar,
    hourPillar,
    daYun,
    shenSha,
    wuXing,
  };
}

function parsePillar(pillar: string, wuXing: string, naYin: string): Pillar {
  const gan = pillar.charAt(0);
  const zhi = pillar.charAt(1);
  
  return {
    gan,
    zhi,
    ganWuXing: getGanWuXing(gan),
    zhiWuXing: getZhiWuXing(zhi),
    naYin,
  };
}

function getGanWuXing(gan: string): string {
  const wuXingMap: Record<string, string> = {
    '甲': '木', '乙': '木',
    '丙': '火', '丁': '火',
    '戊': '土', '己': '土',
    '庚': '金', '辛': '金',
    '壬': '水', '癸': '水',
  };
  return wuXingMap[gan] || '';
}

function getZhiWuXing(zhi: string): string {
  const wuXingMap: Record<string, string> = {
    '子': '水', '丑': '土',
    '寅': '木', '卯': '木',
    '辰': '土', '巳': '火',
    '午': '火', '未': '土',
    '申': '金', '酉': '金',
    '戌': '土', '亥': '水',
  };
  return wuXingMap[zhi] || '';
}

function getCangGan(zhi: string): string[] {
  const cangGanMap: Record<string, string[]> = {
    '子': ['癸'],
    '丑': ['己', '癸', '辛'],
    '寅': ['甲', '丙', '戊'],
    '卯': ['乙'],
    '辰': ['戊', '乙', '癸'],
    '巳': ['丙', '戊', '庚'],
    '午': ['丁', '己'],
    '未': ['己', '丁', '乙'],
    '申': ['庚', '壬', '戊'],
    '酉': ['辛'],
    '戌': ['戊', '辛', '丁'],
    '亥': ['壬', '甲'],
  };
  return cangGanMap[zhi] || [];
}

function calculateDaYun(eightChar: EightChar, gender: 'male' | 'female'): DaYunItem[] {
  const daYunList = eightChar.getDaYun();
  const result: DaYunItem[] = [];
  
  for (let i = 0; i < daYunList.length; i++) {
    const daYun = daYunList[i];
    const pillar = daYun.getGanZhi();
    result.push({
      index: i,
      startAge: daYun.getStartYear(),
      endAge: daYun.getEndYear(),
      gan: pillar.charAt(0),
      zhi: pillar.charAt(1),
      ganWuXing: getGanWuXing(pillar.charAt(0)),
      zhiWuXing: getZhiWuXing(pillar.charAt(1)),
    });
  }
  
  return result;
}

function calculateShenSha(lunar: any, eightChar: EightChar): ShenShaItem[] {
  const result: ShenShaItem[] = [];
  
  // 从 lunar 获取神煞
  const shenShaList = lunar.getShenShi();
  
  // 简化处理，实际需要根据具体神煞库来解析
  // 这里添加常见神煞
  
  return result;
}

function analyzeWuXing(eightChar: EightChar): WuXingAnalysis {
  // 统计五行数量
  const wuXing = eightChar.getWuXing();
  
  let jin = 0, mu = 0, shui = 0, huo = 0, tu = 0;
  
  wuXing.forEach((wx: string) => {
    if (wx === '金') jin++;
    else if (wx === '木') mu++;
    else if (wx === '水') shui++;
    else if (wx === '火') huo++;
    else if (wx === '土') tu++;
  });
  
  const total = jin + mu + shui + huo + tu;
  const avg = total / 5;
  
  return {
    jin,
    mu,
    shui,
    huo,
    tu,
    strong: '',
    weak: '',
  };
}
