import React from 'react';

const CTASectionTwoBlocks = () => {
    return (
        <section className="w-full bg-[#FFFCFA] px-6 md:px-[64px] py-[64px] md:py-[96px]">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[80px]">
                {/* Heading block */}
                <div className="max-w-[864px] flex flex-col items-center gap-6 text-center">
                    <div className="text-[#39494D] text-[15px] leading-[16px] tracking-[0.3px] font-[450]">Label</div>
                    <h2 className="text-[#212121] text-[40px] leading-[48px] font-[600] font-sans">
                        Mandatory title about the{' '}
                        <span className="font-serif text-[42px] font-light italic">call-to-action</span> here
                    </h2>
                    <p className="text-[#1E2526] text-[19px] leading-[24px] font-[450] opacity-80">
                        Optional body copy goes here.
                    </p>
                    <button className="mt-2 inline-flex items-center gap-2 text-[#BF564D] text-[19px] font-[450] hover:underline">
                        Optional button
                        <svg width="24" height="24" fill="none" stroke="#BF564D" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Image blocks */}
                <div className="flex flex-col md:flex-row gap-[24px] justify-center">
                    {[1, 2].map((_, i) => (
                        <div
                            key={i}
                            className="relative w-full md:w-[644px] h-[468px] md:h-[515px] rounded-[4px] overflow-hidden"
                        >
                            <img
                                src="/img/placeholder.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#141414] to-transparent opacity-80" />
                            <div className="absolute left-6 right-6 bottom-6 flex justify-between items-end">
                                <div className="text-white max-w-[508px] flex flex-col gap-2">
                                    <h3 className="text-[28px] leading-[32px] font-[600]">Title</h3>
                                    <p className="text-[19px] leading-[24px] font-[450] opacity-50">
                                        Supporting text about the call-to-action goes here.
                                    </p>
                                </div>
                                <div className="p-4 border border-white/30 rounded">
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M13 5l7 7-7 7" />
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
