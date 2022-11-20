import React, { useState } from 'react';
import InputField from '../InputField/InputField';

export function PersonalInfo() {
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit function');
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xl">Personal Information</h2>
        {!editMode && (
          <img
            src="/edit-alt.svg"
            alt="edit"
            onClick={() => setEditMode(true)}
          />
        )}
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
          <InputField name="first_name" labelText="First Name" />
          <InputField name="last_name" labelText="Last Name" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
          <InputField name="email" labelText="Email Address" />
          <InputField name="phone_number" labelText="Phone Number" />
        </div>

        {editMode && (
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-main-1 hover:bg-main-2 transition-all px-8 h-[45px] rounded-md text-white"
            >
              Save changes
            </button>
            <button
              type="button"
              className="h-[45px] px-8 rounded-md border"
              style={{
                border: '0.3px solid #d0d5dd',
              }}
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
