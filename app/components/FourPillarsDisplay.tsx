'use client';

import React from 'react';
import { BaZiResult } from '../types';

interface Props {
  result: BaZiResult;
}

export default function FourPillarsDisplay({ result }: Props) {
  const pillars = [
    { name: '年柱', data: result.yearPillar },
    { name: '月柱', data: result.monthPillar },
    { name: '日柱', data: result.dayPillar },
    { name: '时柱', data: result.hourPillar },
  ];

  const wuXingColors: Record<string, string> = {
    '金': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    '木': 'bg-green-100 text-green-800 border-green-300',
    '水': 'bg-blue-100 text-blue-800 border-blue-300',
    '火': 'bg-red-100 text-red-800 border-red-300',
    '土': 'bg-amber-100 text-amber-800 border-amber-300',
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-amber-200">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
        📊 四柱八字
      </h2>
      
      {/* 日期信息 */}
      <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
        <div className="text-center space-y-2">
          <p className="text-amber-900">
            <span className="font-medium">阳历：</span>
            {result.solarDate}
          </p>
          <p className="text-amber-900">
            <span className="font-medium">阴历：</span>
            {result.lunarDate}
          </p>
        </div>
      </div>
      
      {/* 四柱 */}
      <div className="grid grid-cols-4 gap-4">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-amber-50 to-red-50 rounded-xl p-4 border-2 border-amber-300 shadow-md"
          >
            {/* 柱名 */}
            <div className="text-center text-amber-800 font-bold mb-3 text-sm">
              {pillar.name}
            </div>
            
            {/* 天干 */}
            <div className="text-center mb-2">
              <div
                className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full text-2xl font-bold border-2 ${
                  wuXingColors[pillar.data.ganWuXing] || 'bg-gray-100'
                }`}
              >
                {pillar.data.gan}
              </div>
              <div className="text-xs text-amber-700 mt-1">
                {pillar.data.ganWuXing}
              </div>
            </div>
            
            {/* 十神 */}
            {pillar.data.shiShen && (
              <div className="text-center text-xs text-red-700 mb-2">
                {pillar.data.shiShen}
              </div>
            )}
            
            {/* 地支 */}
            <div className="text-center">
              <div
                className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full text-2xl font-bold border-2 ${
                  wuXingColors[pillar.data.zhiWuXing] || 'bg-gray-100'
                }`}
              >
                {pillar.data.zhi}
              </div>
              <div className="text-xs text-amber-700 mt-1">
                {pillar.data.zhiWuXing}
              </div>
            </div>
            
            {/* 纳音 */}
            {pillar.data.naYin && (
              <div className="text-center text-xs text-amber-600 mt-3 pt-2 border-t border-amber-200">
                纳音：{pillar.data.naYin}
              </div>
            )}
            
            {/* 藏干 */}
            {pillar.data.cangGan && pillar.data.cangGan.length > 0 && (
              <div className="text-center text-xs text-amber-600 mt-2">
                藏干：{pillar.data.cangGan.join('、')}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
