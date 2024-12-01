function App() {

  const DAY_GRADES_LIST = {
    Perfect: 'rgb(0 255 0)',
    Good: 'rgb(255 255 0)',
    Average: 'rgb(255 165 0)',
    Bad: 'rgb(255 0 0)',
  }

  return (
    <>
      <div className="calendar" style={{display: 'flex', flexDirection: 'row', columnGap: '10px'}}>    
        <div className="day" style={{border: '2px black solid', padding: '5px'}}>
          <p className="Date">Dec 01, 2024</p>
          <h4>Work</h4>
          <ul>
            <li>Setup workspace + Development: 1h 20m ✅</li>
            <li>Cooking: 1h ✅</li>
          </ul>
          <p className="total">Grade: Awesome (2/1) </p>
          <h4>Growing check</h4>
          <ul>
            <li>Toothbrushing: 1 time's 🤔</li>
            <li>Take a bath: 0 time's ❌</li>
          </ul>
          <p className="total">Grade: Terribly (0/3)</p>
          <h3>Day grade: Average <span style={
          { display: 'inline-block',
            border: '1px black solid',
            backgroundColor: `${DAY_GRADES_LIST.Average}`,
            height: '16px',
            width: '16px'}}></span></h3>
        </div>
        <div className="day" style={{border: '2px black solid', padding: '5px'}}>
          <p className="Date">Dec 02, 2024</p>
          <h4>Work</h4>
          <ul>
            <li>Sample ✅❌</li>
          </ul>
          <p className="total">Grade: Awesome (0/1) </p>
          <h4>Growing check</h4>
          <ul>
            <li>Sample ✅❌</li>
          </ul>
          <p className="total">Grade: Terribly (0/3)</p>
          <h3>Day grade: Perfect <span style={
          { display: 'inline-block',
            border: '1px black solid',
            backgroundColor: `${DAY_GRADES_LIST.Perfect}`,
            height: '16px',
            width: '16px'}}></span></h3>
          <h3>Day grade: Good <span style={
          { display: 'inline-block',
            border: '1px black solid',
            backgroundColor: `${DAY_GRADES_LIST.Good}`,
            height: '16px',
            width: '16px'}}></span></h3>
          <h3>Day grade: Average <span style={
          { display: 'inline-block',
            border: '1px black solid',
            backgroundColor: `${DAY_GRADES_LIST.Average}`,
            height: '16px',
            width: '16px'}}></span></h3>
          <h3>Day grade: Bad <span style={
          { display: 'inline-block',
            border: '1px black solid',
            backgroundColor: `${DAY_GRADES_LIST.Bad}`,
            height: '16px',
            width: '16px'}}></span></h3>
        </div>
      </div>    
      <video src="https://user-uploads.perchance.org/file/da1bf91d3531f0c92e59e6db38e44176.webm" autoPlay muted loop playsInline></video>
      </>
  )
}

export default App
