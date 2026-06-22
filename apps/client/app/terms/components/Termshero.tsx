import React from 'react';

const Termshero = () => {
  return (
    <section className="mt-[2rem] text-center px-2 flex flex-col justify-center items-center">
      <h1 className="heroh font-bold max-w-[1000px] w-full">
        Terms and Conditions for Engine
        <span className="text-[#7827E6]">M</span>
      </h1>
      <p className="max-w-[700px] w-full mt-6">
        By using our Service, you agree to be bound by these{' '}
        <span className="text-[#7827E6] font-semibold"> Terms</span> and{' '}
        <span className="text-[#7827E6] font-semibold"> Conditions</span>. If
        you do not agree with these Terms, please do not use our Service.
      </p>
    </section>
  );
};

export default Termshero;
