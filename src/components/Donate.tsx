const Donate = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <h2 className="text-center text-2xl font-bold mb-2">
          حمایت از طبقه ۱۶
        </h2>
        <p className="text-center text-sm text-gray-400 mb-10">
          برای حمایت از ما می‌توانید از طریق یکی از روش‌ زیر اقدام نمایید.
          <br />
          هزینه‌ی حمایت شما به ارتقاء کیفیت تولید و پادکست‌ها باز می‌گردد.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ریالی */}
          <div className="space-y-4 border-r border-gray-700 pr-4">
            <label className="block text-right">ریالی</label>
            <input
              type="text"
              placeholder="نام شما"
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
            <input
              type="number"
              placeholder="مبلغ"
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          </div>

          {/* ارزی */}
          <div className="space-y-4 border-r border-gray-700 pr-4">
            <label className="block text-right">ارزی</label>
            <input
              type="text"
              placeholder="نام شما"
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
            <input
              type="number"
              placeholder="مبلغ"
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          </div>

          {/* رمز ارز */}
          <div className="space-y-4">
            <label className="block text-right">رمز ارز</label>
            <input
              type="text"
              placeholder="نام شما"
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
            <input
              type="number"
              placeholder="مبلغ"
              className="w-full bg-gray-800 text-white p-2 rounded"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
