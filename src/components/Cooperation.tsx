const Cooperation = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-center text-2xl font-bold mb-2">
          درخواست همکاری با طبقه ۱۶
        </h2>
        <p className="text-center text-sm text-gray-400 mb-10">
          اگر قصد دارید اسپانسر اپیزودهای طبقه ۱۶ شوید و یا تبلیغات در سایت را
          دارید فرم زیر را تکمیل و برای ما ارسال نمایید. <br />
          ما پس از بررسی با شما تماس خواهیم گرفت.
        </p>

        <form className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="نام شرکت"
            className="w-full bg-gray-800 text-white p-3 rounded"
          />
          <input
            type="text"
            placeholder="سایت شرکت"
            className="w-full bg-gray-800 text-white p-3 rounded"
          />

          <input
            type="email"
            placeholder="ایمیل سازمانی شرکت"
            className="w-full bg-gray-800 text-white p-3 rounded"
          />
          <input
            type="text"
            placeholder="شماره تماس شرکت"
            className="w-full bg-gray-800 text-white p-3 rounded"
          />

          <input
            type="text"
            placeholder="نام درخواست دهنده"
            className="w-full bg-gray-800 text-white p-3 rounded"
          />
          <input
            type="text"
            placeholder="سمت درخواست دهنده"
            className="w-full bg-gray-800 text-white p-3 rounded"
          />

          <textarea
            placeholder="توضیحی درباره‌ی شرکت"
            rows={4}
            className="md:col-span-2 w-full bg-gray-800 text-white p-3 rounded resize-none"
          ></textarea>
        </form>

        <div className="mt-8 text-center">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition">
            ارسال فرم
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
