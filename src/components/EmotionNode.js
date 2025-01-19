import React, { useState } from 'react';
import '../styles/components/EmotionNode.css';

const EmotionNode = ({ name, data, onSelect, isSelected, parentHierarchy = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubEmotions = Object.keys(data.subEmotions || {}).length > 0;
  const currentHierarchy = [...parentHierarchy, name];

  const handleClick = (e) => {
    e.stopPropagation();
    if (hasSubEmotions) {
      setIsExpanded(!isExpanded);
    } else {
      onSelect(name, {
        ...data,
        hierarchy: currentHierarchy
      });
    }
  };

  return (
    <div className="emotion-node">
      <div 
        className={`emotion-item ${hasSubEmotions ? 'has-children' : 'leaf'} ${isExpanded ? 'expanded' : ''} ${isSelected ? 'selected' : ''}`}
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
              isSelected={isSelected}
              parentHierarchy={currentHierarchy}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmotionNode; 