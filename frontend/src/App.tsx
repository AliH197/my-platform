import './App.css'
import intro_photo from './assets/Intro_Alissa_Flower.jpg'

type ReportKind = 'bug' | 'feature'

type Report = {
  id: string
  text: string
  kind: ReportKind
}


function App() {

  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
  };
  const initialReports: Report[] = [
    { id: '1', text: 'Navigation link is broken', kind: 'bug' },
    { id: '2', text: 'Add dark mode', kind: 'feature' },
  ]


  return (
    <main className="landing-page">

      <img
        src={intro_photo}
        alt="Portrait of Alissa Hoover"
        className="photo"
      />

      <section className="intro">
        <h1>Senior Capstone Production Platform</h1>

        <h2>Computer Science Major</h2>

        <p>Hello! Welcome!</p>
        <p className="description">
            I'm a Computer Science major at Grove City College. This is part 
            of my senior capstone production platform project. My hobbies include 
            crocheting, playing guitar, and painting. I enjoy coding and video games, 
            so Computer Science is where a lot of my passions lie. Thanks for stopping by!
        </p>
      </section>

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <ul>  
          {initialReports.map((report) => (    
            <li key={report.id}>     
              {report.text} ({report.kind})    
            </li>  
          ))}
        </ul>

      </section>

    </main>
  );
}

export default App
