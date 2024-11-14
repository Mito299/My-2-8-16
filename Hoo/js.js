document.getElementById('convertForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const text = document.getElementById('textInput').value;
    const toBase = parseInt(document.getElementById('baseSelect').value);

    let result = [];

    for (let char of text) {
        const decimalValue = char.charCodeAt(0);


        if (decimalValue < 32 || decimalValue === 127) continue;

        let baseValue;
        if (toBase === 2) {
            baseValue = decimalValue.toString(2);
        } else if (toBase === 8) {
            baseValue = decimalValue.toString(8);
        } else if (toBase === 16) {
            baseValue = decimalValue.toString(16);
        } else {
            alert("ບໍ່ມີຖານ");
            return;
        }
        result.push(baseValue);
    }


    document.getElementById('result').innerText = result.join(" ");
});

function copyToClipboard() {
    const resultText = document.getElementById('result').innerText;

    if (resultText) {
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert("ຄັດຫຼອດຂໍ້ຄວາມສຳເລັດ");
            })
            .catch(err => {
                alert("ມີຂໍ້ຜິດພາດ: " + err);
            });
    }
}