import React from "react";
import Call from '../assets/images/call.png';

function FooterHelp() {
    return (
        <>
            <div className="bg-[#F8F8FF] max-w-full border-t-2 border-b-2">
                <div className="max-w-screen-xl mx-auto flex justify-center items-center py-6">
                    <div className="md:flex space-x-6 justify-center items-center">
                        <div className="flex justify-center"><img src={Call} alt="error_call" className="w-11" /></div>
                        <div>
                            <p className="font-[MontsBold] font-extrabold text-[27px] text-dark-blue">Need Help? Say Hello</p>
                            <span className="font-[SansBold] font-medium text-xs leading-[18px] text-dark-blue">Ready to speak with a marketing expert? Give us a ring </span>
                        </div>
                        <div>
                            <p className="font-[MontsBold] font-extrabold text-[50px] leading-[75px] text-dark-blue">800-569-2754</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterHelp;