import React, { useState } from 'react';
import { X, CheckSquare, Square } from 'lucide-react';
import styles from './AddMemberModal.module.css';
import { NewMember, RoleType } from '../types/form';

const roles: { type: RoleType; sub: string; icon: string }[] = [
  { type: 'Worker', sub: 'Earning member', icon: '👨💼' },
  { type: 'Homemaker', sub: 'Manages household', icon: '👩🍳' },
  { type: 'Student', sub: 'School/College', icon: '🎓' },
  { type: 'Senior Citizen', sub: '60+ years', icon: '👴' },
  { type: 'Child', sub: 'Below 18 years', icon: '👶' },
  { type: 'Differently Abled', sub: 'Special needs', icon: '♿' },
];

const needs = ['Schemes', 'Education', 'Health', 'Rights'];

const AddMemberModal: React.FC<{ isOpen: boolean; onClose: () => void; onAddMember: (member: NewMember) => void }> = ({ isOpen, onClose, onAddMember }) => {
  const [formData, setFormData] = useState<NewMember>({
    role: null,
    fullName: '',
    age: '',
    gender: null,
    primaryNeeds: []
  });

  const resetForm = () => {
    setFormData({
      role: null,
      fullName: '',
      age: '',
      gender: null,
      primaryNeeds: []
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = () => {
    if (formData.role && formData.fullName && formData.age && formData.gender) {
      onAddMember(formData);
      resetForm();
      onClose();
    }
  };

  const toggleNeed = (need: string) => {
    setFormData(prev => ({
      ...prev,
      primaryNeeds: prev.primaryNeeds.includes(need)
        ? prev.primaryNeeds.filter(n => n !== need)
        : [...prev.primaryNeeds, need]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 style={{ margin: 0 }}>Add Family Member</h2>
          <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>Select member type to continue</p>
          <button className={styles.closeBtn} onClick={handleClose}>
            <X size={20} color="white" />
          </button>
        </div>

        <div className={styles.content}>
          <section className={styles.inputGroup}>
            <label className={styles.label}>Select Role / Type</label>
            <div className={styles.roleGrid}>
              {roles.map(role => (
                <div 
                  key={role.type}
                  className={`${styles.roleCard} ${formData.role === role.type ? styles.roleCardActive : ''}`}
                  onClick={() => setFormData({ ...formData, role: role.type })}
                >
                  <div style={{ fontSize: '1.5rem' }}>{role.icon}</div>
                  <div style={{ fontWeight: 'bold' }}>{role.type}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{role.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Show form fields only after selecting a role */}
          {formData.role && (
            <>
              <section className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <input 
                  type="text" 
                  className={styles.textField} 
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </section>

              <section className={styles.inputGroup}>
                <label className={styles.label}>Age</label>
                <input 
                  type="number" 
                  className={styles.textField} 
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </section>

              <section className={styles.inputGroup}>
                <label className={styles.label}>Gender</label>
                <div className={styles.genderGroup}>
                  {(['Male', 'Female'] as const).map(g => (
                    <button
                      key={g}
                      className={`${styles.toggleBtn} ${formData.gender === g ? styles.toggleBtnActive : ''}`}
                      onClick={() => setFormData({ ...formData, gender: g })}
                    >
                      {g === 'Male' ? '👦' : '👧'} {g}
                    </button>
                  ))}
                </div>
              </section>

              <section className={styles.inputGroup}>
                <label className={styles.label}>Primary Needs (Select multiple)</label>
                <div className={styles.roleGrid}>
                  {needs.map(need => (
                    <div 
                      key={need} 
                      className={styles.toggleBtn}
                      onClick={() => toggleNeed(need)}
                      style={{ justifyContent: 'flex-start' }}
                    >
                      {formData.primaryNeeds.includes(need) ? <CheckSquare size={18} color="#1d4ed8" /> : <Square size={18} color="#cbd5e1" />}
                      {need}
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>

        <div className={styles.footer}>
          <button className={styles.btnCancel} onClick={handleClose}>Cancel</button>
          <button 
            className={styles.btnSubmit} 
            onClick={handleSubmit}
            disabled={!formData.role || !formData.fullName || !formData.age || !formData.gender}
            style={{ opacity: (!formData.role || !formData.fullName || !formData.age || !formData.gender) ? 0.5 : 1 }}
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;