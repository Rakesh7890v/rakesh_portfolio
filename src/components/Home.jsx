import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import famic from '../assets/mic.webp';
import Header from './Header';
import Achievements from './Achievements';
import Projects from './Projects';

const Home = () => {
  const suggestion = ["Aboutme", "Achievements", "Projects", "Contact"];
  const directNavigationPages = ["Aboutme", "Resume", "Contact"];
  const [searched, setSearched] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialState = () => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');
    
    if (queryParam) {
      sessionStorage.setItem('searchQuery', queryParam);
      return queryParam;
    } else {
      return sessionStorage.getItem('searchQuery') || '';
    }
  };

  const [query, setQuery] = useState(getInitialState);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const getSearchState = () => {
    const searchQuery = query.toLowerCase();
    return {
      achievement: searchQuery === 'achievements',
      project: searchQuery === 'projects', 
    };
  };

  const [searchState, setSearchState] = useState(getSearchState());

  useEffect(() => {
    setSearchState(getSearchState());
    
    if (query && !directNavigationPages.includes(query)) {
      if(localStorage.getItem('Searched')){
        setSearched(true);
      }
      sessionStorage.setItem('searchQuery', query);
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('query', query);
      navigate(`?${searchParams.toString()}`, { replace: true });
    }else{
      setSearched(false);
    }
  }, [query, navigate, location.search]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);

    if (value.length > 0) {
      const filtered = suggestion.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions(suggestion);
      setShowSuggestions(true);
    }
  };

  const handleInputFocus = () => {
    if (query.length > 0) {
      const filtered = suggestion.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(suggestion);
    }
    setShowSuggestions(true);
    setSelectedIndex(-1);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }, 200);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(filteredSuggestions[selectedIndex]);
        } else {
          handleSubmit(e);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  useEffect(() => {
    if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
      setQuery(filteredSuggestions[selectedIndex]);
    }
  }, [selectedIndex, filteredSuggestions]);

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSearched(true);
    localStorage.setItem('Searched',true);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    
    if (directNavigationPages.includes(suggestion)) {
      navigate(suggestion.toLowerCase());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
    localStorage.setItem('Searched',true);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    
    if (directNavigationPages.includes(query)) {
      navigate(query.toLowerCase());
    }
  };

  return (
    <div>
      <Header />
      <div className='flex items-center justify-center'>
      <div className='search-box' style={{marginTop: searched ? "0px": "200px"}}>
      <h1 className='main-head'>
            <p className="first">R</p>
            <p className="second">a</p>
            <p className="third">k</p>
            <p className="fourth">e</p>
            <p className="fifth">s</p>
            <p className="sixth">h</p>
          </h1>
          <form className="searching" onSubmit={handleSubmit}>
            <div className='search-engine relative'>
              <FontAwesomeIcon icon={faSearch} className='fasearch' />
              <input 
                type="text" 
                placeholder='Search In My Resume' 
                className='search-input' 
                value={query} 
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
              />
              <img src={famic} alt="mic" className='mic-icon' />
            </div>
            {showSuggestions && filteredSuggestions.length > 0 && (
              <ul className='search-list'>
                {filteredSuggestions.map((suggestion, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={selectedIndex === index ? 'selected' : ''}
                    style={{
                      backgroundColor: selectedIndex === index ? '#f0f0f0' : 'transparent',
                      cursor: 'pointer'
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </div>
      
      {searchState.achievement && <Achievements />}
      {searchState.project && <Projects />}
    </div>
  );
};

export default Home;