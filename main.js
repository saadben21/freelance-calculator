function calculGain(){
    // on recupere le formulaire dans le html
    let myform=document.getElementById("formulaire");
    // on le transforme en objet Formdata
    let formObj = new FormData(myform);
    
    let tauxHoraire = formObj.get('TH');
    let tauxJournalierMoyen = formObj.get('TJM');
    let extras = formObj.get('EXTRA');

    let qtetauxHoraire = formObj.get('QteTH');
    let qtetauxJournalierMoyen = formObj.get('QteTJM');
    let qteextras = formObj.get('QteEXTRA');
    let charges = document.getElementById('resultatDifference').value;
    //   on commence le calculGain
    let gainHeure = tauxHoraire * qtetauxHoraire;

    let gainJournalierMoyen = tauxJournalierMoyen * qtetauxJournalierMoyen;

    let gainExtra = extras * qteextras;

    let gainTotalBrut = gainHeure + gainJournalierMoyen + gainExtra;

    // total -charge%
    // chargeAdeduire =(totaleBrute * (charge /100))
    let chargeADeduire = gainTotalBrut * (charges / 100);
    let gainTotalNet = gainTotalBrut - chargeADeduire;
    document.getElementById('resultatBrut').innerText= gainTotalBrut +"€";
    document.getElementById('taxe').innerText= chargeADeduire +"€";
    document.getElementById('resultatNet').innerText= gainTotalNet +"€";    
}
function clearInputData(){
    document.getElementById('formulaire').reset();
    document.getElementById('resultatBrut').innerText="";
    document.getElementById('taxe').innerText="";
    document.getElementById('resultatNet').innerText="";
}






