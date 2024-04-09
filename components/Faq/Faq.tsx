import React from 'react';
import { useTranslations } from 'next-intl';

interface FAQItem {
    questionKey: string;
    answerKey: string;
}

interface Props {
    faqList: FAQItem[];
}

const Faq: React.FC<Props> = ({ faqList }) => {
    const t = useTranslations('FAQ')

    return (
        <div>
            {faqList.map((faq, index) => (
                <div key={index} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 mt-5" style={{ boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.5)' }}>
                    <div className="collapse-title text-xl font-medium">
                        {t(faq.questionKey)}
                    </div>
                    <div className="collapse-content"> 
                        <p>{t(faq.answerKey)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;