const SelectYears = ({ handleYearChange, selectedValue }) => {

  const handleSelectChange = (event) => {
    handleYearChange(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 100;
  const endYear = currentYear + 100;
  let counter = startYear;

  const options = [];

  while (counter <= endYear) {
    options.push(
      <option key={counter} value={counter}>
        {counter}
      </option>
    );
    counter++;
  }

  return (
    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  defaultValue={selectedValue} onChange={handleSelectChange}>
      {options}
    </select>
  );
};

export default SelectYears;
