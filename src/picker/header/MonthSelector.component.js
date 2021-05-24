export default function MonthSelector({
  activeDate,
  months,
  onChange,
  ...props
}) {
  return (
    <select {...props} value={activeDate.month} onChange={onChange}>
      {months.map((month) => (
        <option key={month.value} value={month.value}>
          {month.label}
        </option>
      ))}
    </select>
  );
}
