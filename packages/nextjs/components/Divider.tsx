interface DividerProps {
  color?: string;
  className?: string;
}

export const RowDivider: React.FC<DividerProps> = ({ color, className }) => {
  return (
    <div
      className={`w-full h-[1px] ${className}`}
      style={{
        background: color,
      }}
    ></div>
  );
};

export const ColumnDivider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div
      className={`w-[1px] h-full ${className}`}
      style={{
        background:
          "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #DDD9FF 33.17%, #D8D4FF 60.58%, rgba(255, 255, 255, 0.00) 100%)",
      }}
    ></div>
  );
};
