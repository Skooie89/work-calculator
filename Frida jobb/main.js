const lightSwitch = document.getElementById("lightSwitch");
const body = document.body;

lightSwitch.addEventListener("change", function() {
  if (this.checked) {
    body.classList.remove("bg-light", "text-dark");
    body.classList.add("bg-dark", "text-light");
  } else {
    body.classList.remove("bg-dark", "text-light");
    body.classList.add("bg-light", "text-dark");
  }
});



function calculateSum(timmar1, timmar2, pengar1, pengar2, pengar3, pengar4, pengar5, pengar6, slValue, minuter1, minuter2){
  const summaTotal = parseInt(timmar1*1476 || 0) + parseInt(timmar2*1350 || 0) + parseInt(pengar1 || 0) + parseInt(pengar2 || 0) + parseInt(pengar3 || 0) + parseInt(pengar4 || 0) + parseInt(pengar5 || 0) + parseInt(pengar6 || 0) + parseInt(slValue || 0) + parseInt((1476 / 60) * minuter1 || 0) + parseInt((1350 / 60) * minuter2 || 0);
  return summaTotal;
}
function calculteMoms(summaTotal1){
return (summaTotal1 / 100) * 25;
}


 function updateResult(){
 
 // Get the values of the input fields
 const timmar1 = document.getElementById('timmar1').value;
 const timmar2 = document.getElementById('timmar2').value;
 const pengar1 = document.getElementById('pengar1').value;
 const pengar2 = document.getElementById('pengar2').value;
 const pengar3 = document.getElementById('pengar3').value;
 const pengar4 = document.getElementById('pengar4').value;
 const pengar5 = document.getElementById('pengar5').value;
 const pengar6 = document.getElementById('pengar6').value;
 const minuter1 = document.getElementById('minuter1').value;
 const minuter2 = document.getElementById('minuter2').value;

 

  // Get the selected value from the SL select element
  const sl = document.getElementById('sl');
  const slValue = sl.value;

    // Check if any of the pengar fields are empty and replace them with 0
    const pengarValues = [pengar1, pengar2, pengar3, pengar4, pengar5, pengar6];
    for (let i = 0; i < pengarValues.length; i++) {
      if (pengarValues[i] === '') {
        pengarValues[i] = 0;
      }
    }
  
    const summaTotal1 = calculateSum(timmar1, timmar2, ...pengarValues, slValue, minuter1, minuter2);
    const moms = calculteMoms(summaTotal1);
    const summaExmoms = summaTotal1 - moms;

  // Display the total sum in the output section of the HTML document
  document.getElementById('summaTotal').textContent = summaTotal1.toLocaleString('sv-SE', { minimumFractionDigits: 0, maximumFractionDigits: 3 });
  document.getElementById('moms').textContent = moms.toLocaleString('sv-SE', { minimumFractionDigits: 0, maximumFractionDigits: 3 });
  document.getElementById('summaMoms').textContent = summaExmoms.toLocaleString('sv-SE', { minimumFractionDigits: 0, maximumFractionDigits: 3 });
}
