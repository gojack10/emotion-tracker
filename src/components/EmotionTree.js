import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmotionNode from './EmotionNode';
import emotions from '../data/emotions';
import '../styles/components/EmotionTree.css';

const EmotionTree = ({ onEmotionSelect, selectedEmotion }) => {
  const navigate = useNavigate();

  const handleSelect = (name, data) => {
    onEmotionSelect(name, data);
    navigate('/details');
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
            isSelected={selectedEmotion?.name === name}
            parentHierarchy={[]}
          />
        ))}
      </div>
    </div>
  );
};

export default EmotionTree; 