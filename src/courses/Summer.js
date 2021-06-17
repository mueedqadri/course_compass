import './Summer.css';
import React from 'react-dom';

function Summer() {
    return (
        <div>
            <p>The fee listed below is for the Summer 2021 term only.</p>
            <table className="table table-striped table-responsive">
                <thead className="tableHigh">
                    <tr>
                        <th>Sl. No.</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align={'center'}>1</td>
                        <td>Student Union</td>
                        <td>$75.78</td>
                    </tr>
                    <tr>
                        <td align={'center'}>2</td>
                        <td>Bus Pass Fee</td>
                        <td>$81.35</td>
                    </tr>
                    <tr>
                        <td align={'center'}>3</td>
                        <td>International Tuition Fee</td>
                        <td>$4,980.00</td>
                    </tr>
                    <tr>
                        <td align={'center'}>4</td>
                        <td>Grad. Society Fee</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td align={'center'}>5</td>
                        <td>Grad. Comp. Sci. Fee</td>
                        <td>$3,348.00</td>
                    </tr>
                    <tr className="tableHigh">
                        <td></td>
                        <td align={'right'} style={{ fontWeight: 'bold' }}>Total:</td>
                        <td style={{ fontWeight: 'bold' }}>$8505.13</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Summer;