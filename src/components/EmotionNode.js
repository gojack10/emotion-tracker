import React, { useState } from 'react';
import '../styles/components/EmotionNode.css';

const EmotionNode = ({ name, data, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubEmotions = Object.keys(data.subEmotions).length > 0;

  const handleClick = (e) => {
    e.stopPropagation();
    if (hasSubEmotions) {
      setIsExpanded(!isExpanded);
    } else {
      onSelect(name, data);
    }
  };

  return (
    <div className="emotion-node">
      <div 
        className={`emotion-item ${hasSubEmotions ? 'has-children' : 'leaf'} ${isExpanded ? 'expanded' : ''}`}
        onClick={handleClick}
        title={data.definition}
      >
        {hasSubEmotions && (
          <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
        )}
        <span className="emotion-name">{name}</span>
      </div>
      
      {isExpanded && hasSubEmotions && (
        <div className="sub-emotions">
          {Object.entries(data.subEmotions).map(([subName, subData]) => (
            <EmotionNode
              key={subName}
              name={subName}
              data={subData}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmotionNode; 