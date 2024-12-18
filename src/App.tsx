import './App.scss';
import img1 from './assets/istockphoto-1208175274-612x612.jpg'

type ExperienceType = {
  year: number;
  jobTitle: string;
}

type EducationType = {
  year: string;
  facility: string;
}

const experience: ExperienceType[] = [
  {
    year: 2018,
    jobTitle: 'Lorem'
  },
  {
    year: 2019,
    jobTitle: 'Ipsum'
  },
  {
    year: 2021,
    jobTitle: 'Dolor'
  },
  {
    year: 2024,
    jobTitle: 'Sit'
  },
]

const education: EducationType[] = [
  {
    year: '2015-2018',
    facility: 'Amet'
  },
  {
    year: '2018-2021',
    facility: 'Consectetur'
  },
  {
    year: '2021-2024',
    facility: 'Adipiscing'
  }
]

export const App = () => {
  return <main className='cv-main'>
    <header className='cv-header'>
      <h1>CV Pawel Jarecki</h1>
    </header>
    <aside className='general cv-aside'>
      <h2>Personal Data</h2>
      <img src={img1} alt="" />
      <p>Pawel Jarecki</p>
      <p>Developer</p>
    </aside>
    <section className='general cv-section'>
      <div>
        <h2>Experience</h2>
        <ul>
          {experience.map(({ jobTitle, year }, index) => (
            <li key={index}><b>{year}</b> - {jobTitle}</li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2>Education</h2>
        <ul>
          {education.map(({ facility, year }, index) => (
            <li key={index}><b>{year}</b> - {facility}</li>
          ))}
        </ul>
      </div>
    </section>
  </main>
}