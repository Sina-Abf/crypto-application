import Image from 'next/image';
import faqImage from '../../../public/illustrations/faq.png';
import { ArrowIcon } from '../../UI/Svgs';
import { useState } from 'react';
import FaqBar from './FaqBar';

const faqData = [
  {
    question: 'Why should I choose NEFA?',
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    state: true,
  },
  {
    question: 'How secure is NEFA?',
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    state: false,
  },
  {
    question: 'Do I have to buy a whole Bitcoin?',
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    state: false,
  },
  {
    question: 'How do I actually buy Bitcoin?',
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    state: false,
  },
];

const FaqSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="mb-8">
          <Image src={faqImage} alt="bank" />
        </div>
        <div className="px-8 md:mt-28 md:w-full md:flex-1">
          <h3 className="text-secondary">Support</h3>
          <h1 className="text-2xl font-semibold mb-12">
            Frequently asked questions
          </h1>
          <ul>
            {faqData.map((question) => {
              return (
                <FaqBar
                  key={question.question}
                  question={question.question}
                  description={question.description}
                  state={question.state}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
