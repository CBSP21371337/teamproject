'use client'
import Faq from '@/components/Faq/Faq';

const FAQs = () => {
    const faqData = [
        { questionKey: 'q1', answerKey: 'a1' },
        { questionKey: 'q2', answerKey: 'a2' },
        { questionKey: 'q3', answerKey: 'a3' },
        { questionKey: 'q4', answerKey: 'a4' },
        { questionKey: 'q5', answerKey: 'a5' },
        { questionKey: 'q6', answerKey: 'a6' },
        { questionKey: 'q7', answerKey: 'a7' },
        { questionKey: 'q8', answerKey: 'a8' },
        { questionKey: 'q9', answerKey: 'a9' },
        { questionKey: 'q10', answerKey: 'a10' },
        { questionKey: 'q11', answerKey: 'a11' },
        { questionKey: 'q12', answerKey: 'a12' },
        { questionKey: 'q13', answerKey: 'a13' },
        { questionKey: 'q14', answerKey: 'a14' },
        { questionKey: 'q15', answerKey: 'a15' },
    ];

    return <Faq faqList={faqData} />;
};

export default function FAQ() {
return (
<div className="flex justify-center items-center mt-32 mb-32">
  <div className="w-1/2">
    <FAQs />
  </div>
</div>
)
}