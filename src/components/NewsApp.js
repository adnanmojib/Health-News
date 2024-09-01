// src/components/NewsApp.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '3d8727451dab44609e33bc873c1b326c';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            country: 'in', // India
            category: 'health',
            apiKey: API_KEY,
          },
        });
        setArticles(response.data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Health News</h1>
      <ul className='text-center'>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsApp;
