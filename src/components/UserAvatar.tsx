// UserAvatar.tsx
import React from 'react';

interface UserAvatarProps {
  name: string;
  size?: 'sm' | 'md';
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name, size = 'sm' }) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500',
    'bg-indigo-500', 'bg-pink-500', 'bg-teal-500', 'bg-orange-500'
  ];
  const colorIndex = name.length % colors.length;
  const sizeClasses = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm';
  
  return (
    <div className={`${sizeClasses} ${colors[colorIndex]} rounded-full flex items-center justify-center text-white font-medium`}>
      {initials}
    </div>
  );
};

export default UserAvatar;