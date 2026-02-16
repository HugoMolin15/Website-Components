'use client';

import React from 'react';
import Grainient from './Grainient';
import { FloatingIconsBackground } from './FloatingIcons';

const IconVercel = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22h20L12 2z" />
    </svg>
);

const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.911 8.612c0-.574-.498-.822-1.362-.822-1.341 0-3.033.565-4.49 1.458L7.33 7.07C8.981 5.861 11.237 5 13.567 5c2.479 0 4.13.916 4.13 3.425 0 3.321-4.542 4.183-4.542 5.564 0 .54.499.782 1.488.782 1.63 0 3.52-.771 5.358-1.921l.73 2.147C18.667 16.488 16.29 17.5 13.784 17.5 11.127 17.5 9.5 16.353 9.5 13.974c0-3.136 4.411-3.951 4.411-5.362z" />
    </svg>
);

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const IconX = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.03 19.75h1.866L7.156 4.25H5.16l11.874 15.5z" />
    </svg>
);

const IconDiscord = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.482a1.88 1.88 0 0 0-1.635-.482C17.398 3.42 16.02 3 12 3s-5.398.42-6.682 1.001a1.88 1.88 0 0 0-1.635.483c-1.875 1.2-2.325 3.61-1.568 5.711 1.62 4.47 5.063 7.8 9.885 7.8s8.265-3.33 9.885-7.8c.757-2.1-.307-4.51-1.568-5.711ZM8.45 13.4c-.825 0-1.5-.75-1.5-1.65s.675-1.65 1.5-1.65c.825 0 1.5.75 1.5 1.65s-.675 1.65-1.5 1.65Zm7.1 0c-.825 0-1.5-.75-1.5-1.65s.675-1.65 1.5-1.65c.825 0 1.5.75 1.5 1.65s-.675 1.65-1.5 1.65Z" />
    </svg>
);

const defaultIcons = [
    { id: 1, icon: IconVercel, className: 'top-[10%] left-[10%] opacity-20' },
    { id: 2, icon: IconStripe, className: 'top-[20%] right-[12%] opacity-20' },
    { id: 3, icon: IconGitHub, className: 'bottom-[15%] left-[15%] opacity-20' },
    { id: 4, icon: IconX, className: 'bottom-[20%] right-[10%] opacity-20' },
    { id: 5, icon: IconDiscord, className: 'top-[45%] left-[5%] opacity-15' },
    { id: 6, icon: IconVercel, className: 'bottom-[10%] right-[30%] opacity-10' },
    { id: 7, icon: IconGitHub, className: 'top-[5%] right-[40%] opacity-10' },
];

export const GradientReactiveIconsCTA = () => {
    return (
        <div className="relative w-[calc(100%-32px)] md:w-full rounded-[32px] overflow-hidden bg-[#1a0f3e] max-w-7xl mx-auto my-20">
            {/* Background Layer */}
            <div className="absolute -inset-[1px] z-0">
                <Grainient
                    color1="#2e51a3"
                    color2="#8882a1"
                    color3="#1a0f3e"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>

            <FloatingIconsBackground
                icons={defaultIcons}
                className="relative z-10 w-full py-40 px-8 text-center flex flex-col items-center justify-center"
            >
                <h2 className="text-[48px] font-medium text-white leading-[0.95] tracking-tighter mb-8 max-w-2xl mx-auto relative z-20">
                    Ready to secure your brand identity?
                </h2>

                <p className="text-[18px] text-white/60 font-normal mb-12 max-w-xl mx-auto leading-relaxed relative z-20">
                    Protect your institution from the world's most sophisticated synthetic threats with real-time neural defense.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto relative z-20">
                    <button className="cursor-pointer bg-white hover:bg-gray-100 text-[#0D1B1E] px-12 py-5 rounded-full text-[14px] font-bold transition-all shadow-xl active:scale-95">
                        Initialize Defense
                    </button>
                    <button className="cursor-pointer bg-[#0D1B1E] border border-[#0D1B1E] hover:bg-black text-white px-12 py-5 rounded-full text-[14px] font-bold transition-all shadow-xl active:scale-95">
                        Speak with an Analyst
                    </button>
                </div>
            </FloatingIconsBackground>
        </div>
    );
};

export default GradientReactiveIconsCTA;
