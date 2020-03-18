const confirmedEl = document.getElementById('confirmed');
const recoveredEl = document.getElementById('recovered');
const deathsEl = document.getElementById('deaths');

function totals() {
    fetch(`https://covid19.mathdro.id/api/countries/USA`)
        .then(res => res.json())
        .then(data => {
            confirmedEl.innerText = formatNumber(data.confirmed.value);
            recoveredEl.innerText = formatNumber(data.recovered.value);
            deathsEl.innerText = formatNumber(data.deaths.value);
        })
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
totals();