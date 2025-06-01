import React from 'react';

const CTASectionTwoBlocks = () => {
    return (
        <section className="w-full bg-[#FFFCFA] px-[20px] md:px-[64px] pb-[64px] md:pb-[96px]">
            <div className="flex flex-col items-center">
                {/* Headline */}
                <div className="w-full md:w-[864px] md:h-[217px] flex flex-col items-center text-center mb-[32px] mt-[48px] mx-[20px] md:mb-[80px] md:mx-[64px] md:mt-[64px]">
                    <p className="text-[#39494D] text-[14px] md:text-[15px] leading-[16px] tracking-[0.28px] md:tracking-[0.3px] font-[450]">
                        Label
                    </p>
                    {/* Alles onder label krijgt spacing */}
                    <div className="flex flex-col items-center text-center gap-[16px] md:gap-[24px]">
                        {/* Title */}
                        <div className="max-w-[642px] max-h-[121px]">
                            {/* Desktop title */}
                            <h2 className="hidden md:block text-[#212121] font-sans font-[600] text-[40px] leading-[48px] tracking-[-0.03em] text-center">
                                Mandatory title about the <br />
                                <span className="font-serif text-[42px] leading-[48px] tracking-[-0.03em] font-[300]">call-to-action</span> here
                            </h2>

                            {/* Mobile title */}
                            <h2 className="block md:hidden text-[#212121] text-[36px] leading-[40px] tracking-[-0.02em] font-[600] font-sans text-center">
                                Mandatory title <br />
                                about the{' '}
                                <span className="font-serif text-[38px] leading-[40px] tracking-[-0.03em] font-[300]">
          call-to-<br />action
        </span>{' '}
                                <span className="font-sans text-[36px] tracking-[-0.02em]">here</span>
                            </h2>
                        </div>

                        {/* Body text */}
                        <p className="text-[#1E2526] text-[17px] md:text-[19px] leading-[24px] font-[450] opacity-80 max-w-xl">
                            Optional body copy goes here.
                        </p>

                        {/* Button */}
                        <button className="mt-2 inline-flex items-center gap-2 text-[#BF564D] text-[17px] md:text-[19px] font-[450] hover:underline">
                            Optional button
                            <svg width="24" height="24" fill="none" stroke="#BF564D" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                        </button>

                    </div>
                </div>


                {/* CTA Blocks */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-[16px] md:gap-[24px] justify-center mx-[20px] mb-[32px] md:mx-[64px] md:mb-[96px] w-[335px] md:w-[1312px] h-[520px] md:h-[515px]">
                    {[1, 2].map((_, i) => (
                        <div
                            key={i}
                            className="relative rounded-[4px] overflow-hidden"
                        >
                            <img
                                src="/img/placeholder.png"
                                alt="CTA visual"
                                className="w-[335px] md:w-[644px] h-[252px] md:h-[515px] object-cover"
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#141414] to-transparent opacity-80"/>
                            <div
                                className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex justify-between items-end">
                                <div className="text-white max-w-[239px] md:max-w-[508px] flex flex-col gap-2">
                                    <h3 className="text-[22px] md:text-[28px] leading-[24px] md:leading-[32px] font-[600]">
                                        Title
                                    </h3>
                                    <p className="text-[17px] md:text-[19px] leading-[24px] font-[450] opacity-50">
                                        Supporting text about the call-to-action goes here.
                                    </p>
                                </div>
                                <div className="p-3 md:p-4 border border-white/30 rounded">
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M13 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTASectionTwoBlocks;
