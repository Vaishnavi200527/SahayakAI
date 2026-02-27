import React from 'react';
import { Lightbulb, Check } from 'lucide-react';

const WhyAddMembers: React.FC = () => {
  const benefits = [
    "Better scheme matching",
    "Age-specific benefits",
    "Role-based recommendations",
    "Family-wide coverage tracking"
  ];

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      margin: '1rem',
      padding: '24px',
      background: 'linear-gradient(to right, #f0fdf4, #eff6ff)',
      border: '1.5px solid #bbf7d0',
      borderRadius: '20px'
    }}>
      <div style={{ flexShrink: 0 }}>
        <div style={{
          backgroundColor: '#22c55e',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Lightbulb size={24} fill="#FFEB3B" color="#FFEB3B" />
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#0f172a'
        }}>
          Why Add Family Members?
        </h3>
        <p style={{
          margin: 0,
          fontSize: '0.95rem',
          color: '#475569',
          lineHeight: 1.5
        }}>
          Get personalized scheme recommendations for each family member based on their age, role, and needs.
        </p>
        
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '8px 0 0 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          {benefits.map((benefit, index) => (
            <li key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: '#334155'
            }}>
              <Check size={16} style={{ color: '#475569' }} />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyAddMembers;