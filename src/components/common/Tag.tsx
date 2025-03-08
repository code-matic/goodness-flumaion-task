// src/components/Tag.tsx
const Tag = ({ type }: {
    type: string;
}) => {
  const tagTypes = {
    low: { 
      label: 'Low', 
      className: 'bg-green-100 text-green-800' 
    },
    medium: { 
      label: 'Medium', 
      className: 'bg-yellow-100 text-yellow-800' 
    },
    high: { 
      label: 'High', 
      className: 'bg-red-100 text-red-800' 
    },
    'in progress': { 
      label: 'In Progress', 
      className: 'bg-blue-100 text-blue-800' 
    },
    todo: { 
      label: 'Todo', 
      className: 'bg-gray-100 text-gray-800' 
    },
    done: { 
      label: 'Done', 
      className: 'bg-emerald-100 text-emerald-800' 
    },
  } as const;

  const tagInfo = tagTypes[type.toLowerCase() as keyof typeof tagTypes] || { 
    label: type, 
    className: 'bg-slate-100 text-slate-800' 
  };

  return (
    <span className={`inline-flex items-center justify-center px-3 py-1 text-xs uppercase tracking-wide rounded-full ${tagInfo.className}`}>
      {tagInfo.label}
    </span>
  );
};

export default Tag;