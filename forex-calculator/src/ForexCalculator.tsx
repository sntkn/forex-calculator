import { useState, useEffect } from 'react';
import * as styles from './App.css.ts';

const ForexCalculator = () => {
  const [purchaseAmount, setPurchaseAmount] = useState('0');
  const [purchaseRate, setPurchaseRate] = useState('0');
  const [saleAmount, setSaleAmount] = useState('0');
  const [saleRate, setSaleRate] = useState('0');

  const [purchaseInYen, setPurchaseInYen] = useState(0);
  const [saleInYen, setSaleInYen] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const [exchangeProfitLoss, setExchangeProfitLoss] = useState(0);

  const formatter = new Intl.NumberFormat('ja-JP');

  useEffect(() => {
    calculate();
  }, [purchaseAmount, purchaseRate, saleAmount, saleRate]);

  const calculate = () => {
    const purchaseAmountNum = parseFloat(purchaseAmount);
    const purchaseRateNum = parseFloat(purchaseRate);
    const saleAmountNum = parseFloat(saleAmount);
    const saleRateNum = parseFloat(saleRate);

    if (!isNaN(purchaseAmountNum) && !isNaN(purchaseRateNum) && !isNaN(saleAmountNum) && !isNaN(saleRateNum)) {
      const purchaseInYenCalc = purchaseAmountNum * purchaseRateNum;
      const saleInYenCalc = saleAmountNum * saleRateNum;
      const profitLossCalc = (saleAmountNum * saleRateNum) - (purchaseAmountNum * purchaseRateNum);
      const exchangeProfitLossCalc = saleAmountNum * (saleRateNum - purchaseRateNum);

      setPurchaseInYen(purchaseInYenCalc);
      setSaleInYen(saleInYenCalc);
      setProfitLoss(profitLossCalc);
      setExchangeProfitLoss(exchangeProfitLossCalc);
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>譲渡損益と為替差損益計算ツール</h2>
      <div className={styles.formGroup}>
        <label className={styles.label}>ドル購入金額:</label>
        <input type="number" className={styles.input} value={purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>購入時のドル円レート:</label>
        <input type="number" className={styles.input} value={purchaseRate} onChange={(e) => setPurchaseRate(e.target.value)} />&nbsp;円 / 1ドル
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>ドル売却金額:</label>
        <input type="number" className={styles.input} value={saleAmount} onChange={(e) => setSaleAmount(e.target.value)} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>売却時のドル円レート:</label>
        <input type="number" className={styles.input} value={saleRate} onChange={(e) => setSaleRate(e.target.value)} />&nbsp;円 / 1ドル
      </div>
      <div className={styles.resultContainer}>
        <table className={styles.resultTable}>
          <tbody>
            <tr className={styles.resultRow}>
              <td className={styles.resultCell}>購入金額（円換算）:</td>
              <td className={styles.resultCell}>{formatter.format(purchaseInYen)} 円</td>
            </tr>
            <tr className={styles.resultRow}>
              <td className={styles.resultCell}>売却金額（円換算）:</td>
              <td className={styles.resultCell}>{formatter.format(saleInYen)} 円</td>
            </tr>
            <tr className={styles.resultRow}>
              <td className={styles.resultCell}>売却損益（円換算）:</td>
              <td className={styles.resultCell}>{formatter.format(profitLoss)} 円</td>
            </tr>
            <tr className={styles.resultRow}>
              <td className={styles.resultCell}>売却為替差損益（円換算）:</td>
              <td className={styles.resultCell}>{formatter.format(exchangeProfitLoss)} 円</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForexCalculator;
