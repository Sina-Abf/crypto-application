import { useState } from 'react';
import { ArrowIcon } from '../../UI/Svgs';

const FaqBar = ({ question, description, state }) => {
  const [isCollapsed, setIsCollapsed] = useState(state);
  return (
    <li>
      <div
        onClick={() => setIsCollapsed((prevState) => !prevState)}
        className="flex items-center justify-between mb-4 border-b border-b-gray/20 pb-4 cursor-pointer w-full"
      >
        <span>{question}</span>
        <span>
          <ArrowIcon className={`${isCollapsed ? 'rotate-180' : ''}`} />
        </span>
      </div>
      {isCollapsed && <p className="text-gray max-w-lg mb-8">{description}</p>}
    </li>
  );
};

export default FaqBar;
