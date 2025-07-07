
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <Card className="p-6 flex flex-col items-center text-center">
      <div className="p-3 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full">
        {icon}
      </div>
      <h3 className="mt-4 font-bold text-lg text-white">{title}</h3>
      <p className="mt-2 text-white/60">{description}</p>
    </Card>
  );
};
