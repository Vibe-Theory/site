import { ReactNode } from 'react';
import { Info, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'danger' | 'success';
  title?: string;
  children: ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: 'bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100',
    warning: 'bg-yellow-50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100',
    danger: 'bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100',
    success: 'bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100',
  };

  const icons = {
    info: Info,
    warning: AlertTriangle,
    danger: XCircle,
    success: CheckCircle,
  };

  const defaultTitles = {
    info: 'Info',
    warning: 'Warning',
    danger: 'Danger',
    success: 'Success',
  };

  const Icon = icons[type];
  const displayTitle = title || defaultTitles[type];

  return (
    <div className={`border-l-4 p-4 my-4 rounded-r-lg ${styles[type]}`}>
      <div className="flex gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <div className="font-semibold mb-1">{displayTitle}</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}