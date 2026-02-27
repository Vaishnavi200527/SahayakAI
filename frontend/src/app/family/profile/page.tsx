'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, MapPin, IndianRupee, Edit3, Trash2, 
  Briefcase, Home, GraduationCap, Heart, ShieldCheck, Plus, Settings2,
  LayoutGrid, Mic, BookOpen, Bell
} from 'lucide-react';
import { FamilyMember, HouseholdInfo } from '@/types/family';
import WhyAddMembers from '@/components/WhyAddMembers';
import AddMemberModal from '@/components/AddMemberModal';
import { useState } from 'react';
import { NewMember } from '@/types/form';

const FamilyProfilePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [members, setMembers] = useState<FamilyMember[]>([
    { id: '1', name: 'Ramesh Kumar', role: 'Worker', age: 45, category: 'Adult', primaryNeeds: ['Schemes', 'Rights', 'Health'] },
    { id: '2', name: 'Sunita Devi', role: 'Homemaker', age: 40, category: 'Adult', primaryNeeds: ['Schemes', 'Health', 'Rights'] },
    { id: '3', name: 'Raj Kumar', role: 'Student', age: 18, category: 'Youth', primaryNeeds: ['Education', 'Schemes'] },
    { id: '4', name: 'Ram Prasad', role: 'Senior Citizen', age: 70, category: 'Senior', primaryNeeds: ['Health', 'Schemes', 'Rights'] }
  ]);
  
  // Mock Data - In a real app, this comes from an API
  const household: HouseholdInfo = { location: "Patna, Bihar", annualIncome: 240000 };

  const handleAddMember = (newMemberData: NewMember) => {
    const newMember: FamilyMember = {
      id: (members.length + 1).toString(),
      name: newMemberData.fullName,
      role: newMemberData.role as any,
      age: parseInt(newMemberData.age),
      category: determineCategory(parseInt(newMemberData.age)),
      primaryNeeds: newMemberData.primaryNeeds
    };
    
    setMembers([...members, newMember]);
    console.log('New member added:', newMember);
  };

  const determineCategory = (age: number): 'Adult' | 'Youth' | 'Senior' => {
    if (age >= 60) return 'Senior';
    if (age >= 18) return 'Adult';
    return 'Youth';
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Header Section - High-fidelity Wireframe Design */}
      <header className="bg-blue-600 text-white p-8 rounded-b-3xl">
        {/* Header Content */}
        <div className="flex items-center gap-4 mb-8">
          {/* White Users icon in semi-transparent light-blue square */}
          <div className="bg-blue-500 bg-opacity-30 p-3 rounded-xl">
            <Users size={32} className="text-white" />
          </div>
          <div>
            {/* Title in white, bold, sans-serif */}
            <h1 className="text-3xl font-bold m-0 font-sans">Family Profile</h1>
            {/* Subtitle in smaller, light-blue font with reduced opacity */}
            <p className="text-blue-200 text-sm mt-1 opacity-80">Manage your family members</p>
          </div>
        </div>

        {/* Stats Card - Nested horizontal card with darker semi-transparent background */}
        <div className="bg-blue-700 bg-opacity-40 rounded-2xl p-6">
          <div className="grid grid-cols-3 gap-4">
            {/* Total Members Column */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-1">4</h2>
              <p className="text-blue-100 text-sm">Total Members</p>
            </div>
            
            {/* Adults Column */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-1">2</h2>
              <p className="text-blue-100 text-sm">Adults</p>
            </div>
            
            {/* Dependents Column */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-1">2</h2>
              <p className="text-blue-100 text-sm">Dependents</p>
            </div>
          </div>
        </div>
      </header>

      {/* Household Info */}
      <section className="bg-white rounded-2xl p-6 m-4 shadow-sm">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <Home size={20} className="text-blue-700" /> Household Information
        </h3>
        <hr className="border-gray-100 my-4" />
        
        <div className="flex justify-between mb-4">
          <div className="flex gap-3">
            <MapPin className="text-slate-500 mt-1" />
            <div>
              <small className="text-slate-500">Location</small>
              <p className="font-bold m-0">{household.location}</p>
            </div>
          </div>
          <button className="border-none bg-none text-blue-700">Edit</button>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <IndianRupee className="text-slate-500 mt-1" />
            <div>
              <small className="text-slate-500">Annual Income</small>
              <p className="font-bold m-0">₹{household.annualIncome.toLocaleString('en-IN')}</p>
            </div>
          </div>
          <button className="border-none bg-none text-blue-700">Edit</button>
        </div>
      </section>

      {/* Family Members List */}
      <section className="px-4">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Users size={20} className="text-blue-700" /> Family Members
        </h3>

        {members.map(member => (
          <div key={member.id} className="bg-white rounded-2xl p-6 mb-4 shadow-sm border border-gray-100">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full" />
                <div>
                  <h4 className="font-semibold m-0">{member.name}</h4>
                  <p className="m-0 text-sm text-slate-500">{member.category} ({member.age})</p>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mt-1">
                    <Briefcase size={14} /> {member.role}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Edit3 size={18} className="text-slate-400 cursor-pointer" />
                <Trash2 size={18} className="text-red-500 cursor-pointer" />
              </div>
            </div>

            <div className="mt-4 p-4 bg-slate-100 rounded-xl">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Needs</p>
              <div className="flex flex-wrap gap-2">
                {member.primaryNeeds.map(need => (
                  <button 
                    key={need} 
                    className="border border-gray-200 bg-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50"
                  >
                    {need === 'Schemes' && <GraduationCap size={14} />}
                    {need === 'Health' && <Heart size={14} />}
                    {need === 'Rights' && <ShieldCheck size={14} />}
                    {need === 'Education' && <GraduationCap size={14} />}
                    {need}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <button 
        className="w-[calc(100%-2rem)] mx-4 mt-4 py-4 bg-blue-700 text-white border-none rounded-xl font-bold flex items-center justify-center"
        onClick={() => setIsModalOpen(true)}
      >
        <Plus size={20} className="mr-2" />
        Add Family Member
      </button>

      <AddMemberModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAddMember={handleAddMember}
      />

      {/* Why Add Members Component */}
      <WhyAddMembers />

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50">
        <div className="flex flex-col items-center gap-1 text-blue-600">
          <Home size={22} />
          <span className="text-[10px]">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <LayoutGrid size={22} />
          <span className="text-[10px]">Schemes</span>
        </div>

        {/* Floating Mic Button */}
        <div className="relative -top-8 bg-blue-600 p-4 rounded-full shadow-lg shadow-blue-200 text-white border-4 border-slate-50">
          <Mic size={24} />
        </div>

        <Link href="/education" className="flex flex-col items-center gap-1 text-slate-400">
          <BookOpen size={22} />
          <span className="text-[10px]">Education</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <Bell size={22} />
          <span className="text-[10px]">Alerts</span>
        </div>
      </footer>
    </div>
  );
};

export default FamilyProfilePage;