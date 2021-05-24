export default function YearSelector({
  activeDate,
  minDate,
  maxDate,
  onChange,
  ...props
}) {
  return (
    <input
      {...props}
      type="number"
      value={activeDate.year}
      onChange={onChange}
      min={minDate?.year ?? 1800}
      max={maxDate?.year ?? 9999}
      step="1"
    />
  );
}
