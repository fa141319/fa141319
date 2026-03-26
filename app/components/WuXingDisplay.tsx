'use client';

import React from 'react';
import { WuXingAnalysis } from '../types';

interface Props {
  wuXing: WuXingAnalysis;
}

export default function WuXingDisplay({ wuXing }: Props) {
  const wuXingData = [
    { name: '金', value: wuXing.jin, color: 'bg-yellow-500', textColor: 'text-yellow-800' },
    { name: '木', value: wuXing.mu, color: 'bg-green-500', textColor: 'text-green-800' },
    { name: '水', value: wuXing.shui, color: 'bg-blue-500', textColor: 'text-blue-800' },
    { name: '火', value: wuXing.huo, color: 'bg-red-500', textColor: 'text-red-800' },
    { name: '土', value: wuXing.tu, color: 'bg-amber-500', textColor: 'text-amber-800' },
  ];

  const total = wuXing.jin + wuXing.mu + wuXing.shui + wuXing.huo + wuXing.tu;
  const max = Math.max(...wuXingData.map(w => w.value));

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-amber-200">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
        ⚖️ 五行分析
      </h2>
      
      {/* 五行统计 */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {wuXingData.map((item) => (
          <div key={item.name} className="text-center">
            <div className={`w-16 h-16 mx-auto rounded-full ${item.color} flex items-center justify-center text-white text-2xl font-bold mb-2 shadow-lg`}>
              {item.name}
            </div>
            <div className={`text-2xl font-bold ${item.textColor}`}>
              {item.value}
            </div>
            <div className="text-xs text-amber-700">
              {total > 0 ? Math.round((item.value / total) * 100) : 0}%
            </div>
          </div>
        ))}
      </div>
      
      {/* 五行条 */}
      <div className="space-y-3">
        {wuXingData.map((item) => (
          <div key={item.name} className="flex items-center space-x-3">
            <div className={`w-8 text-center font-bold ${item.textColor}`}>
              {item.name}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full ${item.color} transition-all duration-500`}
                style={{ width: `${total > 0 ? (item.value / max) * 100 : 0}%` }}
              />
            </div>
            <div className={`w-8 text-right font-bold ${item.textColor}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
      
      {/* 五行简评 */}
      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="font-bold text-amber-900 mb-2">📝 五行简评</h3>
        <p className="text-amber-800 text-sm">
          {total === 0 ? '请输入完整的八字信息' : 
           `五行总数：${total}个。${
             wuXing.jin === max ? '金最旺，' : ''
           }${
             wuXing.mu === max ? '木最旺，' : ''
           }${
             wuXing.shui === max ? '水最旺，' : ''
           }${
             wuXing.huo === max ? '火最旺，' : ''
           }${
             wuXing.tu === max ? '土最旺，' : ''
           }`}
        </p>
      </div>
    </div>
  );
}
