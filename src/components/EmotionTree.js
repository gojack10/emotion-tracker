import React from 'react';
import EmotionNode from './EmotionNode';
import emotions from '../data/emotions';
import '../styles/components/EmotionTree.css';

const EmotionTree = ({ onEmotionSelect }) => {
  const handleSelect = (name, data) => {
    if (onEmotionSelect) {
      onEmotionSelect(name, data);
    }
  };

  return (
    <div className="emotion-tree">
      <h2>Emotion Explorer</h2>
      <div className="emotion-tree-content">
        {Object.entries(emotions).map(([name, data]) => (
          <EmotionNode
            key={name}
            name={name}
            data={data}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default EmotionTree; 