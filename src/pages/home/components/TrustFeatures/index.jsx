import {
  FaCertificate,
  FaTruck,
  FaSyncAlt  ,
  FaCreditCard,
} from "react-icons/fa";

const TrustFeatures = () => {
  return (
    <section id="trust-features" className="bg-[var(--color-primary)] p-4">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center">
          <div className="flex gap-2 items-center">
            <FaCertificate size={30} />
            <div className="flex flex-col gap-1">
              <div className="text-white text-lg">۱۰۰٪ اصالت کالا</div>
              <div className="text-[var(--color-light)]">جواهرات دارای نشان استاندارد و تأییدیه اصالت</div>
            </div>
          </div>
               <div className="flex gap-2 items-center">
            <FaTruck size={30} />
            <div className="flex flex-col gap-1">
              <div className="text-white text-lg">ارسال رایگان</div>
              <div className="text-[var(--color-light)]">برای سفارش‌های بالای ۴,۹۹۹ روپیه</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaSyncAlt   size={30} />
            <div className="flex flex-col gap-1">
              <div className="text-white text-lg">بازگشت آسان کالا</div>
              <div className="text-[var(--color-light)]">۳۰ روز ضمانت بازگشت وجه</div>
            </div>
          </div>
     
          <div className="flex gap-2 items-center">
            <FaCreditCard size={30} />
            <div className="flex flex-col gap-1">
              <div className="text-white text-lg">پرداخت امن</div>
              <div className="text-[var(--color-light)]">پرداخت کاملاً امن و مطمئن</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustFeatures;
