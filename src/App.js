import React from 'react';
import newssvg from './news-publishing-svgrepo-com.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const API_KEY = 'dd2059bc326b444fa612d2b95b6fd542';

  const loadContent = () => {
    const loadingSection = document.getElementById('loadingSection');
    const newsSection = document.getElementById('newsSection');
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.style.display = 'block';
    loadingSection.appendChild(spinner);
    newsSection.style.display = 'none';

    setTimeout(() => {
      spinner.style.display = 'none';
      newsSection.style.display = 'block';
      spinner.remove();
    }, 2000);
  };

  const updateSite1 = async () => {
    loadContent();
    const newsSection = document.getElementById('newsSection');
    while (newsSection.firstChild) {
      newsSection.removeChild(newsSection.firstChild);
    }
    const response1 = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
    );
    const responseJSON = await response1.json();
    for (let i = 0; i < 5; i++) {
      const newH2 = document.createElement('h2');
      newH2.innerHTML = responseJSON.articles[i].title;
      newH2.className = 'card-title';
      newH2.id = `newH2-${i}`;

      const newA = document.createElement('a');
      newA.href = responseJSON.articles[i].url;
      newA.appendChild(newH2);

      const newDivCardBody = document.createElement('div');
      newDivCardBody.className = 'card-body';
      newDivCardBody.appendChild(newA);
      newDivCardBody.id = `newDivBody${i}`;

      const newDivCard = document.createElement('div');
      newDivCard.className = 'card';
      newDivCard.appendChild(newDivCardBody);
      newDivCard.id = `newDivCard${i}`;

      newsSection.appendChild(newDivCard);
    }
  };

  const updateSite2 = async () => {
    loadContent();
    const newsSection = document.getElementById('newsSection');
    while (newsSection.firstChild) {
      newsSection.removeChild(newsSection.firstChild);
    }
    const response1 = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
    );
    const responseJSON = await response1.json();
    for (let i = 5; i < 10; i++) {
      const newH2 = document.createElement('h2');
      newH2.innerHTML = responseJSON.articles[i].title;
      newH2.className = 'card-title';
      newH2.id = `newH2-${i}`;

      const newA = document.createElement('a');
      newA.href = responseJSON.articles[i].url;
      newA.appendChild(newH2);

      const newDivCardBody = document.createElement('div');
      newDivCardBody.className = 'card-body';
      newDivCardBody.appendChild(newA);
      newDivCardBody.id = `newDivBody${i}`;

      const newDivCard = document.createElement('div');
      newDivCard.className = 'card';
      newDivCard.appendChild(newDivCardBody);
      newDivCard.id = `newDivCard${i}`;

      newsSection.appendChild(newDivCard);
    }
  };

  const defaultView = () => {
    const newsSection = document.getElementById('newsSection');
    while (newsSection.firstChild) {
      newsSection.removeChild(newsSection.firstChild);
    }

    for (let i = 1; i < 5; i++) {
      const newH2 = document.createElement('h2');
      newH2.innerHTML = 'Click either button to generate reports!';
      newH2.className = 'card-title';
      newH2.id = `newH2-${i}`;

      const newDivCardBody = document.createElement('div');
      newDivCardBody.className = 'card-body';
      newDivCardBody.appendChild(newH2);
      newDivCardBody.id = `newDivBody${i}`;

      const newDivCard = document.createElement('div');
      newDivCard.className = 'card';
      newDivCard.appendChild(newDivCardBody);
      newDivCard.id = `newDivCard${i}`;

      newsSection.appendChild(newDivCard);
    }
  };

  const favSave = () => {
    const data = document.getElementById('favoritesArea').value;
    let favData = {
      name: 1,
      data: data
    };

    let favData_serialized = JSON.stringify(favData);

    localStorage.setItem('favoriteData', favData_serialized);
    console.log('Favorites saved: ');
    console.log(localStorage.getItem('favoriteData'));
  };

  const favGet = () => {
    let favData_deserialized = JSON.parse(localStorage.getItem('favoriteData'));
    console.log('Favorites received: ');
    console.log(favData_deserialized);
    document.getElementById('favoritesArea').value = favData_deserialized.data;
  };

  const favClear = () => {
    const favoritesArea = document.getElementById('favoritesArea');
    favoritesArea.value = '';
    console.log('Favorites Cleared!');
  };

  return (
    <div className="page">
      <div className="header">
        <h1>Max Tuggle's News Outlet!</h1>
        <img className="headerSVG" src={newssvg} alt="News Outlet Logo" />
      </div>
      <div className="body">
        <br />
        <div className="row">
          <div className="col">
            <button className="btn btn-primary btn-lg" onClick={updateSite1}>
              Load first 5 reports!
            </button>
          </div>
          <div className="col">
            <button className="btn btn-warning btn-lg" onClick={updateSite2}>
              Load next 5 reports!
            </button>
          </div>
          <div className="col">
            <button className="btn btn-danger btn-lg" onClick={defaultView}>
              Clear!
            </button>
          </div>
        </div>

        <div id="loadingSection">
          <div className="panel" id="newsSection">
            <div id="Report1" className="card">
              <div className="card-body">
                <h2 className="card-title">First Report Here!</h2>
              </div>
            </div>

            <div id="Report1" className="card">
              <div className="card-body">
                <h2>Second Report Here!</h2>
              </div>
            </div>

            <div id="Report2" className="card">
              <div className="card-body">
                <h2>Third Report Here!</h2>
              </div>
            </div>

            <div id="Report3" className="card">
              <div className="card-body">
                <h2>Fourth Report Here!</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="favoritesAreaDiv" style={{ margin: '10%' }}>
          <div className="favoritesBtns">
            <h2>Favorites!</h2>
            <button className="btn btn-danger" id="favClearBtn" onClick={favClear}>
              Clear
            </button>
            <button className="btn btn-success" id="favSaveBtn" onClick={favSave}>
              Save
            </button>
            <button className="btn btn-primary" id="favGetBtn" onClick={favGet}>
              Get Favorites
            </button>
          </div>
          <textarea
            id="favoritesArea"
            cols="5"
            rows="5"
            name="savedStories"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
