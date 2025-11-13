//input variables
const baseAmountInput = document.querySelector('.js-base-amount');
const vatRateInput = document.querySelector('.js-vat-rate');

//display variables
const vatPercent =  document.querySelector('.js-vat-value');
const productValue =  document.querySelector('.js-product-value');
const vatCal = document.querySelector('.js-vat-cal');
const vatValue = document.querySelector('.js-display-cal');

//functions
function calculateAddVAt () {
  let baseAmount = Number(baseAmountInput.value);
  let vatRate = Number(vatRateInput.value);

  let addVat = baseAmount * (1 + (vatRate / 100));
  let vatProduct = (vatRate/100) * baseAmount;

  vatPercent.innerHTML = `<span>Vat Rate:</span> ${vatRateInput.value}%`;
  productValue.innerHTML = `<span>Base Amount:</span> ₦${baseAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  vatCal.innerHTML = `<span>Vat Amount:</span> ₦${vatProduct.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  vatValue.innerHTML = `<span>Gross Amount:</span> ₦${addVat.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
};

function calculateRemoveVAT () {
  let baseAmount = Number(baseAmountInput.value);
  let vatRate = Number(vatRateInput.value);

  let removeVat = baseAmount / (1 + (vatRate / 100));
  let vatProduct = vatRate * (removeVat/100);

  vatPercent.innerHTML = `<span>Vat Rate:</span> ${vatRate}%`;
  productValue.innerHTML = `<span>Base Amount:</span> ₦${removeVat.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  vatCal.innerHTML = `<span>Vat Amount:</span> ₦${vatProduct.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  vatValue.innerHTML = `<span>Gross Amount:</span> ₦${baseAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}