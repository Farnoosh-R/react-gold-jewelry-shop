
import Button from '../../../../components/shared/Button';
import offerLeft from '../../assets/images/offerLeft.png'
import offerRight from '../../assets/images/offerRight.png'

const Offers = () => {
  return (
    <section id="offers">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className='flex flex-col gap-3 rounded-2xl p-7 text-left'
            style={{
              backgroundImage: `url(${offerRight})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className='text-lg text-white'>پیشنهاد اقتصادی</div>
            <h3 className='text-white'>فرصت طلایی</h3>
            <div className='text-left'><Button variant='secondary'>مشاهده جزئیات</Button></div>
          </div>
                 <div className='flex flex-col gap-3 rounded-2xl p-7 text-left'
            style={{
              backgroundImage: `url(${offerLeft})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className='text-lg text-[var(--color-primary)]'>پیشنهاد ویژه</div>
            <h3 className='text-[var(--color-primary)]'>20% تخفیف ویژه</h3>
            <div className='text-left'><Button variant='primary'>مشاهده جزئیات</Button></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offers;
