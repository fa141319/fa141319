'use client';

import React, { useState } from 'react';
import { calculateBaZi } from '../lib/bazi';
import { BaZiResult } from '../types';
import FourPillarsDisplay from './FourPillarsDisplay';
import DaYunDisplay from './DaYunDisplay';
import WuXingDisplay from './WuXingDisplay';

export default function BirthInputForm() {
  const [formData, setFormData] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    hour: 12,
    minute: 0,
    gender: 'male' as 'male' | 'female',
  });
  
  const [result, setResult] = useState<BaZiResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      const baZiResult = calculateBaZi(
        formData.year,
        formData.month,
        formData.day,
        formData.hour,
        formData.minute,
        formData.gender
      );
      setResult(baZiResult);
    } catch (err) {
      setError('排盘失败，请检查输入是否正确');
      console.error(err);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* 输入表单 */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border border-amber-200">
        <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
          📅 请输入出生信息
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* 年 */}
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">年</label>
              <input
                type="number"
                value={formData.year}
                onChange={(e) => handleChange('year', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900"
                min="1900"
                max="2100"
                required
              />
            </div>
            
            {/* 月 */}
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">月</label>
              <input
                type="number"
                value={formData.month}
                onChange={(e) => handleChange('month', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900"
                min="1"
                max="12"
                required
              />
            </div>
            
            {/* 日 */}
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">日</label>
              <input
                type="number"
                value={formData.day}
                onChange={(e) => handleChange('day', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900"
                min="1"
                max="31"
                required
              />
            </div>
            
            {/* 时 */}
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">时</label>
              <input
                type="number"
                value={formData.hour}
                onChange={(e) => handleChange('hour', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900"
                min="0"
                max="23"
                required
              />
            </div>
            
            {/* 分 */}
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">分</label>
              <input
                type="number"
                value={formData.minute}
                onChange={(e) => handleChange('minute', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900"
                min="0"
                max="59"
                required
              />
            </div>
          </div>
          
          {/* 性别 */}
          <div className="flex justify-center space-x-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-4 h-4 text-amber-600 focus:ring-amber-500"
              />
              <span className="ml-2 text-amber-800">男</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-4 h-4 text-amber-600 focus:ring-amber-500"
              />
              <span className="ml-2 text-amber-800">女</span>
            </label>
          </div>
          
          {/* 提交按钮 */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
            >
              🔮 开始排盘
            </button>
          </div>
        </form>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
      </div>
      
      {/* 排盘结果 */}
      {result && (
        <div className="space-y-6">
          <FourPillarsDisplay result={result} />
          <DaYunDisplay daYun={result.daYun} />
          <WuXingDisplay wuXing={result.wuXing} />
        </div>
      )}
    </div>
  );
}
