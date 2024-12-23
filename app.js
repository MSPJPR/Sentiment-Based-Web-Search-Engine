let searchHistory = [];

function searchWeb() {
    const query = document.getElementById('searchBar').value;
    if (!query) {
        alert('Please enter a search query');
        return;
    }

    // Add query to search history
    searchHistory.push(query);
    updateSearchHistory();

    // Simulate sentiment analysis
    const sentiment = analyzeSentiment(query);

    // Display results
    displayResults(query, sentiment);
}

function displayResults(query, sentiment) {
    const resultsContainer = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    // Add sentiment-based class
    if (sentiment === 'positive') {
        resultDiv.classList.add('positive');
    } else if (sentiment === 'negative') {
        resultDiv.classList.add('negative');
    } else {
        resultDiv.classList.add('neutral');
    }

    resultDiv.innerHTML = `<strong>Search Query:</strong> ${query} <br><strong>Sentiment:</strong> ${sentiment}`;
    resultsContainer.appendChild(resultDiv);
}

function analyzeSentiment(query) {
    // Simple sentiment analysis (for demonstration)
    const positiveWords = ['good', 'happy', 'great', 'positive', 'excellent'];
    const negativeWords = ['bad', 'sad', 'poor', 'negative', 'awful'];

    const queryLower = query.toLowerCase();
    let sentiment = 'neutral';

    if (positiveWords.some(word => queryLower.includes(word))) {
        sentiment = 'positive';
    } else if (negativeWords.some(word => queryLower.includes(word))) {
        sentiment = 'negative';
    }

    return sentiment;
}

function updateSearchHistory() {
    const historyList = document.getElementById('searchHistory');
    historyList.innerHTML = '';

    searchHistory.slice(-5).forEach(query => {
        const listItem = document.createElement('li');
        listItem.textContent = query;
        historyList.appendChild(listItem);
    });
}
