document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.getElementById("buy-btn");
    if (buyButton) {
        buyButton.addEventListener("click", () => {
            alert("購入ページに進みます（仮）");
        });
    }
});
