import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const firstInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalintrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            firstInvestment;

          const totalAmontInvested = yearData.valueEndOfYear - totalintrest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalintrest)}</td>
              <td>{formatter.format(totalAmontInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
