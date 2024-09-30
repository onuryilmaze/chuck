document.addEventListener("DOMContentLoaded", () => {
    const jokeElement = document.getElementById("joke");
    const newJokeBtn = document.getElementById("newJokeBtn");

    // Chuck Norris Şaka API'sinden şaka çekme fonksiyonu
    const getJoke = async () => {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await response.json();
            jokeElement.innerText = data.value;
        } catch (error) {
            jokeElement.innerText = "Şaka yüklenirken bir sorun oluştu.";
        }
    };

    // Sayfa yüklendiğinde şaka çek
    getJoke();

    // Düğmeye tıklandığında yeni şaka çek
    newJokeBtn.addEventListener("click", getJoke);
});
