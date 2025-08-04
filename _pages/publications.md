---
layout: page
permalink: /publications/
title: Publications
description: Research publications and academic contributions across multiple years
years: [2023, 2022, 2014, 2013, 2011]
nav: true
---

<div class="publications-container">
  <div class="publications-header">
    <p class="publications-subtitle">Explore my research work organized by year</p>
  </div>

  <div class="publications-timeline">
    {% for y in page.years %}
      <div class="year-section" data-year="{{y}}">
        <div class="year-header">
          <h2 class="year-title">{{y}}</h2>
          <div class="year-line"></div>
        </div>
        <div class="publications-content">
          {% bibliography -f papers -q @*[year={{y}}]* %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<style>
  .publications-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  .publications-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .publications-subtitle {
    color: #6c757d;
    font-size: 1.1rem;
    margin: 0;
    font-weight: 400;
  }

  html[data-theme='dark'] .publications-subtitle {
    color: #aaa;
  }

  .publications-timeline {
    position: relative;
  }

  .publications-timeline::before {
    content: '';
    position: absolute;
    left: 50px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
  }

  html[data-theme='dark'] .publications-timeline::before {
    background: linear-gradient(180deg, var(--global-theme-color) 0%, #764ba2 100%);
  }

  .year-section {
    margin-bottom: 3rem;
    position: relative;
  }

  .year-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    position: relative;
  }

    .year-title {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    position: relative;
    z-index: 2;
  }

  html[data-theme='dark'] .year-title {
    background: linear-gradient(135deg, var(--global-theme-color) 0%, #764ba2 100%);
  }

  .year-title::before {
    content: '';
    position: absolute;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: white;
    border: 3px solid #667eea;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  }

  html[data-theme='dark'] .year-title::before {
    background: var(--global-card-bg-color);
    border: 3px solid var(--global-theme-color);
  }

  .year-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #667eea 0%, transparent 100%);
    margin-left: 2rem;
  }

  html[data-theme='dark'] .year-line {
    background: linear-gradient(90deg, var(--global-theme-color) 0%, transparent 100%);
  }

  .publications-content {
    margin-left: 100px;
    padding: 1.5rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    border-radius: 12px;
    border: 1px solid #e9ecef;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  html[data-theme='dark'] .publications-content {
    background: linear-gradient(135deg, var(--global-card-bg-color) 0%, #2a2a2a 100%);
    border: 1px solid #333;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .year-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #667eea 0%, transparent 100%);
    margin-left: 2rem;
  }

  .publications-content {
    margin-left: 100px;
    padding: 1.5rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    border-radius: 12px;
    border: 1px solid #e9ecef;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .publications-content:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  html[data-theme='dark'] .publications-content:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }

  /* Style bibliography entries */
  .publications-content .bibliography {
    margin: 0;
  }

  .publications-content .bibliography li {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    transition: all 0.3s ease;
    list-style: none;
  }

  html[data-theme='dark'] .publications-content .bibliography li {
    background: var(--global-bg-color);
    border: 1px solid #444;
  }

  .publications-content .bibliography li:hover {
    border-color: #667eea;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
  }

  html[data-theme='dark'] .publications-content .bibliography li:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .publications-content .bibliography li:last-child {
    margin-bottom: 0;
  }

  /* Enhanced typography for publication entries */
  .publications-content .title {
    font-weight: 600;
    color: #2c3e50;
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  html[data-theme='dark'] .publications-content .title {
    color: var(--global-text-color);
  }

  .publications-content .author {
    color: #495057;
    margin-bottom: 0.25rem;
  }

  html[data-theme='dark'] .publications-content .author {
    color: var(--global-text-color);
  }

  .publications-content .periodical {
    color: #667eea;
    font-style: italic;
    font-weight: 500;
  }

  html[data-theme='dark'] .publications-content .periodical {
    color: var(--global-theme-color);
  }

  @media (max-width: 768px) {
    .publications-container {
      padding: 1rem;
    }

    .publications-timeline::before {
      left: 20px;
    }

    .year-title {
      font-size: 1.25rem;
      padding: 0.5rem 1rem;
    }

    .year-title::before {
      left: -35px;
    }

    .publications-content {
      margin-left: 60px;
    }

    .year-line {
      display: none;
    }
  }
</style>
