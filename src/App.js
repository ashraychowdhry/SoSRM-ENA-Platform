import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"; 
import Home from './screens/Home';
import About from './screens/About';
import Page404 from './screens/Page404';
import Step1Define from './screens/Step1Define';
import Step2Data from './screens/Step2Data';
import Step3Results from './screens/Step3Results';
import Step4Comparator from './screens/Step4Comparator';
import { useState } from 'react';
import Tutorial from './screens/Tutorial';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MatrixInputTutorial from './screens/MatrixInputTutorial';

function App() {

  const [flowValues, setFlowValues] = useState([]);
  const [matrixCopy, setMatrixCopy] = useState([]);
  const [matrixTitle, setMatrixTitle] = useState('');
  const [numConstituents, setNumConstituents] = useState(3);
  const [constituentNames, setConstituentNames] = useState([]);
  const [enaCalcs, setEnaCalcs] = useState([]);

  const [unit, setUnit] = useState('');
  const [timeUnit, setTimeUnit] = useState('');

  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');

  
  const token = (Math.floor((Math.random() * 1000000)).toString());


  return (
    <div className='full-wrapper main-font'> 

      <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/tutorial" component={Tutorial} />
              <Route path='/matrix-tutorial' component={MatrixInputTutorial} />

              <Route path="/step1" render={(props) => (
                <Step1Define {...props} 
                  setNumConstituents={object => setNumConstituents(object)} 
                  numConstituents={numConstituents} 
                  setCompany={val => setCompany(val)} 
                  company={company}
                  setIndustry={val => setIndustry(val)} 
                  industry={industry}
                  setMatrixTitle={val => setMatrixTitle(val)}
                  matrixTitle={matrixTitle}
                  setFlowValues={val => setFlowValues(val)}
                  flowValues={flowValues}
                  setConstituentNames={val => setConstituentNames(val)}
                  constituentNames={constituentNames}
                  setUnit={val => setUnit(val)}
                  unit={unit}
                  setTimeUnit={val => setTimeUnit(val)}
                  timeUnit={timeUnit}
                />
                )} 
              />
              <Route path="/step2" render={(props) => (
                <Step2Data {...props} 
                  setNumConstituents={object => setNumConstituents(object)} 
                  numConstituents={numConstituents}
                  setFlowValues={object => setFlowValues(object)}
                  flowValues={flowValues}
                  setConstituentNames={object => setConstituentNames(object)}
                  constituentNames={constituentNames}
                  matrixTitle={matrixTitle}
                  enaCalcs={enaCalcs}
                  setEnaCalcs={val => setEnaCalcs(val)}
                  token={token}
                  industry={industry}
                  company={company}
                  setUnit={val => setUnit(val)}
                  unit={unit}
                  setTimeUnit={val => setTimeUnit(val)}
                  timeUnit={timeUnit}
                  matrixCopy={matrixCopy}
                  setMatrixCopy={val => setMatrixCopy(val)}

                />
                )} 
              />
              <Route path="/results" render={(props) => (
                <Step3Results {...props} 
                matrixTitle={matrixTitle}
                setEnaCalcs={object => setEnaCalcs(object)}
                enaCalcs={enaCalcs}
                constituentNames={constituentNames}
                setConstituentNames={object => setConstituentNames(object)}
                flowValues={flowValues}
                setFlowValues={object => setFlowValues(object)}
                industry={industry}
                setIndustry={val => setIndustry(val)}
                company={company}
                setCompany={val => setCompany(val)}
                token={token}
                matrixCopy={matrixCopy}
                setMatrixCopy={val => setMatrixCopy(val)}

                />
                )} 
              />
              <Route path="/comparator" render={(props) => (
                <Step4Comparator {...props} 
                  setNumConstituents={object => setNumConstituents(object)} 
                  numConstituents={numConstituents}
                  setFlowValues={object => setFlowValues(object)}
                  flowValues={flowValues}
                  setConstituentNames={object => setConstituentNames(object)}
                  constituentNames={constituentNames}
                  matrixTitle={matrixTitle}
                  enaCalcs={enaCalcs}
                  setEnaCalcs={val => setEnaCalcs(val)}
                  token={token}
                  industry={industry}
                  company={company}
                  matrixCopy={matrixCopy}
                  setMatrixCopy={val => setMatrixCopy(val)}
                  

                />
                )} 
              />

              <Route component={Page404} />
          </Switch>
    </div>
   
  );
}

export default App;
