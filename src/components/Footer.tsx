import React from "react";
import logo from "../assets/Logo.png";
import { platformsDark, vectors } from "../constants/constants";

interface PlatformDark {
  src: string;
  alt: string;
}
interface vector {
  src: string;
  alt: string;
}

const Footer: React.FC = () => {
  return (
    <>
      <div className=" w-[69.4375rem] h-[22.15625rem] m-auto flex text-white border-t-[3px] border-[#3c3c3c]">
        <div className="w-[18.625rem] h-[12.0625rem] mr-14">
          <div className="mt-[2.21875rem] flex font-IRANYekanBlack text-2xl gap-[1.75rem] ">
            <img src={logo} alt="logo" />
            پادکست طبقه 16
          </div>

          <p className="text-justify mt-4 font-IRANYekanRegular w-72 text-[#bababa]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد
          </p>
        </div>
        <div className="mr-[5.875rem] mt-[2.21875rem]">
          <div className="text-2xl font-IRANYekanBlack w-32">لینک ها</div>
          <ul className="flex flex-col gap-4 mt-4 font-IRANYekanRegular cursor-pointer">
            <li>صفحه اصلی</li>
            <li>پادکست ها</li>
            <li>ویدیوهای کوتاه</li>
            <li>حمایت</li>
            <li>همکاری</li>
          </ul>
        </div>
        <div className="mr-[7.875rem]">
          <div className="mt-[2.21875rem]">
            <p className="text-2xl font-IRANYekanBlack">اینجا بشنوید</p>
          </div>
          <div className="flex gap-9 size-9 mt-[0.6875rem] cursor-pointer">
            {platformsDark.map((platform: PlatformDark) => (
              <img src={platform.src} alt={platform.alt} key={platform.alt} />
            ))}
          </div>
          <div className="mt-[3.17125rem]">
            <p className="text-2xl font-IRANYekanBlack w-52">
              شبکه های اجتماعی
            </p>
          </div>
          <div className="flex gap-9 size-9 mt-[0.6875rem] cursor-pointer">
            {vectors.map((platform: vector) => (
              <img src={platform.src} alt={platform.alt} key={platform.alt} />
            ))}
          </div>
        </div>
      </div>
      <p className="flex justify-center items-center text-[#3a3a3a] font-IRANYekanRegular">
        Develope By Mohammad Bashtani and Aliasghar Ariyayimehr
      </p>
    </>
  );
};

export default Footer;
