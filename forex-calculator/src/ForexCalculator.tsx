import { useState } from 'react';

const ForexCalculator = () => {
  const [purchaseAmount, setPurchaseAmount] = useState('0');
  const [purchaseRate, setPurchaseRate] = useState('0');
  const [saleAmount, setSaleAmount] = useState('0');
  const [saleRate, setSaleRate] = useState('0');

  const [purchaseInYen, setPurchaseInYen] = useState(0);
  const [saleInYen, setSaleInYen] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const [exchangeProfitLoss, setExchangeProfitLoss] = useState(0);

  const formatter = new Intl.NumberFormat('ja-JP')

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
    <div>
      <h2>譲渡損益と為替差損益計算ツール</h2>
      <div>
        <label>ドル購入金額:</label>
        <input type="number" value={purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)} />
      </div>
      <div>
        <label>購入時のドル円レート:</label>
        <input type="number" value={purchaseRate} onChange={(e) => setPurchaseRate(e.target.value)} />
      </div>
      <div>
        <label>ドル売却金額:</label>
        <input type="number" value={saleAmount} onChange={(e) => setSaleAmount(e.target.value)} />
      </div>
      <div>
        <label>売却時のドル円レート:</label>
        <input type="number" value={saleRate} onChange={(e) => setSaleRate(e.target.value)} />
      </div>
      <button onClick={calculate}>計算</button>
      <div>
        {purchaseInYen !== null && <p>購入金額（円換算）: {formatter.format(purchaseInYen)} 円</p>}
        {saleInYen !== null && <p>売却金額（円換算）: {formatter.format(saleInYen)} 円</p>}
        {profitLoss !== null && <p>売却損益（円換算）: {formatter.format(profitLoss)} 円</p>}
        {exchangeProfitLoss !== null && <p>売却為替差損益（円換算）: {formatter.format(exchangeProfitLoss)} 円</p>}
      </div>
    </div>
  );
};

export default ForexCalculator;
