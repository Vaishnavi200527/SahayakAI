'use client';

import React from 'react';
import { Bell, GraduationCap, Calendar, ExternalLink, FileText, Target, Info } from 'lucide-react';
import { ExamAlert, Scholarship } from '@/types/education';
import EducationResources from '@/components/EducationResources';
import MobileBottomNav from '@/components/MobileBottomNav';

const EducationPage: React.FC = () => {
  const alerts: ExamAlert[] = [
    { id: '1', title: 'NEET 2026', category: 'Medical', date: 'May 5, 2026', daysLeft: 79 },
    { id: '2', title: 'JEE Main 2026', category: 'Engineering', date: 'April 15, 2026', daysLeft: 59 },
    { id: '3', title: 'Bihar Board 12th', category: 'Board Exam', date: 'March 1, 2026', daysLeft: 14, status: 'Urgent' }
  ];

  const scholarships: Scholarship[] = [
    { id: 's1', title: 'National Scholarship', amount: '₹12,000/year', eligibility: '10+2 • Income < ₹2.5L', deadline: 'April 30, 2026' },
    { id: 's2', title: 'SC/ST Scholarship', amount: '₹20,000/year', eligibility: 'All classes', deadline: 'March 25, 2026', alert: 'Apply soon - deadline approaching!' },
    { id: 's3', title: 'Merit Scholarship', amount: '₹15,000/year', eligibility: '80%+ marks', deadline: 'May 15, 2026' }
  ];

  return (
    <div style={{
      backgroundColor: '#f8fafc',
      paddingBottom: '100px',
      minHeight: '100vh'
    }}>
      {/* Purple Header */}
      <header style={{
        background: '#a21caf',
        color: 'white',
        padding: '24px 16px'
      }}>
        <h1 style={{ margin: 0 }}>शिकषा पोर्टल</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>परीकषा, छात्रवृतति और संसाधन</p>
      </header>

      {/* Exam Alerts Section */}
      <section style={{ padding: '16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '1.2rem',
          fontWeight: 700,
          marginBottom: '16px'
        }}>
          <Bell size={20} color="#ef4444" /> 
          <span>परीकषा अलर्ट</span>
          <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#64748b' }}>3 आने वली परीकषएं</span>
        </div>
        
        {alerts.map(alert => (
          <div key={alert.id} style={{
            background: 'white',
            borderRadius: '16px',
            padding: '16px',
            marginBottom: '12px',
            display: 'flex',
            gap: '16px',
            borderLeft: `4px solid ${alert.status === 'Urgent' ? '#ef4444' : '#3b82f6'}`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{
              padding: '8px',
              background: '#f1f5f9',
              borderRadius: '12px',
              height: 'fit-content'
            }}>
              {alert.category === 'Medical' ? <Target size={24} color="#3b82f6" /> : <FileText size={24} color="#64748b" />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 style={{ margin: 0 }}>{alert.title}</h4>
                {alert.status === 'Urgent' && <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 'bold' }}>Urgent!</span>}
              </div>
              <p style={{ margin: '2px 0', fontSize: '0.85rem', color: '#64748b' }}>{alert.category}</p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px', fontSize: '0.85rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {alert.date}</span>
                <span style={{ color: alert.status === 'Urgent' ? '#ef4444' : '#3b82f6', fontWeight: 'bold' }}>{alert.daysLeft} days left</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Scholarships Section */}
      <section style={{ padding: '16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '1.2rem',
          fontWeight: 700,
          marginBottom: '16px'
        }}>
          <GraduationCap size={20} color="#a21caf" /> 
          <span>छात्रवृत्ति योजनाएं</span>
        </div>

        {scholarships.map(s => (
          <div key={s.id} style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '16px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                padding: '10px',
                background: '#fdf4ff',
                borderRadius: '12px'
              }}>
                <GraduationCap size={28} color="#a21caf" />
              </div>
              <div>
                <h4 style={{ margin: 0 }}>{s.title}</h4>
                <div style={{
                  background: '#f0fdf4',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'inline-block',
                  marginTop: '8px'
                }}>{s.amount}</div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '8px' }}>Eligibility: {s.eligibility}</p>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}><Calendar size={12} /> Deadline: {s.deadline}</p>
              </div>
            </div>

            {s.alert && (
              <div style={{
                marginTop: '12px',
                background: '#fef2f2',
                color: '#ef4444',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Info size={14} /> {s.alert}
              </div>
            )}

            <button style={{
              width: '100%',
              background: '#a21caf',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '12px',
              fontWeight: 700,
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <ExternalLink size={18} /> Apply Now
            </button>
          </div>
        ))}
        
        <button style={{
          width: '100%',
          padding: '12px',
          border: '1px dashed #cbd5e1',
          background: 'none',
          borderRadius: '12px',
          color: '#64748b'
        }}>
          View More Scholarships
        </button>
      </section>

      {/* Education Resources Component */}
      <EducationResources />

      <MobileBottomNav activeTab="education" />
    </div>
  );
};

export default EducationPage;
