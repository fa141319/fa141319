'use client';

import React from 'react';
import { DaYunItem } from '../types';

interface Props {
  daYun: DaYunItem[];
}

export default function DaYunDisplay({ daYun }: Props) {
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
        🔄 大运排盘
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {daYun.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-200 text-center"
          >
            <div className="text-xs text-amber-700 mb-2">
              {item.startAge} - {item.endAge}岁
            </div>
            
            <div className="flex justify-center items-center space-x-2 mb-2">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold border ${
                  wuXingColors[item.ganWuXing] || 'bg-gray-100'
                }`}
              >
                {item.gan}
              </div>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold border ${
                  wuXingColors[item.zhiWuXing] || 'bg-gray-100'
                }`}
              >
                {item.zhi}
              </div>
            </div>
            
            {item.shiShen && (
              <div className="text-xs text-red-700">
                {item.shiShen}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
