import BirthInputForm from './components/BirthInputForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-100 via-red-50 to-amber-100 py-12 px-4">
      {/* 装饰性背景图案 */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      
      {/* 主内容 */}
      <div className="relative z-10">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-red-600 to-amber-700 mb-3">
            九星八字排盘
          </h1>
          <p className="text-amber-800 text-lg">
            传承千年智慧 · 解读命理玄机
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
          </div>
        </div>
        
        {/* 排盘表单 */}
        <BirthInputForm />
        
        {/* 页脚 */}
        <footer className="text-center mt-12 text-amber-700 text-sm">
          <p>九星八字排盘 · 专业命理分析工具</p>
          <p className="mt-1 text-amber-600">仅供娱乐参考 · 命运掌握在自己手中</p>
        </footer>
      </div>
    </main>
  );
}
