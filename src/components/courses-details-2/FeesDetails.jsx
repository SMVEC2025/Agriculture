import React from 'react';
import './FeeDetailTable.scss';

const FeesDetails = () => {
  return (
    <div className="fees-table-container">
      <table className="fees-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Fees per Year (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CENTAC</td>
            <td>89,750 (includes Admission fee &amp; other fee)</td>
          </tr>
          <tr>
            <td>Management</td>
            <td>1,00,000 (includes Admission fee &amp; other fee)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeesDetails;
