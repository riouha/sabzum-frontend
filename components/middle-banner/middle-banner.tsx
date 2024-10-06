import Image from 'next/image';

export function MiddleBanner() {
  return (
    <>
      <div className='banner'>
        <Image src='/images/inspection2.png' width={180} height={155} alt='' />
        <h6>اینجا میتونه شعار سبزوم قرار بگیره یا میتونه فرم عضویت باشه</h6>
        <button>درخواست ارزیابی</button>
      </div>
      <style jsx>{`
        .banner {
          padding: 10px 0;
          display: flex;
          justify-content: space-around;
          background-color: #f1f2f6;
          align-items: center;
          // background-image: url('images/inspection.jpg');
          // background-size: 500px 500px;
          // background:url('images/inspection1.jpg') no-repeat ,#aaa;
        }
        .banner h6 {
          font-size: 17px;
          font-weight: 600;
        }

        .banner button {
          border: none;
          padding: 10px 20px;
          color: #fff;
          border-radius: 25px;
          background: #fe4f70;
          background: -webkit-linear-gradient(right, #fe4f70 0%, #ffa387 100%);
          background: linear-gradient(to left, #fe4f70 0%, #ffa387 100%);
        }
      `}</style>
    </>
  );
}
