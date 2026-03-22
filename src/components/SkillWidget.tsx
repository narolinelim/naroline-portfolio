

type SkillWidgetProps = {
  name: string;
  icon: string;
}


function SkillWidget({ name, icon }: SkillWidgetProps) {
  return (
    <div className="flex items-center border-1 border-gray-300 rounded-4xl backdrop-blur-xl shadow-lg p-2 space-x-1">
      <img src={icon} alt={name} className="h-5 w-5 object-contain"/>
      <span className="text-sm">{name}</span>
    </div>
  )
}


export default SkillWidget;