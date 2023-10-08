function App() {
  return (
    <div className="container">
      <section className="screen">
        0
      </section>
      <section className="button-container">
          <div className="column">
            <button>7</button>
            <button>4</button>
            <button>1</button>
            <button>0</button>
          </div>
          <div className="column">
            <button>8</button>
            <button>5</button>
            <button>2</button>
            <button>.</button>
          </div>
          <div className="column">
            <button>9</button>
            <button>6</button>
            <button>3</button>
            <button>=</button>
          </div>
          <div className="column-special">
            <button>&larr;</button>
            <button>&divide;</button>
            <button>&times;</button>
            <button>&minus;</button>
            <button>+</button>
          </div>
      </section>
    </div>
  );
}

export default App;
