export type TooltipProps = {
  text: string;
  color?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}