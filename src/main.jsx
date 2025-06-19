import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ padding: '20px', backgroundColor: '#111', color: '#fff', fontFamily: 'sans-serif' }}>
    <h1>SHADE Demo – Free Videos</h1>
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div>
        <h3>Sample Video 1</h3>
        <video width="320" controls>
          <source src="/public/videos/demo1.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <h3>Sample Video 2</h3>
        <video width="320" controls>
          <source src="/public/videos/demo2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
