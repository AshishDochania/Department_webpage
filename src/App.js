import {useState} from "react";
import './App.css';
import Des from "./description"
import Header from "./components/Header";
import CardEl from "./components/cardElement";
import Foot from "./components/foooter";

function App() {
  const [isCardExpanded, setCardExpanded] = useState(false);
  const [content,Change]=useState([]);

  const handleClick = (event) => {
    // Handle the click to toggle the visibility of the expanded card

    setCardExpanded(!isCardExpanded);
    if(event){
      Change(()=>Des[event-1].describe);
    }
  };



  return (
    <div className="page">
      {/* <div className="container px-4 py-5 color" style={{color:"#404040"}}>
        <h2>Info</h2>
        <h3>
          Date: 2nd March & 3rd March
        </h3>
        <h3>
          Prize: Presentation will recieve one month paid internship, also they will get free mentorship dor their career.
        </h3>
      </div> */}
      <div className="body">
        <div className="container-rot">
          
          <Header></Header>

          <div className="container px-4 py-5 color" id="custom-cards">
            <h2 className="pb-2" style={{color:"#404040",textAlign:"center",fontSize:"400%"}}>Events</h2>

            <div className={`expanded-card ${isCardExpanded ? 'visible' : ''}`}>
              <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-2 py-5 cust">
                <div className="col red" onClick={()=>handleClick(0)}>
                  <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{backgroundImage:"url()",backgroundRepeat:"no-repeat",backgroundColor:"#FFFC9B"}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                      <h3 className="pt-5 pb-5 mt-0 mb-4 display-6 lh-1 fw-bold text">{content.map((res)=><p>{res}</p>)}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className={`expanded-card ${isCardExpanded ? '' : 'visible'}`}>
              <div className="row row-cols-1 row-cols-lg-5 align-items-stretch g-4 py-5">


                <CardEl val="1" des="Lab-visit and Demonstration Session" handle={handleClick}></CardEl>
                <CardEl val="2" des="Research Cookies Competition" handle={handleClick}></CardEl>
                <CardEl val="3" des="Hands-On Session" handle={handleClick}></CardEl>
                <CardEl val="4" des="UG and PG Oral/Poster Presentation" handle={handleClick}></CardEl>
                <CardEl val="5 "des="And Many More ..." handle={handleClick}></CardEl>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Foot></Foot>
      
    </div>
  );
}

export default App;
