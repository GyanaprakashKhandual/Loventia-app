'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiEdit, FiSave, FiUser, FiMail, FiPhone, FiBriefcase, FiAward, FiGlobe } from 'react-icons/fi';
import { FaBirthdayCake } from 'react-icons/fa';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:5000/api/profile/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      
      const data = await response.json();
      setProfile(data);
      setEditedProfile(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:5000/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(editedProfile)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      
      const updatedProfile = await response.json();
      setProfile(updatedProfile);
      setIsEditing(false);
      setSaveMessage('Profile updated successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillsChange = (e, index) => {
    const newSkills = [...editedProfile.skills];
    newSkills[index] = e.target.value;
    setEditedProfile(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  const addSkill = () => {
    setEditedProfile(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index) => {
    setEditedProfile(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-600">Error</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={fetchProfile}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Background Image */}
        <div className="relative h-48 rounded-t-lg overflow-hidden">
          <img 
            src={profile.bgPic} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Profile Content */}
        <div className="bg-white shadow-xl rounded-b-lg overflow-hidden">
          {/* Profile Header */}
          <div className="relative px-6 pb-6 pt-16 border-b border-gray-200">
            <div className="absolute -top-16 left-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img 
                  src={profile.profilePic} 
                  alt={profile.user.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
                />
                {isEditing && (
                  <button className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full">
                    <FiEdit size={14} />
                  </button>
                )}
              </motion.div>
            </div>

            <div className="flex justify-between items-start mt-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {isEditing ? (
                    <input
                      type="text"
                      name="nickName"
                      value={editedProfile.nickName || ''}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    profile.nickName
                  )}
                </h1>
                <p className="text-gray-600">{profile.user.name}</p>
                <p className="text-gray-500 mt-1">{profile.profession} • {profile.industry}</p>
              </div>

              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {isEditing ? (
                  <>
                    <FiSave className="mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <FiEdit className="mr-2" />
                    Edit Profile
                  </>
                )}
              </button>
            </div>

            {saveMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-2 bg-green-100 text-green-700 rounded-md"
              >
                {saveMessage}
              </motion.div>
            )}
          </div>

          {/* About Section */}
          <div className="px-6 py-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FiUser className="mr-2" />
              About
            </h2>
            {isEditing ? (
              <textarea
                name="about"
                value={editedProfile.about || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 h-32"
              />
            ) : (
              <p className="text-gray-600">{profile.about}</p>
            )}
          </div>

          {/* Details Section */}
          <div className="px-6 py-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FiMail className="text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{profile.user.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiPhone className="text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  {isEditing ? (
                    <input
                      type="text"
                      name="contactNo"
                      value={editedProfile.contactNo || ''}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p className="text-gray-800">{profile.contactNo}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <FaBirthdayCake className="text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Birthday</p>
                  {isEditing ? (
                    <input
                      type="date"
                      name="birthDay"
                      value={editedProfile.birthDay ? editedProfile.birthDay.split('T')[0] : ''}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {new Date(profile.birthDay).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <FiBriefcase className="text-gray-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Age</p>
                  {isEditing ? (
                    <input
                      type="number"
                      name="age"
                      value={editedProfile.age || ''}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 py-1 w-20"
                    />
                  ) : (
                    <p className="text-gray-800">{profile.age} years</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="px-6 py-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FiAward className="mr-2" />
              Skills
            </h2>
            
            {isEditing ? (
              <div>
                {editedProfile.skills?.map((skill, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillsChange(e, index)}
                      className="border border-gray-300 rounded px-3 py-2 flex-grow mr-2"
                    />
                    <button 
                      onClick={() => removeSkill(index)}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button 
                  onClick={addSkill}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                >
                  Add Skill
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile.skills?.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}