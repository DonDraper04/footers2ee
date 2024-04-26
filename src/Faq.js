import React, { useState } from 'react';
import './index.css';
function FAQ() {
    const [faqData, setFaqData] = useState([
        {
            question: "Question 1",
            answer: "LOREM LOREM ANISS IPSUM IPSUM DJWDQWD Q  ",
            isRotated: false
        },
        {
            question: "Question 2",
            answer: "LOREM LOREM ANISS IPSUM IPSUM DJWDQWD Q  YOUNES H3AH3AH3A LOREM LOREM ANISS IPSUM IPSUM DJWDQWD Q  ",
            isRotated: false
        },
        {
            question: "Question 3",
            answer: "LOREM LOREM ANISS IPSUM IPSUM DJWDQWD Q  YANGUS YANGUS ZEBI BAITECHE MIKMOK NIKMOK LOREM LOREM ANISS IPSUM IPSUM DJWDQWD Q  YOUNES H3AH3AH3A LOREM LOREM ANISS IPSUM IPSUM DJWDQWD Q  ",
            isRotated: false
        }
    ]);
    const toggleRotation = (index) => {
        setFaqData(prevData => {
            return prevData.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        isRotated: !item.isRotated
                    };
                }
                return item;
            });
        });
    };

    return (
        <div className='bg-[#1F1D2A]'>
            <div className="text-white manrope-bold text-center text-[50px] md:text-[75px] font-[GothamBlack]">FAQ</div>
            <div className="flex flex-col justify-center items-center">
                {faqData.map((item, index) => (
                    <div key={index} className={`w-[70%] md:w-[65%] text-white w-[70%]  p-4 transition-all duration-500 ease-out border-4 shadow-ombre mt-10`}>
                        <div className="flex justify-between items-center">
                            <p className="manrope-bold text-left text-[10px] md:text-[17px] w-[90%]">{item.question}</p>
                            <img
                                src="/Fleche.png"
                                alt="Fleche Button"
                                className={`h-4 filter brightness-0 invert cursor-pointer md:h-6 md:mr-2 transform transition-transform duration-500 ${item.isRotated ? 'rotate-180' : ''}`}
                                onClick={() => toggleRotation(index)}
                            />
                        </div>
                        <p className={`mt-8 manrope w-[95%] text-left text-[10px] md:text-[16px] transition-all duration-500 overflow-hidden ${!item.isRotated ? 'opacity-0 max-h-0 mt-[0px]' : 'opacity-100 max-h-[500px]'}`}>{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;